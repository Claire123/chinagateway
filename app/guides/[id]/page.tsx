import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CityGuideDetail } from '@/components/city-guide-detail'

interface GuidePageProps {
  params: {
    id: string
  }
}

const citiesData: Record<string, any> = {
  shanghai: {
    id: 'shanghai',
    name: 'Shanghai',
    tagline: 'The Paris of the East',
    description: 'China\'s largest city blends futuristic skyline with historic charm.',
    image: '/images/cities/shanghai.jpg',
    sections: {
      overview: {
        title: 'Overview',
        content: `Shanghai is China's most cosmopolitan city, where East meets West in a dazzling display of architecture, cuisine, and culture. From the historic Bund to the futuristic Pudong skyline, the city offers endless exploration opportunities.`,
      },
      attractions: {
        title: 'Top Attractions',
        items: [
          {
            name: 'The Bund',
            description: 'Historic waterfront promenade with colonial-era buildings and skyline views.',
            tips: 'Best visited at sunrise or sunset. Evening light shows are spectacular.',
          },
          {
            name: 'Yu Garden',
            description: 'Classic Ming Dynasty garden with traditional pavilions and rockeries.',
            tips: 'Buy combined ticket with City God Temple. Allow 2-3 hours.',
          },
          {
            name: 'French Concession',
            description: 'Tree-lined streets with colonial villas, art deco architecture, and boutique shops.',
            tips: 'Perfect for walking or cycling. Many cafes and restaurants to explore.',
          },
          {
            name: 'Oriental Pearl Tower',
            description: 'Iconic TV tower with observation decks and city views.',
            tips: 'Book tickets in advance. Visit on clear days for best visibility.',
          },
        ],
      },
      food: {
        title: 'Food & Dining',
        description: 'Shanghai cuisine is known for its sweetness and use of soy sauce, vinegar, and sugar.',
        mustTry: [
          'Xiaolongbao (Soup Dumplings)',
          'Shengjianbao (Pan-fried Buns)',
          'Hongshao Rou (Red Braised Pork)',
          'Scallion Oil Noodles',
          'Hairy Crab (Seasonal)',
        ],
        areas: [
          { name: 'Yuyuan Bazaar', description: 'Street food and traditional snacks' },
          { name: 'Tianzifang', description: 'Trendy cafes and international cuisine' },
          { name: 'Huaihai Road', description: 'Upscale restaurants and shopping' },
        ],
      },
      transport: {
        title: 'Getting Around',
        metro: 'Shanghai has an extensive metro system covering most tourist areas.',
        taxi: 'Taxis are affordable but avoid rush hours (7-9am, 5-7pm).',
        tips: [
          'Get a Shanghai Public Transport Card for convenience',
          'Download Metro大都会 app for mobile payments',
          'Maglev train connects airport to city center in 8 minutes',
        ],
      },
      practical: {
        title: 'Practical Information',
        bestTime: 'March-May, September-November',
        language: 'Mandarin. English is spoken in tourist areas and hotels.',
        currency: 'Chinese Yuan (CNY). Credit cards accepted in most places.',
        tips: [
          'Carry cash for street food and small vendors',
          'Download WeChat or Alipay for mobile payments',
          'VPN recommended for accessing Western websites',
          'Tap water is not drinkable - buy bottled water',
        ],
      },
    },
  },
  beijing: {
    id: 'beijing',
    name: 'Beijing',
    tagline: 'Ancient Capital, Modern Metropolis',
    description: 'Home to the Great Wall and Forbidden City, China\'s political and cultural center.',
    image: '/images/cities/beijing.jpg',
    sections: {
      overview: {
        title: 'Overview',
        content: `Beijing is a city of contrasts, where ancient imperial palaces stand alongside modern skyscrapers. As China's capital for over 800 years, it's the country's political, cultural, and educational center.`,
      },
      attractions: {
        title: 'Top Attractions',
        items: [
          {
            name: 'Great Wall of China',
            description: 'Ancient defensive fortification stretching thousands of miles.',
            tips: 'Mutianyu section is less crowded than Badaling. Allow a full day.',
          },
          {
            name: 'Forbidden City',
            description: 'Imperial palace complex from Ming and Qing dynasties.',
            tips: 'Book tickets in advance. Audio guide recommended. Closed Mondays.',
          },
          {
            name: 'Temple of Heaven',
            description: 'Complex of religious buildings where emperors prayed for good harvests.',
            tips: 'Visit early morning to see locals practicing tai chi.',
          },
          {
            name: 'Hutongs',
            description: 'Traditional narrow alleys with courtyard houses.',
            tips: 'Take a rickshaw tour or walk around Houhai area.',
          },
        ],
      },
      food: {
        title: 'Food & Dining',
        description: 'Beijing cuisine is hearty and flavorful, with emphasis on wheat-based foods and meat dishes.',
        mustTry: [
          'Peking Duck',
          'Jianbing (Chinese Crepes)',
          'Zhajiangmian (Noodles with Soy Bean Paste)',
          'Mongolian Hot Pot',
          'Donkey Burger (Local specialty)',
        ],
        areas: [
          { name: 'Wangfujing Snack Street', description: 'Famous street food and exotic snacks' },
          { name: 'Ghost Street (Gui Jie)', description: 'Late-night dining and hot pot' },
          { name: 'Nanluoguxiang', description: 'Trendy area with cafes and boutiques' },
        ],
      },
      transport: {
        title: 'Getting Around',
        metro: 'Extensive subway system. Airport Express connects to terminals.',
        taxi: 'Readily available and inexpensive. Have your destination written in Chinese.',
        tips: [
          'Buy a Beijing Transit Card for public transport',
          'Subway is fastest during rush hours',
          'Biking is popular - many bike-sharing options',
        ],
      },
      practical: {
        title: 'Practical Information',
        bestTime: 'April-May, September-October',
        language: 'Mandarin with Beijing dialect. English limited outside tourist areas.',
        currency: 'Chinese Yuan (CNY).',
        tips: [
          'Air quality can be poor - check AQI and bring masks',
          'Carry passport for security checks at attractions',
          'Book Forbidden City tickets days in advance',
        ],
      },
    },
  },
  xian: {
    id: 'xian',
    name: "Xi'an",
    tagline: 'Home of the Terracotta Warriors',
    description: 'Ancient capital with 3,000 years of history and world-famous archaeological sites.',
    image: '/images/cities/xian.jpg',
    sections: {
      overview: {
        title: 'Overview',
        content: `Xi'an was the starting point of the Silk Road and capital of China for over 1,000 years. Today, it's famous worldwide for the Terracotta Army, but offers much more with its intact city wall and vibrant Muslim Quarter.`,
      },
      attractions: {
        title: 'Top Attractions',
        items: [
          {
            name: 'Terracotta Army',
            description: 'Thousands of life-sized clay soldiers guarding Emperor Qin\'s tomb.',
            tips: 'Go early to avoid crowds. Allow half a day. Hire a guide for context.',
          },
          {
            name: 'City Wall',
            description: 'Best-preserved ancient city wall in China, 14km circumference.',
            tips: 'Rent a bike and cycle the entire wall. Great sunset views.',
          },
          {
            name: 'Muslim Quarter',
            description: 'Vibrant neighborhood with street food and Great Mosque.',
            tips: 'Come hungry! Best street food in Xi\'an. Evening is most lively.',
          },
          {
            name: 'Big Wild Goose Pagoda',
            description: 'Ancient Buddhist pagoda with musical fountain show.',
            tips: 'Evening fountain show is spectacular and free.',
          },
        ],
      },
      food: {
        title: 'Food & Dining',
        description: 'Xi\'an is famous for its Muslim-Chinese fusion cuisine and wheat-based foods.',
        mustTry: [
          'Roujiamo (Chinese Hamburger)',
          'Yangrou Paomo (Mutton Soup with Bread)',
          'Liangpi (Cold Skin Noodles)',
          'Biangbiang Noodles',
          'Persimmon Cakes',
        ],
        areas: [
          { name: 'Muslim Quarter', description: 'Street food paradise' },
          { name: 'Defachang Restaurant', description: 'Famous for dumpling banquets' },
          { name: 'Yongxingfang', description: 'Food court with local specialties' },
        ],
      },
      transport: {
        title: 'Getting Around',
        metro: 'Modern metro system connecting major sites.',
        taxi: 'Cheap and plentiful. Most drivers don\'t speak English.',
        tips: [
          'Airport is far from city - allow 1 hour transfer',
          'Terracotta Warriors require bus or tour (1 hour from city)',
          'City center is walkable',
        ],
      },
      practical: {
        title: 'Practical Information',
        bestTime: 'March-May, September-November',
        language: 'Mandarin with local dialect.',
        currency: 'Chinese Yuan (CNY).',
        tips: [
          'Terracotta Warriors are outside city - plan transportation',
          'Muslim Quarter can be crowded - watch your belongings',
          'Try to catch the Tang Dynasty show for cultural experience',
        ],
      },
    },
  },
  chengdu: {
    id: 'chengdu',
    name: 'Chengdu',
    tagline: 'Pandas and Spicy Food',
    description: 'Relaxed city famous for giant pandas, hot pot, and tea house culture.',
    image: '/images/cities/chengdu.jpg',
    sections: {
      overview: {
        title: 'Overview',
        content: `Chengdu is the capital of Sichuan province and one of China's most livable cities. Famous for being the home of giant pandas, its laid-back lifestyle, and mouth-numbing spicy cuisine, Chengdu offers a unique blend of nature, culture, and gastronomy.`,
      },
      attractions: {
        title: 'Top Attractions',
        items: [
          {
            name: 'Giant Panda Base',
            description: 'Research base dedicated to panda conservation and breeding.',
            tips: 'Go early (8-9am) when pandas are most active. Allow 3-4 hours.',
          },
          {
            name: 'Jinli Ancient Street',
            description: 'Traditional street with Qing Dynasty architecture and local snacks.',
            tips: 'Beautiful at night with lanterns. Try local street food.',
          },
          {
            name: 'Wuhou Shrine',
            description: 'Temple dedicated to Zhuge Liang and Liu Bei from Three Kingdoms.',
            tips: 'Combine with Jinli Street nearby. Beautiful gardens.',
          },
          {
            name: 'Leshan Giant Buddha',
            description: 'World\'s largest stone Buddha statue, 71 meters tall.',
            tips: 'Day trip from Chengdu. Take boat for best view.',
          },
        ],
      },
      food: {
        title: 'Food & Dining',
        description: 'Chengdu is UNESCO City of Gastronomy, famous for bold flavors and Sichuan peppercorns.',
        mustTry: [
          'Sichuan Hot Pot',
          'Mapo Tofu',
          'Kung Pao Chicken',
          'Dan Dan Noodles',
          'Rabbit Heads (Local specialty)',
        ],
        areas: [
          { name: 'Wide and Narrow Alleys', description: 'Traditional area with restaurants and teahouses' },
          { name: 'Jinli Street', description: 'Street food and local snacks' },
          { name: 'Chunxi Road', description: 'Modern dining and shopping district' },
        ],
      },
      transport: {
        title: 'Getting Around',
        metro: 'Modern metro system covering major attractions.',
        taxi: 'Inexpensive and plentiful. Use Didi app for rides.',
        tips: [
          'Metro is clean, efficient, and English-friendly',
          'Biking is popular - many shared bikes available',
          'Airport is connected by metro line 10',
        ],
      },
      practical: {
        title: 'Practical Information',
        bestTime: 'March-June, September-November',
        language: 'Sichuan dialect of Mandarin. English limited outside tourist areas.',
        currency: 'Chinese Yuan (CNY). Mobile payments widely used.',
        tips: [
          'Try the local teahouse culture - People\'s Park is famous',
          'Sichuan food is spicy - ask for less spice if needed',
          'Book panda base tickets in advance during holidays',
        ],
      },
    },
  },
  guilin: {
    id: 'guilin',
    name: 'Guilin',
    tagline: 'Karst Mountains and Rivers',
    description: 'Breathtaking natural scenery with limestone peaks and the Li River.',
    image: '/images/cities/guilin.jpg',
    sections: {
      overview: {
        title: 'Overview',
        content: `Guilin is world-renowned for its dramatic karst landscape - thousands of limestone peaks rising from the plains along the Li River. The city has inspired countless Chinese paintings and poems with its ethereal beauty.`,
      },
      attractions: {
        title: 'Top Attractions',
        items: [
          {
            name: 'Li River Cruise',
            description: 'Scenic boat ride from Guilin to Yangshuo through karst mountains.',
            tips: 'Book in advance. 4-hour cruise. Best in morning for photos.',
          },
          {
            name: 'Yangshuo',
            description: 'Picturesque town surrounded by karst peaks, popular with backpackers.',
            tips: 'Stay overnight. Rent bikes to explore countryside.',
          },
          {
            name: 'Reed Flute Cave',
            description: 'Natural limestone cave with colorful lighting.',
            tips: '1-hour visit. Located in city. Cool inside even in summer.',
          },
          {
            name: 'Longji Rice Terraces',
            description: 'Spectacular terraced fields built into mountainsides.',
            tips: '2-3 hours from Guilin. Stay overnight for sunrise.',
          },
        ],
      },
      food: {
        title: 'Food & Dining',
        description: 'Guilin cuisine features rice noodles and local specialties with lighter flavors than Sichuan.',
        mustTry: [
          'Guilin Rice Noodles',
          'Beer Fish (Yangshuo specialty)',
          'Stuffed Li River Snails',
          'Lotus Leaf Rice',
          'Osmanthus Cake',
        ],
        areas: [
          { name: 'West Street (Yangshuo)', description: 'Tourist street with international restaurants' },
          { name: 'Zhengyang Pedestrian Street', description: 'Central Guilin dining area' },
          { name: 'Night Market', description: 'Street food and local snacks' },
        ],
      },
      transport: {
        title: 'Getting Around',
        metro: 'No metro system. City buses available.',
        taxi: 'Taxis are affordable. Negotiate price for long distances.',
        tips: [
          'Li River cruise is one-way to Yangshuo',
          'Rent electric scooters in Yangshuo to explore',
          'Airport is 30km from city center',
        ],
      },
      practical: {
        title: 'Practical Information',
        bestTime: 'April-October (avoid summer floods)',
        language: 'Guilin dialect. English spoken in tourist areas.',
        currency: 'Chinese Yuan (CNY).',
        tips: [
          'Bring rain gear - sudden showers are common',
          'Mosquito repellent essential',
          'Book Li River cruise in advance during peak season',
        ],
      },
    },
  },
  hangzhou: {
    id: 'hangzhou',
    name: 'Hangzhou',
    tagline: 'Heaven on Earth',
    description: 'Famous for West Lake, tea plantations, and silk production.',
    image: '/images/cities/hangzhou.jpg',
    sections: {
      overview: {
        title: 'Overview',
        content: `Hangzhou has been celebrated for centuries as one of China's most beautiful cities. Marco Polo called it the finest and most splendid city in the world. West Lake, a UNESCO World Heritage site, remains the crown jewel of this elegant city.`,
      },
      attractions: {
        title: 'Top Attractions',
        items: [
          {
            name: 'West Lake',
            description: 'UNESCO site with temples, pagodas, gardens, and artificial islands.',
            tips: 'Rent bikes to circle the lake. Sunset at Leifeng Pagoda is magical.',
          },
          {
            name: 'Lingyin Temple',
            description: 'Ancient Buddhist temple with rock carvings in forested hills.',
            tips: 'One of China\'s wealthiest temples. Allow 2-3 hours.',
          },
          {
            name: 'Longjing Tea Villages',
            description: 'Famous Dragon Well tea plantations in scenic hills.',
            tips: 'Visit in spring for tea harvest. Buy tea directly from farmers.',
          },
          {
            name: 'Xixi Wetland',
            description: 'Urban wetland park with waterways and traditional villages.',
            tips: 'Boat rides available. Less crowded than West Lake.',
          },
        ],
      },
      food: {
        title: 'Food & Dining',
        description: 'Hangzhou cuisine is refined and delicate, focusing on fresh ingredients and subtle flavors.',
        mustTry: [
          'Dongpo Pork (Braised Pork Belly)',
          'West Lake Fish in Vinegar Gravy',
          'Longjing Shrimp',
          'Beggar\'s Chicken',
          'Hangzhou Xiaolongbao',
        ],
        areas: [
          { name: 'Hubin Road', description: 'Lakeside dining with views' },
          { name: 'Hefang Street', description: 'Traditional snacks and teahouses' },
          { name: 'Longjing Village', description: 'Tea houses and farm-to-table dining' },
        ],
      },
      transport: {
        title: 'Getting Around',
        metro: 'Modern metro system. Line 1 connects main areas.',
        taxi: 'Readily available and inexpensive.',
        tips: [
          'Biking around West Lake is very popular',
          'Water buses available on West Lake and canals',
          'High-speed rail connects to Shanghai in 1 hour',
        ],
      },
      practical: {
        title: 'Practical Information',
        bestTime: 'March-May, September-November',
        language: 'Hangzhou dialect. English spoken in tourist areas.',
        currency: 'Chinese Yuan (CNY).',
        tips: [
          'West Lake area gets crowded on weekends - visit early',
          'Spring is best for tea culture experience',
          'Bring umbrella - frequent light rain',
        ],
      },
    },
  },
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const city = citiesData[params.id]
  if (!city) {
    return {
      title: 'Guide Not Found | ChinaGateway',
    }
  }
  
  return {
    title: `${city.name} Travel Guide | ChinaGateway`,
    description: `Complete travel guide for ${city.name} - ${city.description}`,
  }
}

export function generateStaticParams() {
  return Object.keys(citiesData).map((id) => ({
    id,
  }))
}

export default function GuidePage({ params }: GuidePageProps) {
  const city = citiesData[params.id]
  
  if (!city) {
    notFound()
  }
  
  return <CityGuideDetail city={city} />
}
