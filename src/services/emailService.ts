import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';  
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY !== 'your_public_key') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const emailService = {
  /**
   * Send contact form email using EmailJS
   */
  async sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
    try {
      // Template parameters that will be sent to your email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Bilal Abbasi', // Your name
        to_email: 'abbasi.bilal2000@gmail.com', // Your email
        reply_to: formData.email,
        timestamp: new Date().toLocaleString(),
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email sent successfully!'
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again or contact us directly.'
      };
    }
  },

  /**
   * Send auto-reply email to the person who contacted you
   */
  async sendAutoReply(formData: ContactFormData): Promise<void> {
    try {
      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Bilal Abbasi',
        message: `Hi ${formData.name},\n\nThank you for reaching out! I've received your message and will get back to you within 24 hours.\n\nBest regards,\nBilal Abbasi`
      };

      // You can create a separate template for auto-replies
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        'template_auto_reply', // Create this template in EmailJS
        autoReplyParams
      );
    } catch (error) {
      console.error('Auto-reply failed:', error);
      // Don't throw error for auto-reply failure
    }
  }
};

// Configuration helper for easy setup
export const emailConfig = {
  SERVICE_ID: EMAILJS_SERVICE_ID,
  TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
  
  // Instructions for setup
  setup: {
    step1: 'Go to https://www.emailjs.com/',
    step2: 'Create an account and verify your email',
    step3: 'Create a new service (Gmail, Outlook, etc.)',
    step4: 'Create an email template',
    step5: 'Get your Service ID, Template ID, and Public Key',
    step6: 'Replace the values in this file'
  }
};
