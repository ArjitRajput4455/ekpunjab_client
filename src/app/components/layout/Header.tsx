import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const navLinks = [
  { href: "/", labelKey: "common.home" },
  { href: "/social-initiatives", labelKey: "header.socialInitiatives" },
  { href: "/punjab-regions", labelKey: "header.punjabRegions" },
  { href: "/newsroom", labelKey: "header.newsroom" },
  { href: "/emergencies", labelKey: "header.emergencies" },
  { href: "/about", labelKey: "header.about" },
];

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <LanguageSwitcher />
              <Link to="/emergencies" className="flex items-center gap-2 hover:text-white/80 transition">
                <Phone className="w-4 h-4" />
                <span>Emergency Hotline: +91 8427775865</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/publications" className="hover:text-white/80 transition">{t('header.publications')}</Link>
              <Link to="/events" className="hover:text-white/80 transition">{t('header.events')}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Ek Punjab Foundation Logo" 
                className="h-12 w-auto"
                style={{ maxWidth: '280px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                      isActive
                        ? "bg-[#0059D2] text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#0059D2]"
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                size="sm" 
                className="text-xs bg-[#C70A10] text-white hover:bg-[#9B0808] font-semibold transition-all shadow-md" 
                asChild
              >
                <Link to="/donate">{t('header.donate')}</Link>
              </Button>
              <Button 
                size="sm" 
                className="items-center justify-center bg-[#0059D2] text-white hover:bg-[#003998] font-semibold text-xs transition-all shadow-md" 
                asChild
              >
                <Link to="/volunteer">{t('header.volunteer')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm transition ${
                    isActive
                      ? "bg-[#0059D2] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
            <div className="pt-4 border-t space-y-3">
              <Button size="sm" className="w-full bg-[#C70A10] hover:bg-[#9B0808] text-white font-semibold" asChild>
                <Link to="/donate">{t('header.donate')}</Link>
              </Button>
              <Button size="sm" className="w-full bg-[#003998] hover:bg-[#002870] text-white font-semibold" asChild>
                <Link to="/volunteer">{t('header.volunteer')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}