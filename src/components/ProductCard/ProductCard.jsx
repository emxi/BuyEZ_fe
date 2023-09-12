import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <Link to={'/' + product.id} className="rounded-md border bg-white hover:shadow">
            <img
                className="h-[155px] w-full rounded-md object-cover"
                src="https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/5-C35UE26ELZLFL2/hero/027f6c3c-9832-4b59-b816-b8b783ddac99__store_cover__2023__02__27__02__45__02.webp"
            />
            <div className="p-3">
                <h2 className="font-medium">Tên sản phẩm gì đó</h2>
                <p className="text-xl font-medium text-primary">30 000 đ</p>
            </div>
        </Link>
    );
}
