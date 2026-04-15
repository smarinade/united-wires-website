# Game Images and Videos Setup

I've set up the structure for game images and hover videos. Here's what you need to do:

## 📁 Directory Structure Created
```
images/games/     - Put game screenshots/cover art here
videos/games/     - Put game video clips here
```

## 🎮 Games to Add Media For

### Images (JPG/PNG recommended, ~800x600px)
- `warcraft3.jpg`
- `aoe2.jpg`
- `aom.jpg`
- `ut2004.jpg`
- `cs2.jpg`
- `fortnite.jpg`
- `l4d.jpg`
- `l4d2.jpg`
- `back4blood.jpg`
- `minecraft.jpg`
- `fallguys.jpg`
- `amongus.jpg`

### Videos (MP4 recommended, ~10-15 seconds, muted)
- `warcraft3.mp4`
- `aoe2.mp4`
- `aom.mp4`
- `ut2004.mp4`
- `cs2.mp4`
- `fortnite.mp4`
- `l4d.mp4`
- `l4d2.mp4`
- `back4blood.mp4`
- `minecraft.mp4`
- `fallguys.mp4`
- `amongus.mp4`

## 📥 Where to Get Media

### Option 1: Steam Store Pages
- Visit each game's Steam page
- Screenshot the header/hero image
- Download gameplay videos from the store page

### Option 2: YouTube Gameplay
- Search for "[Game Name] gameplay"
- Use a YouTube downloader for short clips
- Keep videos under 5MB for fast loading

### Option 3: Official Game Sites
- Game websites often have press kits with images
- Look for "Media" or "Press" sections

## ⚙️ How It Works

1. **Default**: Shows game image
2. **On Hover**: Fades to video and plays automatically
3. **On Mouse Leave**: Stops video, returns to image
4. **Fallback**: If image fails to load, shows emoji placeholder

## 🔧 Already Updated

I've updated the HTML structure for Warcraft III. The pattern for each game is:

```html
<div class="game-icon">
    <img src="images/games/GAMENAME.jpg" alt="Game Name" class="game-icon-img" 
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="game-icon-placeholder" style="display: none;">🎮</div>
    <video class="game-icon-video" muted loop preload="metadata">
        <source src="videos/games/GAMENAME.mp4" type="video/mp4">
    </video>
</div>
```

Do you want me to update ALL the remaining game cards with this structure, or would you like to add the images/videos first?
