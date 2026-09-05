import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export default function EmergencyHotline() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Hotline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#DC2626] rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">{t('emergencies.hotlineTitle')}</h3>
          <p className="text-white/90 mb-6">{t('emergencies.hotlineDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href={`tel:${t('emergencies.hotlineNumber')}`} className="text-4xl font-bold hover:underline">
              {t('emergencies.hotlineNumber')}
            </a>
            <span className="text-sm opacity-75">{t('emergencies.hotlineTollFree')}</span>
          </div>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-[#DC2626] hover:bg-white/90"
            asChild
          >
            <Link to="/emergencies">
              {t('emergencies.viewEmergencyServices')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
