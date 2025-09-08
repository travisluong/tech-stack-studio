# AI Team Member Profile Image Prompts

This file contains the Midjourney prompts for generating profile images for each team member. These images should be created and saved in the `/public/team/` directory.

## Team Member Prompts

### 1. Alex Meridian (Founder & CEO)

**File**: `alex-meridian.webp`

```
Professional anime-style portrait of a confident tech CEO, silver-rimmed glasses, sophisticated dark suit, subtle digital glow in eyes, modern minimalist office background, clean geometric lighting, premium corporate aesthetic, detailed facial features, 4K quality --ar 1:1 --style anime --niji 6
```

### 2. Zara Codewright (Full Stack Engineer)

**File**: `zara-codewright.webp`

```
Anime-style female programmer with confident expression, stylish coding setup with multiple monitors displaying code, wearing casual tech hoodie, modern workspace with RGB lighting, digital circuit patterns subtly reflected in glasses, vibrant colors, professional yet approachable --ar 1:1 --style anime --niji 6
```

### 3. Kai Systemforge (DevOps Architect)

**File**: `kai-systemforge.webp`

```
Technical anime character with intense focused expression, surrounded by holographic server diagrams and network topology displays, wearing industrial-style clothing with tech accessories, cyberpunk aesthetic with blue-green lighting, multiple screens showing system metrics, highly detailed technical environment --ar 1:1 --style anime --niji 6
```

### 4. River Pixelhart (UX/UI Designer)

**File**: `river-pixelhart.webp`

```
Hipster anime designer with artistic flair, trendy thick-framed glasses, perfectly styled hair, creative workspace with design tablets and colorful mood boards, wearing fashionable casual attire, surrounded by floating UI mockups and color palettes, warm artistic lighting, creative studio aesthetic --ar 1:1 --style anime --niji 6
```

### 5. Nova Touchstone (Mobile Developer)

**File**: `nova-touchstone.webp`

```
Modern anime character with sleek smartphone displaying app interfaces, wearing contemporary tech-casual outfit, surrounded by floating mobile device mockups and app icons, clean minimalist workspace with wireless charging pads and latest devices, soft blue-white lighting, innovation-focused environment --ar 1:1 --style anime --niji 6
```

### 6. Atlas Designcore (Systems Architect)

**File**: `atlas-designcore.webp`

```
Sophisticated anime architect character with commanding presence, surrounded by 3D holographic system diagrams and database schemas, wearing professional attire with subtle tech accessories, complex technical blueprints floating in background, authoritative pose, high-tech conference room setting --ar 1:1 --style anime --niji 6
```

### 7. Sage Neuralpath (AI/ML Engineer)

**File**: `sage-neuralpath.webp`

```
Futuristic anime AI researcher with piercing intelligent eyes, surrounded by floating neural network visualizations and data streams, wearing advanced tech clothing with subtle cybernetic details, laboratory setting with quantum computers and AI displays, ethereal blue-purple lighting, mysterious yet approachable expression --ar 1:1 --style anime --niji 6
```

## Image Specifications

- **Format**: WebP for optimal web performance
- **Dimensions**: 512x512px (1:1 aspect ratio)
- **Quality**: High quality for crisp display
- **Style**: Consistent anime aesthetic across all portraits
- **Color Palette**: Should complement the monochromatic theme (whites, grays, blacks with subtle color accents)

## Implementation Notes

1. Generate each image using the provided Midjourney prompts
2. Convert to WebP format for web optimization
3. Save in `/public/team/` directory with exact filenames listed above
4. Update the TeamCard component to use actual images instead of placeholder initials
5. Test image loading and performance across different devices

## Future Enhancements

- Consider creating alternate poses/expressions for variety
- Add hover state images for interactive effects
- Create team group photo with all members
- Generate social media profile versions
