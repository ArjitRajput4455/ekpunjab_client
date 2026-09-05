import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[480px] bg-gray-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#0059D2] px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold">{t('about.subtitle')}</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t('home.heroTitle')}
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              {t('home.heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold shadow-xl px-8" asChild>
                <Link to="/donate">
                  {t('header.donate')}
                </Link>
              </Button>
              <Button size="lg" className="bg-[#003366] hover:bg-[#002244] text-white font-semibold shadow-xl px-8" asChild>
                <Link to="/volunteer">
                  {t('volunteer.title')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold" asChild>
                <Link to="/emergencies">
                  {t('emergencies.title')}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl h-72"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708593343442-7595427ddf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNhbXAlMjBJbmRpYSUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzcwNzkxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ek Punjab Foundation community healthcare services"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <p className="text-[#0059D2] font-bold text-lg">{t('newsroom.tags.health')}</p>    {/* //Changed Line */}
                    <p className="text-gray-600 text-sm">{t('home.makingDifference')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Small Image - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl h-48"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMHNjaG9vbCUyMEluZGlhfGVufDF8fHx8MTc3MDc5MjAyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ek Punjab Foundation education programs"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0059D2]/80 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-bold drop-shadow-lg">{t('newsroom.tags.education')}</p>    {/* //Changed Line */}
                  </div>
                </div>
              </motion.div>

              {/* Small Image - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative rounded-2xl overflow-hidden shadow-xl h-48"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634626857321-deb416dcdb00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21lbiUyMHNraWxscyUyMHRyYWluaW5nJTIwc2V3aW5nJTIwdGFpbG9yaW5nJTIwd29ya3Nob3AlMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzEzMDkxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ek Punjab Foundation women empowerment programs"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#EC7803]/80 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-bold drop-shadow-lg">{t('newsroom.tags.empowerment')}</p>     {/* //Changed Line */}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}