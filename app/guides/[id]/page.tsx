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
