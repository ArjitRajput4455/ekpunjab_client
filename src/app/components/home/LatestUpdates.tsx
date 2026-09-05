import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

const updates = [
  {
    id: 4,
    categoryKey: "newsroom.pressRelease",
    titleKey: "latestUpdates.awardTitle",
    excerptKey: "latestUpdates.awardPart",
    dateKey: "latestUpdates.awardDate",
    image: "/Ekpunjabevent.png",
    tagKey: "newsroom.tags.education"
    
  },
  {
    id: 2,
    categoryKey: "newsroom.announcement",
    titleKey: "latestUpdates.winterReliefTitle",
    excerptKey: "latestUpdates.winterReliefExcerpt",
    dateKey: "latestUpdates.winterReliefDate",
    image: "https://images.unsplash.com/photo-1752010284872-76526682bfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eSUyMGhlbHBpbmd8ZW58MXx8fHwxNzcwNzg5MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tagKey: "newsroom.tags.relief",   //Changed Line
  },
  {
    id: 3,
    categoryKey: "newsroom.news",
    titleKey: "latestUpdates.youthSkillTitle",
    excerptKey: "latestUpdates.youthSkillExcerpt",
    dateKey: "latestUpdates.youthSkillDate",
    image: "https://images.unsplash.com/photo-1660796116086-eb82087fcc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDc4OTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tagKey: "newsroom.tags.education",  //Changed Line
  },  
  {
    id: 1,
  categoryKey: "newsroom.pressRelease",
    titleKey: "latestUpdates.medicalCampTitle",
    excerptKey: "latestUpdates.medicalCampExcerpt",
    dateKey: "latestUpdates.medicalCampDate",
    image: "https://images.unsplash.com/photo-1667577334865-732daf6963dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2FtcCUyMGhlYWx0aCUyMGNoZWNrdXAlMjBpbmRpYSUyMGRvY3RvcnxlbnwxfHx8fDE3NzA3ODk0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tagKey: "newsroom.tags.health",    //Changed Line
  }    
];

export default function LatestUpdates() {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0059D2]">{t('home.latestUpdates')}</h2>
            <p className="text-gray-600 text-sm mt-1">{t('home.makingDifference')}</p>
          </div>
          <Button variant="outline" className="border-[#0059D2] text-[#0059D2] hover:bg-[#0059D2] hover:text-white" asChild>
            <Link to="/newsroom">
              {t('home.viewAll')}
            </Link>
          </Button>
        </div>

        {/* Updates List - Horizontal Layout */}
        <div className="space-y-4">
          {updates.map((update, index) => (
            <motion.article
              key={update.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-[#0059D2]/30 transition"
            >
              <Link to={`/newsroom/${update.id}`} className="flex gap-4 p-4">
                {/* Image */}
                <div className="relative flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 rounded-md overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={update.image}
                    alt={update.titleKey}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-white text-[#0059D2] text-xs px-2 py-0.5">
                    {t(update.tagKey)}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-[#EC7803] font-semibold uppercase tracking-wide">
                        {t(update.categoryKey)}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{t(update.dateKey)}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#0059D2] transition line-clamp-2 mb-1">
                      {t(update.titleKey)}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 hidden sm:block">
                      {t(update.excerptKey)}
                    </p>
                  </div>
                  
                  <div className="text-[#0059D2] font-semibold text-sm mt-2">
                    {t('home.readMore')} →
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}