# Game Videos

Add short gameplay video clips here. These play on hover!

## Video Specs

- **Format**: MP4 (H.264 codec)
- **Duration**: 5-15 seconds
- **Dimensions**: 800x450px (matches images)
- **File size**: Under 3MB each (important for fast loading!)
- **Audio**: None (videos are muted)
- **Frame rate**: 30fps
- **Loop**: Enabled automatically

## Required Videos

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

## Where to Get Videos

1. **YouTube** - Search "[game name] gameplay"
   - Use: https://ytmp3.nu/ or similar to download
   - Choose short exciting clips (10-15 sec)

2. **Steam Store Pages** - Download preview videos
   - Right-click video → Save video as

3. **Official Trailers** - Clip exciting moments

## How to Optimize

After downloading, compress videos to under 3MB:

### Option 1: HandBrake (Free, Desktop)
1. Download HandBrake: https://handbrake.fr/
2. Load your video
3. Set dimensions: 800x450
4. Set quality: RF 28-30
5. Export

### Option 2: FFmpeg (Command Line)
```bash
ffmpeg -i input.mp4 -vf scale=800:450 -c:v libx264 -crf 28 -t 10 -an output.mp4
```

### Option 3: Online Tool
- https://www.freeconvert.com/video-compressor
- Upload, resize to 800x450, compress to ~2MB

## Tips

- Choose action-packed moments (battles, explosions, epic plays)
- Avoid title screens or menus - show gameplay!
- Loop point should be seamless if possible
- Test file size - 3MB max per video
- If you skip videos, emojis will still work fine!
