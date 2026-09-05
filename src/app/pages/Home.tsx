import HeroSection from "../components/home/HeroSection";
import LatestUpdates from "../components/home/LatestUpdates";
import CampaignsSection from "../components/home/CampaignsSection";
import UpcomingEvents from "../components/home/UpcomingEvents";
import EmergencyHotline from "../components/home/EmergencyHotline";
import FocusAreas from "../components/home/FocusAreas";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LatestUpdates />
      <CampaignsSection />
      <UpcomingEvents />
      <EmergencyHotline />
      <FocusAreas />
      <CTASection />
    </div>
  );
}