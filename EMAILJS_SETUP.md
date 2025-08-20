# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Name: Contact Form
### Template ID: `template_contact`

### Subject:
```
New Portfolio Contact: {{from_name}}
```

### Content:
```
Hello Bilal,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Date: {{timestamp}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

### Variables Used:
- `{{from_name}}` - Contact person's name
- `{{from_email}}` - Contact person's email
- `{{message}}` - Their message
- `{{timestamp}}` - When the message was sent

## Step 4: Create Auto-Reply Template (Optional)

1. Create another template with ID: `template_auto_reply`

### Subject:
```
Thank you for contacting me, {{to_name}}!
```

### Content:
```
Hi {{to_name}},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Your message:
{{message}}

Best regards,
Bilal Abbasi
Portfolio: https://your-portfolio-url.com
```

## Step 5: Get Your Keys

1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `user_abc123xyz`)
3. **Copy your Service ID** from Email Services
4. **Copy your Template ID** from Email Templates

## Step 6: Update Environment Variables

Update your `.env` file with the values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=template_contact
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 7: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message
5. The sender should receive an auto-reply (if configured)

## Troubleshooting

### Common Issues:

1. **"User ID is required"**
   - Make sure your Public Key is correctly set in `.env`
   - Restart your development server after changing `.env`

2. **"Service is not found"**
   - Verify your Service ID is correct
   - Make sure the service is active in EmailJS dashboard

3. **"Template is not found"**
   - Check that your Template ID matches exactly
   - Ensure the template is saved and published

4. **Emails not arriving**
   - Check your spam folder
   - Verify the email service configuration
   - Test the service directly in EmailJS dashboard

### Testing in EmailJS Dashboard:

1. Go to your template
2. Click "Test it"
3. Fill in test values
4. Click "Send Test Email"

## Production Deployment

For Vercel deployment, add these environment variables in your Vercel dashboard:

1. Go to your Vercel project
2. Navigate to Settings → Environment Variables
3. Add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## Rate Limits

EmailJS free plan includes:
- 200 emails/month
- 100 emails/day

For higher limits, consider upgrading to a paid plan.

## Security Note

The public key is safe to expose in frontend code - it's designed for client-side use. Your private key should never be exposed in frontend code.
