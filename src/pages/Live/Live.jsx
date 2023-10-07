import { Link } from 'react-router-dom';

export default function LivePage() {
    return (
        <div className="mx-auto max-w-[1200px] space-y-5 px-8 pt-5">
            LIVE
            <div className="grid grid-cols-4 gap-x-5 gap-y-7">
                {[1, 2, 3, 4, 5, 6, 7].map(() => (
                    <Link to={'/live'} className="">
                        <img src="" alt="" className="h-80 rounded-md bg-slate-500" />
                        <h2 className="mt-1 text-lg font-bold">Khuyến mãi lớn cuối tuần</h2>
                        <div className="mt-1 flex items-center space-x-2">
                            <div className="h-7 w-7 rounded-full bg-primary" />
                            <p className="text-gray-600">Tên cửa hàng gì đó</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
