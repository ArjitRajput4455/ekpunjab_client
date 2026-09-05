import React from "react";
import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const { t } = useTranslation();
  
  const footerSections = [
    {
      title: t('header.about'),
      links: [
        { name: t('header.about'), href: "/about" },
        { name: t('footer.contact'), href: "/contact" },
      ],
    },
    {
      title: t('footer.getInvolved'),
      links: [
        { name: t('header.volunteer'), href: "/volunteer" },
        { name: t('header.donate'), href: "/donate" },
        { name: t('header.partnerships'), href: "/partnerships" },
      ],
    },
    {
      title: t('footer.programs'),
      links: [
        { name: t('header.socialInitiatives'), href: "/social-initiatives" },
        { name: t('header.emergencies'), href: "/emergencies" },
        { name: t('header.punjabRegions'), href: "/punjab-regions" },
      ],
    },
    {
      title: t('footer.quickLinks'),
      links: [
        { name: t('header.publications'), href: "/publications" },
        { name: t('header.newsroom'), href: "/newsroom" },
        { name: t('header.events'), href: "/events" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1E293B] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4 bg-white rounded-lg p-3 inline-block">
              <img 
                src="/logo.png" 
                alt="Ek Punjab Foundation Logo" 
                className="w-40 h-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#EC7803]" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#EC7803]" />
                <span>{t('footer.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#EC7803]" />
                <span>{t('footer.email')}</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition">{t('footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-white transition">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 Ek Punjab Foundation. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}