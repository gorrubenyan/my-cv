// File: components/ContactModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { init, send } from '@emailjs/browser';

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
    t: (key: string) => string;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose, t }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (open) {
            setStatus('idle');
            // give a tiny delay so the input is mounted, then focus
            setTimeout(() => firstInputRef.current?.focus(), 50);
        }
    }, [open]);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setStatus('idle');

        try {
            // ====== REPLACE WITH YOUR EmailJS VALUES ======
            const SERVICE_ID = 'service_gn154ns';
            const TEMPLATE_ID = 'template_w70psed';
            const PUBLIC_KEY = '7qLzTCmi57SnoTwEk';
            // ==============================================

            // initialize EmailJS with your public key
            init(PUBLIC_KEY);

            const templateParams = {
                name: name,
                email: email,
                message,
            };

            await send(SERVICE_ID, TEMPLATE_ID, templateParams);

            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');

            // close modal after short success feedback
            setTimeout(() => {
                onClose();
            }, 900);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* overlay */}
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            {/* modal */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-xl w-full p-6 mx-4 z-10">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    aria-label={t('close') || 'Close'}
                >
                    <HiOutlineX className="w-6 h-6" />
                </button>

                <h3 className="text-xl font-semibold mb-4">{t('contactModalTitle') || 'Send a message'}</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">{t('fullName') || 'Full name'}</label>
                        <input
                            ref={firstInputRef}
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">{t('email') || 'Email'}</label>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">{t('message') || 'Message'}</label>
                        <textarea
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={sending}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-colors disabled:opacity-60"
                        >
                            {sending ? (t('sending') || 'Sending...') : (t('send') || 'Send')}
                        </button>

                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-full border">
                            {t('cancel') || 'Cancel'}
                        </button>

                        {status === 'success' && <span className="text-green-600 ml-2">{t('sentSuccess') || 'Message sent'}</span>}
                        {status === 'error' && <span className="text-red-600 ml-2">{t('sentError') || 'Failed to send'}</span>}
                    </div>
                </form>

                {/*<p className="mt-4 text-xs text-gray-500">*/}
                {/*    Այս ձևաթուղթը օգտագործում է EmailJS — կոնֆիգուրացնեք <code>SERVICE_ID</code>, <code>TEMPLATE_ID</code> և <code>PUBLIC_KEY</code>*/}
                {/*    այստեղի վերին հատվածում կամ համադրեք՝ ձեր շրջակա փոփոխականներից (env) վերցնելու համար։*/}
                {/*</p>*/}
            </div>
        </div>
    );
};

export default ContactModal;
