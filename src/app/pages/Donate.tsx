import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Heart, GraduationCap, AlertCircle, HandHeart, CheckCircle, Info } from "lucide-react";

export default function Donate() {
  const { t } = useTranslation();
  const [donationType, setDonationType] = useState<"oneTime" | "monthly">("oneTime");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("general");

  const amounts = [
    { value: 500, descKey: "donate.amount500Desc" },
    { value: 1000, descKey: "donate.amount1000Desc" },
    { value: 2500, descKey: "donate.amount2500Desc" },
    { value: 5000, descKey: "donate.amount5000Desc" },
    { value: 10000, descKey: "donate.amount10000Desc" },
  ];

  const programs = [
    { id: "healthcare", icon: Heart, titleKey: "donate.programHealthcare", descKey: "donate.programHealthcareDesc" },
    { id: "education", icon: GraduationCap, titleKey: "donate.programEducation", descKey: "donate.programEducationDesc" },
    { id: "emergency", icon: AlertCircle, titleKey: "donate.programEmergency", descKey: "donate.programEmergencyDesc" },
    { id: "general", icon: HandHeart, titleKey: "donate.programGeneral", descKey: "donate.programGeneralDesc" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#C70A10] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">{t('donate.heroTitle')}</h1>
          <p className="text-xl text-center text-white/95 max-w-3xl mx-auto mb-12">
            {t('donate.heroSubtitle')}
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#C70A10] mb-1">90,000+</div>
              <div className="text-sm text-gray-600">{t('donate.livesImpacted')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#C70A10] mb-1">₹5.2 Cr</div>
              <div className="text-sm text-gray-600">{t('donate.fundsUtilized')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#C70A10] mb-1">250+</div>
              <div className="text-sm text-gray-600">{t('donate.activePrograms')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#C70A10] mb-1">95%</div>
              <div className="text-sm text-gray-600">{t('donate.toPrograms')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('donate.makeContribution')}</h2>
              
              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">{t('donate.donationType')}</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType("oneTime")}
                    className={`py-4 px-6 rounded-lg border-2 text-center transition ${
                      donationType === "oneTime"
                        ? "border-[#C70A10] bg-red-50"
                        : "border-gray-300 bg-white hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold">{t('donate.oneTime')}</div>
                    <div className="text-sm text-gray-600">{t('donate.singleDonation')}</div>
                  </button>
                  <button
                    onClick={() => setDonationType("monthly")}
                    className={`py-4 px-6 rounded-lg border-2 text-center transition relative ${
                      donationType === "monthly"
                        ? "border-[#C70A10] bg-red-50"
                        : "border-gray-300 bg-white hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold">{t('donate.monthly')}</div>
                    <div className="text-sm text-gray-600">{t('donate.recurringSupport')}</div>
                    <Badge className="absolute -top-2 right-2 bg-green-600 text-white text-xs">
                      {t('donate.recommended')}
                    </Badge>
                  </button>
                </div>
              </div>

              {/* Select Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">{t('donate.selectAmount')}</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => {
                        setSelectedAmount(amount.value);
                        setCustomAmount("");
                      }}
                      className={`p-4 rounded-lg border-2 text-left transition ${
                        selectedAmount === amount.value
                          ? "border-[#C70A10] bg-red-50"
                          : "border-gray-300 bg-white hover:border-gray-400"
                      }`}
                    >
                      <div className="font-bold text-lg text-gray-900 mb-1">₹{amount.value.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">{t(amount.descKey)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">{t('donate.orCustomAmount')}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder={t('donate.enterAmount')}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C70A10] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Where Should We Use Your Donation */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">{t('donate.whereUse')}</label>
                <div className="space-y-3">
                  {programs.map((program) => {
                    const Icon = program.icon;
                    return (
                      <button
                        key={program.id}
                        onClick={() => setSelectedProgram(program.id)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition flex items-start gap-3 ${
                          selectedProgram === program.id
                            ? "border-[#C70A10] bg-red-50"
                            : "border-gray-300 bg-white hover:border-gray-400"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          selectedProgram === program.id ? "bg-[#C70A10] text-white" : "bg-gray-100 text-gray-600"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">{t(program.titleKey)}</div>
                          <div className="text-sm text-gray-600">{t(program.descKey)}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Your Information */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('donate.yourInformation')}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('donate.firstName')} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C70A10] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('donate.lastName')} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C70A10] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('donate.emailAddress')} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C70A10] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('donate.phoneNumber')} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C70A10] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* 80G Tax Exemption */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">{t('donate.taxExemptionTitle')}</div>
                      <div className="text-sm text-gray-700 mb-3">{t('donate.taxExemptionDesc')}</div>
                      <input
                        type="text"
                        placeholder={t('donate.panPlaceholder')}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-[#C70A10] border-gray-300 rounded focus:ring-[#C70A10]" />
                  <span className="text-sm text-gray-700">{t('donate.agreement')}</span>
                </label>
              </div>

              {/* Donate Button */}
              <Button
                size="lg"
                className="w-full bg-[#C70A10] hover:bg-[#C70A10]/90 text-white text-lg py-6"
              >
                {t('donate.proceedPayment')}
              </Button>
            </div>
          </div>

          {/* Right Column - Info Boxes */}
          <div className="lg:col-span-1 space-y-6">
            {/* Why Donate to Ek Punjab Foundation */}
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('donate.whyDonateTitle')}</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <li key={num} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#C70A10] mt-0.5">•</span>
                    <span>{t(`donate.whyReason${num}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accepted Payment Methods */}
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('donate.paymentMethodsTitle')}</h3>
              <ul className="space-y-2">
                {['creditDebit', 'netBanking', 'upi', 'wallets'].map((method) => (
                  <li key={method} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#C70A10]">•</span>
                    <span>{t(`donate.payment${method.charAt(0).toUpperCase() + method.slice(1)}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('donate.needHelp')}</h3>
              <p className="text-sm text-gray-600 mb-4">{t('donate.needHelpDesc')}</p>
              <div className="space-y-2">
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t('donate.email')}</div>
                  <a href="mailto:hello@ekpunjabfoundation.org" className="text-sm text-[#C70A10] font-medium hover:underline">
                    hello@ekpunjabfoundation.org
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t('donate.phone')}</div>
                  <a href="tel:+918427775865" className="text-sm text-[#C70A10] font-medium hover:underline">
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