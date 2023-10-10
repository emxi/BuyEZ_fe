import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-white px-8">
            <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between">
                {/* LOGO */}
                <Link to="/" className="text-3xl font-black text-primary">
                    <img src="/assets/images/logo.png" className="h-11 object-cover" />
                </Link>

                {/* SEARCH */}
                <div className="flex w-[800px] min-w-[500px] items-center justify-between rounded border">
                    <div className="flex items-center pl-3 text-gray-500">
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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            className="w-full rounded px-2 py-1.5 outline-none"
                            placeholder="Tìm kiếm sản phẩm"
                        />
                    </div>
                    <button className="border-l px-2 text-primary">Tìm kiếm</button>
                </div>

                {/* Action group */}
                <div className="flex items-center space-x-2">
                    {/* NAV */}
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                clsx(
                                    'flex items-center space-x-1 rounded-lg px-4 py-2 text-gray-500 hover:bg-primary/10',
                                    {
                                        'text-primary': isActive,
                                    },
                                )
                            }
                            end
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <span>Trang chủ</span>
                        </NavLink>
                        <NavLink
                            to="/live"
                            className={({ isActive }) =>
                                clsx(
                                    'flex items-center space-x-1 rounded-lg px-4 py-2 text-gray-500 hover:bg-primary/10',
                                    {
                                        'text-primary': isActive,
                                    },
                                )
                            }
                        >
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
                                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                                />
                            </svg>

                            <span>Livestream</span>
                        </NavLink>

                        <button className="flex items-center">
                            <div className="flex items-center space-x-1 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <span>Tài khoản</span>
                            </div>
                        </button>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-7 border-l"></div>

                    {/* CART */}
                    <button className="relative flex items-center px-2 py-2 text-primary">
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
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        <div className="absolute right-0 top-0 rounded-full bg-red-400 px-1 text-xs font-medium text-white">
                            0
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
