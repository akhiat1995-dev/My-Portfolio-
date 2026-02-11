import { useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Menu, X, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const navItems = [
        { name: t('nav.home'), target: 'home' },
        {
            name: t('nav.profile'),
            target: 'profile',
            dropdown: [
                { name: t('nav.linkedin_freelancing'), target: 'linkedin-freelancing' },
                { name: t('nav.ai_projects'), target: 'projects' }
            ]
        },
        {
            name: t('nav.section'),
            target: 'section',
            dropdown: [
                { name: t('nav.experience'), target: 'experience' },
                { name: t('nav.education'), target: 'education' },
                { name: t('nav.skills'), target: 'competence' },
                { name: t('nav.certifications'), target: 'certifications' },
                { name: t('nav.projects'), target: 'projects' }
            ]
        },
        { name: t('nav.about'), target: 'about' },
        {
            name: t('nav.contact'),
            target: 'contact',
            dropdown: [
                { name: 'WhatsApp', target: 'contact' },
                { name: 'Email', target: 'contact' },
                { name: 'LinkedIn', target: 'contact' }
            ]
        },
    ];

    const toggleLang = (newLang: 'EN' | 'FR') => {
        setLang(newLang);
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-xl font-extrabold tracking-tighter text-primary uppercase hover:text-secondary transition-colors cursor-pointer"
                        >
                            YOUNESS AKHIAT
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.dropdown ? (
                                    <div className="flex items-center text-sm font-medium text-slate-600 hover:text-secondary cursor-pointer transition-colors">
                                        {item.name}
                                        <ChevronDown className="ml-1 w-4 h-4" />
                                    </div>
                                ) : (
                                    <Link
                                        to={item.target}
                                        smooth={true}
                                        duration={500}
                                        className="text-sm font-medium text-slate-600 hover:text-secondary cursor-pointer transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {item.dropdown && (
                                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-slate-200 shadow-xl rounded-lg py-2">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.target}
                                                smooth={true}
                                                duration={500}
                                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary cursor-pointer"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center text-xs font-bold tracking-widest text-slate-400 border border-slate-200 rounded-full px-4 py-1.5">
                            <button
                                onClick={() => toggleLang('FR')}
                                className={`hover:text-secondary transition-colors ${lang === 'FR' ? 'text-secondary' : ''}`}
                            >
                                FR
                            </button>
                            <span className="mx-2 text-slate-200">|</span>
                            <button
                                onClick={() => toggleLang('EN')}
                                className={`hover:text-secondary transition-colors ${lang === 'EN' ? 'text-secondary' : ''}`}
                            >
                                EN
                            </button>
                        </div>

                        <a
                            href="/my cv.pdf"
                            download
                            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-primary hover:bg-slate-800 transition-all focus:outline-none"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            {t('btn.download_cv')}
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-1">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <Link
                                to={item.target}
                                smooth={true}
                                duration={500}
                                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-secondary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                            {item.dropdown && (
                                <div className="pl-4 space-y-1">
                                    {item.dropdown.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            to={subItem.target}
                                            smooth={true}
                                            duration={500}
                                            className="block px-3 py-1 text-sm font-medium text-slate-500 hover:text-secondary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                        <div className="flex items-center text-xs font-bold tracking-widest text-slate-400">
                            <button onClick={() => toggleLang('FR')} className={`${lang === 'FR' ? 'text-secondary' : ''}`}>FR</button>
                            <span className="mx-2 text-slate-200">|</span>
                            <button onClick={() => toggleLang('EN')} className={`${lang === 'EN' ? 'text-secondary' : ''}`}>EN</button>
                        </div>
                        <a href="/my cv.pdf" download className="text-sm font-bold text-primary flex items-center">
                            <Download className="w-4 h-4 mr-1" /> {t('btn.download_cv')}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
