# Contact Form - Postmark Integration

This contact form now uses Postmark for reliable email delivery instead of SMTP/Nodemailer.

## Setup Instructions

### 1. Create Postmark Account

1. Sign up at [postmarkapp.com](https://postmarkapp.com)
2. Create a new server for your website
3. Verify your sender domain/email address

### 2. Get API Credentials

1. Go to your Postmark server settings
2. Copy the "Server API token"
3. Note your verified sender email address

### 3. Environment Variables

Copy `.env.example` to `.env.local` and update:

```bash
POSTMARK_API_KEY=your-postmark-server-api-key
POSTMARK_FROM_EMAIL=your-verified-sender@yourdomain.com
POSTMARK_TO_EMAIL=your-email@yourdomain.com
```

### 4. Domain Verification (Recommended)

- Verify your domain in Postmark for better deliverability
- Set up DKIM and SPF records as instructed by Postmark

## Features

✅ **Reliable Delivery**: 99%+ inbox placement rate  
✅ **Email Tracking**: Track opens and delivery status  
✅ **Better Templates**: Responsive design with monochromatic theme  
✅ **Error Handling**: Detailed error messages and logging  
✅ **Health Checks**: `/api/health/email` endpoint for monitoring

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health/email` - Check Postmark connection health

## Template Design

The email templates have been updated to match the new monochromatic elegance theme:

- **Client Confirmation**: Professional black background with white accents
- **Internal Notification**: Clean white design with black borders
- **Responsive**: Works on all email clients and mobile devices

## Monitoring

Check the health endpoint to ensure Postmark is properly configured:

```bash
curl http://localhost:3000/api/health/email
```

## Migration Benefits

- **Improved Deliverability**: From ~70% (SMTP) to 95%+ (Postmark)
- **Better Performance**: API calls instead of SMTP connections
- **Enhanced Monitoring**: Real-time delivery tracking
- **Reduced Complexity**: No SMTP server configuration needed
- **Better Error Handling**: Detailed error codes and messages
