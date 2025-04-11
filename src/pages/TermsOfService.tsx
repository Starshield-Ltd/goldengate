
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Introduction</h2>
              <p className="leading-relaxed text-gray-800">
                Welcome to Golden Gate Int. School. These Terms of Service govern your relationship with our school and the use of our services. By enrolling your child in our institution or using our website, you agree to these terms.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Educational Services</h2>
              <p className="leading-relaxed text-gray-800">
                Golden Gate Int. School provides educational services from Creche to Junior High School following the Ghana Education Service curriculum and guidelines. We are committed to maintaining high educational standards and creating a nurturing learning environment for all students.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Enrollment and Admission</h2>
              <p className="leading-relaxed text-gray-800">
                Enrollment is subject to available space, meeting age requirements, and submission of all required documentation. The school reserves the right to make final decisions regarding admission and placement of students in appropriate classes.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Fee Payment</h2>
              <p className="leading-relaxed text-gray-800">
                School fees must be paid according to the schedule provided at the beginning of each academic year. Late payments may incur additional charges, and the school reserves the right to refuse attendance if fees remain unpaid after multiple reminders.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Attendance and Conduct</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                Regular attendance is essential for academic progress. Students are expected to:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Attend school regularly and punctually</li>
                <li className="pl-2">Follow the school's code of conduct</li>
                <li className="pl-2">Wear the prescribed school uniform</li>
                <li className="pl-2">Complete assignments and participate in class activities</li>
                <li className="pl-2">Treat staff and fellow students with respect</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Parental Responsibilities</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                Parents/guardians are expected to:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Support their child's education at home</li>
                <li className="pl-2">Attend parent-teacher meetings</li>
                <li className="pl-2">Communicate with the school about matters affecting their child's education</li>
                <li className="pl-2">Provide accurate contact and medical information</li>
                <li className="pl-2">Ensure timely payment of school fees</li>
                <li className="pl-2">Respect school policies and procedures</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Health and Safety</h2>
              <p className="leading-relaxed text-gray-800">
                The school prioritizes the health and safety of all students. Parents must inform the school of any medical conditions or special needs. Students should not attend school when ill, particularly if they have contagious conditions.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Photography and Media</h2>
              <p className="leading-relaxed text-gray-800">
                The school may take photographs or videos of students for educational purposes, school records, and promotional materials. Parents have the right to opt out by submitting a written request.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Website Usage</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                Users of our website agree not to:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Use the website in any way that causes damage to the site or impairs availability</li>
                <li className="pl-2">Use the website for any fraudulent or unlawful purpose</li>
                <li className="pl-2">Harvest or collect information about other users without consent</li>
                <li className="pl-2">Upload viruses or malicious code</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Termination of Enrollment</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                The school reserves the right to terminate enrollment if:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">School fees remain unpaid despite multiple reminders</li>
                <li className="pl-2">A student consistently violates the code of conduct</li>
                <li className="pl-2">The school determines it cannot adequately meet a student's educational needs</li>
                <li className="pl-2">There is a breakdown in the relationship between the school and parents</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Changes to Terms</h2>
              <p className="leading-relaxed text-gray-800">
                The school may modify these terms from time to time. Significant changes will be communicated to parents through official channels.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Governing Law</h2>
              <p className="leading-relaxed text-gray-800">
                These Terms of Service are governed by the laws of Ghana.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Contact Us</h2>
              <p className="leading-relaxed text-gray-800 mb-2">
                If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
