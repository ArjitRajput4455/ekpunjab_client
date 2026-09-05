import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";

function getDaysUntil(dateString: string) {
  const eventDate = new Date(dateString);
  const today = new Date("2026-02-17"); // Current date from system
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function UpcomingEvents() {
  const { t } = useTranslation();
  
  const events = [
    {
      id: 1,
      titleKey: "events.bloodDonationTitle",
      dateKey: "events.bloodDonationDate",
      monthKey: "events.bloodDonationMonth",
      dayKey: "events.bloodDonationDay",
      yearKey: "events.bloodDonationYear",
      date: "March 5, 2026",
      timeKey: "events.bloodDonationTime",
      locationKey: "events.bloodDonationLocation",
      categoryKey: "events.bloodDonationCategory",
      attendees: 150,
      statusKey: "campaigns.upcoming",
      color: "bg-[#0059D2]",
    },
    {
      id: 2,
      titleKey: "events.youthLeadershipTitle",
      dateKey: "events.youthLeadershipDate",
      monthKey: "events.youthLeadershipMonth",
      dayKey: "events.youthLeadershipDay",
      yearKey: "events.youthLeadershipYear",
      date: "March 15, 2026",
      timeKey: "events.youthLeadershipTime",
      locationKey: "events.youthLeadershipLocation",
      categoryKey: "events.youthLeadershipCategory",
      attendees: 200,
      statusKey: "campaigns.registrationOpen",
      color: "bg-[#0059D2]",
    },
    {
      id: 3,
      titleKey: "events.womenSafetyTitle",
      dateKey: "events.womenSafetyDate",
      monthKey: "events.womenSafetyMonth",
      dayKey: "events.womenSafetyDay",
      yearKey: "events.womenSafetyYear",
      date: "March 20, 2026",
      timeKey: "events.womenSafetyTime",
      locationKey: "events.womenSafetyLocation",
      categoryKey: "events.womenSafetyCategory",
      attendees: 100,
      statusKey: "campaigns.registrationOpen",
      color: "bg-[#0059D2]",
    },
    {
      id: 4,
      titleKey: "events.treePlantationTitle",
      dateKey: "events.treePlantationDate",
      monthKey: "events.treePlantationMonth",
      dayKey: "events.treePlantationDay",
      yearKey: "events.treePlantationYear",
      date: "March 25, 2026",
      timeKey: "events.treePlantationTime",
      locationKey: "events.treePlantationLocation",
      categoryKey: "events.treePlantationCategory",
      attendees: 500,
      statusKey: "campaigns.upcoming",
      color: "bg-[#0059D2]",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0059D2] mb-3">{t('home.upcomingEvents')}</h2>
            <p className="text-gray-600">{t('home.joinActivities')}</p>
          </div>
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link to="/events">
              {t('home.viewAllEvents')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {events.map((event, index) => {
            const daysUntil = getDaysUntil(event.date);
            const eventDate = new Date(event.date);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition group"
              >
                <div className="flex">
                  {/* Date Card */}
                  <div className={`${event.color} text-white p-6 flex flex-col items-center justify-center min-w-[120px]`}>
                    <div className="text-sm font-semibold mb-1">
                      {t(event.monthKey).toUpperCase()}
                    </div>
                    <div className="text-4xl font-bold">
                      {t(event.dayKey)}
                    </div>
                    <div className="text-xs mt-1">
                      {t(event.yearKey)}
                    </div>
                    {daysUntil > 0 && daysUntil <= 30 && (
                      <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded">
                        {t('home.inDays', { days: daysUntil })}
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge className="mb-2">{t(event.categoryKey)}</Badge>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0059D2] transition">
                          {t(event.titleKey)}
                        </h3>
                      </div>
                      <Badge variant="outline" className="text-[#0059D2] border-[#0059D2]">
                        {t(event.statusKey)}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{t(event.timeKey)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{t(event.locationKey)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{t('home.expectedAttendees', { count: event.attendees })}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <Link to={`/events/${event.id}`}>{t('home.viewDetails')}</Link>
                      </Button>
                      <Button size="sm" className={`flex-1 ${event.color} text-white`} asChild>
                        <Link to={`/events/${event.id}/register`}>{t('home.registerNow')}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Webinar Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#101828] rounded-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{t('home.webinarTitle')}</h3>
              <p className="text-white/90">
                {t('home.webinarDesc')}
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/events#webinars">
                {t('home.viewWebinarSchedule')}
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/events">
              {t('home.viewAllEvents')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}