import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plane, Clock, MapPin, FileText, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'

const eligibleCities = [
  {
    region: 'Shanghai + Jiangsu + Zhejiang',
    cities: ['Shanghai', 'Nanjing', 'Hangzhou', 'Suzhou', 'Ningbo'],
    airports: ['Shanghai Pudong (PVG)', 'Shanghai Hongqiao (SHA)', 'Nanjing Lukou (NKG)', 'Hangzhou Xiaoshan (HGH)'],
  },
  {
    region: 'Beijing + Tianjin + Hebei',
    cities: ['Beijing', 'Tianjin', 'Shijiazhuang', 'Qinhuangdao'],
    airports: ['Beijing Capital (PEK)', 'Beijing Daxing (PKX)', 'Tianjin Binhai (TSN)'],
  },
  {
    region: 'Guangdong Province',
    cities: ['Guangzhou', 'Shenzhen', 'Zhuhai', 'Shantou'],
    airports: ['Guangzhou Baiyun (CAN)', 'Shenzhen Bao\'an (SZX)'],
  },
  {
    region: 'Sichuan Province',
    cities: ['Chengdu'],
    airports: ['Chengdu Tianfu (TFU)', 'Chengdu Shuangliu (CTU)'],
  },
  {
    region: 'Shaanxi Province',
    cities: ['Xi\'an'],
    airports: ['Xi\'an Xianyang (XIY)'],
  },
  {
    region: 'Liaoning Province',
    cities: ['Shenyang', 'Dalian'],
    airports: ['Shenyang Taoxian (SHE)', 'Dalian Zhoushuizi (DLC)'],
  },
  {
    region: 'Shandong Province',
    cities: ['Qingdao', 'Jinan'],
    airports: ['Qingdao Jiaodong (TAO)', 'Jinan Yaoqiang (TNA)'],
  },
  {
    region: 'Fujian Province',
    cities: ['Xiamen'],
    airports: ['Xiamen Gaoqi (XMN)'],
  },
  {
    region: 'Hubei Province',
    cities: ['Wuhan'],
    airports: ['Wuhan Tianhe (WUH)'],
  },
  {
    region: 'Hunan Province',
    cities: ['Changsha'],
    airports: ['Changsha Huanghua (CSX)'],
  },
  {
    region: 'Henan Province',
    cities: ['Zhengzhou'],
    airports: ['Zhengzhou Xinzheng (CGO)'],
  },
  {
    region: 'Yunnan Province',
    cities: ['Kunming'],
    airports: ['Kunming Changshui (KMG)'],
  },
  {
    region: 'Jiangxi Province',
    cities: ['Nanchang'],
    airports: ['Nanchang Changbei (KHN)'],
  },
  {
    region: 'Heilongjiang Province',
    cities: ['Harbin'],
    airports: ['Harbin Taiping (HRB)'],
  },
  {
    region: 'Guangxi Zhuang Autonomous Region',
    cities: ['Guilin', 'Nanning'],
    airports: ['Guilin Liangjiang (KWL)', 'Nanning Wuxu (NNG)'],
  },
  {
    region: 'Chongqing Municipality',
    cities: ['Chongqing'],
    airports: ['Chongqing Jiangbei (CKG)'],
  },
]

const eligibleCountries = [
  'Albania', 'Argentina', 'Australia', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina',
  'Brazil', 'Brunei', 'Bulgaria', 'Canada', 'Chile', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland',
  'Ireland', 'Italy', 'Japan', 'Korea (South)', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta',
  'Mexico', 'Monaco', 'Montenegro', 'Netherlands', 'New Zealand', 'North Macedonia', 'Norway',
  'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Serbia', 'Singapore', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'United Arab Emirates', 'United Kingdom',
  'United States',
]

export function VisaGuide() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Complete Visa-Free Guide</h2>
      
      <Tabs defaultValue="how-it-works" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
          <TabsTrigger value="cities">Eligible Cities</TabsTrigger>
          <TabsTrigger value="countries">Countries</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* How It Works */}
        <TabsContent value="how-it-works">
          <Card>
            <CardHeader>
              <CardTitle>Understanding 144-Hour Visa-Free Transit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mb-3">
                    <Plane className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Transit Required</h3>
                  <p className="text-sm text-muted-foreground">
                    You must be traveling from Country A → China → Country B (different from A)
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Time Limit</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximum 144 hours (6 days) from entry. Count starts at 00:00 the day after arrival
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Stay in Region</h3>
                  <p className="text-sm text-muted-foreground">
                    You can only travel within the designated region (e.g., Shanghai + Jiangsu + Zhejiang)
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Important Rules
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>You must enter and exit through the same region (but can use different airports/ports)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>You cannot travel to other regions of China (e.g., if entering Shanghai, cannot go to Beijing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>The 144 hours includes weekends and holidays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>You must have confirmed onward tickets (flights, trains, or ferries)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Example Itinerary</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  <strong>New York → Shanghai (6 days) → Tokyo</strong> ✓ Valid<br/>
                  <strong>London → Beijing (3 days) → Shanghai → London</strong> ✗ Invalid (must exit same region)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eligible Cities */}
        <TabsContent value="cities">
          <Card>
            <CardHeader>
              <CardTitle>37 Ports Across 16 Regions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {eligibleCities.map((region) => (
                  <div key={region.region} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {region.region}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Cities: </span>
                        {region.cities.join(', ')}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Airports: </span>
                        {region.airports.join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eligible Countries */}
        <TabsContent value="countries">
          <Card>
            <CardHeader>
              <CardTitle>54 Eligible Countries & Regions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {eligibleCountries.map((country) => (
                  <div key={country} className="flex items-center gap-2 p-2 rounded hover:bg-muted">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  q: 'Can I extend my stay beyond 144 hours?',
                  a: 'No, you cannot extend the 144-hour visa-free period. If you need to stay longer, you must apply for a proper visa before arrival.'
                },
                {
                  q: 'What if my flight is delayed and I overstay?',
                  a: 'Contact the immigration office immediately. Flight delays are usually understood, but you should have documentation from the airline.'
                },
                {
                  q: 'Can I work or study during the 144 hours?',
                  a: 'No, the visa-free transit is strictly for tourism and transit purposes. Working or studying is not permitted.'
                },
                {
                  q: 'Do I need to register with police?',
                  a: 'If staying at a hotel, they will register you automatically. If staying at a private residence, you must register at the local police station within 24 hours.'
                },
                {
                  q: 'Can I visit multiple cities within the region?',
                  a: 'Yes, you can travel freely within the designated region. For example, entering Shanghai, you can visit Suzhou, Hangzhou, and Nanjing.'
                },
                {
                  q: 'What happens if I\'m not eligible upon arrival?',
                  a: 'You may be denied entry and required to take the next flight out. Always verify eligibility before traveling.'
                },
              ].map((item, index) => (
                <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                    {item.q}
                  </h4>
                  <p className="mt-2 text-muted-foreground pl-7">{item.a}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
