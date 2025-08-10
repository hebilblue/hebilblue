# HebilBlue - Next.js Website

This is a Next.js website showcasing the HebilBlue luxury real estate project in Bodrum, Turkey. The website features a modern, responsive design with internationalization support.

## Project Structure

```
hebilblue/
├── src/
│   └── app/
│       ├── [lang]/     # Internationalized routes (en, tr)
│       ├── component/  # React components
│       ├── assets/     # Images and SVG files
│       ├── i18n/       # Internationalization files
│       └── layout.tsx  # Root layout
├── public/             # Static assets
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Internationalization**: Support for Turkish (tr) and English (en) languages
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Contact Form**: Simple contact form that opens user's email client
- **Photo Gallery**: Clickable images with lightbox functionality
- **Carousel**: Auto-advancing image carousels
- **Scroll Animations**: Elements animate in as you scroll
- **Modern UI**: Clean, modern design with smooth transitions

## Sections

1. **Hero Section**: Main banner with project introduction
2. **Project Overview**: Information about the HebilBlue project
3. **Verandas & Architecture**: Details about outdoor spaces and design
4. **Living Areas**: Information about different apartment types
5. **Nature & Comfort**: Details about amenities and natural surroundings
6. **Services**: List of available services and facilities
7. **Photo Gallery**: Project images in a responsive grid
8. **Location**: Information about the project location and nearby areas
9. **Contact**: Contact form and office information

## How to Use

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Open the website**: Navigate to `http://localhost:3000`
4. **Language switching**: Use the language switcher in the header
5. **Navigate**: Use the header navigation to jump to different sections
6. **Mobile menu**: On mobile devices, tap the hamburger menu for navigation
7. **Contact form**: Fill out the contact form to open your email client
8. **Photo gallery**: Click on any image in the gallery to view it in a lightbox

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Descriptions

### src/app/[lang]/page.tsx
The main page component with internationalized content, including:
- Header with navigation and language switcher
- All content sections
- Contact form
- Footer

### src/app/component/
React components including:
- ContactForm: Simple contact form with mailto functionality
- Header: Navigation and language switching
- Carousel: Image carousel component
- PhotoGrid: Photo gallery with lightbox
- Various layout components

### src/app/i18n/
Internationalization files:
- locales/en.json: English translations
- locales/tr.json: Turkish translations
- index.ts: i18n configuration

## Contact Form

The contact form uses a simple mailto link approach:
- When users submit the form, it opens their default email client
- The email is pre-filled with the form data
- Recipient: info@hebilblue.com.tr
- Subject: "HebilBlue İletişim Formu - Yeni Mesaj"
- Body: Includes name, email, and message

This approach works with static hosting and doesn't require server-side email configuration.

## Customization

### Colors
The main colors are defined in the Tailwind CSS configuration:
- Primary: #08162E (Dark blue)
- Accent: #C9B18B (Gold)
- White: #FFFFFF
- Dark blue: #242953

### Typography
The website uses the Roboto font family with different weights:
- Light (300) for most text
- Regular (400) for body text
- Bold (700) for headings and buttons

### Images
All images are located in the `src/app/assets/` directory and are optimized for web use:
- Main project images
- SVG icons for services
- Logo and branding materials

## Performance

The static website is optimized for performance:
- No build process required
- Fast loading times
- Optimized images
- Minimal JavaScript
- Efficient CSS

## Deployment

To deploy this website:
1. Upload all files to your web server
2. Ensure the file structure is maintained
3. The website will work immediately without any build steps

## Support

This is a static website that doesn't require any server-side processing. All functionality is handled client-side with HTML, CSS, and JavaScript.

## License

This project is for the HebilBlue real estate project. Please ensure you have the necessary rights to use the content and images.
