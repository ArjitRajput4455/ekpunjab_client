import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-[#0059D2] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.bePartOfChange')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('home.supportTransforms')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition text-center"
          >
            <h3 className="text-xl font-bold mb-2">{t('header.donate')}</h3>
            <p className="text-white/80 mb-6 text-sm">
              {t('donate.subtitle')}
            </p>
            <Button variant="secondary" className="w-full" asChild>
              <Link to="/donate">
                {t('home.donateNow')}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition text-center"
          >
            <h3 className="text-xl font-bold mb-2">{t('header.volunteer')}</h3>
            <p className="text-white/80 mb-6 text-sm">
              {t('volunteer.subtitle')}
            </p>
            <Button variant="secondary" className="w-full" asChild>
              <Link to="/volunteer">
                {t('home.volunteerAction')}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition text-center"
          >
            <h3 className="text-xl font-bold mb-2">{t('header.partnerships')}</h3>
            <p className="text-white/80 mb-6 text-sm">
              {t('partnerships.subtitle')}
            </p>
            <Button variant="secondary" className="w-full" asChild>
              <Link to="/partnerships">
                {t('home.learnMore')}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
        >
          <p className="text-lg mb-2">{t('home.together')}</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div>
              <span className="font-bold text-2xl">₹2.5 Cr+</span> <span className="text-white/80">{t('home.fundsRaised')}</span>
            </div>
            <div className="hidden sm:block text-white/20">|</div>
            <div>
              <span className="font-bold text-2xl">5,000+</span> <span className="text-white/80">{t('home.activeVolunteers')}</span>
            </div>
            <div className="hidden sm:block text-white/20">|</div>
            <div>
              <span className="font-bold text-2xl">25,000+</span> <span className="text-white/80">{t('home.livesImpacted')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}