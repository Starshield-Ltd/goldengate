
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Introduction</h2>
              <p className="leading-relaxed text-gray-800">
                At Golden Gate Int. School, we respect the privacy of our students, parents, staff, and visitors to our school and website. This Privacy Policy outlines how we collect, use, store, and protect your personal information in accordance with the Ghana Data Protection Act, 2012 (Act 843).
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Information We Collect</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                We collect personal information for legitimate educational purposes including:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Student and parent/guardian contact details</li>
                <li className="pl-2">Academic records and assessment information</li>
                <li className="pl-2">Medical information relevant to student welfare</li>
                <li className="pl-2">Attendance records</li>
                <li className="pl-2">Behavioral information</li>
                <li className="pl-2">Information required for Ghana Education Service reports</li>
                <li className="pl-2">Photographs and videos for school documentation and promotional materials (with consent)</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">How We Use Your Information</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                We use the information collected for the following purposes:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">To provide educational services to our students</li>
                <li className="pl-2">To communicate with parents/guardians about student progress</li>
                <li className="pl-2">To ensure the safety and welfare of students</li>
                <li className="pl-2">To comply with our legal obligations to the Ghana Education Service</li>
                <li className="pl-2">To administer the school efficiently</li>
                <li className="pl-2">To maintain historical records of student achievement</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Data Protection</h2>
              <p className="leading-relaxed text-gray-800">
                We are committed to ensuring that your personal information is secure. We have implemented appropriate physical, electronic, and managerial procedures to safeguard the information we collect.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Data Sharing</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                We may share personal information with:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Ghana Education Service and other governmental bodies as required by law</li>
                <li className="pl-2">Educational examination bodies</li>
                <li className="pl-2">Health authorities when necessary for student welfare</li>
                <li className="pl-2">Third-party service providers who help us operate our school (these providers are bound by contractual obligations to keep personal information confidential)</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Your Rights</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                Under the Ghana Data Protection Act, you have the right to:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Access the personal information we hold about you or your child</li>
                <li className="pl-2">Request correction of inaccurate information</li>
                <li className="pl-2">Request deletion of your information in certain circumstances</li>
                <li className="pl-2">Object to certain processing of your information</li>
                <li className="pl-2">Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Cookies and Website Usage</h2>
              <p className="leading-relaxed text-gray-800">
                Our website may use cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Changes to This Policy</h2>
              <p className="leading-relaxed text-gray-800">
                We may update this Privacy Policy from time to time. Any changes will be posted on our website, and significant changes will be communicated directly to parents/guardians.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Contact Us</h2>
              <p className="leading-relaxed text-gray-800 mb-2">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
              </p>
              <div className="leading-relaxed text-gray-800 pl-4 border-l-4 border-school-seaBlue py-2">
                Golden Gate Int. School (GOGAINS)<br />
                Afrancho, Kumasi, Ashanti Region<br />
                Ghana<br />
                P.O. BOX HN 2984, ASHANTI NEW TOWN, KUMASI<br />
                Email: goldengatesch@yahoo.com<br />
                Phone: 0246186629
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
