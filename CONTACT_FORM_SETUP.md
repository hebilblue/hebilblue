# Contact Form SMTP Setup Guide

## Overview
The contact form has been configured to send emails via SMTP. This guide will help you set up the email functionality.

## Setup Steps

### 1. Create Environment File
Copy the `env.example` file to `.env.local`:
```bash
cp env.example .env.local
```

### 2. Configure SMTP Settings
Edit `.env.local` and update the following variables:

#### For Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
```

**Important for Gmail:**
- You need to enable 2-Factor Authentication
- Generate an App Password (not your regular password)
- Go to Google Account Settings → Security → App Passwords

#### For Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
CONTACT_EMAIL=your-email@outlook.com
```

#### For Yahoo:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-email@yahoo.com
```

### 3. Test the Setup
1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email for the received message

## Features

### Form Validation
- All fields are required
- Email format validation
- Real-time form state management

### User Experience
- Loading state during submission
- Success/error messages
- Form reset after successful submission
- Responsive design

### Email Template
The received email includes:
- Sender's name and email
- Formatted message content
- Professional HTML styling

## Troubleshooting

### Common Issues:

1. **"Authentication failed" error:**
   - Check your SMTP credentials
   - For Gmail, ensure you're using an App Password
   - Verify 2FA is enabled for Gmail

2. **"Connection timeout" error:**
   - Check your internet connection
   - Verify SMTP host and port settings
   - Some networks block SMTP ports

3. **"Message not received":**
   - Check spam/junk folder
   - Verify CONTACT_EMAIL setting
   - Test with a different email provider

### Testing SMTP Connection:
You can test your SMTP settings using online tools like:
- https://www.smtper.net/
- https://www.mail-tester.com/

## Security Notes
- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Consider using environment-specific SMTP settings for production 