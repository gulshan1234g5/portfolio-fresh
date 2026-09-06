# Deploy to GitHub Pages

## 1. Create GitHub Repository
Go to https://github.com/new and create:
- Repository name: `portfolio-fresh`
- Public
- Description: "Gulshan Toppo — Creative Developer, Automation Builder, Trading Systems Explorer"
- **Don't** initialize with README, .gitignore, or license

## 2. Push Code
```bash
cd /root/portfolio-fresh
git remote add origin https://github.com/gulshan1234g5/portfolio-fresh.git
git branch -M main
git push -u origin main
```

## 3. Enable GitHub Pages
1. Go to: https://github.com/gulshan1234g5/portfolio-fresh/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **/(root)**
4. Click **Save**

## 4. Configure Base Path (Required for GitHub Pages)
Since GitHub Pages serves from `https://gulshan1234g5.github.io/portfolio-fresh/`, update `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-fresh/',  // ADD THIS LINE
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Then rebuild and push:
```bash
npm run build
git add .
git commit -m "fix: add base path for GitHub Pages"
git push
```

## 5. Live URL
After ~2 minutes: **https://gulshan1234g5.github.io/portfolio-fresh/**

---

## Alternative: Use the Bundle HTML
The single-file artifact at `dist-bundle/bundle.html` works anywhere:
- Drag to Netlify Drop: https://app.netlify.com/drop
- Upload to any static host
- Open directly in browser
