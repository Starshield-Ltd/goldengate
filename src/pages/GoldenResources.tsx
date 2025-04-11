import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Splite from '@/components/Splite';
import ImageWithLoader from '@/components/ImageWithLoader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, BookMarked, Globe, Headphones, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResourceModal from '@/components/ResourceModal';

const GoldenResources = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resources = [
    {
      id: 'bece',
      title: 'BECE PASCO',
      description: 'Comprehensive BECE past questions and solutions to help students prepare for their Basic Education Certificate Examination.',
      image: 'https://images.unsplash.com/photo-1544507888-56d73eb6046e?q=80&w=1470&auto=format&fit=crop',
      url: 'https://emmadeeofficial.gumroad.com/l/becepasco',
      icon: <FileText className="h-8 w-8 text-school-yellow" />,
      implementation: 'Our teachers incorporate BECE PASCO into regular revision sessions, helping students understand question patterns and develop effective answering techniques. Weekly practice sessions are organized to build confidence and exam readiness.'
    },
    {
      id: 'jhs',
      title: 'JHS Mocks',
      description: 'Mock examination papers designed to simulate the actual BECE experience, helping students assess their preparation level.',
      image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1470&auto=format&fit=crop',
      url: 'https://emmadeeofficial.gumroad.com/l/jhsmocks',
      icon: <GraduationCap className="h-8 w-8 text-school-yellow" />,
      implementation: 'Golden Gate conducts monthly mock examinations using these resources, providing detailed feedback and personalized improvement plans. Results are analyzed to identify knowledge gaps and strengthen weak areas.'
    },
    {
      id: 'kiddle',
      title: 'Kids Encyclopedia',
      description: 'A safe, kid-friendly search engine and encyclopedia designed specifically for children to explore and learn about the world.',
      image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1473&auto=format&fit=crop',
      url: 'https://kids.kiddle.co/',
      icon: <Globe className="h-8 w-8 text-school-yellow" />,
      implementation: 'Our computer labs feature Kiddle as the default search engine, encouraging safe research habits. Teachers assign guided research projects that utilize this resource for age-appropriate content discovery.'
    },
    {
      id: 'gutenberg',
      title: 'KG-P6 Learning Resources',
      description: 'A vast collection of free e-books and educational materials for kindergarten through primary school students.',
      image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop',
      url: 'https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/browse.html',
      icon: <BookMarked className="h-8 w-8 text-school-yellow" />,
      implementation: 'Our digital library program incorporates these resources into daily reading sessions. Students have scheduled access to tablets and computers to explore age-appropriate e-books that complement their curriculum.'
    },
    {
      id: 'poetry',
      title: 'Poetry Archive',
      description: 'A collection of recordings of poets reading their own work, helping students experience poetry as a spoken art form.',
      image: 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=1374&auto=format&fit=crop',
      url: 'https://childrens.poetryarchive.org/',
      icon: <Headphones className="h-8 w-8 text-school-yellow" />,
      implementation: 'Weekly poetry sessions in our language arts program utilize these audio resources to improve pronunciation, rhythm, and appreciation of literary works. Students create their own poetry inspired by what they hear.'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent">Golden Resources</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">Curated educational materials to enhance learning and academic excellence</p>

          <Splite
            title="Empowering Students with Premium Resources"
            subtitle="Excellence Through Access"
            description="At Golden Gate Int. School, we believe in providing our students with the best educational resources available. Our Golden Resources initiative gives students access to premium learning materials that support their academic journey and foster a love for learning."
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1470&auto=format&fit=crop"
                alt="Digital Learning Resources"
                className="w-full h-64 object-cover"
              />
            </div>
          </Splite>

          <div className="prose prose-lg max-w-none mt-12 space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-blue flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-school-yellow" />
                Our Approach to Educational Resources
              </h2>
              <p className="leading-relaxed text-gray-800">
                Golden Gate Int. School has developed a comprehensive approach to integrating high-quality educational resources into our curriculum. We carefully select materials that align with our educational philosophy and support our students' diverse learning needs. By providing access to these resources, we aim to:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-school-yellow mr-2">•</span>
                  <span>Supplement classroom learning with diverse, engaging materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-yellow mr-2">•</span>
                  <span>Develop independent research and study skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-yellow mr-2">•</span>
                  <span>Provide additional practice opportunities for exam preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-yellow mr-2">•</span>
                  <span>Foster a love for reading and self-directed learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-yellow mr-2">•</span>
                  <span>Bridge the digital divide by ensuring all students have access to quality digital resources</span>
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-8 text-school-blue text-center">Featured Resources</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-school-yellow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold text-school-blue">{resource.title}</CardTitle>
                        {resource.icon}
                      </div>
                      <CardDescription className="text-sm text-gray-600 mt-2">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <ImageWithLoader
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                        <h4 className="font-medium text-school-blue mb-2">How We Implement It:</h4>
                        <p className="text-sm text-gray-700">{resource.implementation}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-gradient-to-r from-school-blue to-school-yellow hover:from-school-blue/90 hover:to-school-yellow/90"
                        onClick={() => {
                          setSelectedResource(resource.url);
                          setIsModalOpen(true);
                        }}
                      >
                        Access Resource
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-school-blue to-school-yellow p-8 rounded-xl shadow-md text-white mt-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Join Our Digital Learning Journey</h3>
                  <p className="text-white/90">
                    At Golden Gate Int. School, we're committed to providing our students with the best educational resources. Enroll your child today to give them access to our comprehensive Golden Resources program.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/enroll-now"
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-school-blue shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />

      {/* Resource Modal */}
      <ResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={selectedResource || ''}
        title="Golden Gate Educational Resource"
      />
    </div>
  );
};

export default GoldenResources;
