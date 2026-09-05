import { AlertTriangle, Heart, Shield, Users, Syringe, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Emergencies() {
  const { t } = useTranslation();

  const emergencies = [
    {
      id: 1,
      titleKey: "emergencies.emergency1.title",
      descriptionKey: "emergencies.emergency1.description",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
      servicesKeys: [
        "emergencies.emergency1.services.service1",
        "emergencies.emergency1.services.service2",
        "emergencies.emergency1.services.service3",
        "emergencies.emergency1.services.service4",
        "emergencies.emergency1.services.service5",
      ],
      contacts: ["+91-9711077372", "011-24363260"],
    },
    {
      id: 2,
      titleKey: "emergencies.emergency2.title",
      descriptionKey: "emergencies.emergency2.description",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      servicesKeys: [
        "emergencies.emergency2.services.service1",
        "emergencies.emergency2.services.service2",
        "emergencies.emergency2.services.service3",
        "emergencies.emergency2.services.service4",
        "emergencies.emergency2.services.service5",
      ],
      contacts: ["108"],
    },
    {
      id: 3,
      titleKey: "emergencies.emergency3.title",
      descriptionKey: "emergencies.emergency3.description",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      servicesKeys: [
        "emergencies.emergency3.services.service1",
        "emergencies.emergency3.services.service2",
        "emergencies.emergency3.services.service3",
        "emergencies.emergency3.services.service4",
        "emergencies.emergency3.services.service5",
      ],
      contacts: ["181", "1098"],
      contactLabels: ["emergencies.emergency3.contactWomen", "emergencies.emergency3.contactChildren"],
    },
    {
      id: 4,
      titleKey: "emergencies.emergency4.title",
      descriptionKey: "emergencies.emergency4.description",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      servicesKeys: [
        "emergencies.emergency4.services.service1",
        "emergencies.emergency4.services.service2",
        "emergencies.emergency4.services.service3",
        "emergencies.emergency4.services.service4",
        "emergencies.emergency4.services.service5",
      ],
      contacts: ["9415012006"],
    },
    {
      id: 5,
      titleKey: "emergencies.emergency5.title",
      descriptionKey: "emergencies.emergency5.description",
      icon: Syringe,
      color: "from-green-500 to-green-600",
      servicesKeys: [
        "emergencies.emergency5.services.service1",
        "emergencies.emergency5.services.service2",
        "emergencies.emergency5.services.service3",
        "emergencies.emergency5.services.service4",
        "emergencies.emergency5.services.service5",
      ],
      contacts: ["1800-11-0031"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#C62828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-12 h-12" />
            <h1 className="text-4xl font-bold">{t('emergencies.title')}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            {t('emergencies.teamsAvailable')}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="text-sm mb-2">{t('emergencies.hotlineTitle')}</div>
            <a href={`tel:${t('emergencies.hotlineNumber')}`} className="text-4xl font-bold hover:underline">
              {t('emergencies.hotlineNumber')}
            </a>
            <div className="text-sm mt-2 opacity-90">{t('emergencies.hotlineTollFree')}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Services */}
        <div className="space-y-8">
          {emergencies.map((emergency) => {
            const Icon = emergency.icon;
            return (
              <div key={emergency.id} id={`${emergency.id}`} className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition">
                <div className={`h-2 bg-gradient-to-r ${emergency.color}`} />
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${emergency.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-[#003366] mb-2">{t(emergency.titleKey)}</h2>
                          <p className="text-gray-600">{t(emergency.descriptionKey)}</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="font-bold text-gray-900 mb-3">{t('emergencies.servicesProvided')}</h3>
                        <ul className="space-y-2">
                          {emergency.servicesKeys.map((serviceKey, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-[#1B5E20] rounded-full" />
                              {t(serviceKey)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="md:w-64 bg-gray-50 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-4">{t('emergencies.emergencyContact')}</h3>
                      <div className="space-y-4">
                        {emergency.contacts.map((contact, index) => (
                          <div key={index}>
                            <div className="text-sm text-gray-600 mb-2">
                              {emergency.contactLabels ? t(emergency.contactLabels[index]) : t('emergencies.directHelpline')}
                            </div>
                            <a
                              href={`tel:${contact}`}
                              className={`text-2xl font-bold bg-gradient-to-r ${emergency.color} bg-clip-text text-transparent hover:underline`}
                            >
                              {contact}
                            </a>
                          </div>
                        ))}
                        <div className="pt-4 border-t">
                          <div className="text-xs text-gray-500 mb-2">{t('emergencies.available247')}</div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Phone className="w-4 h-4" />
                            <span>{t('emergencies.tollFree')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-[#003366] mb-4">{t('emergencies.inCaseOfEmergency')}</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">{t('emergencies.whatToDo')}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {t('emergencies.stayCalm')}</li>
                <li>• {t('emergencies.callHotline')}</li>
                <li>• {t('emergencies.provideLocation')}</li>
                <li>• {t('emergencies.followInstructions')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t('emergencies.whatWeNeed')}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {t('emergencies.natureOfEmergency')}</li>
                <li>• {t('emergencies.exactLocation')}</li>
                <li>• {t('emergencies.peopleAffected')}</li>
                <li>• {t('emergencies.contactNumber')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}