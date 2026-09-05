import { Link } from "react-router";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();

  const upcomingEvents = [
    {
      id: 1,
      titleKey: "eventsPage.event1Title",
      dateKey: "eventsPage.event1Date",
      timeKey: "eventsPage.event1Time",
      locationKey: "eventsPage.event1Location",
      categoryKey: "eventsPage.event1Category",
      attendees: 150,
      descriptionKey: "eventsPage.event1Desc",
      registrationKey: "eventsPage.event1Registration",
      type: "upcoming",
    },
    {
      id: 2,
      titleKey: "eventsPage.event2Title",
      dateKey: "eventsPage.event2Date",
      timeKey: "eventsPage.event2Time",
      locationKey: "eventsPage.event2Location",
      categoryKey: "eventsPage.event2Category",
      attendees: 500,
      descriptionKey: "eventsPage.event2Desc",
      registrationKey: "eventsPage.event2Registration",
      type: "upcoming",
    },
    {
      id: 3,
      titleKey: "eventsPage.event3Title",
      dateKey: "eventsPage.event3Date",
      timeKey: "eventsPage.event3Time",
      locationKey: "eventsPage.event3Location",
      categoryKey: "eventsPage.event3Category",
      attendees: 100,
      descriptionKey: "eventsPage.event3Desc",
      registrationKey: "eventsPage.event3Registration",
      type: "upcoming",
    },
    {
      id: 4,
      titleKey: "eventsPage.event4Title",
      dateKey: "eventsPage.event4Date",
      timeKey: "eventsPage.event4Time",
      locationKey: "eventsPage.event4Location",
      categoryKey: "eventsPage.event4Category",
      attendees: 80,
      descriptionKey: "eventsPage.event4Desc",
      registrationKey: "eventsPage.event4Registration",
      type: "upcoming",
    },
    {
      id: 5,
      titleKey: "eventsPage.event5Title",
      dateKey: "eventsPage.event5Date",
      timeKey: "eventsPage.event5Time",
      locationKey: "eventsPage.event5Location",
      categoryKey: "eventsPage.event5Category",
      attendees: 300,
      descriptionKey: "eventsPage.event5Desc",
      registrationKey: "eventsPage.event5Registration",
      type: "upcoming",
    },
    {
      id: 6,
      titleKey: "eventsPage.event6Title",
      dateKey: "eventsPage.event6Date",
      timeKey: "eventsPage.event6Time",
      locationKey: "eventsPage.event6Location",
      categoryKey: "eventsPage.event6Category",
      attendees: 500,
      descriptionKey: "eventsPage.event6Desc",
      registrationKey: "eventsPage.event6Registration",
      type: "upcoming",
    },
  ];

  const pastEvents = [
    {
      id: 101,
      titleKey: "eventsPage.pastEvent1Title",
      dateKey: "eventsPage.pastEvent1Date",
      locationKey: "eventsPage.pastEvent1Location",
      categoryKey: "eventsPage.pastEvent1Category",
      attendees: 5000,
      descriptionKey: "eventsPage.pastEvent1Desc",
      type: "past",
    },
    {
      id: 102,
      titleKey: "eventsPage.pastEvent2Title",
      dateKey: "eventsPage.pastEvent2Date",
      locationKey: "eventsPage.pastEvent2Location",
      categoryKey: "eventsPage.pastEvent2Category",
      attendees: 120,
      descriptionKey: "eventsPage.pastEvent2Desc",
      type: "past",
    },
    {
      id: 103,
      titleKey: "eventsPage.pastEvent3Title",
      dateKey: "eventsPage.pastEvent3Date",
      locationKey: "eventsPage.pastEvent3Location",
      categoryKey: "eventsPage.pastEvent3Category",
      attendees: 250,
      descriptionKey: "eventsPage.pastEvent3Desc",
      type: "past",
    },
  ];

  const categories = [
    { key: "eventsPage.categoryAll", value: "All" },
    { key: "eventsPage.categoryWorkshop", value: "Workshop" },
    { key: "eventsPage.categoryMedicalCamp", value: "Medical Camp" },
    { key: "eventsPage.categoryConference", value: "Conference" },
    { key: "eventsPage.categoryTraining", value: "Training" },
    { key: "eventsPage.categoryWebinar", value: "Webinar" },
    { key: "eventsPage.categoryCommunityDrive", value: "Community Drive" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('eventsPage.pageTitle')}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('eventsPage.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition whitespace-nowrap text-sm font-medium"
            >
              {t(category.key)}
            </button>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('eventsPage.upcomingEventsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="border-[#0059D2] text-[#0059D2]">
                      {t(event.categoryKey)}
                    </Badge>
                    {t(event.registrationKey) === t('eventsPage.event1Registration') && (
                      <Badge className="bg-green-600">{t('eventsPage.registrationOpen')}</Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(event.titleKey)}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t(event.descriptionKey)}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-[#0059D2]" />
                      <span>{t(event.dateKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-[#0059D2]" />
                      <span>{t(event.timeKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-[#0059D2]" />
                      <span>{t(event.locationKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users className="w-4 h-4 text-[#0059D2]" />
                      <span>{t('eventsPage.expected')}: {event.attendees} {t('eventsPage.participants')}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#0059D2] hover:bg-[#0059D2]/90 text-white">
                    {t('eventsPage.registerNow')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('eventsPage.recentEventsTitle')}</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{t(event.categoryKey)}</Badge>
                      <Badge variant="secondary">{t('eventsPage.completed')}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t(event.titleKey)}</h3>
                    <p className="text-gray-600 text-sm mb-3">{t(event.descriptionKey)}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {t(event.dateKey)}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {t(event.locationKey)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.attendees} {t('eventsPage.participants')}
                      </div>
                    </div>
                  </div>
                  <button className="text-[#0059D2] hover:text-[#0059D2]/80 font-semibold text-sm whitespace-nowrap">
                    {t('eventsPage.viewReport')} <ArrowRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#101828] text-[#101828] hover:bg-gray-50">
              {t('eventsPage.viewAllPastEvents')}
            </Button>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-[#101828] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">{t('eventsPage.stayUpdated')}</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t('eventsPage.newsletterDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('eventsPage.enterEmail')}
              className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-[#0059D2] hover:bg-[#0059D2]/90 text-white">
              {t('eventsPage.subscribe')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
