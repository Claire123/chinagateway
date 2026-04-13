// Detailed itinerary data for each city

export interface Activity {
  time: string
  title: string
  description: string
  location: string
  duration: string
  tips?: string
}

export interface DayPlan {
  day: number
  city: string
  theme: string
  activities: Activity[]
  accommodation: {
    name: string
    area?: string
    description: string
  }
  meals: {
    breakfast?: string
    lunch?: string
    dinner?: string
  }
}

export interface CityData {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
  bestAreas: {
    budget: { name: string; description: string }
    mid: { name: string; description: string }
    luxury: { name: string; description: string }
  }
  itineraries: {
    history: DayPlan[]
    food: DayPlan[]
    nature: DayPlan[]
    modern: DayPlan[]
    art: DayPlan[]
    shopping: DayPlan[]
    nightlife: DayPlan[]
    local: DayPlan[]
  }
}

export const citiesData: Record<string, CityData> = {
  shanghai: {
    id: 'shanghai',
    name: 'Shanghai',
    description: 'The Paris of the East - A perfect blend of East and West',
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&q=80',
    highlights: ['The Bund', 'Oriental Pearl Tower', 'Yu Garden', 'French Concession', 'Nanjing Road'],
    bestAreas: {
      budget: { name: 'People\'s Square Area', description: 'Central location, near subway, many hostels' },
      mid: { name: 'The Bund/Jing\'an', description: 'Historic area with charm, walkable to attractions' },
      luxury: { name: 'Lujiazui/Pudong', description: 'Skyline views, 5-star hotels, modern amenities' }
    },
    itineraries: {
      history: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Colonial History & Old Shanghai',
          activities: [
            { time: '09:00', title: 'The Bund', description: 'Walk along the historic waterfront, see colonial architecture', location: 'Zhongshan Dong Yi Lu', duration: '2 hours', tips: 'Best light in morning, fewer crowds' },
            { time: '11:30', title: 'Yu Garden', description: 'Classic Chinese garden from Ming Dynasty', location: 'Anren Jie', duration: '2 hours', tips: 'Buy combined ticket with City God Temple' },
            { time: '14:00', title: 'Shanghai Museum', description: 'Ancient Chinese art and artifacts', location: 'People\'s Square', duration: '3 hours', tips: 'Free entry, audio guide recommended' },
            { time: '18:00', title: 'Nanjing Road', description: 'Historic shopping street, evening lights', location: 'Nanjing Road Pedestrian Street', duration: '2 hours', tips: 'Try the tram ride' }
          ],
          accommodation: { name: 'The Sukhothai Shanghai', area: 'Jing\'an District', description: 'Boutique hotel near French Concession' },
          meals: { breakfast: 'Local breakfast at Xiaoyang Shengjian', lunch: 'Nanxiang Steamed Buns at Yu Garden', dinner: 'Jesse Restaurant (local Shanghainese)' }
        },
        {
          day: 2,
          city: 'Shanghai',
          theme: 'French Concession & Jewish History',
          activities: [
            { time: '09:00', title: 'French Concession', description: 'Tree-lined streets, colonial villas, art deco architecture', location: 'Fuxing Road/Huaihai Road', duration: '3 hours', tips: 'Rent a bike or walk, many cafes to stop' },
            { time: '13:00', title: 'Tianzifang', description: 'Shikumen lanes transformed into arts district', location: 'Lane 210 Taikang Road', duration: '2 hours', tips: 'Great for souvenirs and photos' },
            { time: '16:00', title: 'Jewish Refugees Museum', description: 'History of Jewish refugees in Shanghai during WWII', location: 'Changyang Road', duration: '1.5 hours', tips: 'Moving historical site' },
            { time: '19:00', title: 'Xintiandi', description: 'Restored Shikumen houses, upscale dining', location: 'Xintiandi', duration: '2 hours', tips: 'Expensive but atmospheric for dinner' }
          ],
          accommodation: { name: 'The Sukhothai Shanghai', area: 'Jing\'an District', description: 'Boutique hotel near French Concession' },
          meals: { breakfast: 'Brunch at Kommune', lunch: 'Street food at Tianzifang', dinner: 'Mr & Mrs Bund (with Bund view)' }
        }
      ],
      food: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Street Food & Local Delicacies',
          activities: [
            { time: '08:00', title: 'Breakfast Tour', description: 'Shengjianbao, youtiao, doujiang at local stalls', location: 'People\'s Square area', duration: '1.5 hours', tips: 'Start early for freshest food' },
            { time: '10:30', title: 'Wet Market Visit', description: 'See local ingredients, exotic foods', location: 'Any wet market near your hotel', duration: '1 hour', tips: 'Great photo opportunities' },
            { time: '12:30', title: 'Xiaolongbao Masterclass', description: 'Learn to make soup dumplings', location: 'Cooking class in French Concession', duration: '3 hours', tips: 'Book in advance' },
            { time: '17:00', title: 'Food Street Exploration', description: 'Try various snacks on Huanghe Road', location: 'Huanghe Road Food Street', duration: '2 hours', tips: 'Come hungry!' },
            { time: '20:00', title: 'Late Night Supper', description: 'Hairy crabs or late night noodles', location: 'Various late-night spots', duration: '1.5 hours', tips: 'Ask locals for their favorite spot' }
          ],
          accommodation: { name: 'The Middle House', area: 'Jing\'an District', description: 'Near excellent restaurants' },
          meals: { breakfast: 'Street food tour included', lunch: 'Dumplings you made', dinner: 'Jia Jia Tang Bao (famous xiaolongbao)' }
        }
      ],
      modern: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Futuristic Shanghai',
          activities: [
            { time: '09:00', title: 'Shanghai Tower', description: 'World\'s second tallest building, observation deck', location: 'Lujiazui', duration: '2 hours', tips: 'Book tickets online, go early for clear views' },
            { time: '12:00', title: 'IFC Mall', description: 'Luxury shopping and dining in Pudong', location: 'Lujiazui', duration: '2 hours', tips: 'Great food court with city views' },
            { time: '15:00', title: 'Maglev Train Experience', description: 'World\'s fastest commercial train', location: 'Longyang Road to Airport', duration: '1 hour', tips: '430km/h top speed!' },
            { time: '18:00', title: 'Riverside Promenade', description: 'Walk along Huangpu River, LED light show', location: 'The Bund Riverside', duration: '2 hours', tips: 'Light show at 7pm and 8pm' },
            { time: '20:30', title: 'Bar Rouge or Vue Bar', description: 'Rooftop bars with skyline views', location: 'The Bund', duration: '2 hours', tips: 'Dress code applies, expensive cocktails' }
          ],
          accommodation: { name: 'Park Hyatt Shanghai', area: 'Lujiazui', description: 'Rooms on floors 79-93 with best views' },
          meals: { breakfast: 'Hotel breakfast with view', lunch: 'Din Tai Fung at IFC', dinner: 'Mercato by Jean-Georges' }
        }
      ],
      nature: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Gardens & Water Towns',
          activities: [
            { time: '08:00', title: 'Zhujiajiao Water Town', description: 'Ancient canal town, bridges, boats', location: 'Zhujiajiao (1 hour from city)', duration: '5 hours', tips: 'Take metro line 17, arrive early' },
            { time: '14:00', title: 'Gucun Park', description: 'Cherry blossoms (seasonal), large green space', location: 'Baoshan District', duration: '2 hours', tips: 'Best in spring' },
            { time: '17:00', title: 'Huangpu River Cruise', description: 'See both sides of the river by boat', location: 'The Bund Pier', duration: '1 hour', tips: 'Take the cruise at sunset' }
          ],
          accommodation: { name: 'Banyan Tree Shanghai', area: 'On the Bund', description: 'Riverside location' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Local fish at Zhujiajiao', dinner: 'Hairy crab (seasonal) or river fish' }
        }
      ],
      art: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Contemporary Art Scene',
          activities: [
            { time: '10:00', title: 'M50 Creative Park', description: 'Contemporary art galleries in old factory', location: 'Moganshan Road', duration: '3 hours', tips: 'Free entry, many galleries to explore' },
            { time: '14:00', title: 'Power Station of Art', description: 'Contemporary art museum in former power plant', location: 'South Bund', duration: '3 hours', tips: 'Check current exhibitions online' },
            { time: '18:00', title: 'Tianzifang Art Walk', description: 'Galleries, studios, craft shops', location: 'Taikang Road', duration: '2 hours', tips: 'Buy unique handmade items' }
          ],
          accommodation: { name: 'Waterhouse at South Bund', area: 'South Bund', description: 'Design hotel near art district' },
          meals: { breakfast: 'Cafe in French Concession', lunch: 'Cafe at M50', dinner: 'The Commune Social (design restaurant)' }
        }
      ],
      shopping: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'From Luxury to Local Markets',
          activities: [
            { time: '10:00', title: 'Nanjing Road', description: 'Main shopping street, international brands', location: 'Nanjing Road', duration: '3 hours', tips: 'Start at People\'s Square end' },
            { time: '14:00', title: 'Huaihai Road', description: 'Upscale shopping, local designers', location: 'Huaihai Middle Road', duration: '3 hours', tips: 'Check out local boutiques' },
            { time: '18:00', title: 'AP Plaza (Fake Market)', description: 'Bargain for souvenirs, bags, watches', location: 'Science & Technology Museum Station', duration: '2 hours', tips: 'Bargain hard, start at 30% of asking price' }
          ],
          accommodation: { name: 'Swatch Art Peace Hotel', area: 'The Bund', description: 'Shopping central location' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Food court at mall', dinner: 'Lost Heaven (Yunnan cuisine)' }
        }
      ],
      nightlife: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Nightlife & Entertainment',
          activities: [
            { time: '18:00', title: 'Happy Hour', description: 'Sunset drinks with skyline view', location: 'Char Bar or Vue Bar', duration: '2 hours', tips: 'Arrive early for window seats' },
            { time: '20:30', title: 'Dinner & Show', description: 'Acrobatic show or live music dinner', location: 'ERA Acrobatic Show or Jazz Bar', duration: '3 hours', tips: 'Book acrobatic show in advance' },
            { time: '23:30', title: 'Clubbing', description: 'Dance at popular clubs', location: 'Bar Rouge, M1NT, or C\'est La Vie', duration: '3 hours', tips: 'Cover charges apply, dress well' }
          ],
          accommodation: { name: 'W Shanghai - The Bund', area: 'North Bund', description: 'Party hotel with great nightlife access' },
          meals: { breakfast: 'Late brunch', lunch: 'Light meal', dinner: 'Dinner at club venue' }
        }
      ],
      local: [
        {
          day: 1,
          city: 'Shanghai',
          theme: 'Live Like a Local',
          activities: [
            { time: '07:00', title: 'Morning Exercise', description: 'Join locals in park tai chi or dancing', location: 'Fuxing Park or People\'s Park', duration: '1 hour', tips: 'Free to join, very welcoming' },
            { time: '09:00', title: 'Local Breakfast', description: 'Eat where locals eat - congee, youtiao', location: 'Any neighborhood breakfast spot', duration: '1 hour', tips: 'Look for crowded places' },
            { time: '11:00', title: 'Neighborhood Walk', description: 'Explore old lanes (longtang)', location: 'Any old neighborhood', duration: '2 hours', tips: 'Be respectful, ask before photographing' },
            { time: '14:00', title: 'Tea House', description: 'Drink tea, play cards like locals', location: 'Old tea house in old town', duration: '2 hours', tips: 'Try Longjing or Pu\'er tea' },
            { time: '19:00', title: 'Street BBQ', description: 'Eat at roadside BBQ with beer', location: 'Any street BBQ spot', duration: '2 hours', tips: 'Point at what you want' }
          ],
          accommodation: { name: 'Local Airbnb', area: 'French Concession', description: 'Live in a real neighborhood' },
          meals: { breakfast: 'Street breakfast', lunch: 'Local canteen', dinner: 'Street BBQ' }
        }
      ]
    }
  },
  beijing: {
    id: 'beijing',
    name: 'Beijing',
    description: 'Ancient capital with 3000 years of history',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
    highlights: ['Great Wall', 'Forbidden City', 'Temple of Heaven', 'Hutongs', 'Summer Palace'],
    bestAreas: {
      budget: { name: 'Qianmen/Dashilan', description: 'Near Forbidden City, traditional area' },
      mid: { name: 'Wangfujing/Dongcheng', description: 'Central, near subway, walkable' },
      luxury: { name: 'Chaoyang CBD', description: 'Modern area, international hotels' }
    },
    itineraries: {
      history: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Imperial Beijing',
          activities: [
            { time: '08:30', title: 'Forbidden City', description: 'Imperial palace of Ming and Qing dynasties', location: 'Forbidden City', duration: '4 hours', tips: 'Book tickets 7 days in advance, enter from South gate' },
            { time: '13:00', title: 'Jingshan Park', description: 'Climb for panoramic view of Forbidden City', location: 'North of Forbidden City', duration: '1.5 hours', tips: 'Best photo spot at Pavilion of Everlasting Spring' },
            { time: '15:30', title: 'Beihai Park', description: 'Imperial garden with white dagoba', location: 'West of Forbidden City', duration: '2 hours', tips: 'Rent a paddle boat' },
            { time: '19:00', title: 'Wangfujing Night Market', description: 'Street food and shopping', location: 'Wangfujing Pedestrian Street', duration: '2 hours', tips: 'Try scorpion skewers if brave!' }
          ],
          accommodation: { name: 'The Peninsula Beijing', area: 'Wangfujing', description: 'Near Forbidden City' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Imperial cuisine at Fangshan', dinner: 'Peking duck at Siji Minfu' }
        },
        {
          day: 2,
          city: 'Beijing',
          theme: 'Great Wall & Ming Tombs',
          activities: [
            { time: '07:00', title: 'Great Wall (Mutianyu)', description: 'Less crowded section of the Wall', location: 'Mutianyu (1.5 hours from city)', duration: '5 hours', tips: 'Take cable car up, toboggan down!' },
            { time: '14:00', title: 'Ming Tombs', description: 'Mausoleums of 13 Ming emperors', location: 'Changping District', duration: '2 hours', tips: 'Sacred Way is most impressive' },
            { time: '18:00', title: 'Houhai Lake', description: 'Historic lake area, bars and restaurants', location: 'Shichahai', duration: '3 hours', tips: 'Take a rickshaw tour of hutongs first' }
          ],
          accommodation: { name: 'The Peninsula Beijing', area: 'Wangfujing', description: 'Near Forbidden City' },
          meals: { breakfast: 'Early breakfast before Wall', lunch: 'Lunch at Mutianyu', dinner: 'Houhai area restaurants' }
        }
      ],
      food: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Imperial & Street Food',
          activities: [
            { time: '08:00', title: 'Breakfast like Emperor', description: 'Traditional Beijing breakfast - douzhi, jiaoquan', location: 'Old Beijing restaurant', duration: '1.5 hours', tips: 'Douzhi is fermented bean juice - acquired taste!' },
            { time: '10:30', title: 'Hutong Food Walk', description: 'Hidden gems in old neighborhoods', location: 'Nanluoguxiang area', duration: '3 hours', tips: 'Try zhajiangmian, luzhu huoshao' },
            { time: '14:00', title: 'Peking Duck Preparation', description: 'Watch chefs carve duck', location: 'Quanjude or Da Dong', duration: '2 hours', tips: 'Make reservation' },
            { time: '17:00', title: 'Dumpling Making Class', description: 'Learn to make jiaozi', location: 'Cooking school', duration: '3 hours', tips: 'Eat what you make!' }
          ],
          accommodation: { name: 'Hotel near Nanluoguxiang', area: 'Dongcheng', description: 'Foodie central location' },
          meals: { breakfast: 'Traditional Beijing breakfast', lunch: 'Hutong food tour', dinner: 'Peking duck feast' }
        }
      ],
      nature: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Parks & Mountains',
          activities: [
            { time: '08:00', title: 'Summer Palace', description: 'Imperial garden with lake and temples', location: 'Haidian District', duration: '4 hours', tips: 'Boat ride on Kunming Lake' },
            { time: '13:00', title: 'Fragrant Hills', description: 'Hiking with city views', location: 'Haidian District', duration: '3 hours', tips: 'Best in autumn for red leaves' },
            { time: '17:00', title: 'Temple of Heaven Park', description: 'Locals doing tai chi, flying kites', location: 'Dongcheng', duration: '2 hours', tips: 'Join in the activities!' }
          ],
          accommodation: { name: 'Aman Summer Palace', area: 'Haidian', description: 'Near Summer Palace' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Picnic lunch', dinner: 'Vegetarian at temple restaurant' }
        }
      ],
      modern: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Modern Architecture & Art',
          activities: [
            { time: '10:00', title: 'CCTV Headquarters', description: 'Iconic "pants" building', location: 'CBD', duration: '1 hour', tips: 'View from outside, great photos' },
            { time: '12:00', title: '798 Art District', description: 'Contemporary art in factory complex', location: 'Dashanzi', duration: '4 hours', tips: 'Many galleries and cafes' },
            { time: '17:00', title: 'Sanlitun SOHO', description: 'Futuristic architecture, shopping', location: 'Sanlitun', duration: '2 hours', tips: 'Designed by Zaha Hadid' },
            { time: '20:00', title: 'Sanlitun Bar Street', description: 'Nightlife and international dining', location: 'Sanlitun', duration: '3 hours', tips: 'Many international restaurants' }
          ],
          accommodation: { name: 'Rosewood Beijing', area: 'Chaoyang CBD', description: 'Modern luxury' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Cafe at 798', dinner: 'International cuisine at Sanlitun' }
        }
      ],
      art: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Traditional & Contemporary Art',
          activities: [
            { time: '09:00', title: 'National Museum', description: 'Chinese history and art', location: 'Tiananmen Square', duration: '3 hours', tips: 'Free but book in advance' },
            { time: '13:00', title: 'National Art Museum', description: 'Traditional Chinese paintings', location: 'Dongcheng', duration: '2 hours', tips: 'Free entry' },
            { time: '16:00', title: 'Caochangdi Art Village', description: 'Galleries in rural setting', location: 'Caochangdi', duration: '3 hours', tips: 'Less crowded than 798' }
          ],
          accommodation: { name: 'Hotel in Caochangdi', area: 'Caochangdi', description: 'Art district location' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Museum cafe', dinner: 'Art district restaurant' }
        }
      ],
      shopping: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Markets & Malls',
          activities: [
            { time: '10:00', title: 'Silk Market', description: 'Bargain for silk, pearls, souvenirs', location: 'Yonganli', duration: '3 hours', tips: 'Bargain aggressively' },
            { time: '14:00', title: 'Panjiayuan Antique Market', description: 'Antiques, crafts, curios', location: 'Panjiayuan', duration: '3 hours', tips: 'Weekends are best' },
            { time: '18:00', title: 'Sanlitun Village', description: 'Modern shopping mall', location: 'Sanlitun', duration: '2 hours', tips: 'International brands' }
          ],
          accommodation: { name: 'Hotel near Silk Market', area: 'Chaoyang', description: 'Shopping central' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Food court', dinner: 'Sanlitun restaurants' }
        }
      ],
      nightlife: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Nightlife & Entertainment',
          activities: [
            { time: '19:00', title: 'Kung Fu Show', description: 'Legend of Kung Fu at Red Theatre', location: 'Red Theatre', duration: '2 hours', tips: 'Book tickets in advance' },
            { time: '21:30', title: 'Houhai Bar Street', description: 'Bars by the lake', location: 'Shichahai', duration: '3 hours', tips: 'Many live music venues' },
            { time: '00:30', title: 'Club Mix or Elements', description: 'Dance until late', location: 'Gongti area', duration: '3 hours', tips: 'Popular with locals and expats' }
          ],
          accommodation: { name: 'Hotel in Sanlitun', area: 'Sanlitun', description: 'Nightlife central' },
          meals: { breakfast: 'Late brunch', lunch: 'Light meal', dinner: 'Before show' }
        }
      ],
      local: [
        {
          day: 1,
          city: 'Beijing',
          theme: 'Hutong Life',
          activities: [
            { time: '07:00', title: 'Morning Market', description: 'See locals buying fresh produce', location: 'Any neighborhood market', duration: '1.5 hours', tips: 'Great for photos' },
            { time: '09:30', title: 'Hutong Walking Tour', description: 'Explore old neighborhoods', location: 'Nanluoguxiang or similar', duration: '3 hours', tips: 'Get lost intentionally' },
            { time: '14:00', title: 'Tea Ceremony', description: 'Learn about Chinese tea culture', location: 'Tea house in hutong', duration: '2 hours', tips: 'Try multiple teas' },
            { time: '17:00', title: 'Mahjong with Locals', description: 'Learn and play Chinese game', location: 'Community center', duration: '3 hours', tips: 'Locals love teaching foreigners' }
          ],
          accommodation: { name: 'Courtyard hotel', area: 'Hutong', description: 'Live in traditional courtyard' },
          meals: { breakfast: 'Street breakfast', lunch: 'Local restaurant', dinner: 'Home-cooked meal experience' }
        }
      ]
    }
  },
  xian: {
    id: 'xian',
    name: 'Xi\'an',
    description: 'Ancient capital of 13 dynasties - Home of the Terracotta Warriors',
    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&q=80',
    highlights: ['Terracotta Warriors', 'Ancient City Wall', 'Muslim Quarter', 'Big Wild Goose Pagoda', 'Shaanxi History Museum'],
    bestAreas: {
      budget: { name: 'Near Bell Tower', description: 'Central location, many hostels and budget hotels' },
      mid: { name: 'City Center', description: 'Walkable to main attractions, good restaurants' },
      luxury: { name: 'Qujiang District', description: 'Modern area near Big Wild Goose Pagoda' }
    },
    itineraries: {
      history: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Terracotta Warriors & Ancient Capital',
          activities: [
            { time: '08:00', title: 'Terracotta Warriors', description: 'World-famous archaeological wonder', location: 'Lintong District', duration: '4 hours', tips: 'Go early to avoid crowds, hire a guide' },
            { time: '13:00', title: 'Huaqing Palace', description: 'Imperial hot springs and gardens', location: 'Lintong', duration: '2 hours', tips: 'Beautiful gardens and history' },
            { time: '17:00', title: 'Ancient City Wall', description: 'Walk or bike on 600-year-old wall', location: 'City Center', duration: '2 hours', tips: 'Rent a bike for full circuit' }
          ],
          accommodation: { name: 'Sofitel Legend Xian', area: 'Near Bell Tower', description: 'Historic luxury hotel' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Local restaurant near warriors', dinner: 'De Fa Chang (famous dumplings)' }
        }
      ],
      food: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Muslim Quarter Food Tour',
          activities: [
            { time: '09:00', title: 'Breakfast at Muslim Quarter', description: 'Yangrou paomo (mutton soup with bread)', location: 'Muslim Quarter', duration: '1.5 hours', tips: 'Break the bread yourself' },
            { time: '11:00', title: 'Street Food Exploration', description: 'Roujiamo, liangpi, biangbiang noodles', location: 'Muslim Quarter', duration: '3 hours', tips: 'Come hungry, try everything' },
            { time: '15:00', title: 'Cooking Class', description: 'Learn to make dumplings and noodles', location: 'Local cooking school', duration: '3 hours', tips: 'Book in advance' }
          ],
          accommodation: { name: 'Eastern House', area: 'Near Muslim Quarter', description: 'Boutique hotel near food streets' },
          meals: { breakfast: 'Street breakfast', lunch: 'Food tour included', dinner: 'High Tang All Day Dining' }
        }
      ],
      nature: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Mount Huashan Adventure',
          activities: [
            { time: '07:00', title: 'Mount Huashan', description: 'One of China\'s five sacred mountains', location: 'Huayin City (2 hours from Xian)', duration: '8 hours', tips: 'Take cable car up, hike between peaks' }
          ],
          accommodation: { name: 'Huashan Hotel', area: 'Mountain base', description: 'Stay near the mountain' },
          meals: { breakfast: 'Early breakfast', lunch: 'Packed lunch or mountain restaurant', dinner: 'Local Shaanxi cuisine' }
        }
      ],
      modern: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Modern Xian & Tech',
          activities: [
            { time: '10:00', title: 'Qujiang New District', description: 'Modern development area', location: 'Qujiang', duration: '2 hours', tips: 'Great architecture' },
            { time: '14:00', title: 'Tang Paradise', description: 'Large cultural theme park', location: 'Qujiang', duration: '4 hours', tips: 'Evening light show is spectacular' }
          ],
          accommodation: { name: 'W Xian', area: 'Qujiang', description: 'Modern luxury hotel' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Modern mall food court', dinner: 'Qujiang restaurants' }
        }
      ],
      art: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Museums & Culture',
          activities: [
            { time: '09:00', title: 'Shaanxi History Museum', description: 'One of China\'s best museums', location: 'Yanta District', duration: '3 hours', tips: 'Free entry, get tickets early' },
            { time: '14:00', title: 'Big Wild Goose Pagoda', description: 'Buddhist pagoda and temple', location: 'Yanta District', duration: '2 hours', tips: 'Climb to top for views' },
            { time: '17:00', title: 'Tang Dynasty Show', description: 'Traditional music and dance', location: 'Tang Palace', duration: '2 hours', tips: 'Includes dumpling dinner' }
          ],
          accommodation: { name: 'Gran Melia Xian', area: 'Qujiang', description: 'Near cultural sites' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Museum cafe', dinner: 'Tang Dynasty Show dinner' }
        }
      ],
      shopping: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Souvenirs & Crafts',
          activities: [
            { time: '10:00', title: 'Muslim Quarter Shopping', description: 'Souvenirs, crafts, snacks', location: 'Muslim Quarter', duration: '3 hours', tips: 'Bargain for better prices' },
            { time: '14:00', title: 'Antique Market', description: 'Antiques and replicas', location: 'Various locations', duration: '2 hours', tips: 'Expert eye needed' }
          ],
          accommodation: { name: 'Near Bell Tower', area: 'City Center', description: 'Shopping central' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Street food', dinner: 'Local restaurant' }
        }
      ],
      nightlife: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Night Markets & Bars',
          activities: [
            { time: '19:00', title: 'Muslim Quarter Night Market', description: 'Vibrant night market', location: 'Muslim Quarter', duration: '3 hours', tips: 'Best street food at night' },
            { time: '22:30', title: 'Defuxiang Bar Street', description: 'Bars and live music', location: 'Defuxiang', duration: '2 hours', tips: 'Popular with locals' }
          ],
          accommodation: { name: 'Near Defuxiang', area: 'City Center', description: 'Nightlife area' },
          meals: { breakfast: 'Late brunch', lunch: 'Light meal', dinner: 'Night market food' }
        }
      ],
      local: [
        {
          day: 1,
          city: 'Xi\'an',
          theme: 'Local Life Experience',
          activities: [
            { time: '07:00', title: 'Morning Exercise at Wall', description: 'Join locals for tai chi', location: 'City Wall Park', duration: '1.5 hours', tips: 'Free and authentic' },
            { time: '09:30', title: 'Local Wet Market', description: 'See daily life', location: 'Neighborhood market', duration: '1 hour', tips: 'Great for photos' },
            { time: '14:00', title: 'Tea House', description: 'Traditional tea culture', location: 'Local tea house', duration: '2 hours', tips: 'Try local tea varieties' }
          ],
          accommodation: { name: 'Traditional courtyard', area: 'Old City', description: 'Live like a local' },
          meals: { breakfast: 'Local breakfast', lunch: 'Family restaurant', dinner: 'Home-cooked meal' }
        }
      ]
    }
  },
  chengdu: {
    id: 'chengdu',
    name: 'Chengdu',
    description: 'Home of giant pandas and the capital of Sichuan cuisine',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80',
    highlights: ['Giant Panda Base', 'Jinli Street', 'Wide and Narrow Alleys', 'Leshan Giant Buddha', 'Sichuan Opera'],
    bestAreas: {
      budget: { name: 'Chunxi Road Area', description: 'Central, many budget options' },
      mid: { name: 'Tianfu Square', description: 'City center, convenient location' },
      luxury: { name: 'Jinjiang District', description: 'High-end hotels near river' }
    },
    itineraries: {
      history: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Ancient Shu Civilization',
          activities: [
            { time: '09:00', title: 'Jinsha Site Museum', description: 'Ancient Shu kingdom artifacts', location: 'Jinsha', duration: '3 hours', tips: 'See the famous gold mask' },
            { time: '14:00', title: 'Wuhou Shrine', description: 'Temple dedicated to Zhuge Liang', location: 'Wuhou District', duration: '2 hours', tips: 'Beautiful gardens' },
            { time: '17:00', title: 'Jinli Street', description: 'Ancient street with traditional architecture', location: 'Wuhou District', duration: '2 hours', tips: 'Great for evening stroll' }
          ],
          accommodation: { name: 'Temple House', area: 'City Center', description: 'Boutique hotel in traditional architecture' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Local Sichuan restaurant', dinner: 'Hot pot experience' }
        }
      ],
      food: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Sichuan Cuisine Paradise',
          activities: [
            { time: '08:00', title: 'Local Breakfast', description: 'Dan dan noodles and steamed buns', location: 'Street vendors', duration: '1 hour', tips: 'Start spicy!' },
            { time: '10:00', title: 'Sichuan Cooking Class', description: 'Learn to cook mapo tofu and kung pao chicken', location: 'Cooking school', duration: '4 hours', tips: 'Hands-on experience' },
            { time: '16:00', title: 'Tea House', description: 'Traditional teahouse culture', location: 'People\'s Park', duration: '2 hours', tips: 'Try ear cleaning service' },
            { time: '19:00', title: 'Hot Pot Dinner', description: 'Authentic Sichuan hot pot', location: 'Famous hot pot restaurant', duration: '2 hours', tips: 'Order the spicy broth' }
          ],
          accommodation: { name: 'Niccolo Chengdu', area: 'Chunxi Road', description: 'Near food streets' },
          meals: { breakfast: 'Street breakfast', lunch: 'Dishes you cooked', dinner: 'Hot pot feast' }
        }
      ],
      nature: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Pandas & Mountains',
          activities: [
            { time: '07:30', title: 'Giant Panda Base', description: 'See pandas in natural habitat', location: 'Northern Chengdu', duration: '4 hours', tips: 'Go early when pandas are active' },
            { time: '13:00', title: 'Leshan Giant Buddha', description: 'World\'s largest stone Buddha', location: 'Leshan (2 hours away)', duration: '4 hours', tips: 'Take boat for best view' }
          ],
          accommodation: { name: 'Buddha Zen Hotel', area: 'Near Wenshu Temple', description: 'Peaceful location' },
          meals: { breakfast: 'Early breakfast', lunch: 'Leshan snacks', dinner: 'Vegetarian at temple' }
        }
      ],
      modern: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Modern Chengdu',
          activities: [
            { time: '10:00', title: 'IFS Mall', description: 'Modern shopping with panda sculpture', location: 'Chunxi Road', duration: '2 hours', tips: 'See the climbing panda' },
            { time: '14:00', title: 'Tianfu Square', description: 'City center and museums', location: 'Tianfu Square', duration: '2 hours', tips: 'Visit Sichuan Museum' },
            { time: '17:00', title: 'Lan Kwai Fong', description: 'Modern entertainment district', location: 'Jinjiang', duration: '3 hours', tips: 'Dining and nightlife' }
          ],
          accommodation: { name: 'The Ritz-Carlton', area: 'Chunxi Road', description: 'Luxury in city center' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Modern mall dining', dinner: 'International cuisine' }
        }
      ],
      art: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Sichuan Opera & Culture',
          activities: [
            { time: '10:00', title: 'Sichuan Museum', description: 'Regional art and history', location: 'Huanhua Creek', duration: '3 hours', tips: 'Free entry' },
            { time: '14:00', title: 'Wide and Narrow Alleys', description: 'Restored traditional area', location: 'Qingyang District', duration: '3 hours', tips: 'Art galleries and crafts' },
            { time: '20:00', title: 'Sichuan Opera', description: 'Face-changing performance', location: 'Shufeng Yayun', duration: '1.5 hours', tips: 'Book good seats' }
          ],
          accommodation: { name: 'Diaoyutai Boutique', area: 'Wide and Narrow Alleys', description: 'Traditional style' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Alley restaurants', dinner: 'Before opera' }
        }
      ],
      shopping: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Shopping & Markets',
          activities: [
            { time: '10:00', title: 'Chunxi Road', description: 'Main shopping street', location: 'Chunxi Road', duration: '3 hours', tips: 'Mix of local and international brands' },
            { time: '15:00', title: 'Songxianqiao Market', description: 'Art and antique market', location: 'Qingyang District', duration: '2 hours', tips: 'Bargain hard' }
          ],
          accommodation: { name: 'Chunxi Road area', area: 'City Center', description: 'Shopping central' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Food court', dinner: 'Local restaurant' }
        }
      ],
      nightlife: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Bars & Nightlife',
          activities: [
            { time: '19:00', title: 'Jinli Street Night', description: 'Evening atmosphere', location: 'Jinli Street', duration: '2 hours', tips: 'Beautiful lights' },
            { time: '22:00', title: 'Lan Kwai Fong Bars', description: 'Bar hopping', location: 'Jinjiang', duration: '3 hours', tips: 'Many options' }
          ],
          accommodation: { name: 'Near Lan Kwai Fong', area: 'Jinjiang', description: 'Nightlife area' },
          meals: { breakfast: 'Late brunch', lunch: 'Light meal', dinner: 'Late dinner' }
        }
      ],
      local: [
        {
          day: 1,
          city: 'Chengdu',
          theme: 'Chengdu Lifestyle',
          activities: [
            { time: '08:00', title: 'People\'s Park', description: 'Morning exercises and tea', location: 'People\'s Park', duration: '2 hours', tips: 'Join locals' },
            { time: '11:00', title: 'Bamboo Park', description: 'Peaceful bamboo forest', location: 'Bamboo Park', duration: '2 hours', tips: 'Great for relaxation' },
            { time: '15:00', title: 'Mahjong with Locals', description: 'Learn the game', location: 'Teahouse', duration: '3 hours', tips: 'Locals love to teach' }
          ],
          accommodation: { name: 'Local neighborhood', area: 'Traditional area', description: 'Authentic experience' },
          meals: { breakfast: 'Street breakfast', lunch: 'Local restaurant', dinner: 'Family meal' }
        }
      ]
    }
  },
  guilin: {
    id: 'guilin',
    name: 'Guilin',
    description: 'World-famous karst mountains and Li River scenery',
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=800&q=80',
    highlights: ['Li River Cruise', 'Reed Flute Cave', 'Elephant Trunk Hill', 'Yangshuo', 'Longji Rice Terraces'],
    bestAreas: {
      budget: { name: 'Near Train Station', description: 'Budget hotels and hostels' },
      mid: { name: 'City Center', description: 'Near Elephant Trunk Hill' },
      luxury: { name: 'Li River Area', description: 'Resorts with river views' }
    },
    itineraries: {
      nature: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Li River & Karst Mountains',
          activities: [
            { time: '08:00', title: 'Li River Cruise', description: 'Scenic boat ride to Yangshuo', location: 'Zhujiang Pier', duration: '4 hours', tips: 'Book morning cruise for best light' },
            { time: '13:00', title: 'Yangshuo West Street', description: 'Charming tourist street', location: 'Yangshuo', duration: '2 hours', tips: 'Lunch here' },
            { time: '16:00', title: 'Yulong River Bamboo Raft', description: 'Peaceful raft ride', location: 'Yangshuo', duration: '2 hours', tips: 'More peaceful than Li River' }
          ],
          accommodation: { name: 'Yangshuo Resort', area: 'Yangshuo', description: 'Stay in scenic area' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Yangshuo restaurants', dinner: 'Beer fish (local specialty)' }
        }
      ],
      history: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Ancient Towns & Culture',
          activities: [
            { time: '09:00', title: 'Daxu Ancient Town', description: '1000-year-old town', location: 'Lingchuan County', duration: '3 hours', tips: 'Well preserved ancient architecture' },
            { time: '14:00', title: 'Jingjiang Princes City', description: 'Ming Dynasty palace', location: 'Guilin City', duration: '2 hours', tips: 'Learn about local history' },
            { time: '17:00', title: 'Solitary Beauty Peak', description: 'Best city view', location: 'City Center', duration: '1.5 hours', tips: 'Climb for sunset' }
          ],
          accommodation: { name: 'Shangri-La Guilin', area: 'City Center', description: 'Luxury with views' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Ancient town food', dinner: 'Guilin rice noodles' }
        }
      ],
      food: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Guilin Cuisine',
          activities: [
            { time: '08:00', title: 'Rice Noodles Breakfast', description: 'Famous Guilin rice noodles', location: 'Local shop', duration: '1 hour', tips: 'Ask for spicy' },
            { time: '10:00', title: 'Cooking Class', description: 'Learn local dishes', location: 'Cooking school', duration: '3 hours', tips: 'Make beer fish' },
            { time: '15:00', title: 'Tea Plantation', description: 'Visit tea fields', location: 'Nearby mountains', duration: '3 hours', tips: 'Taste local tea' }
          ],
          accommodation: { name: 'City Center', area: 'Downtown', description: 'Near restaurants' },
          meals: { breakfast: 'Rice noodles', lunch: 'Dishes you made', dinner: 'Local specialties' }
        }
      ],
      modern: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Modern Guilin',
          activities: [
            { time: '10:00', title: 'Two Rivers Four Lakes', description: 'City center water system', location: 'City Center', duration: '2 hours', tips: 'Evening boat ride is best' },
            { time: '14:00', title: 'Modern Shopping', description: 'Contemporary shopping areas', location: 'Zhengyang Road', duration: '2 hours', tips: 'Mix of old and new' }
          ],
          accommodation: { name: 'Lijiang Waterfall Hotel', area: 'City Center', description: 'Famous waterfall facade' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Modern restaurant', dinner: 'Riverside dining' }
        }
      ],
      art: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Natural Art',
          activities: [
            { time: '09:00', title: 'Reed Flute Cave', description: 'Colorful illuminated cave', location: 'Northwest Guilin', duration: '2 hours', tips: 'Amazing stalactites' },
            { time: '12:00', title: 'Elephant Trunk Hill', description: 'Iconic Guilin landmark', location: 'City Center', duration: '1.5 hours', tips: 'Best photo spot' },
            { time: '15:00', title: 'Fubo Hill', description: 'Buddhist carvings and views', location: 'City Center', duration: '2 hours', tips: 'Less crowded' }
          ],
          accommodation: { name: 'Near Elephant Trunk Hill', area: 'City Center', description: 'Scenic location' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Park cafe', dinner: 'Local restaurant' }
        }
      ],
      shopping: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Local Crafts',
          activities: [
            { time: '10:00', title: 'West Street Shopping', description: 'Tourist souvenirs', location: 'Yangshuo', duration: '3 hours', tips: 'Bargain expected' },
            { time: '15:00', title: 'Local Art Gallery', description: 'Landscape paintings', location: 'Yangshuo', duration: '2 hours', tips: 'Local artists' }
          ],
          accommodation: { name: 'Yangshuo', area: 'West Street area', description: 'Shopping central' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Cafe', dinner: 'Local restaurant' }
        }
      ],
      nightlife: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Evening Entertainment',
          activities: [
            { time: '19:30', title: 'Impression Liu Sanjie', description: 'Famous outdoor light show', location: 'Yangshuo', duration: '1.5 hours', tips: 'Book in advance' },
            { time: '21:30', title: 'West Street Nightlife', description: 'Bars and cafes', location: 'Yangshuo', duration: '2 hours', tips: 'Lively atmosphere' }
          ],
          accommodation: { name: 'Near West Street', area: 'Yangshuo', description: 'Nightlife area' },
          meals: { breakfast: 'Late breakfast', lunch: 'Light meal', dinner: 'Before show' }
        }
      ],
      local: [
        {
          day: 1,
          city: 'Guilin',
          theme: 'Rural Life',
          activities: [
            { time: '08:00', title: 'Village Visit', description: 'See traditional rural life', location: 'Nearby village', duration: '3 hours', tips: 'Respectful photography' },
            { time: '13:00', title: 'Farming Experience', description: 'Work in rice fields', location: 'Countryside', duration: '3 hours', tips: 'Seasonal activity' }
          ],
          accommodation: { name: 'Village homestay', area: 'Rural area', description: 'Authentic experience' },
          meals: { breakfast: 'Village breakfast', lunch: 'Farm meal', dinner: 'Home cooking' }
        }
      ]
    }
  },
  hangzhou: {
    id: 'hangzhou',
    name: 'Hangzhou',
    description: 'Heaven on Earth - Famous for West Lake and Longjing tea',
    image: 'https://images.unsplash.com/photo-1565378435245-2528d587e524?w=800&q=80',
    highlights: ['West Lake', 'Lingyin Temple', 'Longjing Tea Fields', 'Xixi Wetland', 'Leifeng Pagoda'],
    bestAreas: {
      budget: { name: 'Near West Lake', description: 'Many budget hotels near attractions' },
      mid: { name: 'Shangcheng District', description: 'City center with good transport' },
      luxury: { name: 'West Lake Area', description: 'Luxury hotels with lake views' }
    },
    itineraries: {
      nature: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'West Lake & Tea Fields',
          activities: [
            { time: '07:00', title: 'West Lake Sunrise', description: 'Peaceful morning walk by the lake', location: 'West Lake', duration: '2 hours', tips: 'Best light for photos' },
            { time: '10:00', title: 'Longjing Tea Fields', description: 'Famous dragon well tea plantations', location: 'Longjing Village', duration: '3 hours', tips: 'Visit tea farmer\'s house' },
            { time: '14:00', title: 'Tea Ceremony', description: 'Learn tea culture', location: 'Tea house', duration: '2 hours', tips: 'Taste fresh spring tea' },
            { time: '17:00', title: 'West Lake Boat Ride', description: 'Sunset cruise', location: 'West Lake', duration: '1.5 hours', tips: 'Romantic experience' }
          ],
          accommodation: { name: 'Four Seasons Hangzhou', area: 'West Lake', description: 'Luxury with lake views' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Tea village lunch', dinner: 'West Lake fish' }
        }
      ],
      history: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'Ancient Temples & Culture',
          activities: [
            { time: '08:00', title: 'Lingyin Temple', description: 'Famous Buddhist temple', location: 'Lingyin', duration: '3 hours', tips: 'Arrive early to avoid crowds' },
            { time: '12:00', title: 'Feilai Feng', description: 'Buddhist carvings in rock', location: 'Lingyin', duration: '1.5 hours', tips: 'Ancient stone statues' },
            { time: '14:30', title: 'Six Harmonies Pagoda', description: 'Historic pagoda with views', location: 'Liuhe', duration: '2 hours', tips: 'Climb for river views' },
            { time: '18:00', title: 'Song Dynasty Show', description: 'Evening cultural performance', location: 'Songcheng', duration: '2 hours', tips: 'Book good seats' }
          ],
          accommodation: { name: 'Amanfayun', area: 'Near Lingyin', description: 'Traditional village style' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Vegetarian at temple', dinner: 'Songcheng dinner' }
        }
      ],
      food: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'Hangzhou Cuisine',
          activities: [
            { time: '08:00', title: 'Local Breakfast', description: 'Congee and youtiao', location: 'Local shop', duration: '1 hour', tips: 'Authentic start' },
            { time: '10:00', title: 'Cooking Class', description: 'Learn Dongpo pork', location: 'Cooking school', duration: '3 hours', tips: 'Famous local dish' },
            { time: '15:00', title: 'Tea Tasting', description: 'Longjing tea varieties', location: 'Tea house', duration: '2 hours', tips: 'Premium grades' },
            { time: '18:00', title: 'Dinner on West Lake', description: 'Scenic dining', location: 'Lakeside restaurant', duration: '2 hours', tips: 'Reserve window seat' }
          ],
          accommodation: { name: 'Near West Lake', area: 'Lakeside', description: 'Foodie paradise' },
          meals: { breakfast: 'Street breakfast', lunch: 'Dongpo pork you made', dinner: 'West Lake specialties' }
        }
      ],
      modern: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'Tech & Innovation',
          activities: [
            { time: '10:00', title: 'Alibaba Headquarters', description: 'Tech giant campus', location: 'Binjiang', duration: '2 hours', tips: 'Book tour in advance' },
            { time: '14:00', title: 'Hangzhou CBD', description: 'Modern business district', location: 'Qianjiang New Town', duration: '2 hours', tips: 'Futuristic architecture' },
            { time: '17:00', title: 'Grand Canal', description: 'Ancient waterway, modern area', location: 'Gongshu District', duration: '2 hours', tips: 'Evening lights' }
          ],
          accommodation: { name: 'Park Hyatt Hangzhou', area: 'CBD', description: 'Modern luxury' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Tech campus dining', dinner: 'Modern Chinese' }
        }
      ],
      art: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'Silk & Arts',
          activities: [
            { time: '09:00', title: 'China Silk Museum', description: 'History of silk production', location: 'West Lake area', duration: '2 hours', tips: 'Free entry' },
            { time: '12:00', title: 'Xiling Seal Engravers Society', description: 'Traditional seal carving', location: 'Gushan Island', duration: '2 hours', tips: 'Artistic heritage' },
            { time: '15:00', title: 'Zhejiang Art Museum', description: 'Contemporary Chinese art', location: 'West Lake', duration: '2 hours', tips: 'Beautiful building' }
          ],
          accommodation: { name: 'Near West Lake', area: 'Cultural area', description: 'Artistic atmosphere' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Cafe', dinner: 'Artistic restaurant' }
        }
      ],
      shopping: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'Silk & Tea Shopping',
          activities: [
            { time: '10:00', title: 'Silk Market', description: 'Buy authentic silk products', location: 'Various locations', duration: '3 hours', tips: 'Check quality carefully' },
            { time: '14:00', title: 'Tea Market', description: 'Longjing tea direct from farmers', location: 'Tea wholesale market', duration: '2 hours', tips: 'Taste before buying' }
          ],
          accommodation: { name: 'Shopping district', area: 'City Center', description: 'Convenient location' },
          meals: { breakfast: 'Hotel breakfast', lunch: 'Food court', dinner: 'Local restaurant' }
        }
      ],
      nightlife: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'West Lake Evening',
          activities: [
            { time: '18:00', title: 'West Lake Music Fountain', description: 'Evening light and water show', location: 'West Lake', duration: '1 hour', tips: 'Free show' },
            { time: '20:00', title: 'Hubin Road', description: 'Bars and nightlife', location: 'Lakeside', duration: '3 hours', tips: 'Lively atmosphere' }
          ],
          accommodation: { name: 'Hubin area', area: 'Lakeside', description: 'Nightlife central' },
          meals: { breakfast: 'Late brunch', lunch: 'Light meal', dinner: 'Lakeside dining' }
        }
      ],
      local: [
        {
          day: 1,
          city: 'Hangzhou',
          theme: 'Local Hangzhou Life',
          activities: [
            { time: '06:00', title: 'Morning Tai Chi', description: 'Join locals at West Lake', location: 'West Lake', duration: '1.5 hours', tips: 'Free activity' },
            { time: '09:00', title: 'Local Market', description: 'Fresh produce and daily life', location: 'Neighborhood market', duration: '2 hours', tips: 'Great for photos' },
            { time: '14:00', title: 'Xixi Wetland', description: 'Natural wetland park', location: 'Xixi', duration: '3 hours', tips: 'Boat ride recommended' }
          ],
          accommodation: { name: 'Local neighborhood', area: 'Traditional area', description: 'Authentic experience' },
          meals: { breakfast: 'Local breakfast', lunch: 'Market food', dinner: 'Home-style cooking' }
        }
      ]
    }
  },
}

// Generate complete itinerary based on user selections
export function generateItinerary(
  selectedCities: string[],
  customCities: string[],
  interests: string[],
  duration: string,
  budget: string
) {
  const allCities = [...selectedCities, ...customCities]
  const daysPerCity = Math.floor(parseInt(duration) / allCities.length) || 2
  
  let itinerary: DayPlan[] = []
  let dayCounter = 1
  
  allCities.forEach((cityId) => {
    const city = citiesData[cityId]
    if (!city) return // Skip custom cities without data
    
    // Pick the best matching itinerary theme
    const primaryInterest = interests[0] || 'history'
    const cityItineraries = city.itineraries[primaryInterest as keyof typeof city.itineraries] || city.itineraries.history
    
    // Add days from this city
    for (let i = 0; i < Math.min(daysPerCity, cityItineraries.length); i++) {
      const dayPlan = { ...cityItineraries[i] }
      dayPlan.day = dayCounter++
      
      // Adjust accommodation based on budget
      if (budget === 'budget') {
        dayPlan.accommodation = city.bestAreas.budget
      } else if (budget === 'luxury') {
        dayPlan.accommodation = city.bestAreas.luxury
      } else {
        dayPlan.accommodation = city.bestAreas.mid
      }
      
      itinerary.push(dayPlan)
    }
  })
  
  return itinerary
}

// Get budget description
export function getBudgetDescription(budgetId: string): string {
  const descriptions: Record<string, string> = {
    budget: 'Hostels, street food, public transport',
    mid: '3-star hotels, local restaurants, mix of transport',
    luxury: '5-star hotels, fine dining, private transfers'
  }
  return descriptions[budgetId] || ''
}

// Get duration label
export function getDurationLabel(durationId: string): string {
  const labels: Record<string, string> = {
    '1-3': '1-3 days',
    '4-6': '4-6 days',
    '1week': '1 week',
    '2weeks': '2 weeks'
  }
  return labels[durationId] || ''
}
