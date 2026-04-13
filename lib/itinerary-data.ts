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
  // Add more cities as needed...
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
