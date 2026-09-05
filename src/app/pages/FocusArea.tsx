import { Link } from "react-router";
import { ArrowLeft, GraduationCap, Heart, Users, Sprout, Shield, FileText, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

const focusAreasData: Record<string, any> = {
  education: {
    title: "Education Support",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    description: "Empowering Punjab's future through quality education access and infrastructure development",
    stats: [
      { label: "Students Supported", value: "3,500+" },
      { label: "Scholarships Provided", value: "850+" },
      { label: "Schools Supported", value: "45" },
      { label: "Learning Centers", value: "12" },
    ],
    initiatives: [
      {
        name: "Scholarship Program",
        description: "Financial assistance for meritorious students from underprivileged backgrounds",
        impact: "850+ scholarships awarded",
      },
      {
        name: "Digital Learning Labs",
        description: "Computer labs and digital learning resources in rural schools",
        impact: "12 labs established",
      },
      {
        name: "Teacher Training",
        description: "Capacity building workshops for teachers in rural areas",
        impact: "450+ teachers trained",
      },
      {
        name: "Library Development",
        description: "Setting up libraries with books and learning materials",
        impact: "25 libraries established",
      },
    ],
    successStories: [
      {
        name: "Simran Kaur",
        story: "Received scholarship and is now pursuing engineering at prestigious institution",
      },
      {
        name: "Ranjit Singh",
        story: "Digital lab helped improve computer skills, now working as software developer",
      },
    ],
  },
  health: {
    title: "Health & Medical Aid",
    icon: Heart,
    color: "from-red-500 to-red-600",
    description: "Providing accessible healthcare services to underserved communities across Punjab",
    stats: [
      { label: "Medical Camps", value: "120+" },
      { label: "Patients Treated", value: "15,000+" },
      { label: "Free Medicines", value: "₹25L Worth" },
      { label: "Health Workers", value: "85" },
    ],
    initiatives: [
      {
        name: "Mobile Medical Camps",
        description: "Free health check-ups and consultations in remote villages",
        impact: "120+ camps conducted",
      },
      {
        name: "Medicine Distribution",
        description: "Free essential medicines for chronic disease patients",
        impact: "₹25L+ worth distributed",
      },
      {
        name: "Health Awareness",
        description: "Preventive healthcare and hygiene awareness programs",
        impact: "50+ awareness drives",
      },
      {
        name: "Ambulance Service",
        description: "24/7 emergency ambulance services in rural areas",
        impact: "15 ambulances operational",
      },
    ],
    successStories: [
      {
        name: "Gurpreet Singh",
        story: "Received timely treatment during medical camp, fully recovered from illness",
      },
      {
        name: "Manjit Kaur",
        story: "Free diabetes medication program helped manage condition effectively",
      },
    ],
  },
  women: {
    title: "Women Empowerment",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    description: "Empowering women through skill development, entrepreneurship, and leadership training",
    stats: [
      { label: "Women Trained", value: "2,000+" },
      { label: "Businesses Started", value: "350+" },
      { label: "Self-Help Groups", value: "45" },
      { label: "Training Centers", value: "8" },
    ],
    initiatives: [
      {
        name: "Skill Training Program",
        description: "Vocational training in tailoring, handicrafts, and beauty services",
        impact: "2,000+ women trained",
      },
      {
        name: "Entrepreneurship Support",
        description: "Business development and micro-credit support for women entrepreneurs",
        impact: "350+ businesses started",
      },
      {
        name: "Self-Help Groups",
        description: "Formation and support of women's self-help groups",
        impact: "45 SHGs active",
      },
      {
        name: "Legal Awareness",
        description: "Workshops on women's rights and legal aid services",
        impact: "80+ workshops conducted",
      },
    ],
    successStories: [
      {
        name: "Harpreet Kaur",
        story: "Started successful boutique after completing tailoring training program",
      },
      {
        name: "Kulwinder Kaur",
        story: "Leads self-help group that has empowered 30+ women in her village",
      },
    ],
  },
};

export default function FocusArea() {
  // In a real app, you'd get the area from useParams()
  // For demo, showing education
  const areaId = "education";
  const area = focusAreasData[areaId];
  const Icon = area.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#0059D2]">Home</Link>
            <span>/</span>
            <Link to="/social-initiatives" className="hover:text-[#0059D2]">Social Initiatives</Link>
            <span>/</span>
            <span className="text-gray-900">{area.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${area.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-6" asChild>
            <Link to="/social-initiatives">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Initiatives
            </Link>
          </Button>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{area.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl">{area.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {area.stats.map((stat: any, index: number) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0059D2] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Initiatives Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0059D2] mb-6">Key Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {area.initiatives.map((initiative: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 border hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{initiative.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{initiative.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-[#1B5E20]" />
                      <span className="font-semibold text-[#1B5E20]">{initiative.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0059D2] mb-6">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {area.successStories.map((story: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-xs text-gray-500">Beneficiary</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r ${area.color} rounded-xl p-8 text-white text-center`}>
          <h3 className="text-2xl font-bold mb-4">Support This Initiative</h3>
          <p className="mb-6 text-white/90">Your contribution can help us expand this program and reach more people in need</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link to="/volunteer">Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}