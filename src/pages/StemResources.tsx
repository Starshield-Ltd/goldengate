import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Splite from '@/components/Splite';
import ImageWithLoader from '@/components/ImageWithLoader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Beaker, BookOpen, Code, Compass, Calculator, Lightbulb, Laptop, Rocket } from 'lucide-react';

const StemResources = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent">STEM Resources</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">Empowering the next generation of scientists, technologists, engineers, and mathematicians</p>

          <Splite
            title="STEM Resources For GOGAINS Kids"
            subtitle="Building Future Innovators"
            description="At Golden Gate Int. School (GOGAINS), we believe in providing comprehensive STEM education that prepares students for the challenges and opportunities of tomorrow's world."
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="https://images.unsplash.com/photo-1529061183275-1bf58c8e9cf3?q=80&w=1374&auto=format&fit=crop"
                alt="STEM Education"
                className="w-full h-64 object-cover"
              />
            </div>
          </Splite>

          <div className="prose prose-lg max-w-none mt-12 space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-blue flex items-center">
                <Lightbulb className="w-6 h-6 mr-2 text-school-yellow" />
                What is STEM Education?
              </h2>
              <p className="leading-relaxed text-gray-800">
                STEM stands for Science, Technology, Engineering, and Mathematics. It is an educational approach that integrates these four disciplines to promote critical thinking, problem-solving, and innovation skills among students.
              </p>
            </section>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470&auto=format&fit=crop"
                alt="Black students learning STEM"
                className="w-full h-64 object-cover"
              />
            </div>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-blue flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-school-yellow" />
                Why STEM Education Matters
              </h2>
              <p className="leading-relaxed text-gray-800 mb-4">
                The relevance of STEM for kids is multifaceted and crucial in today's rapidly changing world. Here are some key reasons why STEM education is important for children:
              </p>
              <ol className="space-y-4 list-decimal pl-6 text-gray-800">
                <li className="pl-2">
                  <strong className="text-school-blue">Fostering curiosity and exploration:</strong> STEM activities encourage children to ask questions, explore their surroundings, and develop a deep understanding of the world around them. This cultivates a natural curiosity and a love for learning from an early age.
                </li>
                <li className="pl-2">
                  <strong className="text-school-blue">Developing problem-solving skills:</strong> STEM education emphasizes hands-on learning experiences that challenge children to think critically, analyze problems, and devise creative solutions. These problem-solving skills are invaluable in all aspects of life.
                </li>
                <li className="pl-2">
                  <strong className="text-school-blue">Preparing for future careers:</strong> Many of the fastest-growing and highest-paying jobs are in STEM fields. By introducing STEM concepts early on, children can develop an interest and aptitude for these fields, opening up a wide range of career opportunities in the future.
                </li>
                <li className="pl-2">
                  <strong className="text-school-blue">Promoting innovation and creativity:</strong> STEM activities often involve designing, building, and experimenting, which fosters creativity and innovative thinking. Children learn to think "outside the box" and develop the ability to approach challenges from different angles.
                </li>
                <li className="pl-2">
                  <strong className="text-school-blue">Enhancing logical and analytical thinking:</strong> STEM subjects, particularly mathematics and science, require logical and analytical thinking skills. By engaging in STEM activities, children strengthen these skills, which are essential for academic success and real-world applications.
                </li>
              </ol>
              <p className="leading-relaxed text-gray-800 mt-4">
                STEM projects can be challenging, but the process of overcoming obstacles and achieving success instills a sense of confidence and perseverance in children. They learn the value of persistence and resilience in the face of setbacks.
              </p>
              <p className="leading-relaxed text-gray-800 mt-4">
                By introducing STEM education at an early age, children develop a strong foundation in these critical areas, setting them up for success in an increasingly technology-driven and innovation-focused world. STEM education not only equips children with valuable skills but also nurtures their innate curiosity and fosters a lifelong love for learning and exploration.
              </p>
            </section>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1470&auto=format&fit=crop"
                alt="Ghana Education"
                className="w-full h-40 object-cover"
              />
            </div>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop"
                alt="Black students in science class"
                className="w-full h-64 object-cover"
              />
            </div>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-school-blue flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-school-yellow" />
                STEM Resources Directory
              </h2>

              <Tabs defaultValue="websites" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 bg-gray-100">
                  <TabsTrigger value="websites" className="flex items-center">
                    <Laptop className="w-4 h-4 mr-2" />
                    <span>Websites</span>
                  </TabsTrigger>
                  <TabsTrigger value="apps" className="flex items-center">
                    <Compass className="w-4 h-4 mr-2" />
                    <span>Apps & Games</span>
                  </TabsTrigger>
                  <TabsTrigger value="camps" className="flex items-center">
                    <Beaker className="w-4 h-4 mr-2" />
                    <span>Camps & Programs</span>
                  </TabsTrigger>
                  <TabsTrigger value="books" className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    <span>Books & Learning</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="websites" className="space-y-4">
                  <h3 className="text-xl font-semibold text-school-blue">Cool STEM Websites</h3>
                  <ul className="space-y-4 list-disc pl-6 text-gray-800">
                    <li className="pl-2">
                      <strong className="text-school-blue">Khan Academy:</strong> A free learning resource tailored for your child. Your child will get a personalized learning dashboard that will guide them through each subject like a personal coach while using state-of-the-art, adaptive technology that identifies strengths and learning gaps while suggesting skills to practice.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Sheppard Software:</strong> Aims to create content and games with goals to add sound and visual effects to make learning fun and more memorable, design games with many difficulty levels, and provide games that will exercise players' brains.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Zooniverse:</strong> Provides opportunities for people around the world to contribute to real discoveries in fields ranging from astronomy to zoology. Welcome to the largest online platform for collaborative volunteer research.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">LearnToMod:</strong> Online and interactive. Mod Minecraft in your browser. Tutorials and puzzles help you unlock badges and learn to code.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">NASA Kids' Club:</strong> At NASA Kids' Club, it's perfectly okay to fool around in space. You can use your science and math skills to explore Mars, construct a fleet of rockets or search for NASA spinoffs in your garage.
                    </li>
                  </ul>
                </TabsContent>

                <TabsContent value="apps" className="space-y-4">
                  <h3 className="text-xl font-semibold text-school-blue">Science Games and Apps</h3>
                  <ul className="space-y-4 list-disc pl-6 text-gray-800">
                    <li className="pl-2">
                      <strong className="text-school-blue">Hopscotch:</strong> Make your own games. Hopscotch is easy to use, but don't let that fool you. It's a powerful language. Explore computer science fundamentals like abstraction, variables, conditionals, loops, and more—while making stuff that you actually want to play.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Virtual Frog Dissection:</strong> All of the education with none of the guts. This app allows you to wield virtual dissection tools to uncover the mysteries of amphibian anatomy.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Solar System for iPad:</strong> Explore the universe on your tablet with stunning visuals, 150-plus story pages, images from the Mars rover Curiosity and a 3-D orrery that lets you control the orbits of planets and their moons.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Minecraft:</strong> Minecraft is a popular 3-D block-building game that pushes your imagination to the limits. Protect yourself against nocturnal monsters or a build a giant one-of-a-kind creation.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Mathemagics Mental Math Tricks:</strong> Amaze friends and parents with these quick (but impressive) mathematics tricks.
                    </li>
                  </ul>
                </TabsContent>

                <TabsContent value="camps" className="space-y-4">
                  <h3 className="text-xl font-semibold text-school-blue">STEM Camps and Programs</h3>
                  <ul className="space-y-4 list-disc pl-6 text-gray-800">
                    <li className="pl-2">
                      <strong className="text-school-blue">Camp Invention:</strong> Daydreams become discoveries at this summer day camp. Created by the National Inventors Hall of Fame, Camp Invention presents essential STEM concepts through creative hands-on activities.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Destination Science Camp:</strong> Spend a week this summer creating robots, building a digital music system, training an electric-powered chameleon or even preparing for a mission to the moon! Held at 130 locations in six states.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Engineering for Kids:</strong> Engineering for Kids is an education company for kids age 4 to 14. It offers a variety of STEM programs, including in-school field trips, birthday parties, workshops and camps.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">CoderDojo:</strong> Over 1,900 free, open, inclusive and local volunteer-led programming clubs for young people in over 100 countries.
                    </li>
                  </ul>
                </TabsContent>

                <TabsContent value="books" className="space-y-4">
                  <h3 className="text-xl font-semibold text-school-blue">Books</h3>
                  <ul className="space-y-4 list-disc pl-6 text-gray-800">
                    <li className="pl-2">
                      <strong className="text-school-blue">Learn to Program with Scratch:</strong> A Visual Introduction to Programming with Games, Art, Science, and Math: Scratch is a fun, free, beginner-friendly programming environment where you connect blocks of code to build programs.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">JavaScript for Kids:</strong> A Playful Introduction to Programming: JavaScript is the programming language of the Internet, the secret sauce that makes the Web awesome, your favorite sites interactive, and online games fun!
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Python for Kids:</strong> A Playful Introduction to Programming: Python is a powerful, expressive programming language that's easy to learn and fun to use! But books about learning to program in Python can be kind of dull, gray, and boring, and that's no fun for anyone.
                    </li>
                    <li className="pl-2">
                      <strong className="text-school-blue">Bossy:</strong> Online Startups for Kids and Teens: The internet makes business accessible to everyone - even kids and teenagers! This book will help young "CEOs To Be" learn how to be their own boss and build a business that will inspire them to never back down on their dreams.
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </section>

            <section className="bg-gradient-to-r from-school-blue to-school-yellow p-6 rounded-xl shadow-sm text-white">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Join Our STEM Programs
              </h2>
              <p className="leading-relaxed">
                At Golden Gate Int. School (GOGAINS), we offer a variety of STEM programs designed to engage and inspire young minds. From coding clubs to science experiments, our programs provide hands-on learning experiences that make STEM subjects fun and accessible.
              </p>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-school-blue shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  Contact Us to Learn More
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StemResources;
