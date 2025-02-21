import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
    svg: React.ReactNode;
    path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ svg, path }) => {
        const location = useLocation();
        const isActive = location.pathname === path;

        return (
                <li>
                        <Link
                                to={path}
                                className={`flex items-center justify-center p-2 text-white rounded-lg dark:text-white hover:opacity-100 group ${
                                        isActive ? 'bg-primary-darker opacity-100' : 'opacity-70'
                                }`}
                        >
                                {React.cloneElement(svg as React.ReactElement, {
                                        className:
                                                'w-7 h-7 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white',
                                })}
                        </Link>
                </li>
        );
};

export default NavLink;
