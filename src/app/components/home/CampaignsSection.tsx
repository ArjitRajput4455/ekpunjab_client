import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Target, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { useTranslation } from "react-i18next";

export default function CampaignsSection() {
  const { t } = useTranslation();

  const campaigns = [{
    id: "Professional-training-program",     //Changed Line
    titleKey: "campaigns.professionalTrainingProgramTitle",        //Changed Line
    descKey: "campaigns.professionalTrainingProgramDesc",      //Changed Line
    startDateKey: "campaigns.professionalTrainingProgramStartDate",        //Changed Line
    endDateKey: "campaigns.professionalTrainingProgramEndDate",        //Changed Line
    progress: 1,       //Changed Line
    targetKey: "campaigns.professionalTrainingProgramTarget",      //Changed Line
    achievedKey: "campaigns.professionalTrainingProgramAchieved",      //Changed Line
    color: "bg-[#F59E0B]",      //Changed Line
    statusKey: "campaigns.active",      //Changed Line
    image: "/professional.jpg"

  },
  {
    id: "ek-punjab",
    titleKey: "campaigns.ekPunjabTitle",        //Changed Line
    descKey: "campaigns.ekPunjabDesc",      //Changed Line
    startDateKey: "campaigns.ekPunjabStartDate",        //Changed Line
    endDateKey: "campaigns.ekPunjabEndDate",        //Changed Line
    progress: 55,       //Changed Line
    targetKey: "campaigns.ekPunjabTarget",      //Changed Line
    achievedKey: "campaigns.ekPunjabAchieved",      //Changed Line
    color: "bg-[#F59E0B]",      //Changed Line
    statusKey: "campaigns.active",      //Changed Line
    image: "/ek-punjab.png"  //Changed LINE <=====Check Original File path  // image: "https://images.unsplash.com/photo-1667577334865-732daf6963dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2FtcCUyMGhlYWx0aCUyMGNoZWNrdXAlMjBpbmRpYSUyMGRvY3RvcnxlbnwxfHx8fDE3NzA3ODk0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "anti-drug",
    titleKey: "campaigns.antiDrugTitle",
    descKey: "campaigns.antiDrugDesc",
    startDateKey: "campaigns.antiDrugStartDate",
    endDateKey: "campaigns.antiDrugEndDate",
    progress: 25,
    targetKey: "campaigns.antiDrugTarget",
    achievedKey: "campaigns.antiDrugAchieved",
    color: "bg-[#DC2626]",
    statusKey: "campaigns.active",
    image: "https://images.unsplash.com/photo-1620077399971-431e7ea0cf0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVnJTIwYXdhcmVuZXNzJTIwcmVoYWJpbGl0YXRpb24lMjBjb3Vuc2VsaW5nfGVufDF8fHx8MTc3MDc5MDY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "beti-shiksha",
    titleKey: "campaigns.betiShikshaTitle",
    descKey: "campaigns.betiShikshaDesc",
    startDateKey: "campaigns.betiShikshaStartDate",
    endDateKey: "campaigns.betiShikshaEndDate",
    progress: 42,
    targetKey: "campaigns.betiShikshaTarget",
    achievedKey: "campaigns.betiShikshaAchieved",
    color: "bg-[#0059D2]",
    statusKey: "campaigns.active",
    image: "https://images.unsplash.com/photo-1760454634741-14469ef82f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBnaXJsJTIwY2hpbGQlMjBlZHVjYXRpb24lMjBzY2hvb2x8ZW58MXx8fHwxNzcwNzkwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "green-punjab",
    titleKey: "campaigns.greenPunjabTitle",
    descKey: "campaigns.greenPunjabDesc",
    startDateKey: "campaigns.greenPunjabStartDate",
    endDateKey: "campaigns.greenPunjabEndDate",
    progress: 68,
    targetKey: "campaigns.greenPunjabTarget",
    achievedKey: "campaigns.greenPunjabAchieved",
    color: "bg-[#1B5E20]",
    statusKey: "campaigns.active",
    image: "https://images.unsplash.com/photo-1765403256647-ae3a7197d812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGVudmlyb25tZW50YWwlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzcwNzkwNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "health-for-all",
    titleKey: "campaigns.healthForAllTitle",
    descKey: "campaigns.healthForAllDesc",
    startDateKey: "campaigns.healthForAllStartDate",
    endDateKey: "campaigns.healthForAllEndDate",
    progress: 55,
    targetKey: "campaigns.healthForAllTarget",
    achievedKey: "campaigns.healthForAllAchieved",
    color: "bg-[#EC7803]",
    statusKey: "campaigns.active",
    image: "https://images.unsplash.com/photo-1624903715293-afe920c6adad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2FtcCUyMHJ1cmFsJTIwSW5kaWF8ZW58MXx8fHwxNzcwNzkwNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#653D1F]/10 px-3 py-1.5 rounded-full mb-3">
            <Target className="w-3.5 h-3.5 text-[#653D1F]" />
            <span className="text-xs font-semibold text-[#653D1F]">{t('home.activeCampaigns')}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#653D1F] mb-2">{t('home.ongoingCampaigns')}</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            {t('home.campaignsDesc')}
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Header Bar */}
              <div className={`h-1 ${campaign.color}`} />

              <div className="flex gap-4 p-4">
                {/* Campaign Image */}
                <div className="flex-shrink-0">
                  <img
                    src={campaign.image}
                    alt={campaign.titleKey}
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                </div>

                {/* Campaign Content */}
                <div className="flex-1 min-w-0">
                  {/* Title & Status */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#653D1F] transition line-clamp-1">
                        {t(campaign.titleKey)}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {t(campaign.descKey)}
                      </p>
                    </div>
                    <Badge className={`${campaign.color} text-white border-0 text-xs px-2 py-0.5 ml-2 flex-shrink-0`}>
                      {t(campaign.statusKey)}
                    </Badge>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t(campaign.startDateKey)} - {t(campaign.endDateKey)}</span>
                  </div>

                  {/* Progress */}
                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-600">{t('home.progress')}</span>
                      <span className="font-bold text-[#653D1F]">{campaign.progress}%</span>
                    </div>
                    <Progress value={campaign.progress} className="h-1.5" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{t(campaign.achievedKey)}</span>
                      <span>{t('home.target')}: {t(campaign.targetKey)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2 border-t">
                    <Button size="sm" variant="outline" className="flex-1 h-7 text-xs" asChild>
                      <Link to={`/campaign/${campaign.id}`}>
                        {t('home.learnMore')}
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </Button>
                    <Button size="sm" className={`flex-1 h-7 text-xs ${campaign.color} text-white`} asChild>
                      <Link to="/volunteer">{t('home.join')}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}