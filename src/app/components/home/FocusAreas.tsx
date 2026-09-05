import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export default function FocusAreas() {
  const { t } = useTranslation();
  
  const focusAreas = [
    {
      id: "education",
      titleKey: "focusAreas.educationTitle",
      descKey: "focusAreas.educationDesc",
      color: "bg-[#0059D2]",
      statLabelKey: "focusAreas.educationStatLabel",
      statValueKey: "focusAreas.educationStatValue",
    },
    {
      id: "health",
      titleKey: "focusAreas.healthTitle",
      descKey: "focusAreas.healthDesc",
      color: "bg-[#C70A10]",
      statLabelKey: "focusAreas.healthStatLabel",
      statValueKey: "focusAreas.healthStatValue",
    },
    {
      id: "women",
      titleKey: "focusAreas.womenTitle",
      descKey: "focusAreas.womenDesc",
      color: "bg-[#EC7803]",
      statLabelKey: "focusAreas.womenStatLabel",
      statValueKey: "focusAreas.womenStatValue",
    },
    {
      id: "youth",
      titleKey: "focusAreas.youthTitle",
      descKey: "focusAreas.youthDesc",
      color: "bg-[#0059D2]",
      statLabelKey: "focusAreas.youthStatLabel",
      statValueKey: "focusAreas.youthStatValue",
    },
    {
      id: "environment",
      titleKey: "focusAreas.ruralTitle",
      descKey: "focusAreas.ruralDesc",
      color: "bg-[#1B5E20]",
      statLabelKey: "focusAreas.ruralStatLabel",
      statValueKey: "focusAreas.ruralStatValue",
    },
    {
      id: "elderly",
      titleKey: "focusAreas.elderlyTitle",
      descKey: "focusAreas.elderlyDesc",
      color: "bg-[#C70A10]",
      statLabelKey: "focusAreas.elderlyStatLabel",
      statValueKey: "focusAreas.elderlyStatValue",
    },
  ];

  return (
    <section className="py-16 bg-[#101828] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">{t('home.focusAreas')}</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('home.focusAreasDesc')}
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => {
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <Link
                  to={`/focus/${area.id}`}
                  className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition h-full"
                >
                  <h3 className="font-bold text-white mb-2 group-hover:text-[#0059D2] transition">
                    {t(area.titleKey)}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    {t(area.descKey)}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-white/50 mb-1">{t(area.statLabelKey)}</div>
                    <div className="text-xl font-bold text-[#0059D2]">{t(area.statValueKey)}</div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-[#0059D2]">
                    {t('home.learnMore')} →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
            <Link to="/social-initiatives">
              {t('home.viewAllInitiatives')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
