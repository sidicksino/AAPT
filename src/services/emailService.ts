import emailjs from '@emailjs/browser';

interface ContactParams {
    name: string;
    email: string;
    subject: string;
    message: string;
    time: string;
}

export const emailService = {
    sendContactEmail: async (params: ContactParams) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.warn('EmailJS environment variables are missing');
            throw { type: 'CONFIG_ERROR', message: 'Email service not configured' };
        }

        try {
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: params.name,
                    reply_to: params.email,
                    subject: params.subject,
                    message: params.message,
                    time: params.time,
                },
                publicKey
            );
            return response;
        } catch (error) {
            console.error('EmailJS Error:', error);
            throw error;
        }
    }
};
