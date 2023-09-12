export default function HomePage() {
    return (
        <div className="grid grid-cols-5 gap-6 pt-5 mx-auto max-w-[1400px]">
            {/* SIDEBAR */}
            <div className="col-span-1 bg-white px-2 py-3 rounded-lg">
                <h2 className="font-semibold pl-3">Danh mục</h2>
                <div className="pt-2">
                    {[1, 2, 3, 4].map(() => (
                        <button className="px-3 py-3 rounded-md hover:bg-gray-100 w-full flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                            </svg>

                            <span>Đồ Chơi - Mẹ & Bé</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="col-span-4 space-y-4">
                {/* BANNER */}
                <div className="grid grid-cols-4 gap-3 h-[280px]">
                    <div className="col-span-3 rounded-xl overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/38/c1/6e/f8ff74034be9fd2836975bd4ad1216cb.png.webp"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/19/82/df/30d5cd12b66b94049636a478233016a3.png.webp"
                        />
                    </div>
                </div>

                {/*  */}
                <div className="py-3 px-4 bg-white rounded-md">ádfasd</div>

                {/* TRENDING */}
                <div className="p-4 bg-white rounded-md">
                    <h2 className="font-bold text-xl">Sản phẩm bán chạy</h2>
                    <div className="grid grid-cols-4 gap-3 pt-4">
                        {/* PRODUCT CARD */}
                        {[1, 2, 3, 4].map(() => (
                            <div className="rounded-md border bg-white">
                                <img
                                    className="h-[155px] w-full object-cover rounded-md"
                                    src="https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/5-C35UE26ELZLFL2/hero/027f6c3c-9832-4b59-b816-b8b783ddac99__store_cover__2023__02__27__02__45__02.webp"
                                />
                                <div className="p-3">
                                    <h2 className="font-medium">Tên sản phẩm gì đó</h2>
                                    <p className="text-xl font-medium text-primary">30 000 đ</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
