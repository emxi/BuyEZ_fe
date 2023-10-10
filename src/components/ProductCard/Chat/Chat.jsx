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
                                Cần mua áo phù hợp cho mùa hè
                            </p>
                        </div>
                        <div className="flex justify-start p-3">
                            <div className="flex justify-start space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="rounded bg-gray-100 px-3 py-2">
                                        <h3 className="text-sm font-bold text-primary">Chatbot</h3>
                                        <p>
                                            Bạn có thể lựa chọn những bộ áo màu sáng. Chất liệu vải
                                            mỏng nhẹ, thoáng mát.
                                        </p>
                                    </div>
                                    <div className="mt-2 flex space-x-2">
                                        <img
                                            src="/assets/images/product/thoitrang1.webp"
                                            className="h-24 w-24 rounded border bg-gray-500 object-contain"
                                        />
                                        <img
                                            src="/assets/images/product/thoitrang2.webp"
                                            className="h-24 w-24 rounded border bg-gray-500 object-contain"
                                        />
                                        <img
                                            src="/assets/images/product/thoitrang3.webp"
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
            <button
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-8 w-8"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}
