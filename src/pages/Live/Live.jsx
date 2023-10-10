import { Link } from 'react-router-dom';
import live from '../../data/live';

export default function LivePage() {
    return (
        <div className="mx-auto max-w-[1200px] space-y-5 px-8 pb-10 pt-5">
            <div className="grid grid-cols-4 gap-x-5 gap-y-7">
                {live.map((l) => (
                    <Link to={'/live/' + l.id} className="relative">
                        <div className="absolute left-3 top-3 flex space-x-2">
                            <div className="rounded bg-red-500 px-3 py-0.5 font-semibold text-white">
                                Live
                            </div>
                            <div className="flex items-center space-x-2 rounded bg-black/50 px-3 py-0.5 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <div>{l?.view}</div>
                            </div>
                        </div>
                        <img
                            src={l?.image}
                            alt=""
                            className="h-80 w-full rounded-md bg-slate-500 object-cover"
                        />
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
