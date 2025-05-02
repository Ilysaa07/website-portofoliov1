export default function Contact() {
    return (
        <>
            <div className="flex flex-col w-[30rem] ml-10">
                <label htmlFor="name" className="font-semibold">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="border-b-2 border-gray-300 p-2 rounded-md"
                    placeholder="Your name"
                />
            </div>
            <div className="flex flex-col w-[30rem] ml-10">
                <label htmlFor="email" className="font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="border-b-2 border-gray-300 p-2 rounded-md"
                    placeholder="Your email"
                />
            </div>
            <div className="flex flex-col w-[30rem] ml-10">
                <label htmlFor="message" className="font-semibold">
                    Message
                </label>
                <textarea
                    id="message"
                    rows="5"
                    className="border-b-2 border-gray-300 p-2 rounded-md"
                    placeholder="Your message"
                />
            </div>
            <button
                type="submit"
                className="bg-[#0d6efd] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-10 mt-2"
            >
                Send
            </button>
        </>
    );
}