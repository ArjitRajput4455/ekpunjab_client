import { FileText, Download, Eye, Calendar, Image, Video, FileAudio } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const reports = [
  {
    id: 1,
    title: "Annual Impact Report 2025",
    type: "Annual Report",
    date: "January 2026",
    pages: 64,
    size: "5.2 MB",
    description: "Comprehensive overview of Ek Punjab Foundation's programs, reach, and impact across Punjab during 2025.",
    downloads: 1250,
  },
  {
    id: 2,
    title: "Healthcare Services Report Q4 2025",
    type: "Quarterly Report",
    date: "December 2025",
    pages: 28,
    size: "2.1 MB",
    description: "Detailed analysis of medical camps, patients treated, and health outcomes in the last quarter.",
    downloads: 480,
  },
  {
    id: 3,
    title: "Women Empowerment Initiative Impact Study",
    type: "Research Study",
    date: "November 2025",
    pages: 42,
    size: "3.8 MB",
    description: "Independent evaluation of women's skill development programs and economic outcomes.",
    downloads: 320,
  },
  {
    id: 4,
    title: "Rural Development Program Assessment",
    type: "Program Report",
    date: "October 2025",
    pages: 36,
    size: "4.5 MB",
    description: "Assessment of rural infrastructure projects, agricultural support, and livelihood enhancement programs.",
    downloads: 290,
  },
  {
    id: 5,
    title: "Youth Skills Training Outcomes 2025",
    type: "Program Report",
    date: "September 2025",
    pages: 24,
    size: "1.9 MB",
    description: "Analysis of vocational training programs, placement rates, and youth employment outcomes.",
    downloads: 410,
  },
  {
    id: 6,
    title: "Financial Transparency Report 2024-25",
    type: "Financial Report",
    date: "August 2025",
    pages: 32,
    size: "2.4 MB",
    description: "Detailed financial statements, fund utilization, and audit reports for the fiscal year.",
    downloads: 580,
  },
];

const pressReleases = [
  {
    id: 1,
    title: "Ek Punjab Foundation Launches Major Health Initiative in Rural Punjab",
    date: "February 8, 2026",
    publication: "Punjab Tribune",
    link: "#",
  },
  {
    id: 2,
    title: "5,000 Families Benefit from Winter Relief Program",
    date: "February 5, 2026",
    publication: "Hindustan Times",
    link: "#",
  },
  {
    id: 3,
    title: "Youth Skill Development Program Shows Promising Results",
    date: "January 28, 2026",
    publication: "The Indian Express",
    link: "#",
  },
  {
    id: 4,
    title: "Ek Punjab Foundation Partners with Government for Clean Water Initiative",
    date: "January 20, 2026",
    publication: "Times of India",
    link: "#",
  },
];

const photoGallery = [
  {
    id: 1,
    title: "Medical Camp - Ludhiana",
    date: "February 2026",
    photos: 45,
    image: "https://images.unsplash.com/photo-1708593343442-7595427ddf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNhbXAlMjBJbmRpYSUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzcwNzkxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Education Program - Rural Schools",
    date: "January 2026",
    photos: 38,
    image: "https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMHNjaG9vbCUyMEluZGlhfGVufDF8fHx8MTc3MDc5MjAyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Women Empowerment Workshop",
    date: "January 2026",
    photos: 52,
    image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwSW5kaWElMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Mzk0NjI0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
    date: "December 2025",
    photos: 29,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBJbmRpYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3Mzk0NjI1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const videos = [
  {
    id: 1,
    title: "Ek Punjab Foundation Annual Impact Story 2025",
    duration: "5:42",
    views: 15200,
    date: "January 2026",
  },
  {
    id: 2,
    title: "Rural Healthcare Initiative Documentary",
    duration: "12:15",
    views: 8900,
    date: "December 2025",
  },
  {
    id: 3,
    title: "Women Entrepreneurs Success Stories",
    duration: "8:30",
    views: 6400,
    date: "November 2025",
  },
  {
    id: 4,
    title: "Youth Leadership Program Highlights",
    duration: "6:20",
    views: 5800,
    date: "November 2025",
  },
];

const speeches = [
  {
    id: 1,
    title: "Building a Healthier Punjab - Annual Conference Address",
    speaker: "Dr. Rajinder Singh, Executive Director",
    date: "January 15, 2026",
    duration: "18:30",
    type: "Audio",
  },
  {
    id: 2,
    title: "Community Empowerment and Social Change",
    speaker: "Harpreet Kaur, Program Director",
    date: "December 10, 2025",
    duration: "15:45",
    type: "Video",
  },
  {
    id: 3,
    title: "Sustainable Rural Development Strategies",
    speaker: "Kulwinder Singh, Regional Coordinator",
    date: "November 22, 2025",
    duration: "22:10",
    type: "Audio",
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Publications & Media</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Access Ek Punjab Foundation's comprehensive reports, press coverage, multimedia content, and leadership speeches documenting our impact across Punjab.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reports & Publications */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Reports & Publications</h2>
            <Badge variant="outline" className="border-[#0059D2] text-[#0059D2]">
              {reports.length} Documents
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#101828]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#101828]" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">{report.type}</Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </span>
                      <span>{report.pages} pages</span>
                      <span>{report.size}</span>
                      <span>{report.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-[#0059D2] hover:bg-[#0059D2]/90 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press Coverage */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Coverage</h2>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="space-y-4">
              {pressReleases.map((press) => (
                <div key={press.id} className="pb-4 border-b last:border-b-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{press.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>{press.publication}</span>
                        <span>•</span>
                        <span>{press.date}</span>
                      </div>
                    </div>
                    <button className="text-[#0059D2] hover:text-[#0059D2]/80 font-semibold text-sm whitespace-nowrap">
                      Read Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 pt-6 border-t">
              <Button variant="outline" className="border-[#101828] text-[#101828] hover:bg-gray-50">
                View All Press Coverage
              </Button>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Photo Gallery</h2>
            <Badge variant="outline" className="border-[#0059D2] text-[#0059D2]">
              {photoGallery.reduce((sum, album) => sum + album.photos, 0)} Photos
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photoGallery.map((album) => (
              <div key={album.id} className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={album.image}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold mb-1">{album.title}</h3>
                      <div className="text-xs text-white/80 flex items-center gap-2">
                        <Image className="w-3 h-3" />
                        {album.photos} photos
                        <span>•</span>
                        {album.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" className="border-[#101828] text-[#101828] hover:bg-gray-50">
              View Full Gallery
            </Button>
          </div>
        </section>

        {/* Videos */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Video Library</h2>
            <Badge variant="outline" className="border-[#0059D2] text-[#0059D2]">
              {videos.length} Videos
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition overflow-hidden">
                <div className="aspect-video bg-gray-200 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-[#101828] opacity-80 group-hover:opacity-90 transition flex items-center justify-center">
                    <Video className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.views.toLocaleString()} views</span>
                    <span>•</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speeches & Talks */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Speeches & Talks</h2>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="space-y-4">
              {speeches.map((speech) => (
                <div key={speech.id} className="pb-4 border-b last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#101828]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileAudio className="w-5 h-5 text-[#101828]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{speech.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{speech.speaker}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <Badge variant="secondary">{speech.type}</Badge>
                        <span>{speech.duration}</span>
                        <span>•</span>
                        <span>{speech.date}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Listen
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <div className="mt-16 bg-[#101828] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Stay Informed</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to receive our latest reports, publications, and media updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-[#0059D2] hover:bg-[#0059D2]/90 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}