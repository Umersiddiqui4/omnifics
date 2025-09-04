# Dewi - Next.js Version

A modern, responsive multi-purpose website template converted from HTML to Next.js with TypeScript support.

## Features

- 🚀 **Next.js 14** with App Router
- ⚛️ **React 18** with TypeScript
- 🎨 **Bootstrap 5.3.3** for responsive design
- 📱 **Mobile-first** responsive design
- ✨ **AOS (Animate On Scroll)** animations
- 🖼️ **GLightbox** for image galleries
- 📊 **Isotope** for portfolio filtering
- 🎭 **Swiper** for testimonials carousel
- 🔢 **PureCounter** for animated counters
- 🎯 **Bootstrap Icons** for beautiful icons

## Sections

- **Hero Section** - Eye-catching landing area with call-to-action
- **About Section** - Company information with images
- **Stats Section** - Animated counters with icons
- **Services Section** - Service offerings with hover effects
- **Clients Section** - Client logos display
- **Features Section** - Interactive tabs with content
- **Services 2 Section** - Additional service descriptions
- **Testimonials Section** - Customer feedback carousel
- **Portfolio Section** - Filterable project showcase
- **Team Section** - Team member profiles
- **Contact Section** - Contact form and information
- **Footer** - Comprehensive site footer

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dewi-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dewi-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Stats.tsx          # Statistics section
│   ├── Services.tsx       # Services section
│   ├── Clients.tsx        # Clients section
│   ├── Features.tsx       # Features tabs
│   ├── Services2.tsx      # Additional services
│   ├── Testimonials.tsx   # Testimonials carousel
│   ├── Portfolio.tsx      # Portfolio grid
│   ├── Team.tsx           # Team section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── ScrollTop.tsx      # Scroll to top button
│   └── Preloader.tsx      # Loading screen
├── assets/                 # Static assets (images, etc.)
├── public/                 # Public assets
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## Customization

### Colors

The color scheme can be customized by modifying CSS variables in `app/globals.css`:

```css
:root { 
  --background-color: #ffffff;
  --default-color: #444444;
  --heading-color: #273d4e;
  --accent-color: #ff4a17;
  --surface-color: #ffffff;
  --contrast-color: #ffffff;
}
```

### Fonts

Fonts are configured in `app/layout.tsx` using Google Fonts:

- **Roboto** - Default body text
- **Raleway** - Headings
- **Inter** - Navigation

### Images

Replace images in the `assets/img/` directory with your own content. Update the `src` attributes in the components accordingly.

## Dependencies

### Core
- `next`: 14.0.4
- `react`: ^18
- `react-dom`: ^18

### UI & Styling
- `bootstrap`: ^5.3.3
- `bootstrap-icons`: ^1.11.3

### Animations & Effects
- `aos`: ^2.3.4
- `glightbox`: ^3.2.0
- `swiper`: ^11.0.5
- `isotope-layout`: ^3.0.6
- `imagesloaded`: ^5.0.0
- `purecounter`: ^1.0.0

### Development
- `typescript`: ^5
- `eslint`: ^8
- `sass`: ^1.69.5

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance Features

- **Image Optimization** - Next.js Image component with automatic optimization
- **Code Splitting** - Automatic code splitting for better performance
- **Lazy Loading** - Images and components load as needed
- **CSS Optimization** - Optimized CSS with CSS variables
- **Responsive Images** - Automatic responsive image sizing

## SEO Features

- **Meta Tags** - Proper meta descriptions and titles
- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Structured Data** - Ready for schema markup implementation
- **Performance** - Fast loading times for better SEO

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the build files to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- **Original Template**: [Dewi by BootstrapMade](https://bootstrapmade.com/dewi-free-multi-purpose-html-template/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Framework**: [Next.js](https://nextjs.org/)

## Support

For support and questions:
- Create an issue in this repository
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [React documentation](https://react.dev/)

## Changelog

### Version 1.0.0
- Initial conversion from HTML to Next.js
- TypeScript support added
- Component-based architecture
- Modern React patterns
- Performance optimizations
# omnifics
