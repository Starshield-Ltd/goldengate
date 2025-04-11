
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AISearch = () => {
  const tools = [
    { id: 'index', name: 'Index.Globe', url: '/ai-search/index-globe' },
    { id: 'farfalle', name: 'Farfalle', url: '/ai-search/farfalle' },
    { id: 'turboseek', name: 'TurboSeek', url: '/ai-search/turboseek' },
    { id: 'omniplex', name: 'Omniplex AI', url: '/ai-search/omniplex' },
    { id: 'andisearch', name: 'Andi Search', url: '/ai-search/andi-search' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Golden Gate AI Search Tools</h1>

          <div className="mb-8">
            <p className="text-lg text-center max-w-2xl mx-auto">
              Explore these cutting-edge AI search tools to enhance your research and learning experience.
              These tools can help students, teachers, and parents find information more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.url}
                className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Access the full {tool.name} platform to enhance your research and learning.
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-school-seaBlue font-medium">
                      Open Tool
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">How AI Search Tools Can Help Education</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Enhanced Research:</strong> Find relevant academic resources more efficiently</li>
              <li>• <strong>Homework Assistance:</strong> Get help understanding difficult concepts</li>
              <li>• <strong>Fact Checking:</strong> Verify information from multiple sources</li>
              <li>• <strong>Learning Support:</strong> Access educational content tailored to specific needs</li>
              <li>• <strong>Project Development:</strong> Gather comprehensive information for school projects</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Note: While these AI tools are helpful, we encourage critical thinking and verification of information from multiple sources.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AISearch;
