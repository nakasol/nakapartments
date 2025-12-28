# NaKaApartments Website

Static website replica of your Wix site. Ready for Netlify deployment.

## 📁 Required Images

The `images/` folder should contain:

| Filename | Where it appears | Recommended size |
|----------|-----------------|------------------|
| `logo.png` | ✅ Already included | - |
| `gallery-1.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-2.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-3.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-4.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-5.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-6.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-7.jpg` | Hero rolling gallery | 1920x1080px |
| `gallery-8.jpg` | Hero rolling gallery | 1920x1080px |
| `katia.jpg` | About section portrait | 400x500px |
| `icon-owners.png` (optional) | Services section | 100x100px |
| `icon-travelers.png` (optional) | Services section | 100x100px |

**Add more gallery images:** Edit `index.html` and add more `<img>` tags in the `#heroGallery` div.

**Note:** The gallery auto-rotates every 4 seconds. Add as many images as you like!

## 🚀 Quick Deploy to Netlify

### Option A: Drag & Drop (easiest)

1. Create the `images/` folder and add your images
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the entire `nakapartments-v2` folder onto the page
4. Done! You get a URL like `random-name.netlify.app`

### Option B: GitHub + Netlify (for easy updates)

1. Create a GitHub repo
2. Push this folder to the repo
3. In Netlify: "Add new site" → "Import from Git"
4. Select your repo → Deploy
5. Any future `git push` auto-deploys

## 🌐 Connect Your Domain

In Netlify Dashboard:
1. Site settings → Domain management
2. Add custom domain: `www.nakapartments.com`
3. Follow DNS instructions

**Important:** If Wix currently holds your domain registration, transfer it to another registrar (Cloudflare, Namecheap, Porkbun) before cancelling Wix.

## ✏️ Customization

### Change Colors

Edit the `tailwind.config` in each HTML file:

```javascript
colors: {
  brand: {
    green: '#8b9d4a',    // Logo and accent color
    dark: '#1a1a1a',     // Text and buttons
    gray: '#f5f5f5',     // Background sections
    text: '#666666',     // Body text
  }
}
```

### Add Your Logo

Replace the SVG in the header with your image:

```html
<!-- Find this line: -->
<svg class="w-8 h-8 text-brand-green" ...>

<!-- Replace with: -->
<img src="images/logo.png" alt="NaKaApartments" class="h-8">
```

### Add Custom Service Icons

In `index.html`, find the Services section and replace SVG icons:

```html
<!-- Find this: -->
<svg class="w-16 h-16 text-brand-dark ...">

<!-- Replace with: -->
<img src="images/icon-owners.png" alt="" class="w-16 h-16 object-contain">
```

## 📂 File Structure

```
nakapartments-v2/
├── index.html       # Homepage
├── owners.html      # Property owners page  
├── travelers.html   # Travelers page
├── netlify.toml     # Deployment config
├── README.md        # This file
└── images/          # Your images (create this folder)
    ├── hero.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    └── (optional icons)
```

## 💰 Cost Comparison

| | Wix Pro | This solution |
|---|---------|---------------|
| Hosting | €325/year | Free (Netlify) |
| Domain | Included | ~€12/year |
| **Total** | **€325/year** | **~€12/year** |

**Annual savings: €313**

## 🔜 Next Steps

1. Add your images to the `images/` folder
2. Test locally by opening `index.html` in browser
3. Deploy to Netlify
4. Point your domain
5. Cancel Wix subscription

When ready for Google Ads campaign, I can create a dedicated landing page for property owner acquisition.
