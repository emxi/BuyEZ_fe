import { Link } from 'react-router-dom';
import live from '../../data/live';

export default function LivePage() {
    return (
        <div className="mx-auto max-w-[1200px] space-y-5 px-8 pb-10 pt-5">
            <div className="grid grid-cols-4 gap-x-5 gap-y-7">
                {live.map((l) => (
                    <Link to={'/live/' + l.id} className="">
                        <img src="" alt="" className="h-80 rounded-md bg-slate-500" />
                        <h2 className="mt-1 overflow-x-hidden text-ellipsis whitespace-nowrap text-lg font-bold">
                            {l.name}
                        </h2>
                        <div className="mt-1 flex items-center space-x-2">
                            <img
                                className="h-7 w-7 rounded-full bg-primary object-cover"
                                src={l.store.avatar}
                            />
                            <p className="text-gray-600">{l.store.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
