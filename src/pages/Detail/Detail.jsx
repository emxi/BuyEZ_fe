import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import products from '../../data/products';
import categories from '../../data/categories';
import byId from '../../utils/byId';
import store from '../../data/store';
import priceFormat from '../../utils/priceFormat';
import { useEffect, useState } from 'react';

function DetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct(products.find((product) => product.id == id));
    }, [id]);
    const productByIds = byId(products);
    const categoryByIds = byId(categories);
    const storeByIds = byId(store);
    return (
        <div className="mx-auto max-w-[1200px] space-y-5 px-8 pt-5">
            <div className="flex items-start space-x-5 ">
                <div className="w-[450px] rounded-lg bg-white p-2">
                    <img src={product.image} className="w-full object-cover" />
                </div>

                <div className="flex-1 space-y-3">
                    {/* NAME SECTION */}
                    <div className="rounded-lg bg-white p-3">
                        <h1 className="text-lg font-medium">{product.name}</h1>
                        <p className="mt-1 text-2xl font-bold text-primary">
                            {priceFormat(product.price) + ' ₫'}
                        </p>
                    </div>
                    {/* ADD TO CART SECTION */}
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
                            <p className="mt-1 text-2xl font-medium">
                                {priceFormat(product.price) + ' ₫'}
                            </p>
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

                    {/* STORE */}
                    <div className="rounded-lg bg-white p-3">
                        <p className="font-semibold">Thông tin người bán</p>
                        <div className="mt-1 flex items-center space-x-2">
                            <img
                                className="h-8 w-8 rounded-full bg-orange-500 object-cover"
                                src={storeByIds[product?.storeId]?.avatar}
                            />
                            <p className="font-semibold">{storeByIds[product?.storeId]?.name}</p>
                        </div>
                        <p className="text-gray-600">
                            {'Địa chỉ: ' + storeByIds[product?.storeId]?.address}
                        </p>
                        <p className="text-gray-600">
                            {'Sản phẩm: ' + storeByIds[product?.storeId]?.quantity}
                        </p>
                    </div>

                    {/* DESCRIPTION SECTION */}
                    <div className="rounded-lg bg-white p-3">
                        <p className="font-semibold">Mô tả sản phẩm</p>
                        <p className="mt-1 text-gray-600">{product.description}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-md bg-white p-4">
                <h2 className="text-xl font-bold">Sản phẩm tương tự</h2>
                <div className="grid grid-cols-4 gap-3 pt-4">
                    {/* PRODUCT CARD */}
                    {product?.relateProducts?.map((_id) => (
                        <ProductCard product={productByIds[_id]} key={_id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
