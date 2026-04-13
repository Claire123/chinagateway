// City images configuration
// In production, these would be actual image paths

export const cityImages = {
  shanghai: {
    hero: '/images/cities/shanghai-hero.jpg',
    thumbnail: '/images/cities/shanghai-thumb.jpg',
    gallery: [
      '/images/cities/shanghai-1.jpg',
      '/images/cities/shanghai-2.jpg',
      '/images/cities/shanghai-3.jpg',
    ],
    color: 'from-blue-100/50 to-purple-100/50',
  },
  beijing: {
    hero: '/images/cities/beijing-hero.jpg',
    thumbnail: '/images/cities/beijing-thumb.jpg',
    gallery: [
      '/images/cities/beijing-1.jpg',
      '/images/cities/beijing-2.jpg',
      '/images/cities/beijing-3.jpg',
    ],
    color: 'from-red-100/50 to-orange-100/50',
  },
  xian: {
    hero: '/images/cities/xian-hero.jpg',
    thumbnail: '/images/cities/xian-thumb.jpg',
    gallery: [
      '/images/cities/xian-1.jpg',
      '/images/cities/xian-2.jpg',
      '/images/cities/xian-3.jpg',
    ],
    color: 'from-amber-100/50 to-yellow-100/50',
  },
  chengdu: {
    hero: '/images/cities/chengdu-hero.jpg',
    thumbnail: '/images/cities/chengdu-thumb.jpg',
    gallery: [
      '/images/cities/chengdu-1.jpg',
      '/images/cities/chengdu-2.jpg',
      '/images/cities/chengdu-3.jpg',
    ],
    color: 'from-green-100/50 to-teal-100/50',
  },
  guilin: {
    hero: '/images/cities/guilin-hero.jpg',
    thumbnail: '/images/cities/guilin-thumb.jpg',
    gallery: [
      '/images/cities/guilin-1.jpg',
      '/images/cities/guilin-2.jpg',
      '/images/cities/guilin-3.jpg',
    ],
    color: 'from-emerald-100/50 to-cyan-100/50',
  },
  hangzhou: {
    hero: '/images/cities/hangzhou-hero.jpg',
    thumbnail: '/images/cities/hangzhou-thumb.jpg',
    gallery: [
      '/images/cities/hangzhou-1.jpg',
      '/images/cities/hangzhou-2.jpg',
      '/images/cities/hangzhou-3.jpg',
    ],
    color: 'from-indigo-100/50 to-blue-100/50',
  },
}

// Default placeholder gradient for missing images
export const placeholderGradient = (color: string) => 
  `linear-gradient(135deg, ${color})`

// Get Unsplash image URL for demo purposes
export const getUnsplashImage = (keyword: string, width: number = 800, height: number = 600) => 
  `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(keyword)}`
