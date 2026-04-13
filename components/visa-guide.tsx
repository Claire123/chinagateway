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
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Complete Visa-Free Guide</h2>
      
      <Tabs defaultValue="how-it-works" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-100">
          <TabsTrigger value="how-it-works" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">How It Works</TabsTrigger>
          <TabsTrigger value="cities" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">Eligible Cities</TabsTrigger>
          <TabsTrigger value="countries" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">Countries</TabsTrigger>
          <TabsTrigger value="faq" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">FAQ</TabsTrigger>
        </TabsList>

        {/* How It Works */}
        <TabsContent value="how-it-works">
          <Card className="border-slate-100">
            <CardHeader>
              <CardTitle className="text-slate-800">Understanding 144-Hour Visa-Free Transit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-3">
                    <Plane className="w-5 h-5 text-slate-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">1. Transit Required</h3>
                  <p className="text-sm text-slate-500">
                    You must be traveling from Country A → China → Country B (different from A)
                  </p>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">2. Time Limit</h3>
                  <p className="text-sm text-slate-500">
                    Maximum 144 hours (6 days) from entry. Count starts at 00:00 the day after arrival
                  </p>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">3. Stay in Region</h3>
                  <p className="text-sm text-slate-500">
                    You can only travel within the designated region (e.g., Shanghai + Jiangsu + Zhejiang)
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Important Notes</h4>
                    <ul className="text-sm text-amber-700 mt-2 space-y-1">
                      <li>• You cannot leave the designated region during your stay</li>
                      <li>• You must exit China from a different city than your entry (within the same region)</li>
                      <li>• Direct round-trip flights (e.g., USA → China → USA) do not qualify</li>
                      <li>• You must have confirmed onward tickets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eligible Cities */}
        <TabsContent value="cities">
          <Card className="border-slate-100">
            <CardHeader>
              <CardTitle className="text-slate-800">20 Regions with 144-Hour Visa-Free Transit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 max-h-[500px] overflow-y-auto">
                {eligibleCities.map((region) => (
                  <div key={region.region} className="border border-slate-100 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-800 mb-2">{region.region}</h3>
                    <div className="text-sm text-slate-500">
                      <p className="mb-1"><span className="font-medium text-slate-600">Cities:</span> {region.cities.join(', ')}</p>
                      <p><span className="font-medium text-slate-600">Airports:</span> {region.airports.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eligible Countries */}
        <TabsContent value="countries">
          <Card className="border-slate-100">
            <CardHeader>
              <CardTitle className="text-slate-800">54 Eligible Countries & Regions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {eligibleCountries.map((country) => (
                  <div key={country} className="flex items-center gap-2 text-slate-600">
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
          <Card className="border-slate-100">
            <CardHeader>
              <CardTitle className="text-slate-800">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  q: 'Can I work during the 144-hour visa-free period?',
                  a: 'No, you cannot engage in any employment or work activities. This policy is strictly for transit and tourism purposes.',
                },
                {
                  q: 'What happens if I overstay the 144 hours?',
                  a: 'Overstaying will result in fines and potential entry bans. Make sure to exit before the 144-hour limit.',
                },
                {
                  q: 'Can I extend my stay beyond 144 hours?',
                  a: 'No, the 144-hour visa-free transit cannot be extended. If you need a longer stay, apply for a regular visa before arrival.',
                },
                {
                  q: 'Do I need to register with the police?',
                  a: 'If staying at a hotel, they will register for you. If staying at a private residence, you must register at the local police station within 24 hours.',
                },
                {
                  q: 'Can I visit multiple cities within the region?',
                  a: 'Yes, you can travel freely within the designated region. For example, in the Shanghai region, you can visit Shanghai, Hangzhou, Suzhou, etc.',
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-slate-100 pb-4 last:border-0">
                  <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    {faq.q}
                  </h4>
                  <p className="text-slate-500 mt-2 text-sm">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
