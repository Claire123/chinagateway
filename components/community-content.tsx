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

// 真实攻略内容
const guides = [
  {
    id: 1,
    title: '144小时免签上海完全攻略：6天5夜深度游',
    author: 'Traveler_John',
    avatar: 'J',
    date: '2024-03-15',
    views: 3240,
    likes: 256,
    comments: 45,
    tags: ['上海', '免签', '攻略', '深度游'],
    excerpt: '详细记录了我用144小时免签政策游上海的完整经历。Day1: 外滩+南京路；Day2: 豫园+城隍庙；Day3: 田子坊+新天地；Day4: 陆家嘴+东方明珠；Day5: 迪士尼；Day6: 购物返程。包含详细的地铁线路、美食推荐、避坑指南...',
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&q=80',
    content: `
## Day 1: 抵达上海，外滩夜景
- 上午：抵达浦东机场，乘坐磁悬浮到市区
- 下午：入住酒店，休息调整
- 晚上：外滩夜景，推荐拍照点：外滩观景台

## Day 2: 老城厢文化之旅
- 上午：豫园（建议早去避开人流）
- 中午：城隍庙小吃（推荐：南翔小笼、生煎包）
- 下午：上海博物馆
- 晚上：南京路步行街

## Day 3: 文艺上海
- 上午：田子坊（石库门建筑+创意小店）
- 下午：新天地（时尚购物+下午茶）
- 晚上：淮海路商圈

## Day 4: 现代上海
- 上午：陆家嘴金融区
- 下午：东方明珠/上海中心大厦观景台
- 晚上：滨江大道散步

## Day 5: 迪士尼一日游
- 全天：上海迪士尼乐园
- 建议：提前下载迪士尼APP，购买早享卡

## Day 6: 购物返程
- 上午：免税店购物
- 下午：前往机场

## 实用信息
- 交通：地铁一日票18元，三日票45元
- 住宿：推荐住在外滩或人民广场附近
- 预算：6天约5000-8000元（不含购物）
    `
  },
  {
    id: 2,
    title: '北京协和医院就医全流程分享：从预约到出院',
    author: 'MedicalTourist_Sarah',
    avatar: 'S',
    date: '2024-03-10',
    views: 2890,
    likes: 312,
    comments: 67,
    tags: ['医疗旅游', '北京', '经验分享', '协和医院'],
    excerpt: '从预约到出院，详细记录了我在协和医院的就医体验。包括：1)如何预约国际部；2)就诊当天流程；3)检查项目安排；4)费用明细；5)住宿推荐。总费用比美国便宜70%，医生非常专业...',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    content: '详细就医流程分享...'
  },
  {
    id: 3,
    title: '成都美食地图：本地人推荐的10家必吃餐厅',
    author: 'Foodie_Mike',
    avatar: 'M',
    date: '2024-03-05',
    views: 4567,
    likes: 523,
    comments: 89,
    tags: ['成都', '美食', '推荐', '火锅'],
    excerpt: '在成都住了3年，整理出这份最地道的美食地图。从火锅到小吃一网打尽：1)小龙坎火锅；2)蜀大侠；3)陈麻婆豆腐；4)钟水饺；5)龙抄手；6)担担面；7)串串香；8)兔头；9)钵钵鸡；10)甜水面...',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    content: '成都美食详细推荐...'
  },
  {
    id: 4,
    title: '西安兵马俑+华清池一日游攻略',
    author: 'HistoryBuff_Tom',
    avatar: 'T',
    date: '2024-02-28',
    views: 2156,
    likes: 178,
    comments: 34,
    tags: ['西安', '兵马俑', '一日游', '历史'],
    excerpt: '西安必去的兵马俑和华清池，如何安排一日游？包含交通指南、门票预订、最佳参观时间、讲解服务推荐。建议早上8点出发，避开人流高峰...',
    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&q=80',
    content: '西安一日游攻略...'
  },
  {
    id: 5,
    title: '桂林山水甲天下：漓江游船+阳朔西街',
    author: 'NatureLover_Amy',
    avatar: 'A',
    date: '2024-02-20',
    views: 1876,
    likes: 234,
    comments: 41,
    tags: ['桂林', '漓江', '阳朔', '自然风光'],
    excerpt: '桂林山水甲天下，阳朔山水甲桂林。3天2夜行程：Day1 漓江游船；Day2 遇龙河竹筏+十里画廊；Day3 阳朔西街+印象刘三姐。最佳季节是4-10月...',
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=800&q=80',
    content: '桂林旅游攻略...'
  },
]

// 真实问答内容
const questions = [
  {
    id: 1,
    title: '144小时免签可以从上海入境北京出境吗？',
    author: 'FirstTimer_2024',
    avatar: 'F',
    date: '2024-03-18',
    replies: 12,
    views: 1567,
    tags: ['免签', '入境', '政策'],
    solved: true,
    bestAnswer: {
      author: 'ChinaExpert_Lisa',
      content: '不可以。144小时免签必须在同一区域内出入境。上海入境必须在上海、江苏或浙江区域内出境。如果想上海进北京出，需要申请普通旅游签证。',
      likes: 45
    }
  },
  {
    id: 2,
    title: '外国人在中国看病需要准备什么材料？',
    author: 'HealthSeeker',
    avatar: 'H',
    date: '2024-03-14',
    replies: 18,
    views: 2345,
    tags: ['医疗', '材料', '准备'],
    solved: true,
    bestAnswer: {
      author: 'MedicalCoordinator_Jane',
      content: '1) 护照原件及复印件；2) 过往病历和检查报告（英文或中文）；3) 当前服用的药物清单；4) 保险单据；5) 签证/入境章页复印件。建议提前联系医院国际部，他们会发详细清单。',
      likes: 67
    }
  },
  {
    id: 3,
    title: '推荐一下适合带父母去的国内旅游目的地',
    author: 'FamilyTraveler',
    avatar: 'F',
    date: '2024-03-12',
    replies: 24,
    views: 3456,
    tags: ['家庭游', '推荐', '父母'],
    solved: false,
    answers: [
      { author: 'SeniorTravel_Guide', content: '推荐桂林！节奏慢，风景美，竹筏很休闲。', likes: 23 },
      { author: 'BeijingLocal_Wang', content: '北京不错，景点集中，交通便利，医疗资源丰富。', likes: 18 }
    ]
  },
  {
    id: 4,
    title: '支付宝和微信支付外国人可以用吗？',
    author: 'PaymentQuestion',
    avatar: 'P',
    date: '2024-03-08',
    replies: 15,
    views: 4567,
    tags: ['支付', '支付宝', '微信'],
    solved: true,
    bestAnswer: {
      author: 'DigitalNomad_Kevin',
      content: '可以！现在外国人可以用护照注册支付宝和微信支付。需要：1) 护照实名认证；2) 绑定国际信用卡（Visa/Mastercard）；3) 部分功能可能受限，但日常消费没问题。',
      likes: 89
    }
  },
  {
    id: 5,
    title: '上海哪个医院看心脏最好？有国际部吗？',
    author: 'CardiacPatient',
    avatar: 'C',
    date: '2024-03-05',
    replies: 9,
    views: 1234,
    tags: ['医疗', '上海', '心脏科'],
    solved: true,
    bestAnswer: {
      author: 'Dr_Chen_Cardio',
      content: '推荐上海东方医院心脏中心，有国际医疗中心，英文服务很好。另外中山医院、瑞金医院也很强。建议先通过ChinaGateway预约，可以安排专家号。',
      likes: 34
    }
  },
]

// 真实结伴信息
const buddies = [
  {
    id: 1,
    title: '寻找4月一起去云南的旅伴（大理-丽江-香格里拉）',
    author: 'SoloTraveler_Lisa',
    avatar: 'L',
    destination: '云南（大理、丽江、香格里拉）',
    dates: '2024-04-15 ~ 2024-04-22',
    people: '2-4人',
    budget: '中等预算（人均5000-8000元）',
    tags: ['自由行', '摄影', '美食', '少数民族文化'],
    description: '计划去大理古城、洱海、丽江古城、玉龙雪山、香格里拉。喜欢拍照和尝试当地美食，希望找到志同道合的朋友一起分摊费用。已有2人（女生），再找2人，男女不限。',
    status: 'open',
    createdAt: '2024-03-10',
    applicants: 5
  },
  {
    id: 2,
    title: '5月北京-西安文化之旅，求结伴',
    author: 'CultureLover_Tom',
    avatar: 'T',
    destination: '北京、西安',
    dates: '2024-05-01 ~ 2024-05-08',
    people: '1-2人',
    budget: '高预算（人均10000+元）',
    tags: ['文化游', '历史', '深度游', '博物馆'],
    description: '计划深度游览两个古都，重点看博物馆和历史遗迹。北京：故宫、国博、长城；西安：兵马俑、陕历博、古城墙。希望找到对历史文化感兴趣的朋友，可以一起请导游。',
    status: 'open',
    createdAt: '2024-03-08',
    applicants: 3
  },
  {
    id: 3,
    title: '6月成都熊猫基地+美食之旅，女生拼房',
    author: 'PandaFan_Amy',
    avatar: 'A',
    destination: '成都',
    dates: '2024-06-10 ~ 2024-06-15',
    people: '1人',
    budget: '中等预算（人均4000-6000元）',
    tags: ['熊猫', '美食', '轻松游', '女生'],
    description: '主要想看大熊猫和吃成都美食，行程比较轻松。希望找到女生一起拼房，可以互相拍照。计划去：熊猫基地、宽窄巷子、锦里、武侯祠、都江堰。',
    status: 'open',
    createdAt: '2024-03-05',
    applicants: 2
  },
  {
    id: 4,
    title: '7月西藏拉萨-林芝深度游，寻找同行者',
    author: 'AdventureSeeker_Mark',
    avatar: 'M',
    destination: '西藏（拉萨、林芝）',
    dates: '2024-07-10 ~ 2024-07-20',
    people: '2-3人',
    budget: '中等预算（人均8000-12000元）',
    tags: ['西藏', '高原', '自然风光', '摄影'],
    description: '计划去布达拉宫、大昭寺、纳木错、林芝桃花（虽然7月没有桃花但风景依然美）。需要找身体健康、能适应高原的伙伴。已有1人（男），再找2-3人。',
    status: 'open',
    createdAt: '2024-03-01',
    applicants: 7
  },
]

// 发帖弹窗组件
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
    // 这里可以添加提交到后端的逻辑
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

  // 攻略详情页
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

  // 问答详情页
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
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium">
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
