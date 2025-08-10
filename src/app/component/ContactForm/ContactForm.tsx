'use client';

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const { firstName, lastName, email, message } = formData;
            const subject = 'HebilBlue İletişim Formu - Yeni Mesaj';
            const body = `Ad: ${firstName} ${lastName}\nE-posta: ${email}\n\nMesaj:\n${message}`;

            const mailtoLink = `mailto:info@hebilblue.com.tr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open default email client
            window.open(mailtoLink, '_blank');

            setSubmitStatus({
                type: 'success',
                message: 'E-posta uygulamanız açıldı. Mesajınızı gönderebilirsiniz.'
            });

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Bir hata oluştu. Lütfen tekrar deneyiniz.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[8px] w-full">
            <div className="flex flex-row gap-[8px]">
                <div className="flex flex-col gap-[8px] w-full">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Adınız"
                        required
                        className="w-full h-[40px] bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41]"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Soyadınız"
                        required
                        className="w-full h-[40px] bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41]"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E-posta"
                        required
                        className="w-full h-[40px] bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41]"
                    />
                </div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mesajınız"
                    required
                    rows={4}
                    className="w-full bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41] resize-none"
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[40px] bg-[#C9B18B] rounded-[8px] font-roboto font-medium text-[14px] text-[#FFFFFF] hover:bg-[#B8A07A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
            </button>
            {submitStatus.type && (
                <div className={`text-[14px] font-roboto ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                    {submitStatus.message}
                </div>
            )}
        </form>
    );
};

export default ContactForm;
