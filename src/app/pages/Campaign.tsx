import { useParams, Link } from "react-router";
import { Calendar, Target, TrendingUp, Users, MapPin, ArrowLeft, Heart, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const campaigns = {
  "Professional-training-program":{
    id: "Professional-training-program",
    title: "Professional Training Program",
    tagline: "Empowering Punjab's Workforce for Tomorrow",
    category: "Community",
    status: "Active",
    startDate: "May 2026",
    endDate: "Ongoing",
    target: "100,000 citizens",
    currentProgress: 14,
    progressPercentage: 1,
    description: "A skill development initiative under Ek Punjab Foundation, offering industry-aligned professional training to youth and adults across Punjab. Focuses on digital literacy, vocational skills, soft skills, and placement assistance to boost employability and entrepreneurship.",
    image: "/pujab-foundation.png",
    objectives: [
      "Provide job-ready skills to 100,000 citizens by 2027",
      "Bridge the gap between industry needs and workforce capabilities",
      "Empower women and rural youth through targeted training modules",
      "Offer certification and placement support for graduates",
      "Promote self-employment and micro-enterprises",
    ],
    impact: [
      "15,000 citizens enrolled in 6+ professional courses",
      "65% average placement rate among certified candidates",
      "200+ MSMEs and companies partnered for hiring",
      "Training centers established in 15 districts",
      "30% of trainees are women from underserved areas",
    ],
    partners: ["NSDC (National Skill Development Corporation)", "Local ITIs", "Punjab Skill Development Mission", "Industry Chambers (CII/PHD)", "Banking partners for entrepreneurship loans"],
    regions: ["All Punjab", "Focus on Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda, and rural blocks"],
  },
  "ek-punjab": {
    id: "ek-punjab",
    title: "Ek Punjab Initiative",
    tagline: "Uniting for a Better Tomorrow",
    category: "Community",
    status: "Active",
    startDate: "April 2026",
    endDate: "Ongoing",
    target: "100,000 citizens",
    currentProgress: 15000,
    progressPercentage: 15,
    description: "The core initiative of Ek Punjab Foundation, aiming to unite communities and foster holistic development across the state. This campaign focuses on comprehensive social, educational, and environmental progress.",
    image: "/pujab-foundation.png",
    objectives: [
      "Unite diverse communities across Punjab",
      "Promote holistic state development",
      "Support local grassroot initiatives",
      "Create awareness about civic duties",
      "Foster youth leadership programs",
    ],
    impact: [
      "15,000 active community members engaged",
      "50+ community leadership programs conducted",
      "Active presence in 20 major cities",
      "Youth volunteer network established",
    ],
    partners: ["Local NGOs", "Community Leaders", "Youth Organizations", "Civic Bodies"],
    regions: ["All Punjab"],
  },
  "health-for-all": {
    id: "health-for-all",
    title: "Health For All 2026",
    tagline: "Bringing Quality Healthcare to Every Village",
    category: "Healthcare",
    status: "Active",
    startDate: "January 2026",
    endDate: "December 2026",
    target: "50,000 patients",
    currentProgress: 12000,
    progressPercentage: 24,
    description: "A comprehensive healthcare initiative aimed at providing free medical services, health screenings, and preventive care to underserved communities across Punjab. This campaign includes mobile medical units, specialist consultations, and free medicines.",
    image: "https://images.unsplash.com/photo-1708593343442-7595427ddf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNhbXAlMjBJbmRpYSUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzcwNzkxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    objectives: [
      "Conduct 200 medical camps across rural Punjab",
      "Provide free health screenings to 50,000 individuals",
      "Distribute essential medicines worth ₹50 lakhs",
      "Create health awareness in 300 villages",
      "Train 500 community health workers",
    ],
    impact: [
      "12,000 patients treated in first 2 months",
      "45 medical camps successfully completed",
      "18 villages now have regular health checkup services",
      "200+ volunteers trained in basic healthcare",
    ],
    partners: ["Punjab Health Department", "Civil Hospitals Network", "Medical Colleges", "Local NGOs"],
    regions: ["Majha", "Doaba", "Malwa"],
  },
  "educate-empower": {
    id: "educate-empower",
    title: "Educate & Empower",
    tagline: "Education as a Pathway to Progress",
    category: "Education",
    status: "Active",
    startDate: "February 2026",
    endDate: "January 2027",
    target: "5,000 students",
    currentProgress: 1200,
    progressPercentage: 24,
    description: "Supporting education for underprivileged children through scholarships, learning materials, tutoring programs, and infrastructure development in rural schools.",
    image: "https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMHNjaG9vbCUyMEluZGlhfGVufDF8fHx8MTc3MDc5MjAyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    objectives: [
      "Provide scholarships to 500 deserving students",
      "Distribute learning materials to 5,000 children",
      "Establish 10 community learning centers",
      "Train 100 teachers in modern pedagogy",
      "Renovate 20 school buildings",
    ],
    impact: [
      "1,200 students enrolled in scholarship program",
      "3 learning centers operational",
      "15 schools receiving support",
      "Dropout rate reduced by 30% in target areas",
    ],
    partners: ["Department of Education", "Local Schools", "Teacher Associations", "Corporate Sponsors"],
    regions: ["Rural Punjab", "Urban Centers"],
  },
  "green-punjab": {
    id: "green-punjab",
    title: "Green Punjab Initiative",
    tagline: "Planting Seeds for a Sustainable Future",
    category: "Environment",
    status: "Active",
    startDate: "March 2026",
    endDate: "June 2026",
    target: "50,000 trees",
    currentProgress: 8000,
    progressPercentage: 16,
    description: "Mass tree plantation drive aimed at environmental conservation, combating climate change, and creating green cover across Punjab.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBJbmRpYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3Mzk0NjI1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    objectives: [
      "Plant 50,000 native trees across Punjab",
      "Engage 5,000 volunteers in plantation drives",
      "Create 25 community forests",
      "Conduct environmental awareness in 100 schools",
      "Establish tree monitoring system",
    ],
    impact: [
      "8,000 trees planted successfully",
      "1,200 volunteers participated",
      "5 community forests established",
      "20 schools adopted green practices",
    ],
    partners: ["Forest Department", "Schools & Colleges", "Local Communities", "Environmental NGOs"],
    regions: ["All Punjab"],
  },
};

export default function Campaign() {
  const { id } = useParams();
  const campaign = id ? campaigns[id as keyof typeof campaigns] : campaigns["health-for-all"];

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Campaign Not Found</h1>
          <Link to="/" className="text-[#003366] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-[#003366] hover:text-[#1B5E20] font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white text-[#003366]">{campaign.category}</Badge>
              <Badge className="bg-green-600">{campaign.status}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{campaign.title}</h1>
            <p className="text-xl text-white/90">{campaign.tagline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Overview */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">Campaign Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{campaign.description}</p>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Start Date</div>
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Calendar className="w-4 h-4 text-[#0059D2]" />
                    {campaign.startDate}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">End Date</div>
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Calendar className="w-4 h-4 text-[#0059D2]" />
                    {campaign.endDate}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Target</div>
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Target className="w-4 h-4 text-[#0059D2]" />
                    {campaign.target}
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">Campaign Objectives</h2>
              <ul className="space-y-3">
                {campaign.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0059D2]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#0059D2] rounded-full" />
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Impact */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">Current Impact</h2>
              <ul className="space-y-3">
                {campaign.impact.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">Implementation Partners</h2>
              <div className="flex flex-wrap gap-2">
                {campaign.partners.map((partner, index) => (
                  <Badge key={index} variant="outline" className="border-[#003366] text-[#003366]">
                    {partner}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Regions Covered */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">Regions Covered</h2>
              <div className="flex flex-wrap gap-3">
                {campaign.regions.map((region, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#0059D2]" />
                    <span className="text-gray-700 font-medium">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4">Campaign Progress</h3>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Achievement</span>
                  <span className="text-lg font-bold text-[#0059D2]">{campaign.progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#0059D2] to-[#1B5E20] h-3 rounded-full transition-all"
                    style={{ width: `${campaign.progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                  <span>{campaign.currentProgress.toLocaleString()} achieved</span>
                  <span>{campaign.target}</span>
                </div>
              </div>

              {/* Support Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Support This Campaign
                </Button>
                <Button variant="outline" className="w-full border-[#003366] text-[#003366] hover:bg-gray-50">
                  <Users className="w-4 h-4 mr-2" />
                  Volunteer
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Campaign
                </Button>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 rounded-xl border p-6">
              <h3 className="font-bold text-gray-900 mb-3">Campaign Coordinator</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">For more information about this campaign, please contact our team.</p>
                <div className="pt-3 border-t">
                  <div className="text-gray-600">Email</div>
                  <a href="mailto:hello@ekpunjabfoundation.org" className="text-[#003366] hover:underline font-medium">
                    hello@ekpunjabfoundation.org
                  </a>
                </div>
                <div className="pt-2">
                  <div className="text-gray-600">Phone</div>
                  <a href="tel:+918427775865" className="text-[#003366] hover:underline font-medium">
                    +91 8427775865
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}