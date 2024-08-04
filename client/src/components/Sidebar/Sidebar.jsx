// Sidebar.js
import React, { useState } from 'react';
import { PersonStanding, LogOut, Newspaper, HeartHandshake, Wrench } from 'lucide-react';
import Logo from '../../assets/Logo.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

export function Sidebar({ setShowAllPosts, setShowCreateCause, setShowCreatePost }) {
    const [onBlogClick, setOnBlogClick] = useState(false);
    const [onCauseClick, setOnCauseClick] = useState(false);
    const [onSettingClick, setOnSettingClick] = useState(false);
    const dispatch = useDispatch();

    const toggleMenu = (setToggle, currentToggle) => {
        setToggle(!currentToggle);
    };

    return (
        <aside className="flex flex-col border-r bg-black px-5 py-8 text-gray-200 w-48 h-full fixed inset-y-0 left-0">
            <a href="#">
                <img width="80" height="80" src={Logo} alt="Logo" />
            </a>
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6">
                    <div className="space-y-3">
                        <label className="px-3 text-xs font-semibold uppercase text-white">Content</label>
                        <a
                            onClick={() => toggleMenu(setOnBlogClick, onBlogClick)}
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                        >
                            <Newspaper className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Blogs</span>
                        </a>
                        {onBlogClick && (
                            <div className="space-y-1">
                                <span
                                    onClick={() => {
                                        setShowAllPosts(true);
                                        setShowCreatePost(false);
                                        setShowCreateCause(false);
                                    }}
                                    className="mx-3 text-sm font-medium text-gray-200 block pl-5 cursor-pointer"
                                >
                                    All Posts
                                </span>
                                <span
                                    onClick={() => {
                                        setShowAllPosts(false);
                                        setShowCreatePost(true);
                                        setShowCreateCause(false);
                                    }}
                                    className="mx-3 text-sm font-medium text-gray-200 block pl-5 cursor-pointer"
                                >
                                    New Post
                                </span>
                            </div>
                        )}

                        <a
                            onClick={() => toggleMenu(setOnCauseClick, onCauseClick)}
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                        >
                            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Causes</span>
                        </a>
                        {onCauseClick && (
                            <div className="space-y-1">
                                <span
                                    onClick={() => {
                                        setShowAllPosts(false);
                                        setShowCreatePost(false);
                                        setShowCreateCause(true);
                                    }}
                                    className="mx-3 text-sm font-medium text-gray-200 block pl-5 cursor-pointer"
                                >
                                    New Cause
                                </span>
                            </div>
                        )}

                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <PersonStanding className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Team</span>
                        </a>
                    </div>

                    <div className="space-y-3">
                        <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
                        <a
                            onClick={() => toggleMenu(setOnSettingClick, onSettingClick)}
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                        >
                            <Wrench className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Settings</span>
                        </a>
                        {onSettingClick && (
                            <div className="space-y-1">
                                <span
                                    className="mx-3 text-sm font-medium text-gray-200 block pl-5 cursor-pointer"
                                >
                                    Profile
                                </span>
                            </div>
                        )}
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                            onClick={() => dispatch(logout())}
                        >
                            <LogOut className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Logout</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    );
}
