'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  HeartPulse, 
  Smile,
  Users,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Clock,
  CheckCircle,
  Building2,
  Calendar
} from 'lucide-react'

// 体检中心数据
const checkupCenters = [
  {
    id: 'meinian',
    name: '美年大健康',
    nameEn: 'Meinian Onehealth',
    image: '/images/healthcare/checkup-01.jpg',
    description: '中国领先的专业体检机构，提供全面健康体检服务',
    features: ['全面体检套餐', '高端影像设备', '快速出报告', '专家解读'],
    address: '上海多个分院',
    phone: '400-000-0000',
    rating: 4.6,
  },
  {
    id: 'ikang',
    name: '爱康国宾',
    nameEn: 'iKang',
    image: '/images/healthcare/checkup-02.jpg',
    description: '知名连锁体检品牌，专注高品质健康管理',
    features: ['个性化套餐', 'VIP服务', '健康档案管理', '绿色就医通道'],
    address: '上海多个分院',
    phone: '400-000-0000',
    rating: 4.5,
  },
  {
    id: 'rich',
    name: '瑞慈医疗',
    nameEn: 'Rich Healthcare',
    image: '/images/healthcare/checkup-03.jpg',
    description: '高端体检服务，引进国际先进医疗设备',
    features: ['肿瘤早筛', '心脑血管检查', '基因检测', '私人医生'],
    address: '上海多个分院',
    phone: '400-000-0000',
    rating: 4.7,
  },
  {
    id: 'huashan-checkup',
    name: '华山医院体检中心',
    nameEn: 'Huashan Hospital Health Center',
    image: '/images/healthcare/huashan.jpg',
    description: '三甲公立医院体检中心，医疗资源丰富',
    features: ['权威医疗团队', '疑难杂症会诊', '住院绿色通道', '医保定点'],
    address: '静安区乌鲁木齐中路12号',
    phone: '021-0000-0000',
    rating: 4.8,
  },
  {
    id: 'ruijin-checkup',
    name: '瑞金医院体检中心',
    nameEn: 'Ruijin Hospital Health Center',
    image: '/images/healthcare/ruijin.jpg',
    description: '百年名院体检中心，综合实力雄厚',
    features: ['专家体检', '慢病管理', '健康咨询', '多学科会诊'],
    address: '黄浦区瑞金二路197号',
    phone: '021-0000-0000',
    rating: 4.9,
  },
]

// 牙科诊所数据
const dentalClinics = [
  {
    id: 'hongning',
    name: '鸿宁口腔',
    nameEn: 'Hongning Dental',
    image: '/images/healthcare/dental-01.jpg',
    description: '专业口腔诊疗，环境舒适，服务贴心',
    features: ['种植牙', '牙齿矫正', '美学修复', '儿童牙科'],
    address: '曹杨路1610号202室（高尚领域小区内，工商银行二楼）',
    phone: '021-0000-0000',
    rating: 4.8,
    transport: {
      metro: '11号线/14号线真如站1号出口，向北步行100米',
      bus: '01路、106路、129路、319路、724路、923路，曹杨路铜川路站',
    },
    note: '导航请直接搜索"鸿宁口腔"，不要设置曹杨路1660号',
  },
  {
    id: 'bybo',
    name: '拜博口腔',
    nameEn: 'Bybo Dental',
    image: '/images/healthcare/dental-02.jpg',
    description: '全国连锁口腔品牌，标准化诊疗流程',
    features: ['数字化种植', '隐形矫正', '全瓷修复', '牙周治疗'],
    address: '上海多个分院',
    phone: '400-000-0000',
    rating: 4.5,
  },
  {
    id: 'arrail',
    name: '瑞尔齿科',
    nameEn: 'Arrail Dental',
    image: '/images/healthcare/dental-03.jpg',
    description: '高端齿科服务，国际化医疗标准',
    features: ['微创种植', '正畸美学', '全口重建', '儿童齿科'],
    address: '上海多个分院',
    phone: '400-000-0000',
    rating: 4.7,
  },
  {
    id: 'maloclinic',
    name: '马泷齿科',
    nameEn: 'Maloclinic',
    image: '/images/healthcare/dental-04.jpg',
    description: '源自葡萄牙的国际齿科品牌',
    features: ['即刻种植', '美学正畸', '全瓷贴面', '口腔外科'],
    address: '上海多个分院',
    phone: '400-000-0000',
    rating: 4.6,
  },
  {
    id: 'ninth-hospital',
    name: '上海第九人民医院口腔科',
    nameEn: 'Shanghai Ninth People\'s Hospital Dental',
    image: '/images/healthcare/dental-05.jpg',
    description: '国内顶尖口腔专科医院，技术实力雄厚',
    features: ['复杂种植', '正颌外科', '口腔肿瘤', '颌面整形'],
    address: '黄浦区制造局路639号',
    phone: '021-0000-0000',
    rating: 4.9,
  },
]

// 医院陪诊数据
const escortHospitals = [
  {
    id: 'huashan',
    name: '华山医院',
    nameEn: 'Huashan Hospital',
    image: '/images/healthcare/huashan.jpg',
    description: '复旦大学附属华山医院，神经内科、皮肤科全国领先',
    features: ['神经内科', '皮肤科', '感染科', '神经外科'],
    address: '静安区乌鲁木齐中路12号',
    phone: '021-0000-0000',
    rating: 4.9,
    tier: '三甲',
  },
  {
    id: 'ruijin',
    name: '瑞金医院',
    nameEn: 'Ruijin Hospital',
    image: '/images/healthcare/ruijin.jpg',
    description: '上海交通大学医学院附属瑞金医院，内分泌、血液科知名',
    features: ['内分泌科', '血液科', '心血管科', '消化科'],
    address: '黄浦区瑞金二路197号',
    phone: '021-0000-0000',
    rating: 4.9,
    tier: '三甲',
  },
  {
    id: 'zhongshan',
    name: '中山医院',
    nameEn: 'Zhongshan Hospital',
    image: '/images/healthcare/zhongshan.jpg',
    description: '复旦大学附属中山医院，心血管、肝肿瘤科权威',
    features: ['心血管科', '肝肿瘤科', '普外科', '心外科'],
    address: '徐汇区枫林路180号',
    phone: '021-0000-0000',
    rating: 4.9,
    tier: '三甲',
  },
  {
    id: 'renji',
    name: '仁济医院',
    nameEn: 'Renji Hospital',
    image: '/images/healthcare/renji.jpg',
    description: '上海交通大学医学院附属仁济医院，消化科、风湿科领先',
    features: ['消化科', '风湿免疫科', '泌尿外科', '妇产科'],
    address: '黄浦区山东中路145号（东院）',
    phone: '021-0000-0000',
    rating: 4.8,
    tier: '三甲',
  },
  {
    id: 'changhai',
    name: '长海医院',
    nameEn: 'Changhai Hospital',
    image: '/images/healthcare/changhai.jpg',
    description: '海军军医大学第一附属医院，烧伤科、胸外科知名',
    features: ['烧伤科', '胸外科', '血管外科', '肛肠科'],
    address: '杨浦区长海路168号',
    phone: '021-0000-0000',
    rating: 4.8,
    tier: '三甲',
  },
]

const services = [
  {
    id: 'checkup',
    icon: HeartPulse,
    title: '体检中心',
    titleEn: 'Medical Checkup',
    description: '全面健康体检，早期疾病筛查',
    color: 'bg-rose-500',
    items: checkupCenters,
  },
  {
    id: 'dental',
    icon: Smile,
    title: '牙科诊所',
    titleEn: 'Dental Care',
    description: '专业口腔诊疗，呵护牙齿健康',
    color: 'bg-sky-500',
    items: dentalClinics,
  },
  {
    id: 'escort',
    icon: Users,
    title: '医院陪诊',
    titleEn: 'Hospital Escort',
    description: '专业陪诊服务，就医无忧',
    color: 'bg-emerald-500',
    items: escortHospitals,
  },
]

export function HealthcareContent() {
  const [activeService, setActiveService] = useState('checkup')
  const [showCustomForm, setShowCustomForm] = useState(false)

  const currentService = services.find(s => s.id === activeService)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-apple">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-100">
              <Stethoscope className="w-3 h-3 mr-1" />
              Healthcare Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              专业医疗服务
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              体检中心、牙科诊所、医院陪诊，为您提供全方位的医疗健康服务
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="pb-12">
        <div className="container-apple">
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon
              const isActive = activeService === service.id
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.id)
                    setShowCustomForm(false)
                  }}
                  className={`p-6 rounded-2xl text-left transition-all ${
                    isActive 
                      ? 'bg-slate-800 text-white shadow-lg' 
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isActive ? 'bg-white/20' : service.color
                  }`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className={`text-sm ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.titleEn}
                  </p>
                  <p className={`mt-2 text-sm ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Provider List */}
      <section className="pb-20">
        <div className="container-apple">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {currentService?.title}推荐
              </h2>
              <p className="text-slate-500 mt-1">
                精选{currentService?.items.length}家优质机构
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowCustomForm(true)}
              className="border-slate-300"
            >
              其他机构预约
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {!showCustomForm ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService?.items.map((item) => (
                <Card key={item.id} className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-slate-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <Building2 className="w-16 h-16" />
                    </div>
                    {(item as any).tier && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                        {(item as any).tier}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                        <p className="text-sm text-slate-400">{item.nameEn}</p>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-start gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{item.phone}</span>
                      </div>
                      {(item as any).transport && (
                        <div className="mt-3 p-3 bg-amber-50 rounded-lg text-xs text-amber-800">
                          <p className="font-medium mb-1">交通指南：</p>
                          <p>地铁：{(item as any).transport.metro}</p>
                          <p>公交：{(item as any).transport.bus}</p>
                          {(item as any).note && (
                            <p className="mt-1 text-red-600">*{(item as any).note}</p>
                          )}
                        </div>
                      )}
                    </div>

                    <Link href={`/healthcare/book?type=${activeService}&provider=${item.id}`}>
                      <Button className="w-full bg-slate-700 hover:bg-slate-800">
                        <Calendar className="w-4 h-4 mr-2" />
                        立即预约
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <CustomBookingForm 
              serviceType={currentService?.title || ''}
              onBack={() => setShowCustomForm(false)}
            />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container-apple text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            需要其他医疗服务？
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            如果您需要的机构不在列表中，请联系我们获取定制化服务方案
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              联系咨询
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// 自定义预约表单组件
function CustomBookingForm({ serviceType, onBack }: { serviceType: string; onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    doctor: '',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 调用API提交预约
    try {
      const response = await fetch('/api/healthcare-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceType,
          isCustom: true,
        }),
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Booking error:', error)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">预约申请已提交</h3>
        <p className="text-slate-500 mb-6">
          我们的客服人员将在24小时内与您联系，确认预约详情
        </p>
        <Button onClick={onBack} variant="outline">
          返回列表
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-6">
        ← 返回机构列表
      </Button>
      
      <Card className="border-slate-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            预约{serviceType}
          </h3>
          <p className="text-slate-500 mb-6">
            请填写您想去的机构及医生信息
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  您的姓名 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  联系电话 *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="请输入手机号"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                电子邮箱
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="请输入邮箱（选填）"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                机构名称 *
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="请输入您想去的机构名称"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                指定医生
              </label>
              <input
                type="text"
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="请输入医生姓名（选填）"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                期望日期 *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                备注需求
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                placeholder="请描述您的具体需求（症状、检查项目等）"
              />
            </div>

            <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800 h-12">
              提交预约申请
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
