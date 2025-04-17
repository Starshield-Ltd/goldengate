import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Briefcase, GraduationCap, FileText, Link as LinkIcon, Send, CheckCircle2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const ApplyForJob = () => {
  const [formData, setFormData] = useState({
    jobType: 'teaching',
    fullName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    experience: '',
    education: '',
    resumeLink: '',
    coverLetter: '',
    availability: '',
    referral: '',
    agreeToTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('teaching');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const message = `*New Job Application - ${formData.jobType === 'teaching' ? 'Teaching Staff' : 'Non-Teaching Staff'}*
    
*Full Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Position:* ${formData.position}
*Department:* ${formData.department}
*Experience:* ${formData.experience}
*Education:* ${formData.education}
*Resume Link:* ${formData.resumeLink}
*Availability:* ${formData.availability}
*Referral:* ${formData.referral}

*Cover Letter:*
${formData.coverLetter}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with Ghana's country code (233)
    const whatsappNumber = '233246186629'; // Ghana's country code + school's number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Open WhatsApp with the pre-filled message
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      jobType: 'teaching',
      fullName: '',
      email: '',
      phone: '',
      position: '',
      department: '',
      experience: '',
      education: '',
      resumeLink: '',
      coverLetter: '',
      availability: '',
      referral: '',
      agreeToTerms: false
    });
    setIsSubmitted(false);
    setActiveTab('teaching');
  };

  const teachingPositions = [
    'Kindergarten Teacher',
    'Primary School Teacher',
    'Junior High School Teacher',
    'ICT Teacher',
    'Mathematics Teacher',
    'Science Teacher',
    'English Teacher',
    'Social Studies Teacher',
    'Physical Education Teacher',
    'Special Education Teacher',
    'School Counselor',
    'Librarian',
    'Other (Specify in Cover Letter)'
  ];

  const nonTeachingPositions = [
    'Administrative Assistant',
    'Accountant',
    'IT Support Specialist',
    'Maintenance Staff',
    'Security Personnel',
    'Cafeteria Staff',
    'School Nurse',
    'Driver',
    'Cleaner',
    'Receptionist',
    'Human Resources Officer',
    'Other (Specify in Cover Letter)'
  ];

  const departments = [
    'Administration',
    'Kindergarten',
    'Primary School',
    'Junior High School',
    'ICT Department',
    'Science Department',
    'Mathematics Department',
    'Languages Department',
    'Arts Department',
    'Physical Education',
    'Maintenance',
    'Security',
    'Health Services',
    'Other (Specify in Cover Letter)'
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-school-yellow/20 to-transparent rounded-bl-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-96 bg-gradient-to-tr from-school-blue/20 to-transparent rounded-tr-[100px] -z-10"></div>
        
        {/* Animated circles */}
        <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-school-yellow/10 animate-float blur-xl -z-10"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-school-blue/10 animate-float blur-xl -z-10" style={{animationDelay: '1.5s'}}></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-school-blue to-school-yellow bg-clip-text text-transparent drop-shadow-sm">
              Join Our Team at Golden Gate Int. School
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-school-blue to-school-yellow mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're looking for passionate individuals to join our community of educators and staff. 
              Whether you're an experienced teacher or seeking a non-teaching role, we'd love to hear from you.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-school-yellow/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in joining Golden Gate Int. School. Your application has been forwarded to our HR department via WhatsApp.
                </p>
                <p className="text-gray-600 mb-6">
                  We will review your application and contact you soon. If you have any questions, please contact us at <span className="font-medium">0246186629</span>.
                </p>
                <Button 
                  onClick={resetForm}
                  className="bg-gradient-to-r from-school-blue to-school-yellow text-white hover:from-school-blue/90 hover:to-school-yellow/90"
                >
                  Submit Another Application
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-school-yellow/20">
                <div className="p-6 md:p-8 lg:p-10">
                  <Tabs defaultValue="teaching" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="teaching" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-school-blue data-[state=active]:to-school-blue data-[state=active]:text-white">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        Teaching Staff
                      </TabsTrigger>
                      <TabsTrigger value="non-teaching" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-school-yellow data-[state=active]:to-school-yellow data-[state=active]:text-white">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Non-Teaching Staff
                      </TabsTrigger>
                    </TabsList>
                    
                    <form onSubmit={handleSubmit}>
                      <input 
                        type="hidden" 
                        name="jobType" 
                        value={activeTab === 'teaching' ? 'teaching' : 'non-teaching'} 
                      />
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              placeholder="Enter your full name"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="position">Position <span className="text-red-500">*</span></Label>
                            <Select 
                              onValueChange={(value) => handleSelectChange('position', value)}
                              value={formData.position}
                              required
                            >
                              <SelectTrigger className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20">
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                              <SelectContent>
                                {activeTab === 'teaching' 
                                  ? teachingPositions.map(position => (
                                      <SelectItem key={position} value={position}>{position}</SelectItem>
                                    ))
                                  : nonTeachingPositions.map(position => (
                                      <SelectItem key={position} value={position}>{position}</SelectItem>
                                    ))
                                }
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="department">Department</Label>
                            <Select 
                              onValueChange={(value) => handleSelectChange('department', value)}
                              value={formData.department}
                            >
                              <SelectTrigger className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20">
                                <SelectValue placeholder="Select a department" />
                              </SelectTrigger>
                              <SelectContent>
                                {departments.map(department => (
                                  <SelectItem key={department} value={department}>{department}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="experience">Years of Experience <span className="text-red-500">*</span></Label>
                            <Select 
                              onValueChange={(value) => handleSelectChange('experience', value)}
                              value={formData.experience}
                              required
                            >
                              <SelectTrigger className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                                <SelectItem value="1-2 years">1-2 years</SelectItem>
                                <SelectItem value="3-5 years">3-5 years</SelectItem>
                                <SelectItem value="6-10 years">6-10 years</SelectItem>
                                <SelectItem value="More than 10 years">More than 10 years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="education">Highest Education Level <span className="text-red-500">*</span></Label>
                            <Select 
                              onValueChange={(value) => handleSelectChange('education', value)}
                              value={formData.education}
                              required
                            >
                              <SelectTrigger className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20">
                                <SelectValue placeholder="Select education level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="High School Diploma">High School Diploma</SelectItem>
                                <SelectItem value="Certificate">Certificate</SelectItem>
                                <SelectItem value="Diploma">Diploma</SelectItem>
                                <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                                <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                                <SelectItem value="Doctorate">Doctorate</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="availability">Availability <span className="text-red-500">*</span></Label>
                            <Select 
                              onValueChange={(value) => handleSelectChange('availability', value)}
                              value={formData.availability}
                              required
                            >
                              <SelectTrigger className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20">
                                <SelectValue placeholder="Select availability" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Immediate">Immediate</SelectItem>
                                <SelectItem value="2 weeks notice">2 weeks notice</SelectItem>
                                <SelectItem value="1 month notice">1 month notice</SelectItem>
                                <SelectItem value="More than 1 month">More than 1 month</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-end">
                            <Label htmlFor="resumeLink">Resume/CV Link <span className="text-red-500">*</span></Label>
                            <button
                              type="button"
                              onClick={() => window.open('https://www.notion.so/help/guides/how-to-share-notion-pages-and-databases', '_blank')}
                              className="text-xs text-school-blue hover:text-school-yellow flex items-center"
                            >
                              <Info className="h-3 w-3 mr-1" />
                              How to share your resume
                            </button>
                          </div>
                          <Input
                            id="resumeLink"
                            name="resumeLink"
                            placeholder="Paste link to your resume (Google Drive, Dropbox, etc.)"
                            value={formData.resumeLink}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Share your resume via Google Drive, Dropbox, OneDrive, or any cloud storage service and paste the link here.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="coverLetter">Cover Letter / Additional Information</Label>
                          <Textarea
                            id="coverLetter"
                            name="coverLetter"
                            placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                            className="min-h-[120px] border-gray-300 focus:border-school-blue focus:ring-school-blue/20"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="referral">How did you hear about us?</Label>
                          <Input
                            id="referral"
                            name="referral"
                            placeholder="Friend, Website, Social Media, etc."
                            value={formData.referral}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-school-blue focus:ring-school-blue/20"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleSwitchChange('agreeToTerms', checked)}
                            required
                          />
                          <Label htmlFor="agreeToTerms" className="text-sm">
                            I agree to the processing of my personal data for recruitment purposes and confirm that all information provided is accurate.
                          </Label>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-school-blue to-school-yellow text-white hover:from-school-blue/90 hover:to-school-yellow/90 py-6"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                Submit Application
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Tabs>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-school-blue" />
                  How to Share Your Resume
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-school-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Upload your resume</span> to a cloud storage service like Google Drive, Dropbox, or OneDrive.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-school-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Set sharing permissions</span> to "Anyone with the link can view" (do not require sign-in).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-school-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Copy the sharing link</span> and paste it into the Resume/CV Link field in the form.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-school-yellow text-white flex items-center justify-center mr-3 mt-0.5">
                      <LinkIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Verify your link</span> by opening it in an incognito/private browser window to ensure it's accessible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyForJob;
