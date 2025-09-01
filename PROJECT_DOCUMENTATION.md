# Ainnovate Landing Page - Project Documentation

## Overview
This is a React-based landing page for Ainnovate, a lead generation service using artificial intelligence.

## Current Implementation Analysis

### Component Structure
**HeroSection.js** - Main component containing:
- Header with logo, navigation, hamburger menu, and social icons
- Hero content with title, description, and CTA button
- Hero image (hidden on mobile)

### Critical Issues Found

#### 1. **Duplicate HTML Elements**
- **PROBLEM**: Two `.menu-toggle` buttons exist in the HTML (lines 34-40 and 52-56)
- **IMPACT**: Second button appears in desktop view when it should be hidden
- **SOLUTION**: Remove duplicate button (lines 52-56)

#### 2. **CSS Conflicts**
- **PROBLEM**: Multiple conflicting rules for `.main-nav` in mobile media query
- **IMPACT**: Navigation styles override each other
- **SOLUTION**: Consolidate mobile navigation styles

#### 3. **Grid Layout Issues**
- **DESKTOP**: `grid-template-columns: auto 1fr auto` (logo | nav | social)
- **MOBILE**: Uses grid-areas but hamburger placement breaks layout

### Current CSS Structure

#### Desktop Layout (Default)
```css
.header {
  display: grid;
  grid-template-columns: auto 1fr auto; /* logo | nav | social */
}
.hamburger { display: none !important; }
```

#### Mobile Layout (@media max-width: 768px)
```css
.header {
  grid-template-columns: 1fr auto auto auto;
  grid-template-areas: "logo nav hamburger social";
}
.hamburger { display: block; }
.main-nav { display: none; }
.main-nav.active { display: flex; }
```

### Animation System
- **Entrance animations**: fadeInDown (header), fadeInLeft (text), fadeInRight (image)
- **Hover effects**: Scale transforms on title, description, image, and button
- **Button effects**: Sliding blue fill + shimmer animation
- **Hamburger animation**: Transforms to X when active

### Responsive Breakpoints
- **1024px**: Tablet layout adjustments
- **768px**: Mobile layout with hamburger menu
- **480px**: Small mobile optimizations

## Assets
- Custom logo: `logo_ainnovate_svg_blanco_horizontal.svg`
- Social icons: `ig.svg`, `lk.svg`, `yt.svg`
- Background image: `bg-landing.png`
- Hero image: `hero-person.png`

## Technologies Used
- React with useState hook for menu toggle
- CSS3 with Grid and Flexbox
- Custom keyframe animations
- Media queries for responsive design

## Project Structure

```
lead-gen-ainnovate-v1/
├── public/                 # Public assets
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # Website favicon
│   ├── logo192.png         # Logo for PWA
│   └── manifest.json       # PWA manifest
├── src/                    # Source code
│   ├── assets/             # Static assets
│   │   └── images/         # Image files
│   │       ├── hero-person.png   # Hero section image
│   │       ├── logo.svg          # Ainnovate logo
│   │       └── qr-code.png       # QR code for the hero section
│   ├── components/         # React components
│   │   └── HeroSection/    # Hero section component
│   │       ├── HeroSection.js    # Component logic
│   │       └── HeroSection.css   # Component-specific styles
│   ├── styles/             # Global styles
│   │   └── main.css        # Global CSS styles
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── package.json            # Project dependencies
└── PROJECT_DOCUMENTATION.md # This documentation file
```

## Component Structure

### App Component
The main component that includes all sections of the landing page:
- HeroSection
- FeaturesSection
- AboutSection
- ServiceSection
- ContactSection

### HeroSection Component
The hero section displayed at the top of the landing page. Features:
- Title and subtitle in Spanish about lead generation
- Description of Ainnovate's services
- CTA button with arrow
- QR code
- Navigation menu
- Background with blue gradient
- Image of a person pointing

### FeaturesSection Component
Showcases the key features of Ainnovate's services:
- Three feature cards with icons
- Each card has a title and description
- Hover effects for better user experience
- Responsive grid layout

### AboutSection Component
Provides information about Ainnovate:
- Company description
- Key statistics (clients, conversion rate, support)
- Placeholder for company image
- Responsive layout that changes on mobile devices

### ServiceSection Component
Details the services offered by Ainnovate:
- Numbered service cards (01-04)
- Service title and description for each
- Hover effects for interactive experience
- Vertical layout for easy scanning

### ContactSection Component
Allows users to get in touch with Ainnovate:
- Contact information (email, phone, location)
- Social media links
- Contact form with validation
- Responsive design that adapts to different screen sizes

## Styling Approach
The project follows a modular CSS approach:

1. **Component-specific CSS**: Each component has its own CSS file for styles specific to that component.
   - Example: `HeroSection.css` contains styles only relevant to the HeroSection component.

2. **Global CSS (main.css)**: Contains shared styles used across the application:
   - CSS Reset
   - Typography
   - Button styles
   - Color variables
   - Utility classes

## Color Palette
- Primary Blue: `#0066ff` (var(--ainnovate-blue))
- Dark Blue: `#00216e` (var(--ainnovate-dark-blue))
- Light Blue: `#e6f0ff` (var(--ainnovate-light-blue))

## Future Sections to Implement
- Features Section
- About Section
- Service Section
- Contact Section
