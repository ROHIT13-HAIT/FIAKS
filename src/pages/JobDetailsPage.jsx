import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { MapPin, Briefcase, Clock, IndianRupee, ArrowLeft, Share2, Bookmark, CheckCircle, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const CompanyLogo = ({ name, color, size = 'lg' }) => {
  const sizes = {
    sm: 'w-12 h-12 text-sm',
    lg: 'w-20 h-20 text-xl',
  };
  return (
    <div 
      className={`${sizes[size]} rounded-xl flex items-center justify-center text-white font-bold`}
      style={{ backgroundColor: color }}
    >
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
};

const jobsData = {
  'cto-digital-bank': {
    id: 1,
    title: 'Chief Technology Officer',
    company: {
      name: 'NeoBank India',
      color: '#07549c',
      description: 'NeoBank India is a leading digital-first banking platform revolutionizing how Indians bank. With over 5 million customers and $100M in funding, we are building the future of banking.',
      size: '500-1000 employees',
      industry: 'Digital Banking',
      website: 'www.neobank.in',
      founded: '2019',
    },
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '15+ years',
    salary: '₹80L - ₹1.2Cr per annum',
    posted: '2 days ago',
    deadline: 'April 15, 2025',
    applicants: '45',
    description: `
      <p>We are seeking an experienced Chief Technology Officer to lead our technology vision and strategy. As CTO, you will be responsible for driving innovation, building world-class engineering teams, and ensuring our technology infrastructure supports rapid growth.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Define and execute the technology vision and strategy aligned with business goals</li>
        <li>Lead and scale engineering teams across multiple product lines</li>
        <li>Drive innovation in digital banking technologies including AI/ML, blockchain, and cloud infrastructure</li>
        <li>Ensure security, compliance, and regulatory adherence across all technology systems</li>
        <li>Partner with business leaders to identify technology opportunities for competitive advantage</li>
        <li>Build and maintain relationships with technology partners and vendors</li>
        <li>Represent the company at industry events and with regulatory bodies</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>15+ years of experience in technology leadership roles, with at least 5 years in C-level positions</li>
        <li>Proven track record of building and scaling engineering organizations (100+ engineers)</li>
        <li>Deep expertise in modern technology stack including cloud-native architectures, microservices, and DevOps</li>
        <li>Experience in financial services or fintech industry preferred</li>
        <li>Strong understanding of banking regulations and compliance requirements (RBI, PCI-DSS)</li>
        <li>MBA or advanced degree from a top-tier institution preferred</li>
        <li>Excellent communication and stakeholder management skills</li>
      </ul>

      <h3>What We Offer</h3>
      <ul>
        <li>Competitive compensation with significant ESOP allocation</li>
        <li>Opportunity to shape the future of digital banking in India</li>
        <li>Work with a world-class leadership team and board</li>
        <li>Comprehensive health insurance for family</li>
        <li>Flexible work arrangements</li>
        <li>Learning and development budget</li>
      </ul>
    `,
    skills: ['Technology Leadership', 'Cloud Architecture', 'Banking', 'AI/ML', 'Cybersecurity', 'Team Building', 'Strategic Planning'],
    benefits: [
      'Competitive Salary',
      'ESOP/Stock Options',
      'Health Insurance',
      'Flexible Hours',
      'Remote Work Options',
      'Learning Budget',
      'Annual Bonus',
      'Gym Membership',
    ],
  },
  'head-product-payments': {
    id: 2,
    title: 'Head of Product - Payments',
    company: {
      name: 'PayTech Solutions',
      color: '#5F259F',
      description: 'PayTech Solutions is building next-generation payment infrastructure for India. Our APIs power millions of transactions daily for leading e-commerce and fintech companies.',
      size: '200-500 employees',
      industry: 'Payments Technology',
      website: 'www.paytech.io',
      founded: '2018',
    },
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '10+ years',
    salary: '₹50L - ₹70L per annum',
    posted: '1 day ago',
    deadline: 'April 20, 2025',
    applicants: '32',
    description: `
      <p>We are looking for a seasoned Head of Product to lead our Payments product line. You will own the product strategy, roadmap, and execution for our core payments platform serving millions of merchants.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Own the end-to-end product lifecycle for payments products</li>
        <li>Define product vision and strategy aligned with company goals</li>
        <li>Lead a team of product managers and designers</li>
        <li>Work closely with engineering to deliver high-quality products</li>
        <li>Analyze market trends and competitive landscape</li>
        <li>Build relationships with key merchants and partners</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>10+ years of product management experience</li>
        <li>5+ years in payments or fintech industry</li>
        <li>Strong understanding of UPI, cards, and digital payments</li>
        <li>Experience managing product teams</li>
        <li>Excellent analytical and communication skills</li>
      </ul>
    `,
    skills: ['Product Management', 'Payments', 'UPI', 'Strategy', 'Leadership', 'Analytics'],
    benefits: ['Competitive Salary', 'ESOP', 'Health Insurance', 'Flexible Hours', 'Remote Work', 'Annual Bonus'],
  },
};

const similarJobs = [
  { id: 3, slug: 'vp-risk-management', title: 'VP - Risk Management', company: 'HDFC Bank', companyColor: '#004C8F', location: 'Mumbai', salary: '₹60L - ₹80L' },
  { id: 4, slug: 'director-engineering', title: 'Director of Engineering', company: 'Fintech Startup', companyColor: '#00D09C', location: 'Gurgaon', salary: '₹55L - ₹75L' },
  { id: 5, slug: 'cfo-lending-platform', title: 'Chief Financial Officer', company: 'Digital Lending', companyColor: '#072654', location: 'Bangalore', salary: '₹90L - ₹1.5Cr' },
];

const JobDetailsPage = () => {
  const { slug } = useParams();
  const job = jobsData[slug] || jobsData['cto-digital-bank'];

  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    experience: '',
    coverLetter: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = (e) => {
    e.preventDefault();
    toast.success('Application submitted successfully! We will be in touch.');
    setShowApplyForm(false);
    setFormData({ name: '', email: '', phone: '', linkedIn: '', experience: '', coverLetter: '' });
  };

  return (
    <div className="min-h-screen bg-white" data-testid="job-details-page">
      <Header forceDark={true} />

      {/* Job Header */}
      <section className="pt-32 pb-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Link to="/jobs" className="inline-flex items-center gap-2 text-[#07549c] hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>

          <div className="flex items-start gap-6 flex-wrap">
            <CompanyLogo name={job.company.name} color={job.company.color} size="lg" />
            <div className="flex-1">
              <h1 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {job.title}
              </h1>
              <p className="text-xl text-slate-600 mb-4">{job.company.name}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#07549c]" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-[#07549c]" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#07549c]" />
                  {job.experience}
                </span>
                <span className="flex items-center gap-1">
                  <IndianRupee className="w-4 h-4 text-[#07549c]" />
                  {job.salary}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50">
                <Bookmark className="w-5 h-5 text-slate-400" />
              </button>
              <button className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50">
                <Share2 className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-4">Job Description</h2>
                <div
                  className="prose prose-slate max-w-none prose-headings:font-['Outfit'] prose-headings:text-slate-900 prose-h3:text-lg"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-['Outfit'] text-xl font-bold text-slate-900 mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#07549c]/10 text-[#07549c] rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-['Outfit'] text-xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {job.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Company */}
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <CompanyLogo name={job.company.name} color={job.company.color} size="sm" />
                  <h2 className="font-['Outfit'] text-xl font-bold text-slate-900">About {job.company.name}</h2>
                </div>
                <p className="text-slate-600 mb-4">{job.company.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Industry</p>
                    <p className="font-medium text-slate-700">{job.company.industry}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Company Size</p>
                    <p className="font-medium text-slate-700">{job.company.size}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Founded</p>
                    <p className="font-medium text-slate-700">{job.company.founded}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Website</p>
                    <a href={`https://${job.company.website}`} className="font-medium text-[#07549c] hover:underline">
                      {job.company.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Apply Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-6 bg-[#07549c] text-white">
                    <h3 className="font-['Outfit'] text-xl font-bold mb-1">Apply for this Job</h3>
                    <p className="text-white/80 text-sm">{job.applicants} applicants</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 text-sm mb-6">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Posted</span>
                        <span className="font-medium text-slate-700">{job.posted}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Deadline</span>
                        <span className="font-medium text-slate-700">{job.deadline}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => setShowApplyForm(true)}
                      className="w-full bg-[#07549c] hover:bg-[#054178] h-12 text-base font-semibold"
                      data-testid="apply-btn"
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full mt-3 border-[#07549c] text-[#07549c] h-12"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Apply with LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Similar Jobs */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-['Outfit'] text-lg font-bold text-slate-900 mb-4">Similar Jobs</h3>
                  <div className="space-y-4">
                    {similarJobs.map((simJob) => (
                      <Link
                        key={simJob.id}
                        to={`/jobs/${simJob.slug}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                          style={{ backgroundColor: simJob.companyColor }}
                        >
                          {simJob.company.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 text-sm hover:text-[#07549c]">{simJob.title}</h4>
                          <p className="text-xs text-slate-500">{simJob.company} • {simJob.location}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900">Apply for {job.title}</h2>
              <p className="text-slate-500">{job.company.name}</p>
            </div>
            <form onSubmit={handleApply} className="p-6 space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                <Input id="linkedIn" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input id="experience" name="experience" value={formData.experience} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} className="mt-1 min-h-[100px]" />
              </div>
              <div>
                <Label>Resume/CV *</Label>
                <div className="mt-1 border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                  <p className="text-slate-500">Drag & drop your resume or click to browse</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  <Button type="button" variant="outline" className="mt-2">Choose File</Button>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowApplyForm(false)} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-[#07549c] hover:bg-[#054178]" data-testid="submit-application">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
