import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement | null>;
    t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ contactRef, t }) => {
    return (
        <section ref={contactRef} className="py-30 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('contactTitle')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">{t('contactText')}</p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <HiOutlineMail className="text-3xl text-blue-500 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{t('email')}</h3>
                        <a href="mailto:g_rubenyan@mail.ru" className="text-blue-600 hover:underline">
                            g_rubenyan@mail.ru
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <HiOutlinePhone className="text-3xl text-green-500 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{t('phone')}</h3>
                        <a href="tel:+37455322666" className="text-green-600 hover:underline">
                            +374 55 322 666
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <HiOutlineLocationMarker className="text-3xl text-red-500 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{t('location')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">Masis, Armenia</p>
                    </div>
                </div>

                <a href="mailto:g_rubenyan@mail.ru" className="px-8 py-4 bg-gradient-to-r w-fit from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                    <HiOutlineMail className="text-xl" />
                    {t('getInTouch')}
                </a>
            </div>
        </section>
    );
};

export default Contact;