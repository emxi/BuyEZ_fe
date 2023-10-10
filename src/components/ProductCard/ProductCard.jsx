import { Link } from 'react-router-dom';
import priceFormat from '../../utils/priceFormat';

export default function ProductCard({ product }) {
    return (
        <Link to={'/' + product?.id} className="rounded-md border bg-white hover:shadow">
            <img className="h-[155px] w-full rounded-md object-contain" src={product?.image} />
            <div className="p-3">
                <h2 className="overflow-x-hidden text-ellipsis whitespace-nowrap font-medium">
                    {product?.name}
                </h2>
                <p className="text-xl font-medium text-primary">
                    {priceFormat(product?.price) + ' ₫'}
                </p>
            </div>
        </Link>
    );
}
