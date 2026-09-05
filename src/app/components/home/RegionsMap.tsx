import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const regions = [
  {
    id: 1,
    name: "Majha",
    districts: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran"],
    projects: 28,
    volunteers: 450,
    color: "bg-[#0059D2]",
    position: { top: "20%", left: "30%" },
  },
  {
    id: 2,
    name: "Doaba",
    districts: ["Jalandhar", "Kapurthala", "Hoshiarpur", "SBS Nagar"],
    projects: 32,
    volunteers: 520,
    color: "bg-[#C70A10]",
    position: { top: "35%", left: "45%" },
  },
  {
    id: 3,
    name: "Malwa",
    districts: ["Ludhiana", "Patiala", "Bathinda", "Moga", "Sangrur", "Barnala", "Fazilka", "Muktsar", "Faridkot", "Mansa"],
    projects: 45,
    volunteers: 680,
    color: "bg-[#EC7803]",
    position: { top: "55%", left: "35%" },
  },
];

export default function RegionsMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0059D2] mb-3">Punjab Regions We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ek Punjab Foundation operates across all major regions of Punjab with dedicated teams and active projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-[#0059D2] rounded-2xl p-8 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path d="M30,20 L70,25 L75,45 L65,70 L35,75 L25,50 Z" fill="white" opacity="0.3" />
              </svg>
            </div>

            {/* Region Markers */}
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute"
                style={{ top: region.position.top, left: region.position.left }}
              >
                <div className="relative group cursor-pointer">
                  <div className={`w-12 h-12 ${region.color} rounded-full flex items-center justify-center shadow-lg animate-pulse`} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-white rounded-lg shadow-xl p-3 whitespace-nowrap">
                      <div className="font-semibold text-sm text-gray-900">{region.name}</div>
                      <div className="text-xs text-gray-600">{region.projects} Projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white text-sm font-semibold mb-2">Coverage Map</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                <div>• 15 Districts Active</div>
                <div>• 161 Projects</div>
                <div>• 2,550+ Volunteers</div>
                <div>• 85+ Villages</div>
              </div>
            </div>
          </motion.div>

          {/* Regions List */}
          <div className="space-y-4">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/punjab-regions#${region.id}`}
                  className="block bg-white border rounded-xl p-6 hover:shadow-lg transition group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0059D2] transition mb-1">
                        {region.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {region.districts.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-sm">
                      <span className="text-gray-600">
                        <span className="font-bold text-[#0059D2]">{region.projects}</span> Active Projects
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">
                        <span className="font-bold text-[#0059D2]">{region.volunteers}</span> Volunteers
                      </span>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-[#0059D2]">
                    View Region Details →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/punjab-regions">
              Explore All Regions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}