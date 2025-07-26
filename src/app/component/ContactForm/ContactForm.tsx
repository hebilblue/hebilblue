'use client';

import { textStyles } from '@/app/styles/typography';
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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Bir hata oluştu'
                });
            }
        } catch {
            setSubmitStatus({
                type: 'error',
                message: 'Bağlantı hatası. Lütfen tekrar deneyiniz.'
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
                className="w-full h-[40px] bg-[#0066CC] hover:bg-[#0052A3] disabled:bg-[#CCCCCC] rounded-[8px] text-white font-roboto font-medium text-[14px] transition-colors duration-200"
            >
                <p className={textStyles.contactButton}>
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </p>
            </button>

            {submitStatus.type && (
                <div className={`mt-2 p-3 rounded-[8px] text-[14px] ${
                    submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                }`}>
                    {submitStatus.message}
                </div>
            )}
        </form>
    );
};

export default ContactForm;
