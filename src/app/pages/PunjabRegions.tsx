import { MapPin, Users, Activity, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PunjabRegions() {
  const { t } = useTranslation();

  const regions = [
    {
      id: "majha",
      name: t('regions.majha.name'),
      description: t('regions.majha.description'),
      districts: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran"],
      projects: 1,
      volunteers: 6,
      coordinator: "Juneet Pal Singh",
      phone: "+91 8427775865",
      email: "hello@ekpunjabfoundation.org",
    },
    {
      id: "doaba",
      name: t('regions.doaba.name'),
      description: t('regions.doaba.description'),
      districts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "Nawanshahr"],
      projects: 1,
      volunteers: 5,
      coordinator: "Juneet Pal Singh",
      phone: "+91 8427775865",
      email: "hello@ekpunjabfoundation.org",
    },
    {
      id: "malwa",
      name: t('regions.malwa.name'),
      description: t('regions.malwa.description'),
      districts: ["Ludhiana", "Bathinda", "Mansa", "Sangrur", "Barnala", "Moga", "Faridkot", "Muktsar"],
      projects: 2,
      volunteers: 8,
      coordinator: "Juneet Pal Singh",
      phone: "+91 8427775865",
      email: "hello@ekpunjabfoundation.org",
    },
    {
      id: "puadh",
      name: t('regions.puadh.name'),
      description: t('regions.puadh.description'),
      districts: ["Ropar", "Mohali", "Fatehgarh Sahib", "Patiala"],
      projects: 1,
      volunteers: 6,
      coordinator: "Juneet Pal Singh",
      phone: "+91 8427775865",
      email: "hello@ekpunjabfoundation.org",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('regions.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('regions.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#003366] mb-1">4</div>
            <div className="text-sm text-gray-600">{t('regions.regionsCount')}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#003366] mb-1">2</div>
            <div className="text-sm text-gray-600">{t('regions.districtsCount')}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#003366] mb-1">5</div>
            <div className="text-sm text-gray-600">{t('regions.projectsCount')}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#003366] mb-1">25</div>
            <div className="text-sm text-gray-600">{t('regions.volunteersCount')}</div>
          </div>
        </div>

        {/* Regions List */}
        <div className="space-y-6">
          {regions.map((region) => (
            <div key={region.id} id={region.id} className="bg-white rounded-xl p-8 border hover:shadow-lg transition">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#1B5E20] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366] mb-2">{region.name}</h2>
                      <p className="text-gray-600 mb-3">{region.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {region.districts.map((district) => (
                          <span key={district} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                            {district}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-[#1B5E20]" />
                      <div>
                        <div className="text-2xl font-bold text-[#003366]">{region.projects}</div>
                        <div className="text-sm text-gray-600">{t('regions.activeProjects')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#1B5E20]" />
                      <div>
                        <div className="text-2xl font-bold text-[#003366]">{region.volunteers}</div>
                        <div className="text-sm text-gray-600">{t('regions.volunteersCount')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">{t('regions.regionCoordinator')}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{t('regions.name')}</div>
                      <div className="font-semibold text-gray-900">{region.coordinator}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{t('regions.contact')}</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${region.phone}`} className="text-[#003366] hover:underline">
                            {region.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${region.email}`} className="text-[#003366] hover:underline">
                            {region.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information at Bottom */}
        <div className="mt-12 bg-white rounded-xl p-8 border text-center">
          <h3 className="text-xl font-bold text-[#003366] mb-4">{t('regions.contactUs')}</h3>
          <p className="text-gray-600 mb-4">{t('regions.contactDescription')}</p>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-[#003366]" />
            <a href="tel:+918427775865" className="text-lg font-semibold text-[#003366] hover:underline">
              +91 8427775865
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}