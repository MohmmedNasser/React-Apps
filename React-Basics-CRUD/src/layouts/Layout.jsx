import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="bg-white shadow-md border-b border-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <Link
                                className="block text-teal-600 font-bold"
                                to="/"
                            >
                                React First
                            </Link>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="block">
                                <ul className="flex items-center gap-6 text-base font-medium">
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-teal-950 font-bold"
                                                    : "text-gray-500 transition hover:text-black/80"
                                            }
                                            to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-teal-950 font-bold"
                                                    : "text-gray-500 transition hover:text-black/80"
                                            }
                                            to="/create"
                                        >
                                            New Post
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main className="my-5 px-1 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-white border border-top border-gray-200">
                <div className="mx-auto max-w-screen-xl px-2 py-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-black">
                            React First
                        </div>

                        <p className="text-center text-sm text-gray-700">
                            Copyright &copy; 2025. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
