# EPPC Color Scheme Update - Complete Replacement Guide

## New Brand Colors (from logo)
- **Primary Blue**: #0059D2 (replaces #00AFCC turquoise)
- **Dark Blue**: #003998 (replaces #003366 navy)
- **Primary Red**: #C70A10 (replaces #DC2626 red)
- **Accent Orange**: #EC7803 (new accent color)

## Files Already Updated
✅ `/src/styles/theme.css` - Updated CSS custom properties
✅ `/src/app/components/layout/Header.tsx` - New logo + blue nav bar
✅ `/src/app/components/layout/Footer.tsx` - New logo
✅ `/src/app/components/LanguageSwitcher.tsx` - Blue focus rings

## Files That Need Color Updates

### Replace #00AFCC → #0059D2 (54+ occurrences):
- `/src/app/components/home/CTASection.tsx` - Background color
- `/src/app/components/home/CampaignsSection.tsx` - Badge colors (3x)
- `/src/app/components/home/FocusAreas.tsx` - Multiple colors (10x+)
- `/src/app/components/home/HeroSection.tsx` - Badges and overlays (4x)
- `/src/app/components/home/ImpactCounter.tsx` - Title and numbers (2x)
- `/src/app/components/home/LatestUpdates.tsx` - Links and badges (5x)
- `/src/app/components/home/RegionsMap.tsx` - Map colors (8x)
- `/src/app/components/home/UpcomingEvents.tsx` - Event badges (4x)
- `/src/app/components/layout/EmergencyButton.tsx` - Links (2x)
- `/src/app/pages/Campaign.tsx` - Icons and bullets (3x+)
- `/src/app/pages/Volunteer.tsx` - Multiple sections (15x+)
- All other page files with turquoise accents

### Replace #DC2626 → #C70A10 (Emergency/Donate red - 34+ occurrences):
- `/src/app/components/home/EmergencyHotline.tsx` - Emergency banner
- `/src/app/components/layout/EmergencyButton.tsx` - Emergency button
- `/src/app/pages/Donate.tsx` - All donate buttons and highlights
- `/src/app/pages/Campaign.tsx` - Emergency campaign colors

### Replace #003366 → #003998 (Dark blue):
- Volunteer buttons throughout
- Dark blue accents

## Systematic Approach
Run find-and-replace across all `.tsx` files:
1. #00AFCC → #0059D2 (turquoise to blue)
2. #DC2626 → #C70A10 (old red to logo red)
3. #B91C1C → #9B0808 (old dark red to logo dark red)
4. #003366 → #003998 (old navy to logo dark blue)
5. #002244 → #002870 (old dark navy to new dark blue)

## Orange Accent Opportunities
Consider adding #EC7803 (logo orange) for:
- Call-to-action highlights
- Success messages
- Featured content badges
- Hover states for special elements
