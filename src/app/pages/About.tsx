import { Target, Heart, Award, Users, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const values = [
    { titleKey: "about.value1Title", descKey: "about.value1Desc" },
    { titleKey: "about.value2Title", descKey: "about.value2Desc" },
    { titleKey: "about.value3Title", descKey: "about.value3Desc" },
    { titleKey: "about.value4Title", descKey: "about.value4Desc" },
  ];

  const leadership = [
    {
      nameKey: "about.leader6Name",
      roleKey: "about.leader6Role",
      initials: "SKS",
    },
    {
      nameKey: "about.leader5Name",
      roleKey: "about.leader5Role",
      initials: "JPS",
    },
    {
      nameKey: "about.leader7Name",
      roleKey: "about.leader7Role",
      initials: "JPS",
    },
    {
      nameKey: "about.leader8Name",
      roleKey: "about.leader8Role",
      initials: "LS",
    },
  ];

  const timeline = [
    { year: "2015", key: "about.timeline2015" },
    { year: "2017", key: "about.timeline2017" },
    { year: "2019", key: "about.timeline2019" },
    { year: "2021", key: "about.timeline2021" },
    { year: "2023", key: "about.timeline2023" },
    { year: "2025", key: "about.timeline2025" },
  ];

  const stats = [
    { value: "150+", labelKey: "about.teamMembers" },
    { value: "85+", labelKey: "about.activeProjects" },
    { value: "10+", labelKey: "about.yearsOfService" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 border">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">{t('about.storyTitle')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('about.storyText')}
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#003366] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border">
              <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#1B5E20] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#003366] mb-4">{t('about.mission')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1B5E20] to-[#003366] rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#003366] mb-4">{t('about.vision')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">{t('about.values')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border text-center hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-gray-600">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-12" id="leadership">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">{t('about.leadership')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-black rounded-xl p-6 border hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#1B5E20] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow font-bold text-xl">{leader.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-400 mb-1">{t(leader.nameKey)}</h3>
                    <p className="text-sm text-[#f6fff5] mb-2">{t(leader.roleKey)}</p>
                    {leader.bioKey && <p className="text-sm text-gray-600">{t(leader.bioKey)}</p>}
                    {leader.phone && <p className="text-sm text-gray-600">{leader.phone}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">{t('about.timelineTitle')}</h2>
          <div className="bg-white rounded-xl p-8 border">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="font-bold text-[#003366] mb-1">{item.year}</div>
                    <p className="text-gray-700">{t(item.key)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <div className="bg-[#003366] text-white rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{t('about.founded')}</h3>
                  <p className="text-white/90">{t('about.foundedYear')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{t('about.headquarters')}</h3>
                  <p className="text-white/90">{t('about.headquartersLocation')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}