
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Splite from '@/components/Splite';
import ImageWithLoader from '@/components/ImageWithLoader';

const GhanaianEducation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Ghanaian Education System</h1>

          <Splite
            title="Ghana's Educational Structure"
            subtitle="Understanding the Foundation"
            description="The Ghanaian education system has evolved significantly since independence, with reforms aimed at creating a comprehensive structure that addresses the needs of all Ghanaian children. At Golden Gate Int. School, we follow this established structure while incorporating innovative teaching methodologies."
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="/images/school-activities.jpg"
                alt="Ghanaian education system"
                className="w-full h-64 object-cover"
              />
            </div>
          </Splite>

          <div className="prose prose-lg max-w-none mt-12 space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Overview of the Ghanaian Education System</h2>
              <p className="leading-relaxed text-gray-800">
                Ghana's education system is structured into three main levels: Basic Education, Secondary Education, and Tertiary Education. The Ministry of Education and the Ghana Education Service oversee the implementation of educational policies and curriculum development.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-school-seaBlue">Basic Education</h3>
              <p className="leading-relaxed text-gray-800 mb-4">
                Basic Education in Ghana consists of:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2"><strong className="text-school-seaBlue">Early Childhood Education (2 years)</strong>: Includes Creche and Nursery for children from ages 0-4.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Kindergarten (2 years)</strong>: For children aged 4-6, focusing on foundational skills.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Primary School (6 years)</strong>: From Primary 1 to Primary 6, for children aged 6-12.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Junior High School (3 years)</strong>: From JHS 1 to JHS 3, for students aged 12-15.</li>
              </ul>

              <p className="leading-relaxed text-gray-800 mt-4">
                At the end of JHS 3, students take the Basic Education Certificate Examination (BECE), which determines their eligibility for Senior High School.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-school-seaBlue">Secondary Education</h3>
              <p className="leading-relaxed text-gray-800 mb-4">
                Secondary Education consists of:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2"><strong className="text-school-seaBlue">Senior High School (3 years)</strong>: Offers programs in General Arts, Business, Home Economics, Visual Arts, General Science, and Technical/Vocational studies.</li>
              </ul>

              <p className="leading-relaxed text-gray-800 mt-4">
                Students complete their secondary education by taking the West African Senior School Certificate Examination (WASSCE).
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-school-seaBlue">Tertiary Education</h3>
              <p className="leading-relaxed text-gray-800 mb-4">
                After completing secondary education, students can proceed to:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Universities (4 years for most degree programs)</li>
                <li className="pl-2">Polytechnics (now Technical Universities)</li>
                <li className="pl-2">Colleges of Education</li>
                <li className="pl-2">Professional Institutes</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">The Ghanaian Curriculum</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                The curriculum in Ghana has undergone several reforms, with the most recent being the introduction of the Standards-Based Curriculum in 2019. This curriculum emphasizes:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Foundational skills in literacy and numeracy</li>
                <li className="pl-2">Creative arts and design</li>
                <li className="pl-2">Science, technology, engineering, and mathematics (STEM)</li>
                <li className="pl-2">Social studies and religious and moral education</li>
                <li className="pl-2">Career technology and physical education</li>
              </ul>

              <p className="leading-relaxed text-gray-800 mt-4">
                The curriculum aims to develop critical thinking, problem-solving skills, creativity, and civic responsibility among students.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Language Policy</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                Ghana's language policy in education recognizes both English and Ghanaian languages:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">English is the official language of instruction from Primary 4 onwards</li>
                <li className="pl-2">From Kindergarten to Primary 3, the local Ghanaian language is used alongside English</li>
                <li className="pl-2">Ghanaian languages are taught as subjects throughout basic education</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Challenges in Ghanaian Education</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                Despite significant progress, Ghana's education system faces several challenges:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2">Inadequate infrastructure in many schools</li>
                <li className="pl-2">Teacher shortages, particularly in rural areas</li>
                <li className="pl-2">Limited learning resources</li>
                <li className="pl-2">High student-teacher ratios</li>
                <li className="pl-2">Gender disparities in some regions</li>
                <li className="pl-2">Access issues for children with disabilities</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">How Golden Gate Int. School Builds Upon the Ghanaian Education System</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                At Golden Gate Int. School, we follow the Ghanaian curriculum while enhancing it in the following ways:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2"><strong className="text-school-seaBlue">Holistic Education</strong>: We focus on the intellectual, social, emotional, and physical development of each child.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Small Class Sizes</strong>: Our smaller teacher-to-student ratio allows for more personalized attention.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Modern Teaching Methods</strong>: We incorporate student-centered, activity-based learning approaches.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Technology Integration</strong>: We use educational technology to enhance learning experiences.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Languages</strong>: Strong emphasis on both English and local language development.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Arts and Culture</strong>: We place importance on Ghanaian arts, culture, and values.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Character Development</strong>: We instill discipline, respect, integrity, and responsibility.</li>
                <li className="pl-2"><strong className="text-school-seaBlue">Community Engagement</strong>: We involve parents and the community in the educational process.</li>
              </ul>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Our Commitment</h2>
              <p className="leading-relaxed text-gray-800">
                Golden Gate Int. School is committed to providing quality education that adheres to the Ghana Education Service standards while addressing the unique needs of each student. We prepare our students not only to excel academically but also to become responsible citizens who contribute positively to society.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Educational Resources</h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                For more information about the Ghanaian education system, you can visit:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-800">
                <li className="pl-2"><a href="https://moe.gov.gh/" target="_blank" rel="noopener noreferrer" className="text-school-seaBlue hover:underline">Ministry of Education</a></li>
                <li className="pl-2"><a href="https://ges.gov.gh/" target="_blank" rel="noopener noreferrer" className="text-school-seaBlue hover:underline">Ghana Education Service</a></li>
                <li className="pl-2"><a href="https://nacca.gov.gh/" target="_blank" rel="noopener noreferrer" className="text-school-seaBlue hover:underline">National Council for Curriculum and Assessment</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GhanaianEducation;
