import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Avatar } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.svg';

export default function HeaderTop() {

    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className=''>
            <Navbar className='w-screen bg-white dark:bg-slate-500'>
                <Navbar.Brand className='ml-7 text-2xl'>
                    MarketGraphs
                </Navbar.Brand>
                <Nav className='mr-4' pullRight>
                    <Nav.Item>
                      <button onClick={handleDarkMode} type='button'>
                        <img 
                            src={darkMode ? Sun : Moon} 
                            alt="Toggle dark mode"     
                        />
                        </button>
                    </Nav.Item>
                    <Nav.Item className='gap-4'>
                        <Avatar src="https://i.pravatar.cc/150?u=1" circle></Avatar> User
                    </Nav.Item>
                </Nav>
            </Navbar>      
        </div>
    );
}
