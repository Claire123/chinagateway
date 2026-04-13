import Link from 'next/link'

const footerLinks = {
  explore: [
    { label: 'Travel', href: '/travel' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Visa Guide', href: '/visa' },
    { label: 'City Guides', href: '/guides' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-50 text-sm text-slate-500">
      <div className="container-apple py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Explore */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-4 text-base">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-slate-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-4 text-base">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-slate-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-4 text-base">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-slate-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-4 text-base">Contact</h3>
            <ul className="space-y-2">
              <li>clairezhang2018@163.com</li>
              <li>WhatsApp/WeChat: +86 159 0063 0236</li>
              <li>Shanghai, China</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">Copyright © {new Date().getFullYear()} ChinaGateway. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
              <Link href="#" className="text-slate-400 hover:text-slate-600 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
