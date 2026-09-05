import { useEffect, useState } from "react";
import { motion } from "motion/react";

const stats = [
  { label: "Families Supported", value: 25000, suffix: "+" },
  { label: "Medical Camps Conducted", value: 120, suffix: "+" },
  { label: "Active Volunteers", value: 5000, suffix: "+" },
  { label: "Districts Covered", value: 15, suffix: "" },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

export default function ImpactCounter() {
  return (
    <div className="bg-gray-50 py-16 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0059D2] mb-3">Our Impact in Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time data showing the reach and impact of Ek Punjab Foundation's initiatives across Punjab
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#0059D2] mb-3">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}