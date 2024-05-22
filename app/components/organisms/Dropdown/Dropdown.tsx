"use client";
import { useRef, useState, useEffect } from 'react';
import DropdownItem from '../../atoms/DropdownItem/DropdownItem';

type DropdownProps = {
    options: Array<{ label: string, href?: string, onClick?: () => void }>;
    name: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left overflow-visible" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex items-center w-full rounded-md shadow-sm text-sm text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {name}
                    <svg
                        className="mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                    aria-orientation="vertical"
                >
                    <div className="py-1" role="none">
                        {options.map((option, index) => (
                            <DropdownItem key={index} {...option} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
