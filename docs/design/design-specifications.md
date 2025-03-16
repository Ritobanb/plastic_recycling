# Design Specifications

## 1. Visual Design System

### 1.1 Color Palette
- Primary: Emerald (Green)
  - Primary Dark: `emerald-900`
  - Primary Medium: `emerald-700`
  - Primary Light: `emerald-400`
  - Accent: `emerald-100/50`

### 1.2 Typography
- Primary Font: Inter (Variable Font)
  - Used for body text
  - Subsets: Latin
  - Display: Swap
  - Preload enabled

- Secondary Font: Poppins
  - Weights: 400, 500, 600, 700
  - Used for headings
  - Subsets: Latin
  - Display: Swap
  - Preload enabled

### 1.3 Layout System
- Container System
  - Max-width container with responsive padding
  - Centered layout structure
  - Responsive grid system using Tailwind CSS

### 1.4 Component Design

#### 1.4.1 Navigation
- Sticky header with transparent to solid background transition
- Mobile-responsive hamburger menu
- Smooth scroll behavior for navigation links

#### 1.4.2 Hero Section
- Full-width layout
- Background gradient
- Centered content with CTA buttons

#### 1.4.3 Cards
- Consistent padding (p-6)
- Hover effects with shadow and scale transitions
- Rounded corners
- Border with subtle emerald tint

#### 1.4.4 Buttons
- Primary: Solid background with hover effect
- Secondary: Outlined style
- Consistent padding and rounded corners
- Icon support with proper spacing

#### 1.4.5 Forms
- Vertical layout with consistent spacing
- Floating labels
- Error state styling
- Focus states with emerald accent

### 1.5 Responsive Design Breakpoints
- Mobile: Default
- Tablet: md (768px)
- Desktop: lg (1024px)

### 1.6 Animation and Transitions
- Duration: 300ms
- Easing: Default ease
- Hover transitions on interactive elements
- Smooth scroll behavior
- Loading states with skeleton components

## 2. User Interface Guidelines

### 2.1 Accessibility
- ARIA labels on interactive elements
- Proper heading hierarchy
- Sufficient color contrast
- Focus indicators
- Alt text for images

### 2.2 Interaction States
- Hover states for interactive elements
- Active states for buttons
- Focus states for form elements
- Loading states for async operations

### 2.3 Responsive Behavior
- Mobile-first approach
- Flexible grid system
- Responsive typography
- Adaptive spacing
- Component stacking on mobile

### 2.4 Performance Considerations
- Optimized images with next/image
- Font display optimization
- Lazy loading for off-screen content
- Skeleton loading states

## 3. Asset Specifications

### 3.1 Images
- Hero images: 16:9 ratio
- Project thumbnails: 4:3 ratio
- Profile image: 4:5 ratio
- Optimized formats (WebP with fallbacks)
- Responsive sizing with next/image

### 3.2 Icons
- Lucide React icons
- Consistent sizing within contexts
- Color inheritance from parent
- 24x24px default size
