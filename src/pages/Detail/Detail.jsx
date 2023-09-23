function DetailPage() {
    return (
        <div className="mx-auto flex max-w-[1200px] space-x-5 px-8 pt-5">
            <div className="w-[450px] rounded-lg bg-white p-2">
                <img
                    src="https://salt.tikicdn.com/cache/368x368/ts/product/c1/59/2b/a0bb7628ef5cc678c37672b71a7f6bb4.jpg.webp"
                    className="w-full object-cover"
                />
            </div>

            <div className="flex-1 space-y-3">
                <div className="rounded-lg bg-white p-3">
                    <h1 className="text-lg font-medium">
                        Điện Thoại Oppo A54 (4GB/128GB) - Hàng Chính Hãng
                    </h1>
                    <p className="mt-1 text-2xl font-bold text-primary">3.190.000 đ</p>
                </div>

                <div className="space-y-4 rounded-lg bg-white p-3">
                    <div className="space-y-2">
                        <p className="font-semibold">Số lượng</p>
                        <div className="flex items-center space-x-1 text-gray-600">
                            <button className="flex h-8 w-8 items-center justify-center rounded-sm border">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 12h-15"
                                    />
                                </svg>
                            </button>

                            <div
                                contentEditable
                                className="flex h-8 w-12 items-center justify-center rounded-sm border text-lg font-medium"
                            >
                                1
                            </div>

                            <button className="flex h-8 w-8 items-center justify-center rounded-sm border">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Tạm tính</p>
                        <p className="mt-1 text-2xl font-medium">3.190.000 đ</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="rounded bg-primary px-6 py-2 text-white hover:bg-primary/80">
                            Mua ngay
                        </button>
                        <button className="rounded border border-primary px-6 py-2 text-primary">
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
