import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Debug logging
console.log('🔧 EmailJS Configuration:');
console.log('Service ID:', EMAILJS_SERVICE_ID);
console.log('Template ID:', EMAILJS_TEMPLATE_ID);
console.log('Auto-Reply Template ID:', EMAILJS_AUTO_REPLY_TEMPLATE_ID);
console.log('Public Key:', EMAILJS_PUBLIC_KEY ? EMAILJS_PUBLIC_KEY.substring(0, 8) + '...' : 'Not found');
console.log('All env vars:', import.meta.env);

// Check if all required variables are present
const isConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;
console.log('Is EmailJS configured?', isConfigured);

// Initialize EmailJS
if (isConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
  console.log('✅ EmailJS initialized successfully');
} else {
  console.error('❌ EmailJS configuration missing:', {
    serviceId: !!EMAILJS_SERVICE_ID,
    templateId: !!EMAILJS_TEMPLATE_ID,
    publicKey: !!EMAILJS_PUBLIC_KEY
  });
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  project?: string;
  budget?: string;
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
    console.log('📧 Attempting to send email with data:', formData);
    
    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('❌ EmailJS not configured properly');
      console.error('Missing:', {
        serviceId: !EMAILJS_SERVICE_ID,
        templateId: !EMAILJS_TEMPLATE_ID,
        publicKey: !EMAILJS_PUBLIC_KEY
      });
      return {
        success: false,
        message: 'Email service not configured. Please set up EmailJS credentials.'
      };
    }

    try {
      // Template parameters that match the EmailJS template variables
      const templateParams = {
        // Basic template variables (matching your template)
        name: formData.name,           // {{name}} in template
        email: formData.email,         // {{email}} in template  
        message: formData.message,     // {{message}} in template
        company: formData.company || '',
        project: formData.project || '',
        budget: formData.budget || '',
        
        // Sender details (various naming conventions for templates)
        from_name: formData.name,      // {{from_name}} - sender's name
        from_email: formData.email,    // {{from_email}} - sender's email
        user_email: formData.email,    // {{user_email}} - alternative
        user_name: formData.name,      // {{user_name}} - alternative
        client_name: formData.name,    // {{client_name}} - alternative
        client_email: formData.email,  // {{client_email}} - alternative
        reply_to: formData.email,      // {{reply_to}} - reply address
        
        // Recipient details (your information)
        to_name: 'Code World Team',
        to_email: 'abbasi.bilal2000@gmail.com',
        
        // Additional metadata
        timestamp: new Date().toLocaleString(),
        subject: `New Contact Form Submission from ${formData.name}`,
        form_type: 'Contact Form',
      };

      console.log('📤 Sending email with params:', templateParams);

      console.log('📤 Sending contact email to admin...');
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Contact Email Response:', response);

      if (response.status === 200) {
        // Send auto-reply if template is configured
        if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
          try {
            console.log('📤 Sending auto-reply to user...');
            const autoReplyParams = {
              // Standard EmailJS auto-reply parameters
              to_email: formData.email,           // Send TO the user
              user_name: formData.name,           // User's name for greeting
              from_name: 'Code World Team',          // Your name
              from_email: 'abbasi.bilal2000@gmail.com', // Your email
              reply_message: `Thank you for contacting me, ${formData.name}! I have received your message and will get back to you within 24 hours.`,
              
              // Additional auto-reply variables
              name: formData.name,                // {{name}} in auto-reply template
              email: formData.email,              // {{email}} in auto-reply template
              timestamp: new Date().toLocaleString(),
            };
            
            console.log('📤 Auto-reply params:', autoReplyParams);
            
            const autoReplyResponse = await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_AUTO_REPLY_TEMPLATE_ID,
              autoReplyParams
            );
            
            console.log('✅ Auto-reply sent:', autoReplyResponse);
          } catch (autoReplyError) {
            console.error('❌ Auto-reply failed (but main email was sent):', autoReplyError);
          }
        } else {
          console.warn('⚠️ Auto-reply template not configured');
        }
        
        return {
          success: true,
          message: 'Email sent successfully!'
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      
      // Check if it's a template not found error
      if (error instanceof Error && error.message.includes('template ID not found')) {
        return {
          success: false,
          message: 'Email template not found. Please create the template "template_contact" in your EmailJS dashboard.'
        };
      }
      
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
        from_name: 'Code World Team',
        message: `Hi ${formData.name},\n\nThank you for reaching out! I've received your message and will get back to you within 24 hours.\n\nBest regards,\nCode World Team`
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
