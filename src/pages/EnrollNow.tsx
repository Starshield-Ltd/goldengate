import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, BookOpen, GraduationCap, Calendar, Clock, Users, Award, Send, Phone } from 'lucide-react';
import ImageWithLoader from '@/components/ImageWithLoader';

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    program: '',
    age: '',
    previousSchool: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello! I'm interested in enrolling at Golden Gate Int. School (GOGAINS).\n\nDetails:\nStudent Name: ${formData.studentName}\nParent/Guardian Name: ${formData.parentName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgram: ${formData.program}\nAge: ${formData.age}\nPrevious School: ${formData.previousSchool}\nAdditional Info: ${formData.message}`;
    const whatsappUrl = `https://wa.me/233246186629?text=${encodeURIComponent(message)}`;

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      program: '',
      age: '',
      previousSchool: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gradient-to-br from-school-blue/5 to-school-yellow/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-school-yellow/10 to-transparent rounded-bl-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-96 bg-gradient-to-tr from-school-blue/10 to-transparent rounded-tr-[100px] -z-10"></div>

        {/* Animated circles */}
        <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-school-yellow/10 animate-float blur-xl -z-10"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-school-blue/10 animate-float blur-xl -z-10" style={{animationDelay: '1.5s'}}></div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-sm">
              Begin Your Journey at Golden Gate Int. School
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Take the first step towards excellence at Golden Gate Int. School. Fill out this form and we'll connect with you via WhatsApp to guide you through the enrollment process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left side - Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden border border-school-yellow/20">
              {isSubmitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in Golden Gate Int. School. Your enrollment inquiry has been forwarded to our admissions team via WhatsApp.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We will contact you soon to discuss the next steps. If you have any questions, please contact us at <span className="font-medium">0246186629</span>.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2 bg-gradient-to-r from-school-blue to-school-yellow text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <div>
                  <div className="bg-gradient-to-r from-school-blue to-school-yellow p-6 text-white">
                    <h2 className="text-xl font-bold">Student Enrollment Form</h2>
                    <p className="text-sm opacity-90">Please fill out all required fields</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student's Full Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent/Guardian Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                          required
                          placeholder="e.g., 0246123456"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700">Desired Program <span className="text-red-500">*</span></label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                          required
                        >
                          <option value="">Select a program</option>
                          <option value="Creche">Creche</option>
                          <option value="Nursery">Nursery</option>
                          <option value="Kindergarten">Kindergarten</option>
                          <option value="Primary Education">Primary Education</option>
                          <option value="Junior High School">Junior High School</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Student's Age <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">Previous School (if any)</label>
                      <input
                        type="text"
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-school-blue focus:ring-school-blue/20 text-sm"
                        placeholder="Any specific requirements, questions, or information you'd like to share"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-gradient-to-r from-school-blue to-school-yellow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-school-blue transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit via WhatsApp
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Right side - Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* School Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-school-yellow/20">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithLoader
                    src="https://ik.imagekit.io/edhumbling/golden%20gate/WhatsApp%20Image%202025-04-11%20at%2016.36.15_e6ce72f4.jpg"
                    alt="Golden Gate Int. School"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">Golden Gate Int. School</h3>
                      <p className="text-sm">Afrancho, Kumasi, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-school-yellow/20 p-6">
                <h3 className="text-lg font-bold mb-4 text-school-blue">Why Choose Golden Gate?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-yellow/20 flex items-center justify-center mt-0.5 mr-3">
                      <Award className="h-3 w-3 text-school-yellow" />
                    </div>
                    <p className="text-sm text-gray-600">15+ years of educational excellence</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-yellow/20 flex items-center justify-center mt-0.5 mr-3">
                      <BookOpen className="h-3 w-3 text-school-yellow" />
                    </div>
                    <p className="text-sm text-gray-600">Comprehensive curriculum with focus on IT skills</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-yellow/20 flex items-center justify-center mt-0.5 mr-3">
                      <Users className="h-3 w-3 text-school-yellow" />
                    </div>
                    <p className="text-sm text-gray-600">Small class sizes for personalized attention</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-yellow/20 flex items-center justify-center mt-0.5 mr-3">
                      <GraduationCap className="h-3 w-3 text-school-yellow" />
                    </div>
                    <p className="text-sm text-gray-600">Qualified and experienced teaching staff</p>
                  </li>
                </ul>
              </div>

              {/* Enrollment Process */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-school-yellow/20 p-6">
                <h3 className="text-lg font-bold mb-4 text-school-blue">Enrollment Process</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-blue/20 flex items-center justify-center mt-0.5 mr-3 text-xs font-bold text-school-blue">1</div>
                    <p className="text-sm text-gray-600">Submit this enrollment form</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-blue/20 flex items-center justify-center mt-0.5 mr-3 text-xs font-bold text-school-blue">2</div>
                    <p className="text-sm text-gray-600">Schedule a school visit and assessment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-blue/20 flex items-center justify-center mt-0.5 mr-3 text-xs font-bold text-school-blue">3</div>
                    <p className="text-sm text-gray-600">Complete registration and pay fees</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-school-blue/20 flex items-center justify-center mt-0.5 mr-3 text-xs font-bold text-school-blue">4</div>
                    <p className="text-sm text-gray-600">Receive welcome package and begin classes</p>
                  </li>
                </ol>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-school-blue to-school-yellow rounded-2xl shadow-lg overflow-hidden p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <p className="text-sm mb-4">Contact our admissions office directly:</p>
                <div className="space-y-2">
                  <p className="text-sm flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    0246186629
                  </p>
                  <p className="text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Monday - Friday
                  </p>
                  <p className="text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    8:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnrollNow;