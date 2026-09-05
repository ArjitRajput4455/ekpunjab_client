import { Link } from "react-router";
import { Button } from "../components/ui/button";

const partnershipTypes = [
  {
    title: "Corporate Social Responsibility (CSR)",
    description: "Partner with us to fulfill your CSR objectives while making a meaningful impact in Punjab communities. We help design and implement programs aligned with your corporate values.",
    benefits: [
      "Structured program implementation",
      "Transparent impact reporting",
      "Employee engagement opportunities",
      "Brand visibility in communities",
      "Tax benefits under Section 135",
    ],
    commitment: "From ₹5 lakhs annually",
  },
  {
    title: "Institutional Partnerships",
    description: "Collaborate with Ek Punjab Foundation for research, program development, and capacity building. Ideal for universities, research institutions, and international organizations.",
    benefits: [
      "Joint research projects",
      "Data and field access",
      "Policy advocacy collaboration",
      "Knowledge exchange programs",
      "Publication opportunities",
    ],
    commitment: "Project-based agreements",
  },
  {
    title: "Government Partnerships",
    description: "Work alongside government bodies to amplify social welfare programs and extend their reach to underserved communities across Punjab.",
    benefits: [
      "Last-mile delivery support",
      "Community mobilization",
      "Program monitoring and evaluation",
      "Grassroots feedback mechanisms",
      "Capacity building for officials",
    ],
    commitment: "MoU-based collaboration",
  },
  {
    title: "Nonprofit Collaboration",
    description: "Join forces with other NGOs and civil society organizations to create synergies, share resources, and maximize collective impact.",
    benefits: [
      "Resource sharing",
      "Joint program implementation",
      "Advocacy coordination",
      "Best practice exchange",
      "Fundraising collaboration",
    ],
    commitment: "Flexible engagement models",
  },
];

const currentPartners = [
  "Punjab State Government",
  "District Health Departments",
  "Education Department, Punjab",
  "National Health Mission",
  "Local CSR Partners",
];

const impactAreas = [
  {
    area: "Healthcare Access",
    description: "Partner with us to establish medical camps, health screening programs, and awareness initiatives",
  },
  {
    area: "Education Infrastructure",
    description: "Support school infrastructure, digital learning tools, and scholarship programs for underprivileged students",
  },
  {
    area: "Women Empowerment",
    description: "Fund skill development centers, self-help groups, and microfinance initiatives for women entrepreneurs",
  },
  {
    area: "Rural Development",
    description: "Invest in clean water projects, sanitation facilities, and sustainable livelihood programs",
  },
  {
    area: "Youth Skills Training",
    description: "Support vocational training, placement assistance, and entrepreneurship development for youth",
  },
  {
    area: "Emergency Response",
    description: "Provide resources for disaster relief, medical emergencies, and crisis intervention programs",
  },
];

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Partner with Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Join hands with Ek Punjab Foundation to create lasting social impact across Punjab through strategic partnerships and collaborative initiatives
          </p>
        </div>
      </div>

      {/* Partnership Value Proposition */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Partner with Ek Punjab Foundation?</h2>
            <p className="text-gray-600 mb-6">
              Ek Punjab Foundation has established itself as a trusted social organization with deep community connections and proven impact across Punjab. Our partnerships are built on transparency, accountability, and shared commitment to social welfare.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#0059D2] mb-2">25,000+</div>
                <div className="text-sm text-gray-600">Lives Impacted Annually</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#0059D2] mb-2">15+</div>
                <div className="text-sm text-gray-600">Districts Covered</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#0059D2] mb-2">100%</div>
                <div className="text-sm text-gray-600">Transparency in Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Partnership Models</h2>
          <div className="space-y-6">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg border p-6 hover:shadow-lg transition">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</div>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-[#0059D2] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-xs text-gray-500 mb-1">Minimum Commitment</div>
                      <div className="text-sm font-semibold text-gray-900">{type.commitment}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Areas of Collaboration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.area}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Current Partners</h2>
          <div className="bg-white rounded-lg border p-8">
            <p className="text-gray-600 mb-6">
              We are proud to collaborate with leading organizations committed to social development in Punjab:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-[#0059D2] rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Partnership Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0059D2] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Initial Discussion</h3>
              <p className="text-sm text-gray-600">Share your partnership interests and objectives with our team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0059D2] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Needs Assessment</h3>
              <p className="text-sm text-gray-600">We jointly identify focus areas and design custom programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0059D2] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Agreement & Launch</h3>
              <p className="text-sm text-gray-600">Formalize partnership through MoU and initiate programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0059D2] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Impact Reporting</h3>
              <p className="text-sm text-gray-600">Regular updates and transparent reporting on outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#101828] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference Together?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can collaborate to create meaningful social impact across Punjab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0059D2] hover:bg-[#0059D2]/90 text-white" asChild>
              <a href="mailto:hello@ekpunjabfoundation.org">Contact Partnership Team</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/about">Learn More About Ek Punjab Foundation</Link>
            </Button>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-sm text-white/70 mb-2">For partnership inquiries:</p>
            <p className="text-white/90">
              Email: hello@ekpunjabfoundation.org | Phone: +91 8427775865
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}