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
  Plus
} from 'lucide-react'
import Link from 'next/link'

// Mock data for guides
const guides = [
  {
    id: 1,
    title: '144小时免签上海完全攻略',
    author: 'Traveler_John',
    avatar: 'J',
    date: '2024-01-15',
    views: 2340,
    likes: 156,
    comments: 23,
    tags: ['上海', '免签', '攻略'],
    excerpt: '详细记录了我用144小时免签政策游上海的完整经历，包含行程规划、美食推荐、避坑指南...',
    image: '/images/guides/shanghai-guide.jpg',
  },
  {
    id: 2,
    title: '北京协和医院就医全流程分享',
    author: 'MedicalTourist_Sarah',
    avatar: 'S',
    date: '2024-01-10',
    views: 1890,
    likes: 234,
    comments: 45,
    tags: ['医疗旅游', '北京', '经验分享'],
    excerpt: '从预约到出院，详细记录了我在协和医院的就医体验，包括费用、流程、注意事项...',
    image: '/images/guides/hospital-guide.jpg',
  },
  {
    id: 3,
    title: '成都美食地图：本地人推荐的10家必吃餐厅',
    author: 'Foodie_Mike',
    avatar: 'M',
    date: '2024-01-08',
    views: 3456,
    likes: 412,
    comments: 67,
    tags: ['成都', '美食', '推荐'],
    excerpt: '在成都住了3年，整理出这份最地道的美食地图，从火锅到小吃一网打尽...',
    image: '/images/guides/chengdu-food.jpg',
  },
]

// Mock data for Q&A
const questions = [
  {
    id: 1,
    title: '144小时免签可以从上海入境北京出境吗？',
    author: 'FirstTimer_2024',
    avatar: 'F',
    date: '2024-01-16',
    replies: 8,
    views: 567,
    tags: ['免签', '入境', '政策'],
    solved: true,
  },
  {
    id: 2,
    title: '外国人在中国看病需要准备什么材料？',
    author: 'HealthSeeker',
    avatar: 'H',
    date: '2024-01-14',
    replies: 12,
    views: 892,
    tags: ['医疗', '材料', '准备'],
    solved: true,
  },
  {
    id: 3,
    title: '推荐一下适合带父母去的国内旅游目的地',
    author: 'FamilyTraveler',
    avatar: 'F',
    date: '2024-01-12',
    replies: 15,
    views: 1234,
    tags: ['家庭游', '推荐', '父母'],
    solved: false,
  },
  {
    id: 4,
    title: '支付宝和微信支付外国人可以用吗？',
    author: 'PaymentQuestion',
    avatar: 'P',
    date: '2024-01-11',
    replies: 6,
    views: 2103,
    tags: ['支付', '支付宝', '微信'],
    solved: true,
  },
]

// Mock data for travel buddies
const buddies = [
  {
    id: 1,
    title: '寻找2月底一起去云南的旅伴',
    author: 'SoloTraveler_Lisa',
    avatar: 'L',
    destination: '云南',
    dates: '2024-02-20 ~ 2024-03-01',
    people: '2-3人',
    budget: '中等预算',
    tags: ['自由行', '摄影', '美食'],
    description: '计划去大理、丽江、香格里拉，喜欢拍照和尝试当地美食，希望找到志同道合的朋友一起...',
    status: 'open',
  },
  {
    id: 2,
    title: '4月上海-北京-西安文化之旅，求结伴',
    author: 'CultureLover_Tom',
    avatar: 'T',
    destination: '上海、北京、西安',
    dates: '2024-04-05 ~ 2024-04-18',
    people: '1-2人',
    budget: '高预算',
    tags: ['文化游', '历史', '深度游'],
    description: '计划深度游览三个古都，重点看博物馆和历史遗迹，希望找到对历史文化感兴趣的朋友...',
    status: 'open',
  },
  {
    id: 3,
    title: '6月成都熊猫基地+美食之旅',
    author: 'PandaFan_Amy',
    avatar: 'A',
    destination: '成都',
    dates: '2024-06-10 ~ 2024-06-15',
    people: '1人',
    budget: '中等预算',
    tags: ['熊猫', '美食', '轻松游'],
    description: '主要想看大熊猫和吃成都美食，行程比较轻松，希望找到女生一起拼房...',
    status: 'open',
  },
]

export function CommunityContent() {
  const [activeTab, setActiveTab] = useState<'guides' | 'qa' | 'buddies'>('guides')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple text-center">
          <h1 className="text-headline font-semibold text-slate-800 mb-4">
            Community
          </h1>
          <p className="text-body text-slate-500 max-w-xl mx-auto">
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
                { id: 'guides', label: '攻略', icon: BookOpen },
                { id: 'qa', label: '问答', icon: MessageCircle },
                { id: 'buddies', label: '结伴', icon: Users },
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

            {/* Search */}
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
              <Button className="bg-slate-700 hover:bg-slate-800 text-white rounded-full px-4">
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
                <Card key={guide.id} className="bg-slate-50/50 border-0 rounded-2xl overflow-hidden hover-lift cursor-pointer">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-slate-200 to-stone-200 flex items-center justify-center">
                      <span className="text-slate-400 text-sm">Guide Image</span>
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
                      
                      <h3 className="text-title-2 font-semibold text-slate-800 mb-2">
                        {guide.title}
                      </h3>
                      
                      <p className="text-body-small text-slate-500 mb-4 line-clamp-2">
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
                <Card key={question.id} className="bg-slate-50/50 border-0 rounded-2xl hover-lift cursor-pointer">
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
                        
                        <h3 className="text-title-3 font-semibold text-slate-800 mb-2">
                          {question.title}
                        </h3>
                        
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
                <Card key={buddy.id} className="bg-slate-50/50 border-0 rounded-2xl hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-medium text-slate-600">
                          {buddy.avatar}
                        </div>
                        <div>
                          <h3 className="text-title-3 font-semibold text-slate-800 line-clamp-1">
                            {buddy.title}
                          </h3>
                          <p className="text-sm text-slate-400">{buddy.author}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        {buddy.status === 'open' ? 'Recruiting' : 'Closed'}
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
                    <p className="text-body-small text-slate-500 mb-4 line-clamp-2">
                      {buddy.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span>{buddy.people}</span>
                        <span>{buddy.budget}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-800">
                        Contact
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
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
