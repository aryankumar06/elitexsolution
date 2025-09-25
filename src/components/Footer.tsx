import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import GlowingLogo from './GlowingLogo';
import Button3D from './Button3D';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20">
      {/* top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-red-500/30 via-white/10 to-red-500/30" />

      <div className="relative">
        {/* subtle backdrop aura */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(239,68,68,0.08),transparent_60%),radial-gradient(60%_40%_at_80%_100%,rgba(239,68,68,0.06),transparent_60%)]" />

        <div className="container mx-auto px-4 md:px-6 py-10 relative">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Brand + CTA */}
            <div className="md:col-span-4">
              <GlowingLogo size="sm" />
              <p className="text-gray-400 mt-3 text-sm">
                EliteX Solutions crafts modern, performant digital products across web, mobile, and design.
              </p>
              <div className="mt-4">
                <Link to="/contact">
                  <Button3D size="sm" variant="secondary">Start a Project</Button3D>
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-red-400" /> team@elitexsolutions.xyz</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-400" /> +91 9310479532, +91 9354630932</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red-400" /> Ghaziabad, Uttar Pradesh, India</li>
              </ul>
            </div>

            {/* Socials */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-3">Follow</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <Button3D as="a" href="#" size="sm" variant="outline" iconOnly aria-label="GitHub" className="flex-none"><Github className="h-4 w-4" /></Button3D>
                  <span className="text-sm text-gray-400">@elitexsolutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Button3D as="a" href="https://www.linkedin.com/company/elitexsolutions/" size="sm" variant="outline" iconOnly aria-label="LinkedIn" className="flex-none"><Linkedin className="h-4 w-4" /></Button3D>
                  <span className="text-sm text-gray-400">/company/elitexsolutions</span>
                </li>
                <li className="flex items-center gap-3 ">
                   <Button3D as="a" href="https://www.instagram.com/elitexsolutions.xyz/" size="sm" variant="outline"  iconOnly aria-label="Instagram" className="flex-none"> <Instagram className="h-5 w-5" /> </Button3D> 
                   <span className="text-sm text-gray-400">@elitexsolutions</span>
                </li>


              </ul>
            </div>
          </div>

          {/* bottom row */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm">
            <div className="text-gray-500">© 2025 eliteXsolutions. All rights reserved.</div>
            <div className="flex items-center gap-4 text-gray-400">
              <Link to="/privacy" className="hover:text-white">Privacy</Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms" className="hover:text-white">Terms</Link>
              <span className="text-gray-600">•</span>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
