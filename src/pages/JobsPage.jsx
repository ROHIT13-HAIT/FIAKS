import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { MapPin, Briefcase, Clock, IndianRupee, Search, Filter, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const CompanyLogo = ({ name, color }) => (
  <div 
    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-sm"
    style={{ backgroundColor: color }}
  >
    {name.substring(0, 2).toUpperCase()}
  </div>
);

const jobs = [
  {
    id: 1,
    slug: 'cto-digital-bank',
    title: 'Chief Technology Officer',
    company: 'NeoBank India',
    companyColor: '#07549c',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '15+ years',
    salary: '₹80L - ₹1.2Cr',
    posted: '2 days ago',
    hot: true,
    new: true,
    tags: ['Leadership', 'Banking', 'Technology'],
  },
  {
    id: 2,
    slug: 'head-product-payments',
    title: 'Head of Product - Payments',
    company: 'PayTech Solutions',
    companyColor: '#5F259F',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '10+ years',
    salary: '₹50L - ₹70L',
    posted: '1 day ago',
    hot: true,
    new: true,
    tags: ['Product', 'Payments', 'UPI'],
  },
  {
    id: 3,
    slug: 'vp-risk-management',
    title: 'VP - Risk Management',
    company: 'HDFC Bank',
    companyColor: '#004C8F',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '12+ years',
    salary: '₹60L - ₹80L',
    posted: '3 days ago',
    hot: true,
    new: false,
    tags: ['Risk', 'Banking', 'Compliance'],
  },
  {
    id: 4,
    slug: 'director-engineering',
    title: 'Director of Engineering',
    company: 'Fintech Startup',
    companyColor: '#00D09C',
    location: 'Gurgaon',
    type: 'Full-time',
    experience: '12+ years',
    salary: '₹55L - ₹75L',
    posted: '5 days ago',
    hot: false,
    new: true,
    tags: ['Engineering', 'Leadership', 'Fintech'],
  },
  {
    id: 5,
    slug: 'head-compliance',
    title: 'Head of Compliance',
    company: 'Insurance Corp',
    companyColor: '#F58220',
    location: 'Delhi',
    type: 'Full-time',
    experience: '10+ years',
    salary: '₹45L - ₹60L',
    posted: '1 week ago',
    hot: false,
    new: false,
    tags: ['Compliance', 'Insurance', 'Legal'],
  },
  {
    id: 6,
    slug: 'cfo-lending-platform',
    title: 'Chief Financial Officer',
    company: 'Digital Lending',
    companyColor: '#072654',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '15+ years',
    salary: '₹90L - ₹1.5Cr',
    posted: '4 days ago',
    hot: true,
    new: false,
    tags: ['Finance', 'Leadership', 'Lending'],
  },
  {
    id: 7,
    slug: 'head-data-science',
    title: 'Head of Data Science',
    company: 'Credit Analytics',
    companyColor: '#387ED1',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '8+ years',
    salary: '₹40L - ₹55L',
    posted: '6 days ago',
    hot: false,
    new: true,
    tags: ['Data Science', 'ML', 'Analytics'],
  },
  {
    id: 8,
    slug: 'senior-product-manager',
    title: 'Senior Product Manager - Wealth',
    company: 'WealthTech',
    companyColor: '#97144D',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '6+ years',
    salary: '₹35L - ₹45L',
    posted: '2 days ago',
    hot: false,
    new: true,
    tags: ['Product', 'Wealth', 'Investment'],
  },
];

const categories = [
  { id: 'all', name: 'All Jobs', count: jobs.length },
  { id: 'leadership', name: 'Leadership', count: 4 },
  { id: 'technology', name: 'Technology', count: 3 },
  { id: 'product', name: 'Product', count: 2 },
  { id: 'finance', name: 'Finance', count: 2 },
  { id: 'compliance', name: 'Compliance', count: 2 },
];

const locations = ['All Locations', 'Mumbai', 'Bangalore', 'Delhi', 'Gurgaon', 'Hyderabad'];

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [activeCategory, setActiveCategory] = useState('all');

  const hotJobs = jobs.filter((job) => job.hot);
  const newJobs = jobs.filter((job) => job.new);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white" data-testid="jobs-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-8">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Career Opportunities
            </p>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              BFSI Jobs
            </h1>
            <p className="text-slate-600 text-lg">
              Discover executive and leadership opportunities in Banking, Financial Services, and Insurance.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-100">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by job title or company..."
                  className="pl-12 h-12"
                  data-testid="job-search-input"
                />
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="h-12 px-4 rounded-lg border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#07549c]"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Openings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-6 h-6 text-orange-500" />
            <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900">Hot Openings</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotJobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.slug}`}
                className="group p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 hover:shadow-lg transition-all"
                data-testid={`hot-job-${job.id}`}
              >
                <div className="flex items-start gap-4">
                  <CompanyLogo name={job.company} color={job.companyColor} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-medium text-orange-600">Hot</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500">{job.company}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <IndianRupee className="w-3 h-3" />
                    {job.salary}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Openings */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-green-500" />
            <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900">New Openings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {newJobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.slug}`}
                className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md hover:border-green-200 transition-all"
                data-testid={`new-job-${job.id}`}
              >
                <CompanyLogo name={job.company} color={job.companyColor} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors">
                      {job.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-medium">New</span>
                  </div>
                  <p className="text-sm text-slate-500">{job.company} • {job.location}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#07549c] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Jobs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                        activeCategory === cat.id
                          ? 'bg-[#07549c] text-white'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-sm ${activeCategory === cat.id ? 'text-white/80' : 'text-slate-400'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Post Job CTA */}
                <div className="mt-8 p-6 bg-[#07549c] rounded-xl text-white">
                  <h4 className="font-semibold mb-2">Hiring for BFSI roles?</h4>
                  <p className="text-sm text-white/80 mb-4">
                    Post your job and reach 9000+ industry professionals.
                  </p>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#07549c]">
                    Post a Job
                  </Button>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900">All Jobs</h2>
                <p className="text-slate-500">{filteredJobs.length} jobs found</p>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.slug}`}
                    className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-[#07549c] hover:shadow-lg transition-all"
                    data-testid={`job-listing-${job.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <CompanyLogo name={job.company} color={job.companyColor} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors">
                            {job.title}
                          </h3>
                          {job.hot && (
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded font-medium flex items-center gap-1">
                              <Flame className="w-3 h-3" /> Hot
                            </span>
                          )}
                          {job.new && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-medium">New</span>
                          )}
                        </div>
                        <p className="text-slate-600 mb-3">{job.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1">
                            <IndianRupee className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {job.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-400">{job.posted}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" className="border-[#07549c] text-[#07549c] hover:bg-[#07549c] hover:text-white">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobsPage;
