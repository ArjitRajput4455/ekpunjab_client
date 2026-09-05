# EPPC Multi-Language System

## Overview
The EPPC website supports three languages:
- **English** (en)
- **Punjabi** (ਪੰਜਾਬੀ) (pa)
- **Hindi** (हिन्दी) (hi)

## Features
- ✅ Language switcher in header (top-left)
- ✅ Persistent language selection (localStorage)
- ✅ Instant language switching across entire website
- ✅ Professional WHO-style design
- ✅ SEO-friendly with HTML lang attribute
- ✅ Support for all pages, forms, buttons, and dynamic content

## Usage in Components

### 1. Import the translation hook
```tsx
import { useTranslation } from 'react-i18next';
```

### 2. Use translations in your component
```tsx
export default function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home.heroTitle')}</h1>
      <p>{t('home.heroSubtitle')}</p>
      <button>{t('common.submit')}</button>
    </div>
  );
}
```

## Translation Files Structure

Translation files are located in `/src/i18n/locales/`:
- `en.json` - English translations
- `pa.json` - Punjabi translations
- `hi.json` - Hindi translations

### Translation Keys Organization
```json
{
  "header": { ... },      // Header navigation items
  "home": { ... },        // Homepage content
  "footer": { ... },      // Footer content
  "common": { ... }       // Common UI elements (buttons, labels, etc.)
}
```

## Adding New Translations

### Step 1: Add to English file (en.json)
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

### Step 2: Add Punjabi translation (pa.json)
```json
{
  "mySection": {
    "title": "ਮੇਰਾ ਸਿਰਲੇਖ",
    "description": "ਮੇਰਾ ਵੇਰਵਾ"
  }
}
```

### Step 3: Add Hindi translation (hi.json)
```json
{
  "mySection": {
    "title": "मेरा शीर्षक",
    "description": "मेरा विवरण"
  }
}
```

### Step 4: Use in component
```tsx
<h1>{t('mySection.title')}</h1>
<p>{t('mySection.description')}</p>
```

## Language Switcher Component

The `LanguageSwitcher` component is already integrated in the Header.
- Located in `/src/app/components/LanguageSwitcher.tsx`
- Displays current language in native script
- Dropdown shows all available languages
- Saves selection to localStorage
- Updates HTML lang attribute for SEO

## How It Works

1. **Initialization**: i18n configuration loads on app start (`/src/i18n/config.ts`)
2. **Language Detection**: Checks localStorage first, then browser language
3. **Translation Loading**: Loads appropriate JSON file based on selected language
4. **Persistence**: Saves language choice to `localStorage` with key `eppc-language`
5. **SEO**: Updates `document.documentElement.lang` attribute

## Best Practices

### 1. Use semantic keys
❌ Bad: `t('text1')`, `t('btn2')`
✅ Good: `t('home.heroTitle')`, `t('common.submit')`

### 2. Keep keys organized by section
```json
{
  "header": { ... },
  "home": { ... },
  "about": { ... }
}
```

### 3. Use common keys for repeated elements
```json
{
  "common": {
    "submit": "Submit",
    "cancel": "Cancel",
    "loading": "Loading..."
  }
}
```

### 4. Handle dynamic content
```tsx
// For pluralization
t('items', { count: items.length })

// For interpolation
t('welcome', { name: userName })
```

## Extending to New Pages

When creating a new page:

1. Add translations to all three JSON files
2. Import `useTranslation` hook
3. Replace hardcoded text with `t()` calls

Example:
```tsx
import { useTranslation } from 'react-i18next';

export default function NewPage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('newPage.title')}</h1>
      <p>{t('newPage.content')}</p>
    </div>
  );
}
```

## Language Codes

- `en` - English
- `pa` - Punjabi (Gurmukhi script)
- `hi` - Hindi (Devanagari script)

## Notes

- Language persists across browser sessions
- No page reload needed when switching languages
- All components re-render automatically with new translations
- Fallback language is English if translation missing
