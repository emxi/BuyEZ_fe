import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import categories from '../../data/categories';
import products from '../../data/products';
import groupBy from '../../utils/groupBy';
import byId from '../../utils/byId';

export default function HomePage() {
    const productsById = byId(products);
    const trendingProductIds = [1, 6, 8, 2];
    const newProductIds = [7, 5, 3, 8];
    return (
        <div className="mx-auto grid max-w-[1400px] grid-cols-5 gap-6 px-8 pt-5">
            {/* SIDEBAR */}
            <div className="col-span-1">
                <div className="rounded-lg bg-white px-2 py-3">
                    <h2 className="pl-3 font-semibold">Danh mục</h2>
                    <div className="pt-2">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                className="flex w-full items-center space-x-2 rounded-md px-3 py-3 hover:bg-gray-100"
                            >
                                <img
                                    className="h-8 w-8 rounded object-cover"
                                    src={category.image}
                                />

                                <span className="leading-5">{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-4 space-y-4">
                {/* BANNER */}
                <div className="grid h-[280px] grid-cols-4 gap-3">
                    <div className="col-span-3 overflow-hidden rounded-xl">
                        <img
                            className="h-full w-full object-cover"
                            src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/38/c1/6e/f8ff74034be9fd2836975bd4ad1216cb.png.webp"
                        />
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            className="h-full w-full object-cover"
                            src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/19/82/df/30d5cd12b66b94049636a478233016a3.png.webp"
                        />
                    </div>
                </div>

                {/*  */}
                <div className="flex space-x-6 rounded-md bg-white px-4 py-3 font-semibold text-primary">
                    <div className="flex items-center space-x-2">
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
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <p>Sản phẩm chất lượng</p>
                    </div>
                    <div className="flex items-center space-x-2">
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
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        <p>Giao hàng nhanh chóng</p>
                    </div>
                    <div className="flex items-center space-x-2">
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
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                        </svg>

                        <p>Hỗ trợ tận tình</p>
                    </div>
                </div>

                {/* TRENDING */}
                <div className="rounded-md bg-white p-4">
                    <h2 className="text-xl font-bold">Sản phẩm bán chạy</h2>
                    <div className="grid grid-cols-4 gap-3 pt-4">
                        {/* PRODUCT CARD */}
                        {trendingProductIds.map((id) => (
                            <ProductCard product={productsById[id]} key={id} />
                        ))}
                    </div>
                </div>

                {/* NEW */}
                <div className="rounded-md bg-white p-4">
                    <h2 className="text-xl font-bold">Sản phẩm mới nhất</h2>
                    <div className="grid grid-cols-4 gap-3 pt-4">
                        {/* PRODUCT CARD */}
                        {newProductIds.map((id) => (
                            <ProductCard product={productsById[id]} key={id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
