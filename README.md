# Cocktail Time 🍸

A beautiful, static cocktail menu website built with Nuxt.js and Vue 3. Perfect for hosting multiple party menus on your own subdomain.

## Features

- **Static Site Generation**: Fast, SEO-friendly pages generated at build time
- **File-Based Menus**: Add new parties by simply creating a JSON file
- **Responsive Design**: Beautiful layouts that work on all devices
- **Easy Deployment**: Deploy to Vercel, Netlify, or any static hosting
- **TypeScript**: Full type safety throughout the project
- **Tailwind CSS**: Modern, customizable styling

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000/party/nye-2026` to see an example party menu.

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

## Adding a New Party Menu

1. **Create a JSON file** in `data/parties/` with your party slug (e.g., `valentines-2027.json`)

2. **Follow this structure**:

```json
{
  "slug": "valentines-2027",
  "name": "Valentine's Day 2027",
  "date": "February 14, 2027",
  "description": "Romantic cocktails for a special evening",
  "theme": {
    "primaryColor": "#FF69B4",
    "secondaryColor": "#1a1a1a"
  },
  "cocktails": [
    {
      "id": "cosmopolitan",
      "name": "Cosmopolitan",
      "description": "A classic pink cocktail",
      "ingredients": [
        {
          "name": "Vodka",
          "amount": "1.5 oz",
          "category": "spirit"
        }
      ],
      "instructions": [
        "Shake all ingredients with ice",
        "Strain into chilled glass"
      ],
      "glassware": "Martini glass",
      "tags": ["classic", "vodka"]
    }
  ]
}
```

3. **Update `nuxt.config.ts`**: Add your new route to the prerender list:

```typescript
nitro: {
  prerender: {
    routes: ['/party/nye-2026', '/party/summer-bbq', '/party/valentines-2027']
  }
}
```

4. **Commit and deploy**: Your new menu will be automatically built and deployed!

## Project Structure

```
cocktail-time/
├── app.vue                     # Root component
├── nuxt.config.ts              # Nuxt configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── data/parties/               # Party menu JSON files
│   ├── nye-2026.json
│   └── summer-bbq.json
├── pages/party/[slug].vue      # Dynamic party page
├── components/
│   ├── CocktailCard.vue        # Individual cocktail display
│   ├── CocktailGrid.vue        # Grid of cocktails
│   ├── IngredientList.vue      # Ingredient list
│   └── PartyHeader.vue         # Party header with theme
├── composables/
│   └── usePartyData.ts         # Load party JSON data
└── types/
    └── index.ts                # TypeScript interfaces
```

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure settings**:
   - Build Command: `npm run generate`
   - Output Directory: `.output/public`
3. **Set up custom domain** in Vercel dashboard
4. **Configure DNS**: Add CNAME record pointing to `cname.vercel-dns.com`

### Netlify

1. **Connect your repository** to Netlify
2. **Configure settings**:
   - Build Command: `npm run generate`
   - Publish Directory: `.output/public`
3. **Set up custom domain** in Netlify dashboard

## Customization

### Theme Colors

Each party can have its own color scheme defined in the JSON file:

```json
"theme": {
  "primaryColor": "#FFD700",  // Accent color for headings and tags
  "secondaryColor": "#1a1a1a" // Background color
}
```

### Fonts

Update `tailwind.config.ts` to change fonts:

```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif']
}
```

## URL Structure

Once deployed to your subdomain (e.g., `parties.yourdomain.com`):

- `parties.yourdomain.com/party/nye-2026` - New Year's Eve menu
- `parties.yourdomain.com/party/summer-bbq` - Summer BBQ menu
- `parties.yourdomain.com/party/{your-slug}` - Your custom party

## Tech Stack

- **Nuxt 3**: Vue-based framework for static site generation
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## License

MIT