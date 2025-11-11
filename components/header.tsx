import React, { useState, useRef, useEffect } from 'react'; import { SearchIcon, UserIcon, BotIcon, HeartIcon, LogoutIcon, MenuIcon, CloseIcon } from './icons/Icons'; import { useAppContext } from '../contexts/AppContext'; import { useTranslations } from '../hooks/useTranslations';

const SideMenu: React.FC = () => { const { navigate, isLoggedIn, user, logout, openAiAssistant, closeMenu, isMenuOpen } = useAppContext(); const t = useTranslations();

const handleUserMenuClick = (page: string) => {
    navigate(page);
    closeMenu();
};

const handleNavClick = (page: string) => {
    navigate(page);
    closeMenu();
};

return (
  <>
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={closeMenu}></div>
    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">{t('menu')}</h2>
            <button onClick={closeMenu} className="mt-2">
                <CloseIcon />
            </button>
        </div>
        <nav className="p-4">
            <ul>
                <li>
                    <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 py-2 w-full">
                        <SearchIcon />
                        {t('home')}
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavClick('browse')} className="flex items-center gap-2 py-2 w-full">
                        <BotIcon />
                        {t('browse')}
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavClick('favorites')} className="flex items-center gap-2 py-2 w-full">
                        <HeartIcon />
                        {t('favorites')}
                    </button>
                </li>
            </ul>
        </nav>

        <div className="p-4 border-t">
            {isLoggedIn ? (
                <div className="flex items-center gap-3">
                    <UserIcon />
                    <div>
                        <div className="font-semibold">{user?.name}</div>
                        <div className="text-sm text-gray-500">{user?.email}</div>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <button onClick={() => handleUserMenuClick('profile')} className="px-3 py-1 rounded-md hover:bg-gray-100">
                            {t('profile')}
                        </button>
                        <button onClick={logout} className="px-3 py-1 rounded-md hover:bg-gray-100">
                            <LogoutIcon />
                            {t('logout')}
                        </button>
                    </div>
                </div>
            ) : (
                 <button onClick={() => handleUserMenuClick('login')} className="xt-sm rounded-md px-4 py-2 hover:bg-gray-200 transition-colors">
                    {t('login')}
                </button>
            )}
        </div>
    </div>
  </>
);

};

const Header: React.FC = () => { const { isMenuOpen, openMenu, closeMenu, isLoggedIn, user, navigate, logout } = useAppContext(); const t = useTranslations(); const [query, setQuery] = useState(''); const [showSearch, setShowSearch] = useState(false); const searchRef = useRef<HTMLInputElement | null>(null);

useEffect(() => {
    if (showSearch && searchRef.current) {
        searchRef.current.focus();
    }
}, [showSearch]);

const handleSearch = () => {
    if (query.trim()) {
        navigate(`search?query=${encodeURIComponent(query)}`);
        setShowSearch(false);
    }
};

return (
    <>
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button onClick={openMenu} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <MenuIcon />
                        </button>
                        <div className="ml-4 flex-shrink-0">
                            <a href="/" className="text-xl font-bold">MyApp</a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">{t('search')}</label>
                            <div className="relative">
                                {showSearch ? (
                                    <>
                                        <input
                                            ref={searchRef}
                                            id="search"
                                            className="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder={t('search_placeholder')}
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        />
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <SearchIcon />
                                        </div>
                                    </>
                                ) : (
                                    <button onClick={() => setShowSearch(true)} className="w-full text-left py-2 px-3 border rounded-md">
                                        <div className="flex items-center gap-2">
                                            <SearchIcon />
                                            <span className="text-gray-500">{t('search')}</span>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <HeartIcon />
                        </button>

                        {isLoggedIn ? (
                            <div className="flex items-center gap-3">
                                <button onClick={() => navigate('assistant')} className="p-2 rounded-full hover:bg-gray-100">
                                    <BotIcon />
                                </button>
                                <div className="flex items-center gap-2">
                                    <img src={user?.avatar} alt="avatar" className="h-8 w-8 rounded-full" />
                                    <span className="hidden sm:inline-block">{user?.name}</span>
                                    <button onClick={logout} className="p-2 rounded-full hover:bg-gray-100">
                                        <LogoutIcon />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <button onClick={() => navigate('login')} className="px-4 py-2 rounded-md border">
                                    {t('login')}
                                </button>
                                <button onClick={() => navigate('signup')} className="px-4 py-2 rounded-md bg-indigo-600 text-white">
                                    {t('signup')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
        <SideMenu />
    </>
);

};

export default Header;
