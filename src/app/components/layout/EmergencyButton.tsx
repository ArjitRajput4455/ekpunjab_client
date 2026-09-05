import { useState } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Emergency Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#DC2626] text-white p-4 rounded-full shadow-lg hover:bg-[#B91C1C] transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(220, 38, 38, 0.7)",
            "0 0 0 10px rgba(220, 38, 38, 0)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Phone className="w-6 h-6" />
      </motion.button>

      {/* Emergency Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-[#DC2626] text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Emergency Help</h2>
                    <p className="text-sm opacity-90">We're here to help 24/7</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Emergency Hotline</div>
                    <a href="tel:+918427775865" className="text-2xl font-bold text-[#DC2626]">
                      +91 8427775865
                    </a>
                    <div className="text-xs text-gray-500 mt-1">Available 24/7 • Toll Free</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">Medical Emergency</div>
                      <a href="tel:108" className="font-bold text-[#0059D2]">108</a>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">Women Helpline</div>
                      <a href="tel:1091" className="font-bold text-[#0059D2]">1091</a>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <h3 className="font-semibold text-sm text-gray-700">Quick Actions</h3>
                  <div className="grid gap-2">
                    <Button variant="outline" size="sm" className="justify-start" asChild>
                      <Link to="/emergencies">View Emergency Services</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start" asChild>
                      <Link to="/report">Report a Concern</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start" asChild>
                      <Link to="/find-help">Find Nearest Help Center</Link>
                    </Button>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  For non-emergency inquiries, please visit our contact page
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}