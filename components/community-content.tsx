'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  MessageCircle, 
  Users, 
  Search, 
  ThumbsUp, 
  MessageSquare, 
  Eye,
  MapPin,
  Calendar,
  ChevronRight,
  Plus,
  X
} from 'lucide-react'
import Link from 'next/link'

// Real guide content - ALL IN ENGLISH
const guides = [
  {
    id: 1,
    title: 'Complete 144-Hour Visa-Free Shanghai Guide: 6-Day Deep Dive',
    author: 'Traveler_John',
    avatar: 'J',
    date: '2024-03-15',
    views: 3240,
    likes: 256,
    comments: 45,
    tags: ['Shanghai', 'Visa-Free', 'Guide', 'Deep Dive'],
    excerpt: 'A detailed record of my complete experience traveling Shanghai with the 144-hour visa-free policy. Day 1: The Bund + Nanjing Road; Day 2: Yu Garden + City God Temple; Day 3: Tianzifang + Xintiandi; Day 4: Lujiazui + Oriental Pearl; Day 5: Disney; Day 6: Shopping and departure. Includes detailed subway routes, food recommendations, and tips to avoid tourist traps...',
    image: '/images/community/shanghai-guide.jpg',
    content: `
## Day 1: Arrival in Shanghai, The Bund Night View
- Morning: Arrive at Pudong Airport, take Maglev to city center
- Afternoon: Check into hotel, rest and adjust
- Evening: The Bund night view, recommended photo spot: Bund Viewing Platform

## Day 2: Old Shanghai Cultural Tour
- Morning: Yu Garden (go early to avoid crowds)
- Noon: City God Temple snacks (recommended: Nanxiang Steamed Buns, Pan-Fried Buns)
- Afternoon: Shanghai Museum
- Evening: Nanjing Road Pedestrian Street

## Day 3: Artsy Shanghai
- Morning: Tianzifang (Shikumen architecture + creative shops)
- Afternoon: Xintiandi (fashion shopping + afternoon tea)
- Evening: Huaihai Road commercial district

## Day 4: Modern Shanghai
- Morning: Lujiazui Financial District
- Afternoon: Oriental Pearl / Shanghai Tower observation deck
- Evening: Riverside Promenade walk

## Day 5: Disney Day Trip
- All day: Shanghai Disneyland
- Tips: Download Disney app in advance, purchase Early Entry pass

## Day 6: Shopping and Departure
- Morning: Duty-free shopping
- Afternoon: Head to airport

## Practical Information
- Transportation: Subway day pass 18 RMB, 3-day pass 45 RMB
- Accommodation: Recommended to stay near The Bund or People's Square
- Budget: 6 days approximately 5000-8000 RMB (excluding shopping)
    `
  },
  {
    id: 2,
    title: 'Peking Union Medical College Hospital: Complete Medical Tourism Experience',
    author: 'MedicalTourist_Sarah',
    avatar: 'S',
    date: '2024-03-10',
    views: 2890,
    likes: 312,
    comments: 67,
    tags: ['Medical Tourism', 'Beijing', 'Experience', 'Peking Union'],
    excerpt: 'From appointment to discharge, a detailed record of my medical experience at Peking Union Hospital. Includes: 1) How to book the International Department; 2) Day-of-appointment process; 3) Examination arrangements; 4) Cost breakdown; 5) Accommodation recommendations. Total cost was 70% cheaper than the US, doctors were very professional...',
    image: '/images/community/medical-tourism.jpg',
    content: 'Detailed medical tourism experience...'
  },
  {
    id: 3,
    title: 'Chengdu Food Map: 10 Must-Eat Restaurants Recommended by Locals',
    author: 'Foodie_Mike',
    avatar: 'M',
    date: '2024-03-05',
    views: 4567,
    likes: 523,
    comments: 89,
    tags: ['Chengdu', 'Food', 'Recommendations', 'Hot Pot'],
    excerpt: 'Lived in Chengdu for 3 years, compiled this most authentic food map. From hot pot to snacks: 1) Xiaolongkan Hot Pot; 2) Shu Da Xia; 3) Chen Mapo Tofu; 4) Zhong Dumplings; 5) Dragon Wontons; 6) Dan Dan Noodles; 7) Skewered Delights; 8) Rabbit Heads; 9) Bobo Chicken; 10) Sweet Water Noodles...',
    image: '/images/community/chengdu-food.jpg',
    content: 'Detailed Chengdu food recommendations...'
  },
  {
    id: 4,
    title: 'Xi\'an Terracotta Warriors + Huaqing Pool One-Day Guide',
    author: 'HistoryBuff_Tom',
    avatar: 'T',
    date: '2024-02-28',
    views: 2156,
    likes: 178,
    comments: 34,
    tags: ['Xi\'an', 'Terracotta Warriors', 'One-Day', 'History'],
    excerpt: 'Must-visit Terracotta Warriors and Huaqing Pool in Xi\'an, how to arrange a one-day tour? Includes transportation guide, ticket booking, best visiting times, and guide service recommendations. Suggested departure at 8 AM to avoid peak crowds...',
    image: '/images/community/xian-terracotta.jpg',
    content: 'Xi\'an one-day tour guide...'
  },
  {
    id: 5,
    title: 'Guilin Landscape: Li River Cruise + Yangshuo West Street',
    author: 'NatureLover_Amy',
    avatar: 'A',
    date: '2024-02-20',
    views: 1876,
    likes: 234,
    comments: 41,
    tags: ['Guilin', 'Li River', 'Yangshuo', 'Nature'],
    excerpt: 'Guilin landscape is the best under heaven, Yangshuo landscape is the best in Guilin. 3-day 2-night itinerary: Day 1 Li River cruise; Day 2 Yulong River bamboo raft + Ten Mile Gallery; Day 3 Yangshuo West Street + Impression Liu Sanjie. Best season is April-October...',
    image: '/images/community/guilin-landscape.jpg',
    content: 'Guilin travel guide...'
  },
]

// Real Q&A content - ALL IN ENGLISH
const questions = [
  {
    id: 1,
    title: 'Can I enter through Shanghai and exit through Beijing with 144-hour visa-free?',
    author: 'FirstTimer_2024',
    avatar: 'F',
    date: '2024-03-18',
    replies: 12,
    views: 1567,
    tags: ['Visa-Free', 'Entry', 'Policy'],
    solved: true,
    bestAnswer: {
      author: 'ChinaExpert_Lisa',
      content: 'No. The 144-hour visa-free transit requires you to enter and exit within the same region. If you enter through Shanghai, you must exit from Shanghai, Jiangsu, or Zhejiang. If you want to enter Shanghai and exit Beijing, you need to apply for a regular tourist visa.',
      likes: 45
    }
  },
  {
    id: 2,
    title: 'What documents do foreigners need to prepare for medical treatment in China?',
    author: 'HealthSeeker',
    avatar: 'H',
    date: '2024-03-14',
    replies: 18,
    views: 2345,
    tags: ['Medical', 'Documents', 'Preparation'],
    solved: true,
    bestAnswer: {
      author: 'MedicalCoordinator_Jane',
      content: '1) Passport original and copy; 2) Past medical records and examination reports (English or Chinese); 3) List of current medications; 4) Insurance documents; 5) Visa/entry stamp page copy. It is recommended to contact the hospital International Department in advance, they will send a detailed checklist.',
      likes: 67
    }
  },
  {
    id: 3,
    title: 'Recommend domestic travel destinations suitable for traveling with parents',
    author: 'FamilyTraveler',
    avatar: 'F',
    date: '2024-03-12',
    replies: 24,
    views: 3456,
    tags: ['Family Trip', 'Recommendations', 'Parents'],
    solved: false,
    answers: [
      { author: 'SeniorTravel_Guide', content: 'Recommend Guilin! Slow pace, beautiful scenery, bamboo rafting is very relaxing.', likes: 23 },
      { author: 'BeijingLocal_Wang', content: 'Beijing is good, attractions are concentrated, transportation is convenient, medical resources are abundant.', likes: 18 }
    ]
  },
  {
    id: 4,
    title: 'Can foreigners use Alipay and WeChat Pay?',
    author: 'PaymentQuestion',
    avatar: 'P',
    date: '2024-03-08',
    replies: 15,
    views: 4567,
    tags: ['Payment', 'Alipay', 'WeChat'],
    solved: true,
    bestAnswer: {
      author: 'DigitalNomad_Kevin',
      content: 'Yes! Foreigners can now register for Alipay and WeChat Pay with a passport. Requirements: 1) Passport real-name verification; 2) Link international credit card (Visa/Mastercard); 3) Some features may be limited, but daily consumption is no problem.',
      likes: 89
    }
  },
  {
    id: 5,
    title: 'Which hospital in Shanghai is best for heart conditions? Do they have an international department?',
    author: 'CardiacPatient',
    avatar: 'C',
    date: '2024-03-05',
    replies: 9,
    views: 1234,
    tags: ['Medical', 'Shanghai', 'Cardiology'],
    solved: true,
    bestAnswer: {
      author: 'Dr_Chen_Cardio',
      content: 'Recommend Shanghai East Hospital Cardiac Center, they have an International Medical Center with excellent English service. Also Zhongshan Hospital and Ruijin Hospital are very strong. It is recommended to book through ChinaGateway, they can arrange specialist appointments.',
      likes: 34
    }
  },
]

// Real travel buddy content - ALL IN ENGLISH
const buddies = [
  {
    id: 1,
    title: 'Looking for travel buddies to Yunnan in April (Dali-Lijiang-Shangri-La)',
    author: 'SoloTraveler_Lisa',
    avatar: 'L',
    destination: 'Yunnan (Dali, Lijiang, Shangri-La)',
    dates: '2024-04-15 ~ 2024-04-22',
    people: '2-4 people',
    budget: 'Mid-range (5,000-8,000 CNY per person)',
    tags: ['Free Travel', 'Photography', 'Food', 'Ethnic Culture'],
    description: 'Planning to visit Dali Ancient Town, Erhai Lake, Lijiang Ancient Town, Jade Dragon Snow Mountain, and Shangri-La. Love photography and trying local food, hoping to find like-minded friends to share costs. Already have 2 people (female), looking for 2 more, gender not limited.',
    status: 'open',
    createdAt: '2024-03-10',
    applicants: 5
  },
  {
    id: 2,
    title: 'May Beijing-Xi\'an Cultural Journey, seeking companions',
    author: 'CultureLover_Tom',
    avatar: 'T',
    destination: 'Beijing, Xi\'an',
    dates: '2024-05-01 ~ 2024-05-08',
    people: '1-2 people',
    budget: 'High budget (10,000+ CNY per person)',
    tags: ['Cultural Tour', 'History', 'Deep Dive', 'Museums'],
    description: 'Planning an in-depth tour of two ancient capitals, focusing on museums and historical sites. Beijing: Forbidden City, National Museum, Great Wall; Xi\'an: Terracotta Warriors, Shaanxi History Museum, Ancient City Wall. Hoping to find friends interested in history and culture, can hire a guide together.',
    status: 'open',
    createdAt: '2024-03-08',
    applicants: 3
  },
  {
    id: 3,
    title: 'June Chengdu Panda Base + Food Tour, female room share',
    author: 'PandaFan_Amy',
    avatar: 'A',
    destination: 'Chengdu',
    dates: '2024-06-10 ~ 2024-06-15',
    people: '1 person',
    budget: 'Mid-range (4,000-6,000 CNY per person)',
    tags: ['Pandas', 'Food', 'Relaxed', 'Female'],
    description: 'Mainly want to see giant pandas and eat Chengdu food, itinerary is relatively relaxed. Hoping to find a female to share room costs, can take photos of each other. Planned visits: Panda Base, Kuanzhai Alley, Jinli, Wuhou Shrine, Dujiangyan.',
    status: 'open',
    createdAt: '2024-03-05',
    applicants: 2
  },
  {
    id: 4,
    title: 'July Tibet Lhasa-Linchi deep tour, seeking companions',
    author: 'AdventureSeeker_Mark',
    avatar: 'M',
    destination: 'Tibet (Lhasa, Linchi)',
    dates: '2024-07-10 ~ 2024-07-20',
    people: '2-3 people',
    budget: 'Mid-range (8,000-12,000 CNY per person)',
    tags: ['Tibet', 'Plateau', 'Nature', 'Photography'],
    description: 'Planning to visit Potala Palace, Jokhang Temple, Namtso Lake, Linchi (though no peach blossoms in July but scenery is still beautiful). Need to find partners in good health who can adapt to high altitude. Already have 1 person (male), looking for 2-3 more.',
    status: 'open',
    createdAt: '2024-03-01',
    applicants: 7
  },
]

// New Post Modal Component
function NewPostModal({ isOpen, onClose, type }: { isOpen: boolean; onClose: () => void; type: 'guide' | 'question' | 'buddy' }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
    destination: '',
    dates: '',
    people: '',
    budget: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Post submitted successfully! It will be reviewed before publishing.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-800">
            {type === 'guide' && 'Write a Guide'}
            {type === 'question' && 'Ask a Question'}
            {type === 'buddy' && 'Find Travel Buddies'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title *</label>
            <Input 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder={type === 'guide' ? 'e.g., My 5-day Shanghai itinerary' : type === 'question' ? 'e.g., How to apply for visa?' : 'e.g., Looking for travel buddies to Beijing'}
              className="w-full"
            />
          </div>

          {type === 'buddy' && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
                <Input 
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  placeholder="e.g., Beijing, Shanghai"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Travel Dates</label>
                  <Input 
                    value={formData.dates}
                    onChange={(e) => setFormData({...formData, dates: e.target.value})}
                    placeholder="e.g., 2024-04-15 to 2024-04-22"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Number of People</label>
                  <Input 
                    value={formData.people}
                    onChange={(e) => setFormData({...formData, people: e.target.value})}
                    placeholder="e.g., 2-4 people"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Budget Range</label>
                <Input 
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  placeholder="e.g., Medium budget (5000-8000 CNY per person)"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content *</label>
            <textarea 
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              placeholder={type === 'guide' ? 'Share your travel experience, tips, and recommendations...' : type === 'question' ? 'Describe your question in detail...' : 'Describe your travel plan and what kind of buddies you are looking for...'}
              className="w-full h-40 p-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma separated)</label>
            <Input 
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              placeholder="e.g., Shanghai, travel tips, budget"
            />
          </div>

          <div className="pt-4 flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 rounded-full">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-slate-700 hover:bg-slate-800 rounded-full">
              Submit Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export function CommunityContent() {
  const [activeTab, setActiveTab] = useState<'guides' | 'qa' | 'buddies'>('guides')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGuide, setSelectedGuide] = useState<typeof guides[0] | null>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<typeof questions[0] | null>(null)
  const [isNewPostOpen, setIsNewPostOpen] = useState(false)
  const [newPostType, setNewPostType] = useState<'guide' | 'question' | 'buddy'>('guide')

  const openNewPost = (type: 'guide' | 'question' | 'buddy') => {
    setNewPostType(type)
    setIsNewPostOpen(true)
  }

  // Guide detail page
  if (selectedGuide) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container-apple py-8">
          <button 
            onClick={() => setSelectedGuide(null)}
            className="text-slate-500 hover:text-slate-700 mb-6 flex items-center gap-1"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Community
          </button>
          
          <article className="max-w-3xl mx-auto">
            <img 
              src={selectedGuide.image} 
              alt={selectedGuide.title}
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
            
            <div className="flex items-center gap-2 mb-4">
              {selectedGuide.tags.map((tag) => (
                <Badge key={tag} className="bg-slate-100 text-slate-600">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl font-bold text-slate-800 mb-4">{selectedGuide.title}</h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium">
                {selectedGuide.avatar}
              </div>
              <div>
                <p className="font-medium text-slate-800">{selectedGuide.author}</p>
                <p className="text-sm text-slate-400">{selectedGuide.date}</p>
              </div>
              <div className="ml-auto flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {selectedGuide.views}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {selectedGuide.likes}
                </span>
              </div>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{selectedGuide.excerpt}</p>
              <div className="whitespace-pre-line text-slate-700">{selectedGuide.content}</div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Comments ({selectedGuide.comments})</h3>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-slate-400 text-center">Login to view and post comments</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }

  // Q&A detail page
  if (selectedQuestion) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container-apple py-8">
          <button 
            onClick={() => setSelectedQuestion(null)}
            className="text-slate-500 hover:text-slate-700 mb-6 flex items-center gap-1"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Community
          </button>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              {selectedQuestion.solved && (
                <Badge className="bg-green-100 text-green-700">Solved</Badge>
              )}
              {selectedQuestion.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-2xl font-bold text-slate-800 mb-4">{selectedQuestion.title}</h1>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 flex-shrink-0">
                {selectedQuestion.avatar}
              </div>
              <div>
                <p className="font-medium text-slate-800">{selectedQuestion.author}</p>
                <p className="text-sm text-slate-400">{selectedQuestion.date}</p>
              </div>
            </div>
            
            {selectedQuestion.bestAnswer && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-green-100 text-green-700">Best Answer</Badge>
                  <span className="text-sm text-slate-500">by {selectedQuestion.bestAnswer.author}</span>
                </div>
                <p className="text-slate-700">{selectedQuestion.bestAnswer.content}</p>
                <div className="mt-3 flex items-center gap-1 text-sm text-slate-400">
                  <ThumbsUp className="w-4 h-4" />
                  {selectedQuestion.bestAnswer.likes} likes
                </div>
              </div>
            )}
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{selectedQuestion.replies} Replies</h3>
              {selectedQuestion.answers?.map((answer: any, idx: number) => (
                <div key={idx} className="border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-slate-800">{answer.author}</span>
                  </div>
                  <p className="text-slate-600">{answer.content}</p>
                  <div className="mt-2 flex items-center gap-1 text-sm text-slate-400">
                    <ThumbsUp className="w-4 h-4" />
                    {answer.likes} likes
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* New Post Modal */}
      <NewPostModal 
        isOpen={isNewPostOpen} 
        onClose={() => setIsNewPostOpen(false)} 
        type={newPostType}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            Community
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Connect with fellow travelers, share your experiences, ask questions, 
            and find travel companions for your China journey.
          </p>
        </div>
      </section>

      {/* Tabs & Search */}
      <section className="sticky top-12 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="container-apple py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Tabs */}
            <div className="flex gap-1 bg-slate-100/50 p-1 rounded-xl">
              {[
                { id: 'guides', label: 'Guides', icon: BookOpen },
                { id: 'qa', label: 'Q&A', icon: MessageCircle },
                { id: 'buddies', label: 'Travel Buddies', icon: Users },
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-slate-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Search & New Post */}
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-slate-50 border-slate-200 rounded-full text-sm"
                />
              </div>
              <Button 
                onClick={() => openNewPost(activeTab === 'guides' ? 'guide' : activeTab === 'qa' ? 'question' : 'buddy')}
                className="bg-slate-700 hover:bg-slate-800 text-white rounded-full px-4"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container-apple">
          {/* Guides Tab */}
          {activeTab === 'guides' && (
            <div className="space-y-6">
              {guides.map((guide) => (
                <Card 
                  key={guide.id} 
                  className="bg-slate-50/50 border-0 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedGuide(guide)}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {guide.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-slate-200 text-slate-600 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {guide.title}
                      </h3>
                      
                      <p className="text-slate-500 mb-4 line-clamp-2">
                        {guide.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-medium text-slate-600">
                            {guide.avatar}
                          </div>
                          <span className="text-sm text-slate-600">{guide.author}</span>
                          <span className="text-xs text-slate-400">{guide.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {guide.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {guide.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {guide.comments}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Q&A Tab */}
          {activeTab === 'qa' && (
            <div className="space-y-4">
              {questions.map((question) => (
                <Card 
                  key={question.id} 
                  className="bg-slate-50/50 border-0 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedQuestion(question)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-medium text-slate-600 flex-shrink-0">
                        {question.avatar}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {question.solved && (
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              Solved
                            </Badge>
                          )}
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-slate-200 text-slate-600 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {question.title}
                        </h3>
                        
                        {question.bestAnswer && (
                          <p className="text-slate-500 text-sm mb-3 line-clamp-2">
                            <span className="text-green-600 font-medium">Best Answer:</span> {question.bestAnswer.content}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span>{question.author}</span>
                          <span>{question.date}</span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {question.replies} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {question.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Buddies Tab */}
          {activeTab === 'buddies' && (
            <div className="grid md:grid-cols-2 gap-6">
              {buddies.map((buddy) => (
                <Card key={buddy.id} className="bg-slate-50/50 border-0 rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-medium text-slate-600">
                          {buddy.avatar}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 line-clamp-1">
                            {buddy.title}
                          </h3>
                          <p className="text-sm text-slate-400">{buddy.author}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        {buddy.status === 'open' ? 'Open' : 'Closed'}
                      </Badge>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {buddy.destination}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {buddy.dates}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {buddy.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-200 text-slate-600 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {buddy.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span>{buddy.people}</span>
                        <span>{buddy.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400">{buddy.applicants} applicants</span>
                        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-800">
                          Apply
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
