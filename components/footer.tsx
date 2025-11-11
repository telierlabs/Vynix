import React from 'react';
import { InstagramIcon, TikTokIcon } from './icons/Icons';
import { useTranslations } from '../hooks/useTranslations';
import { useAppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
    const t = useTranslations();
    const { navigate } = useAppContext();
    
    return (
        <footer className="w-full bg-vynix-gray/30 mt-16 py-12 px-4 md:px-8 text-gray-400">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-center md:text-left justify-between">
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <h2 className="text-2xl font-extrabold text-...() => navigate('home')} style={{ cursor: 'pointer' }}>VYNIX</h2>
                    <p className="text-sm">{t('unlimited_streaming')}</p>
                    <p className="text-xs mt-4">{t('dummy_project')}</p>
...
                            <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                                <TikTokIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-vynix-light-gray mt-10 pt-6 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
