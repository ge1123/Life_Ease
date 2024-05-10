"use client"; // This is a client component 👈🏽

import Link from 'next/link';

function Sidebar() {
    return (
        <aside
            className="w-64 h-full flex flex-col bg-stone-800 text-white p-5">
            <h2
                className="text-lg font-bold uppercase mb-5">
                Menu
            </h2>
            <Link href="/">
        <button className="w-48 mb-3 py-2 text-sm font-semibold rounded-lg bg-stone-800 hover:bg-stone-500 transition-colors duration-300 ease-in-out text-left">Home</button>
    </Link>
    <Link href="/todolist">
        <button className="w-48 py-2 text-sm font-semibold rounded-lg bg-stone-800 hover:bg-stone-500 transition-colors duration-300 ease-in-out text-left">Todo List</button>
    </Link>
        </aside>
    );
}

export default Sidebar;
