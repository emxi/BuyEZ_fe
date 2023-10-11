import { useState } from 'react';

export default function Chat() {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed bottom-4 right-2 flex items-end space-x-3">
            {open && (
                <div className="flex h-[500px] w-[600px] flex-col rounded-lg border bg-white shadow-lg">
                    <header className="flex items-center justify-between border-b px-3 py-3">
                        <h2 className="text-xl font-semibold">Chatbot hỗ trợ</h2>
                        <button onClick={() => setOpen(!open)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </header>
                    {/* MAIN CHAT */}
                    <div className="flex-1">
                        {/* ME */}
                        <div className="flex justify-end p-3">
                            <p className="rounded bg-primary px-3 py-2 text-white">
                                Cách làm cho da ít bị khô
                            </p>
                        </div>
                        <div className="flex justify-start p-3">
                            <div className="flex justify-start space-x-2">
                                <img
                                    className="block h-11 w-11 rounded-full bg-cyan-100 pl-0.5"
                                    src="/assets/images/chatbot.png"
                                />
                                <div className="flex-1">
                                    <div className="rounded bg-gray-100 px-3 py-2">
                                        <h3 className="text-sm font-bold text-primary">Chatbot</h3>
                                        <p>
                                            Bạn có thể lựa chọn một số sản phẩm dưỡng da chất lượng
                                            và phù hợp. Sử dụng đúng cách sẽ giúp da ít bị khô!
                                        </p>
                                    </div>
                                    <div className="mt-2 flex space-x-2">
                                        <img
                                            src="/assets/images/product/product1.png"
                                            className="h-24 w-24 rounded border bg-gray-500 object-contain"
                                        />
                                        <img
                                            src="/assets/images/product/product2.png"
                                            className="h-24 w-24 rounded border bg-gray-500 object-contain"
                                        />
                                        <img
                                            src="/assets/images/product/product4.png"
                                            className="h-24 w-24 rounded border bg-gray-500 object-contain"
                                        />
                                        <button className="flex h-24 w-24 items-center justify-center rounded border text-primary">
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 border-t p-3">
                        <button className="text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                                <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="Nhập nội dung chat"
                            className="flex-1 rounded-full border px-3 py-1"
                        />
                        <button className="text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <div
                className="relative flex h-20 w-20 items-center justify-center rounded-full "
                onClick={() => setOpen(!open)}
            >
                <div className="chatbot-bg absolute left-[50%] top-[50%] h-20 w-20 -translate-x-[50%] -translate-y-[50%] rounded-full bg-transparent"></div>
                {open ? (
                    <img
                        className="absolute ml-1 block h-16 w-16"
                        src="/assets/images/chatbot.png"
                    />
                ) : (
                    <img
                        className="absolute ml-1 block h-16 w-16"
                        src="/assets/images/chatbot.png"
                    />
                )}
            </div>
        </div>
    );
}
