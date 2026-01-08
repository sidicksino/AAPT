import emailjs from '@emailjs/browser';

interface ContactParams {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const emailService = {
    sendContactEmail: async (params: ContactParams) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.warn('EmailJS environment variables are missing');
            throw new Error('Email service not configured');
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
