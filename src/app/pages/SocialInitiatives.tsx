import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export default function SocialInitiatives() {
  const { t } = useTranslation();

  const initiatives = [
    {
      id: "healthcare",
      titleKey: "initiatives.healthcare.title",
      descriptionKey: "initiatives.healthcare.description",
      focusArea: "health",
      stats: [
        { labelKey: "initiatives.healthcare.medicalCamps", value: "250+" },
        { labelKey: "initiatives.healthcare.patientsTreated", value: "45,000+" },
        { labelKey: "initiatives.healthcare.villagesCovered", value: "180+" },
      ],
      programKeys: [
        "initiatives.healthcare.programs.medicalCamps",
        "initiatives.healthcare.programs.mobileUnits",
        "initiatives.healthcare.programs.maternalChild",
        "initiatives.healthcare.programs.prevention",
        "initiatives.healthcare.programs.education",
      ],
      image: "https://images.unsplash.com/photo-1708593343442-7595427ddf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNhbXAlMjBJbmRpYSUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzcwNzkxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "education",
      titleKey: "initiatives.education.title",
      descriptionKey: "initiatives.education.description",
      focusArea: "education",
      stats: [
        { labelKey: "initiatives.education.studentsSupported", value: "12,000+" },
        { labelKey: "initiatives.education.schoolsPartnered", value: "85+" },
        { labelKey: "initiatives.education.scholarships", value: "500+" },
      ],
      programKeys: [
        "initiatives.education.programs.primary",
        "initiatives.education.programs.adult",
        "initiatives.education.programs.vocational",
        "initiatives.education.programs.digital",
        "initiatives.education.programs.library",
      ],
      image: "https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMHNjaG9vbCUyMEluZGlhfGVufDF8fHx8MTc3MDc5MjAyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "women-empowerment",
      titleKey: "initiatives.women.title",
      descriptionKey: "initiatives.women.description",
      focusArea: "women",
      stats: [
        { labelKey: "initiatives.women.womenTrained", value: "8,500+" },
        { labelKey: "initiatives.women.selfHelpGroups", value: "120+" },
        { labelKey: "initiatives.women.microEnterprises", value: "300+" },
      ],
      programKeys: [
        "initiatives.women.programs.skill",
        "initiatives.women.programs.selfHelp",
        "initiatives.women.programs.microCredit",
        "initiatives.women.programs.entrepreneurship",
        "initiatives.women.programs.legalRights",
      ],
      image: "https://images.unsplash.com/photo-1604413807308-5a97750ded64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW5qYWJpJTIwd29tZW4lMjB0cmFkaXRpb25hbCUyMGRyZXNzJTIwcnVyYWwlMjBpbmRpYXxlbnwxfHx8fDE3NzA4MDEyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "rural-development",
      titleKey: "initiatives.rural.title",
      descriptionKey: "initiatives.rural.description",
      focusArea: "rural",
      stats: [
        { labelKey: "initiatives.rural.villagesReached", value: "200+" },
        { labelKey: "initiatives.rural.familiesBenefited", value: "15,000+" },
        { labelKey: "initiatives.rural.projectsCompleted", value: "75+" },
      ],
      programKeys: [
        "initiatives.rural.programs.agricultural",
        "initiatives.rural.programs.water",
        "initiatives.rural.programs.renewable",
        "initiatives.rural.programs.infrastructure",
        "initiatives.rural.programs.livelihood",
      ],
      image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwSW5kaWElMjB2aWxsYWdlfGVufDF8fHx8MTczOTQ2MjQ5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "youth-development",
      titleKey: "initiatives.youth.title",
      descriptionKey: "initiatives.youth.description",
      focusArea: "youth",
      stats: [
        { labelKey: "initiatives.youth.youthEngaged", value: "10,000+" },
        { labelKey: "initiatives.youth.trainingPrograms", value: "150+" },
        { labelKey: "initiatives.youth.placements", value: "1,200+" },
      ],
      programKeys: [
        "initiatives.youth.programs.skills",
        "initiatives.youth.programs.leadership",
        "initiatives.youth.programs.career",
        "initiatives.youth.programs.sports",
        "initiatives.youth.programs.councils",
      ],
      image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGVtcG93ZXJtZW50JTIwY29tbXVuaXR5JTIwc2VydmljZSUyMEluZGlhfGVufDF8fHx8MTc3MDc5MTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "environment",
      titleKey: "initiatives.environment.title",
      descriptionKey: "initiatives.environment.description",
      focusArea: "environment",
      stats: [
        { labelKey: "initiatives.environment.treesPlanted", value: "25,000+" },
        { labelKey: "initiatives.environment.cleanupDrives", value: "60+" },
        { labelKey: "initiatives.environment.awarenessPrograms", value: "100+" },
      ],
      programKeys: [
        "initiatives.environment.programs.plantation",
        "initiatives.environment.programs.waste",
        "initiatives.environment.programs.water",
        "initiatives.environment.programs.pollution",
        "initiatives.environment.programs.education",
      ],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBJbmRpYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3Mzk0NjI1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('initiatives.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('initiatives.pageSubtitle')}
          </p>
        </div>
      </div>

      {/* Overall Impact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">{t('initiatives.overallImpact')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0059D2] mb-1">6</div>
              <div className="text-sm text-gray-600">{t('initiatives.majorInitiatives')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0059D2] mb-1">50+</div>
              <div className="text-sm text-gray-600">{t('initiatives.livesImpacted')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0059D2] mb-1">2</div>
              <div className="text-sm text-gray-600">{t('initiatives.villagesReached')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0059D2] mb-1">1</div>
              <div className="text-sm text-gray-600">{t('initiatives.districtsCovered')}</div>
            </div>
          </div>
        </div>

        {/* Initiatives */}
        <div className="space-y-8">
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition">
              <div className="grid md:grid-cols-5 gap-6">
                {/* Image */}
                <div className="md:col-span-2 h-64 md:h-auto">
                  <ImageWithFallback
                    src={initiative.image}
                    alt={t(initiative.titleKey)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-bold text-[#003366] mb-3">{t(initiative.titleKey)}</h3>
                  <p className="text-gray-600 mb-6">{t(initiative.descriptionKey)}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {initiative.stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-xl font-bold text-[#0059D2]">{stat.value}</div>
                        <div className="text-xs text-gray-600">{t(stat.labelKey)}</div>
                      </div>
                    ))}
                  </div>

                  {/* Programs */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('initiatives.keyPrograms')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {initiative.programKeys.map((programKey, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#1B5E20] rounded-full flex-shrink-0" />
                          {t(programKey)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <Button
                    asChild
                    className="bg-[#003366] hover:bg-[#002244] text-white"
                  >
                    <Link to={`/focus/${initiative.focusArea}`}>
                      {t('home.learnMore')} →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#003366] to-[#1B5E20] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('initiatives.getInvolved')}</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t('initiatives.getInvolvedDesc')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white">
              <Link to="/donate">{t('initiatives.donate')}</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-[#003366] hover:bg-gray-100">
              <Link to="/volunteer">{t('initiatives.becomeVolunteer')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}