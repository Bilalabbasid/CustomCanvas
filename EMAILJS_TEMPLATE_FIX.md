# EmailJS Template Configuration Fix

## The Problem
EmailJS is returning "The recipients address is empty" because the template is not properly configured to receive emails.

## Solution Steps

### 1. Go to EmailJS Dashboard
- Visit https://www.emailjs.com/
- Login to your account
- Go to "Email Templates"
- Click on your "template_contact" template

### 2. Fix the Template Settings
In the template editor:

**To Email Field:**
- Make sure there's a "To" field in your template
- Set it to: `abbasi.bilal2000@gmail.com`
- OR use the dynamic variable: `{{to_email}}`

**Template Content Example:**
```
To: abbasi.bilal2000@gmail.com
From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Subject: New Contact Form Submission from Portfolio

Hello Bilal,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project: {{project}}
Budget: {{budget}}

Message:
{{message}}

Sent on: {{timestamp}}

---
This email was sent from your portfolio contact form.
```

### 3. Save and Test
- Save the template
- Test the form again

### 4. Alternative Fix
If the above doesn't work, try using these standard EmailJS variables:
- `{{user_name}}` instead of `{{from_name}}`
- `{{user_email}}` instead of `{{from_email}}`
- `{{recipient_email}}` for the recipient

## Variables Available in Your Template
The code now sends these variables:
- `to_email`: abbasi.bilal2000@gmail.com
- `from_name`: User's name
- `from_email`: User's email
- `reply_to`: User's email
- `message`: User's message
- `user_name`: User's name (alternative)
- `user_email`: User's email (alternative)
- `company`: User's company
- `project`: User's project
- `budget`: User's budget
- `timestamp`: When the form was submitted
- `recipient_email`: abbasi.bilal2000@gmail.com (fallback)
