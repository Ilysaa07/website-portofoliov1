"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Children, cloneElement, useEffect, useMemo, useRef } from "react";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  label, // 🆕 Tambahkan label
}) {
  const ref = useRef(null);
  const itemCenterX = useMotionValue(0);

  useEffect(() => {
    const updateCenter = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        itemCenterX.set(rect.left + rect.width / 2);
      }
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, [itemCenterX]);

  const mouseDistance = useTransform(mouseX, (val) => val - itemCenterX.get());

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  // 🆕 Tooltip animation
  const labelOpacity = useTransform(mouseDistance, [-60, 0, 60], [0, 1, 0]);
  const labelTranslateY = useTransform(mouseDistance, [-60, 0, 60], [10, 0, 10]);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full dark:bg-[#060606] bg-white border-neutral-700 border-2 shadow-md transition-all ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => cloneElement(child))}

      {/* 🆕 Tooltip */}
      {label && (
        <motion.div
          className="absolute -top-6 text-xs text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 z-10"
          style={{
            opacity: labelOpacity,
            y: labelTranslateY,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(mouseX, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="w-full flex justify-center items-end px-2 md:px-6 lg:px-12 overflow-x-auto"
    >
      <motion.div
        onMouseMove={({ pageX }) => mouseX.set(pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`bottom-2 flex items-end gap-3 rounded-2xl border-2 border-neutral-700 bg-white dark:bg-[#060606] px-3 py-2 shadow-lg ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            label={item.label} // 🆕 Berikan label ke DockItem
          >
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
