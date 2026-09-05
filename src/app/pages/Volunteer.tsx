import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/config";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CheckCircle, Heart, Users, HandHeart, Sparkles, Upload } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { submitVolunteerApplication, VolunteerFormData } from "../../services/volunteerService";

export default function Volunteer() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    occupation: "",
    organization: "",
    education: "",
    interests: [] as string[],
    availability: "",
    experience: "",
    skills: "",
    why: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [uploadedDocument, setUploadedDocument] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rotatingButtonText, setRotatingButtonText] = useState(0);

  // Rotate button text between languages every 5 seconds
  useEffect(() => {
    const languages = ['en', 'hi', 'pa'];
    const interval = setInterval(() => {
      setRotatingButtonText((prev) => (prev + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get the register button text in the current rotating language
  const getRotatingButtonText = () => {
    const languages = ['en', 'hi', 'pa'];
    const currentLang = languages[rotatingButtonText];
    const tFunc = i18n.getFixedT(currentLang);
    return tFunc('volunteer.registerButton');
  };

  const interestOptions = [
    t('volunteer.areaEducationTitle'),
    t('volunteer.areaHealthcareTitle'),
    t('volunteer.areaRuralTitle'),
    t('volunteer.areaWomenTitle'),
    t('volunteer.areaYouthTitle'),
    t('volunteer.areaEmergencyTitle'),
    t('volunteer.areaEnvironmentTitle'),
    t('volunteer.areaSkillTitle'),
  ];

  const areaDescriptions: { [key: string]: string } = {
    [t('volunteer.areaEducationTitle')]: t('volunteer.areaEducationDesc'),
    [t('volunteer.areaHealthcareTitle')]: t('volunteer.areaHealthcareDesc'),
    [t('volunteer.areaRuralTitle')]: t('volunteer.areaRuralDesc'),
    [t('volunteer.areaWomenTitle')]: t('volunteer.areaWomenDesc'),
    [t('volunteer.areaYouthTitle')]: t('volunteer.areaYouthDesc'),
    [t('volunteer.areaEmergencyTitle')]: t('volunteer.areaEmergencyDesc'),
    [t('volunteer.areaEnvironmentTitle')]: t('volunteer.areaEnvironmentDesc'),
    [t('volunteer.areaSkillTitle')]: t('volunteer.areaSkillDesc'),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert(t('volunteer.fileTooLarge'));
        return;
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert(t('volunteer.invalidFileType'));
        return;
      }
      setUploadedDocument(file);
    }
  };

  const formatDateForAPI = (dateString: string): string => {
    // Convert YYYY-MM-DD to DD/MM/YYYY
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate required fields
      if (formData.interests.length === 0) {
        setError(t('volunteer.errorSelectArea') || 'Please select at least one area of interest');
        setIsSubmitting(false);
        return;
      }

      // Transform form data to API format
      const apiFormData: VolunteerFormData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formatDateForAPI(formData.dateOfBirth),
        street_address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        current_occupation: formData.occupation || undefined,
        organization_institution: formData.organization || undefined,
        highest_education: formData.education || undefined,
        areas_of_interest: formData.interests.join(', '),
        availability: formData.availability,
        previous_volunteer_experience: formData.experience || undefined,
        special_skills_or_expertise: formData.skills || undefined,
        what_inspires_you: formData.why,
        emergency_contact_name: formData.emergencyContact,
        emergency_contact_phone: formData.emergencyPhone,
        document: uploadedDocument || undefined,
      };

      // Submit to API
      const response = await submitVolunteerApplication(apiFormData);
      
      // Success - show success message
      console.log('Volunteer application submitted successfully:', response);
      setSubmitted(true);
    } catch (err: any) {
      // Error handling
      const errorMessage = err?.message || t('volunteer.errorSubmit') || 'Failed to submit application. Please try again.';
      setError(errorMessage);
      console.error('Error submitting volunteer application:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('volunteer-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t('volunteer.successTitle')}</h2>
          <p className="text-gray-600 mb-6 text-lg">
            {t('volunteer.successMessage')}
          </p>
          <div className="bg-[#00AFCC]/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>{t('volunteer.whatsNext')}</strong> {t('volunteer.nextSteps')}
            </p>
          </div>
          <Button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                dateOfBirth: "",
                address: "",
                city: "",
                state: "",
                pincode: "",
                occupation: "",
                organization: "",
                education: "",
                interests: [],
                availability: "",
                experience: "",
                skills: "",
                why: "",
                emergencyContact: "",
                emergencyPhone: "",
              });
            }}
            className="bg-[#00AFCC] hover:bg-[#00AFCC]/90 text-white"
          >
            {t('volunteer.submitAnother')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#101828] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNvbW11bml0eSUyMEluZGlhJTIwdG9nZXRoZXIlMjBoYW5kc3xlbnwxfHx8fDE3NzA4MDE4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Volunteers helping community"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#00AFCC]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-[#00AFCC]" />
            <span className="text-sm font-medium text-white">{t('volunteer.beTheChange')}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{t('volunteer.heroTitle1')}<br />{t('volunteer.heroTitle2')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('volunteer.heroSubtitle')}
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-[#0059D2] hover:bg-[#0059D2]/90 text-white px-8 py-6 text-lg font-semibold"
          >
            <Heart className="w-5 h-5 mr-2" />
            {getRotatingButtonText()}
          </Button>
        </div>
      </div>

      {/* Impact Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('volunteer.seeImpact')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('volunteer.realStories')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHZvbHVudGVlcnMlMjB0ZWFjaGluZyUyMGNoaWxkcmVuJTIwSW5kaWElMjBzbWlsZXxlbnwxfHx8fDE3NzA4MDE4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Teaching children"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="bg-[#00AFCC]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.story1Title')}</h3>
                <p className="text-gray-600 mb-3">
                  {t('volunteer.story1Text')}
                </p>
                <p className="text-sm font-semibold text-[#00AFCC]">{t('volunteer.story1Author')}</p>
              </div>
            </div>

            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693713167925-660694111b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwbWVkaWNhbCUyMGNhbXAlMjBoZWFsdGhjYXJlJTIwSW5kaWF8ZW58MXx8fHwxNzcwODAxODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Medical camp volunteers"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="bg-[#00AFCC]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.story2Title')}</h3>
                <p className="text-gray-600 mb-3">
                  {t('volunteer.story2Text')}
                </p>
                <p className="text-sm font-semibold text-[#00AFCC]">{t('volunteer.story2Author')}</p>
              </div>
            </div>

            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1685603206865-6b869b0a4876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwUHVuamabiTIwSW5kaWElMjBoZWxwaW5nJTIwZWxkZXJseXxlbnwxfHx8fDE3NzA4MDE4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Helping elderly"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="bg-[#00AFCC]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.story3Title')}</h3>
                <p className="text-gray-600 mb-3">
                  {t('volunteer.story3Text')}
                </p>
                <p className="text-sm font-semibold text-[#00AFCC]">{t('volunteer.story3Author')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Compassion Matters */}
      <section className="py-16 bg-gradient-to-br from-[#00AFCC]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('volunteer.whyCompassion')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('volunteer.uniqueGifts')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-[#00AFCC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#00AFCC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('volunteer.impact1Title')}</h3>
              <p className="text-sm text-gray-600">
                {t('volunteer.impact1Desc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-[#00AFCC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#00AFCC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('volunteer.impact2Title')}</h3>
              <p className="text-sm text-gray-600">
                {t('volunteer.impact2Desc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-[#00AFCC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-[#00AFCC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('volunteer.impact3Title')}</h3>
              <p className="text-sm text-gray-600">
                {t('volunteer.impact3Desc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-[#00AFCC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#00AFCC]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('volunteer.impact4Title')}</h3>
              <p className="text-sm text-gray-600">
                {t('volunteer.impact4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Perks & Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('volunteer.benefitsTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('volunteer.benefitsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-[#00AFCC]/5 rounded-2xl p-12 hover:bg-[#00AFCC]/10 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00AFCC] mb-4">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.benefit1Title')}</h3>
                <p className="text-gray-600">{t('volunteer.benefit1Desc')}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#00AFCC]/5 rounded-2xl p-12 hover:bg-[#00AFCC]/10 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00AFCC] mb-4">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.benefit2Title')}</h3>
                <p className="text-gray-600">{t('volunteer.benefit2Desc')}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#00AFCC]/5 rounded-2xl p-12 hover:bg-[#00AFCC]/10 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00AFCC] mb-4">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.benefit3Title')}</h3>
                <p className="text-gray-600">{t('volunteer.benefit3Desc')}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#00AFCC]/5 rounded-2xl p-12 hover:bg-[#00AFCC]/10 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00AFCC] mb-4">04</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.benefit4Title')}</h3>
                <p className="text-gray-600">{t('volunteer.benefit4Desc')}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#00AFCC]/5 rounded-2xl p-12 hover:bg-[#00AFCC]/10 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00AFCC] mb-4">05</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.benefit5Title')}</h3>
                <p className="text-gray-600">{t('volunteer.benefit5Desc')}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#00AFCC]/5 rounded-2xl p-12 hover:bg-[#00AFCC]/10 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00AFCC] mb-4">06</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('volunteer.benefit6Title')}</h3>
                <p className="text-gray-600">{t('volunteer.benefit6Desc')}</p>
              </div>
            </div>
          </div>

          {/* Simple statement */}
          <div className="text-center py-12 border-t border-gray-200">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('volunteer.priorityAccess')}
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('volunteer.areasTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('volunteer.areasSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestOptions.map((area) => (
              <div key={area} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#00AFCC] hover:shadow-lg transition">
                <h3 className="font-bold text-gray-900 mb-2">{area}</h3>
                <p className="text-sm text-gray-600">
                  {areaDescriptions[area]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional CTA Before Form */}
      <section className="py-16 bg-[#101828] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('volunteer.readyTitle')}</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('volunteer.readyDesc')}
          </p>
          <div className="inline-flex items-center gap-2 text-[#00AFCC] text-lg font-semibold">
            <Heart className="w-6 h-6" />
            <span>{t('volunteer.join5000')}</span>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50" id="volunteer-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t('volunteer.formTitle')}</h2>
              <p className="text-gray-600">
                {t('volunteer.formSubtitle')}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}
              
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.personalInfo')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.firstName')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.lastName')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.emailAddress')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.phoneNumber')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.dateOfBirth')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.address')}</h3>
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.streetAddress')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('volunteer.city')} <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('volunteer.state')} <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('volunteer.pincode')} <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.professionalBackground')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.currentOccupation')}
                    </label>
                    <Input
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.organizationInstitution')}
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.highestEducation')}
                    </label>
                    <Input
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                  {t('volunteer.whereHelp')} <span className="text-red-600">*</span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">{t('volunteer.selectAreas')}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange(interest)}
                        className="mt-1 h-4 w-4 text-[#00AFCC] border-gray-300 rounded focus:ring-[#00AFCC]"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-[#00AFCC]">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.yourAvailability')}</h3>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('volunteer.whenVolunteer')} <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AFCC]"
                  >
                    <option value="">{t('volunteer.selectAvailability')}</option>
                    <option value="weekdays">{t('volunteer.weekdays')}</option>
                    <option value="weekends">{t('volunteer.weekendsOnly')}</option>
                    <option value="evenings">{t('volunteer.evenings')}</option>
                    <option value="flexible">{t('volunteer.flexible')}</option>
                    <option value="emergency">{t('volunteer.emergencyOnly')}</option>
                  </select>
                </div>
              </div>

              {/* Experience & Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.shareStory')}</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.previousExperience')}
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AFCC]"
                      placeholder={t('volunteer.experiencePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.specialSkills')}
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AFCC]"
                      placeholder={t('volunteer.skillsPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="why" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.whatMotivates')} <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="why"
                      name="why"
                      value={formData.why}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AFCC]"
                      placeholder={t('volunteer.motivationPlaceholder')}
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              {/* <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.uploadDocuments')}</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    {t('volunteer.uploadDescription')}
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#00AFCC] transition">
                    <input
                      type="file"
                      id="documentUpload"
                      onChange={handleFileUpload}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="documentUpload"
                      className="cursor-pointer flex flex-col items-center gap-3"
                    >
                      <div className="w-12 h-12 bg-[#00AFCC]/10 rounded-full flex items-center justify-center">
                        <Upload className="w-6 h-6 text-[#00AFCC]" />
                      </div>
                      {uploadedDocument ? (
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900 mb-1">{t('volunteer.fileUploaded')}</p>
                          <p className="text-gray-600">{uploadedDocument.name}</p>
                          <p className="text-xs text-gray-500 mt-1">({(uploadedDocument.size / 1024).toFixed(2)} KB)</p>
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900 mb-1">{t('volunteer.clickToUpload')}</p>
                          <p className="text-gray-600">{t('volunteer.supportedFormats')}</p>
                          <p className="text-xs text-gray-500 mt-1">{t('volunteer.maxFileSize')}</p>
                        </div>
                      )}
                    </label>
                  </div>
                  {uploadedDocument && (
                    <button
                      type="button"
                      onClick={() => setUploadedDocument(null)}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      {t('volunteer.removeFile')}
                    </button>
                  )}
                </div>
              </div> */}

              {/* Emergency Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">{t('volunteer.emergencyContact')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.contactName')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('volunteer.contactPhone')} <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-[#00AFCC] border-gray-300 rounded focus:ring-[#00AFCC]"
                  />
                  <span className="text-sm text-gray-700">
                    {t('volunteer.agreementText')} <span className="text-red-600">*</span>
                  </span>
                </label>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00AFCC] hover:bg-[#00AFCC]/90 text-white py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {isSubmitting ? (t('volunteer.submitting') || 'Submitting...') : t('volunteer.startJourney')}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  {t('volunteer.securePrivacy')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final Inspiration */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-gray-700 italic mb-4">
            {t('volunteer.quoteText')}
          </p>
          <p className="text-gray-600">{t('volunteer.quoteAuthor')}</p>
        </div>
      </section>
    </div>
  );
}