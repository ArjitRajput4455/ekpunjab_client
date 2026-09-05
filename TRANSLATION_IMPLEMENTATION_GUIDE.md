# EPPC Multi-Language Implementation Guide

## ✅ COMPLETED COMPONENTS

### 1. Core Infrastructure
- ✅ i18next, react-i18next, i18next-browser-languagedetector installed
- ✅ i18n configuration file (`/src/i18n/config.ts`)
- ✅ Three complete translation files:
  - `/src/i18n/locales/en.json` (English)
  - `/src/i18n/locales/pa.json` (Punjabi - ਪੰਜਾਬੀ)
  - `/src/i18n/locales/hi.json` (Hindi - हिन्दी)

### 2. UI Components with Translations
- ✅ **Header** - Full navigation, search, all buttons translated
- ✅ **Footer** - All sections, links, contact info translated  
- ✅ **LanguageSwitcher** - Professional dropdown component
- ✅ **HeroSection** - Homepage hero with translations
- ✅ **CTASection** - Call-to-action section translated
- ✅ **LatestUpdates** - News section with translations
- ✅ **About Page** - Fully translated

### 3. Translation Coverage
All translation files include complete keys for:
- Header & Navigation
- Home page content
- About section
- Social initiatives  
- Punjab regions
- Newsroom
- Emergencies
- Events & Webinars
- Publications
- Volunteer forms
- Donation pages
- Partnerships
- Footer
- Common UI elements

## 🔨 HOW TO ADD TRANSLATIONS TO REMAINING PAGES

### Step 1: Import the translation hook
At the top of your component file:

```tsx
import { useTranslation } from 'react-i18next';
```

### Step 2: Use the hook in your component
```tsx
export default function YourComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      {/* Replace hardcoded text with t() */}
      <h1>{t('page.title')}</h1>
      <p>{t('page.description')}</p>
    </div>
  );
}
```

### Step 3: Replace all hardcoded text
**Before:**
```tsx
<h1>Social Initiatives</h1>
<button>Learn More</button>
```

**After:**
```tsx
<h1>{t('initiatives.title')}</h1>
<button>{t('home.learnMore')}</button>
```

## 📋 PAGES THAT NEED TRANSLATION

The following pages still have hardcoded text and need to be updated:

### High Priority (User-Facing)
1. **`/src/app/pages/Volunteer.tsx`** - Volunteer registration form
2. **`/src/app/pages/Donate.tsx`** - Donation page
3. **`/src/app/pages/Partnerships.tsx`** - Partnership page
4. **`/src/app/pages/SocialInitiatives.tsx`** - Social initiatives page
5. **`/src/app/pages/PunjabRegions.tsx`** - Regions page
6. **`/src/app/pages/Newsroom.tsx`** - News page
7. **`/src/app/pages/Emergencies.tsx`** - Emergencies page
8. **`/src/app/pages/Events.tsx`** - Events page
9. **`/src/app/pages/Publications.tsx`** - Publications page

### Home Components
10. **`/src/app/components/home/FocusAreas.tsx`**
11. **`/src/app/components/home/UpcomingEvents.tsx`**
12. **`/src/app/components/home/EmergenciesSection.tsx`**
13. **`/src/app/components/home/CampaignsSection.tsx`**

### Other Pages
14. **`/src/app/pages/FocusArea.tsx`** - Individual focus area page
15. **`/src/app/pages/Campaign.tsx`** - Individual campaign page
16. **`/src/app/pages/NotFound.tsx`** - 404 page

## 🎯 QUICK EXAMPLE: Updating Volunteer Page

**Current code (hardcoded):**
```tsx
<h1>Become a Volunteer</h1>
<p>Join thousands making a difference</p>
<button>Submit Application</button>
```

**Updated code (translated):**
```tsx
import { useTranslation } from 'react-i18next';

export default function Volunteer() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('volunteer.title')}</h1>
      <p>{t('volunteer.subtitle')}</p>
      <button>{t('volunteer.submit')}</button>
    </div>
  );
}
```

## 📝 TRANSLATION KEYS AVAILABLE

All these keys are already available in all three language files:

### volunteer.*
- `volunteer.title` - "Become a Volunteer"
- `volunteer.subtitle` - "Join thousands making a difference"
- `volunteer.fullName` - "Full Name"
- `volunteer.email` - "Email"
- `volunteer.phone` - "Phone Number"
- `volunteer.city` - "City"
- `volunteer.submit` - "Submit Application"
- And many more...

### donate.*
- `donate.title` - "Support Our Cause"
- `donate.oneTime` - "One-Time Donation"
- `donate.monthly` - "Monthly Donation"
- `donate.donateButton` - "Donate Now"
- And more...

### initiatives.*
- `initiatives.title` - "Social Initiatives"
- `initiatives.health` - "Health & Wellness"
- `initiatives.education` - "Education"
- `initiatives.empowerment` - "Women Empowerment"
- And more...

## 🌍 LANGUAGE SWITCHER

The language switcher is already working and appears in the header top-left. When users select a language:
- ✅ All translated components update instantly
- ✅ Selection saved to localStorage
- ✅ Persists across page refreshes
- ✅ HTML lang attribute updates for SEO

## 🔍 TESTING TRANSLATIONS

1. Open the website
2. Click the language switcher in the top-left of header
3. Select "ਪੰਜਾਬੀ" or "हिन्दी"
4. Observe which sections change language
5. Sections that don't change need to be updated using the steps above

## 💡 PRO TIPS

1. **Use semantic keys**: `t('volunteer.submit')` not `t('btn1')`
2. **Check existing keys first**: All common UI elements are already in `common.*`
3. **Keep keys organized**: Group by page/section (e.g., `donate.*`, `volunteer.*`)
4. **Test all three languages**: Switch between languages to verify translations appear correctly

## 🚀 BENEFITS OF THIS SYSTEM

- ✅ Professional multi-language support
- ✅ WHO/government-style credibility
- ✅ Serves Punjabi and Hindi-speaking communities  
- ✅ SEO-friendly with proper language tags
- ✅ Persistent language selection
- ✅ Easy to maintain and extend
- ✅ No page reloads needed

## 📞 NEED HELP?

If you need to add a new translation key:
1. Add it to `/src/i18n/locales/en.json`
2. Add Punjabi translation to `/src/i18n/locales/pa.json`
3. Add Hindi translation to `/src/i18n/locales/hi.json`
4. Use it in your component with `t('your.new.key')`

---

**Status**: Core infrastructure complete. Header, Footer, and sample pages (Home components, About) fully translated. Remaining pages need developer to add `useTranslation()` hook and replace hardcoded text with `t()` calls.
