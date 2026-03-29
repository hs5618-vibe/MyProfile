# Het Shah — Portfolio (shahhet.com)

## Folder Structure
```
MyProfile/
├── index.html          ← Main page structure (rarely needs editing)
├── css/
│   └── style.css       ← All styles — colors, fonts, layout
├── js/
│   ├── data.js         ← ✏️ ALL YOUR CONTENT — edit this to update the site
│   ├── render.js       ← Builds HTML from data (rarely needs editing)
│   └── main.js         ← Initializes everything (rarely needs editing)
├── assets/
│   └── Shah_Het_Resume.pdf   ← Drop your resume here
└── projects/           ← Future: individual project detail pages
```

## How to make changes

### Update content (most common)
Edit `js/data.js` — all text, projects, skills, journey cards live here.

### Change colors
Edit the `:root` variables at the top of `css/style.css`:
```css
--accent: #2d5a3d;       /* main green color */
--accent-warm: #c17f3a;  /* warm highlight color */
--bg: #f4f1ec;           /* page background */
```

### Add a new work card
In `js/data.js`, add a new object to the `WORK` array following the existing format.

### Add a new consulting project
In `js/data.js`, add to the `CONSULTING` array.

## Push changes to GitHub
```bash
git add .
git commit -m "describe your change"
git push
```
Site updates automatically in ~30 seconds.

## Connect shahhet.com (Namecheap DNS)
Add these A records in Namecheap → Advanced DNS:

| Type    | Host | Value           |
|---------|------|-----------------|
| A Record | @   | 185.199.108.153 |
| A Record | @   | 185.199.109.153 |
| A Record | @   | 185.199.110.153 |
| A Record | @   | 185.199.111.153 |
| CNAME   | www  | hs5618-vibe.github.io |

Then in GitHub → repo Settings → Pages → add `shahhet.com` as custom domain.
