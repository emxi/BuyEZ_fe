function LiveDetailPage() {
    return (
        <div className="mx-auto flex max-w-[900px] space-x-3 px-8 pt-5">
            <div className="flex h-[640px] w-[400px] overflow-hidden rounded-lg bg-blue-400">
                <video src="" className="h-full w-full" controls></video>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-white">
                <div className="border-b p-3">
                    <div className="mt-1 flex items-center space-x-2">
                        <div className="h-7 w-7 rounded-full bg-primary" />
                        <p className="text-gray-600">Tên cửa hàng gì đó</p>
                    </div>
                    <h2 className="mt-1 text-lg font-bold">Khuyến mãi lớn cuối tuần</h2>
                    <p className="text-gray-600">
                        Sản phẩm cũng giúp bé hoàn thiện hệ miễn dịch một cách hiệu quả trong giai
                        đoạn này
                    </p>
                </div>
                <div className="flex-1 border-b">
                    <div className="flex space-x-2 p-3">
                        <div className="h-7 w-7 rounded-full bg-violet-500"></div>
                        <div className="rounded bg-gray-100 px-2 py-1">
                            <h3 className="text-xs font-bold">Nguyễn Văn A</h3>
                            <p>Sản phẩm kia giá bao nhiêu vậy</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 p-3">
                        <div className="h-7 w-7 rounded-full bg-blue-500"></div>
                        <div className="rounded bg-gray-100 px-2 py-1">
                            <h3 className="text-xs font-bold">Nguyễn B</h3>
                            <p>Có free ship không ạ</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 p-3">
                        <div className="h-7 w-7 rounded-full bg-green-500"></div>
                        <div className="rounded bg-gray-100 px-2 py-1">
                            <h3 className="text-xs font-bold">Trần C</h3>
                            <p>Sản phẩm chất lượng</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2 p-3">
                    <div className="h-8 w-8 rounded-full bg-red-400" />
                    <input
                        type="text"
                        placeholder="Bình luận trực tiếp"
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
        </div>
    );
}

export default LiveDetailPage;
