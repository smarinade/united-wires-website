# ⚡ UNITED WIRES - LAN Party Website

An immersive, dark gaming-themed website for a group of friends who gather for LAN parties. Inspired by modern gaming UI design with vibrant accents and magical effects. Built with vanilla HTML, CSS, and JavaScript modules.

## 🎮 Features

- **Homepage** - Epic hero section with particle effects, next event showcase, featured game, and recent highlights
- **Blog** - Mission logs documenting legendary LAN party battles and memorable moments
- **Games Library** - Filterable game collection with direct Steam links and hover videos
- **Rankings** - Tournament leaderboards and player statistics across all games
- **Interactive Checklist** - Pre-LAN preparation tracker with progress bar
- **Dark Gaming Aesthetic** - Deep purples, vibrant pinks/cyans, particle effects, and smooth animations
- **Fully Responsive** - Optimized for all devices from desktop to mobile

## 🎨 Design Highlights

**Inspired by:** League of Legends, modern gaming UIs, fantasy aesthetics

**Color Palette:**
- Primary Purple (#c026d3) - Main brand color
- Hot Pink (#ec4899) - Primary accent
- Cyan (#06b6d4) - Secondary accent
- Deep dark backgrounds (#0a0118, #1a0b2e)
- Vibrant gradients throughout

**Typography:**
- **Bebas Neue** - Bold, impactful display font for headings
- **Inter** - Modern, clean sans-serif for body text

**Visual Effects:**
- Floating particle system with connections
- Glowing orbs in background
- Magical gradient overlays
- Pulsing glow effects on hover
- Parallax scrolling
- Scroll reveal animations
- Interactive particle bursts
- Smooth backdrop blur (glass morphism)

## 📁 File Structure

```
united-wires-website/
├── index.html          # Homepage with hero section
├── blog.html           # Mission logs/blog posts
├── games.html          # Game library (generated from config)
├── games.template.html # Template for game page generation
├── games-config.js     # Game library configuration
├── build-games.js      # Build script for generating games.html
├── rankings.html       # Tournament rankings & stats
├── checklist.html      # Interactive pre-LAN checklist
├── styles.css          # Complete styling system
├── main.js             # Main JavaScript module
├── animations.js       # Particle system & effects
├── game-media.js       # Video/iframe hover playback
├── checklist.js        # Checklist state management
├── package.json        # NPM scripts and metadata
└── README.md           # Documentation
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the games page:**
   ```bash
   npm run build
   ```

3. **Launch the website:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   
   # Then visit: http://localhost:8000
   ```

4. **Or simply:**
   - Double-click `index.html` to open in your browser

## 🎯 Interactive Elements

### Homepage
- **Particle Background** - Floating particles that connect when near each other
- **Mouse Interaction** - Particles react to mouse movement
- **Click Bursts** - Click anywhere to create particle explosions
- **Hero Glow** - Follows mouse movement with smooth parallax
- **Animated Stats** - Numbers count up when scrolled into view

### Games Page
- **Smart Filters** - Click to filter by game category:
  - 🎯 Competitive (AoE II, CS2, UT2004)
  - 🤝 Co-op (L4D, L4D2, Back 4 Blood, Minecraft)
  - 🎲 Casual (Among Us, Fall Guys)
- **Hover Videos** - Game preview videos/embeds play on hover
- **Stagger Animations** - Cards animate in sequentially

### Rankings Page
- **Game-Specific Leaderboards** - Stats for each competitive game
- **Overall Standings** - Gold/silver/bronze medal tracking
- **Player Statistics** - Wins, losses, K/D ratios, win rates

### Checklist Page
- **Interactive Tasks** - Check off items as you complete them
- **Progress Tracking** - Visual progress bar shows completion percentage
- **LocalStorage** - Your progress is saved between sessions
- **Reset Option** - Start fresh for the next LAN

### All Pages
- **Glow Effects** - Cards glow on hover with gradient borders
- **Ripple Effects** - Buttons create ripples on click
- **Scroll Reveals** - Content fades in as you scroll
- **Smooth Transitions** - Everything animates smoothly

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-purple: #c026d3;
    --primary-pink: #ec4899;
    --primary-cyan: #06b6d4;
    --bg-dark: #0a0118;
    /* Customize your palette */
}
```

### Particle Count
Adjust in `animations.js`:
```javascript
const particleCount = 80; // Change this number
```

### Animations
Fine-tune in `styles.css`:
```css
@keyframes orbFloat {
    /* Adjust timing and movement */
}
```

## 🔧 Adding Content

### Add a Blog Post
In `blog.html`, add inside `.blog-grid`:
```html
<article class="blog-post">
    <div class="blog-post-header">
        <div class="blog-date">DATE</div>
        <div class="blog-tags">
            <span class="tag">Tag Name</span>
        </div>
    </div>
    <h2 class="blog-post-title">Title</h2>
    <div class="blog-post-content">
        <p>Content...</p>
    </div>
</article>
```

### Add a Game
1. Edit `games-config.js` and add to the `games` array:
```javascript
{
    id: 'game-id',
    title: 'Game Name',
    description: 'Game description...',
    category: 'competitive',        // competitive, coop, or casual
    categoryLabel: 'Strategy',      // Display label for category
    status: 'required',             // required, recommended, or optional
    image: 'https://image-url.jpg', // Game header image
    video: 'YouTubeVideoID',        // YouTube video ID
    emoji: '🎮',                    // Fallback emoji
    button: {
        type: 'link',               // 'link' or 'disabled'
        text: 'Get on Steam - €19.99',
        url: 'https://steam-url...' // Only needed if type is 'link'
    }
}
```

2. Run the build script:
```bash
npm run build
```

3. Commit the updated `games.html`:
```bash
git add games.html games-config.js
git commit -m "Add new game"
```

**Note:** On GitHub, the build happens automatically via GitHub Actions when you push to main.

## 🌐 Browser Support

- ✅ Chrome/Edge (recommended for best performance)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

Requires JavaScript enabled for animations.

## ⚡ Performance

- Canvas particles use `requestAnimationFrame` for smooth 60fps
- Backdrop blur uses modern CSS filters
- Particle count auto-adjusts based on screen size
- Optimized animations with GPU acceleration

## 📝 Technical Notes

- Zero runtime dependencies (except Google Fonts)
- Build system generates static HTML from config
- GitHub Actions automatically rebuilds on push to main
- ES6 modules for clean JavaScript
- CSS custom properties for easy theming
- Semantic HTML structure
- Accessible navigation
- Mobile-first responsive design

## 🤖 CI/CD

The repository uses GitHub Actions to automatically build the games page:
- Triggers on push to `main` branch
- Runs `npm run build` to regenerate `games.html`
- Commits and pushes changes if the build produces updates

See `.github/workflows/build.yml` for details.

## 🎮 Credits

**Design Inspiration:** League of Legends, Valorant, modern gaming UIs

**Created for:** The United Wires LAN party collective

**Tech Stack:** Pure HTML, CSS, JavaScript - no frameworks needed

---

*"Powered by friendship, fueled by competition"* ⚡
