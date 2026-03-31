import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Search, Filter, X, FileText, Calendar, Users, Briefcase, Newspaper } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const searchResults = {
  all: [
    {
      type: 'blog',
      title: 'The Future of Digital Banking in 2025',
      excerpt: 'Explore the key trends shaping digital banking this year...',
      url: '/blog/future-of-digital-banking-2025',
      date: 'March 15, 2025',
    },
    {
      type: 'event',
      title: 'Global Fintech Summit 2025',
      excerpt: 'Join 1000+ industry leaders at our flagship annual event in Mumbai.',
      url: '/events/global-fintech-summit-2025',
      date: 'April 15-17, 2025',
    },
    {
      type: 'job',
      title: 'Chief Technology Officer - Digital Bank',
      excerpt: 'Leading neo-bank looking for experienced CTO to drive technology innovation.',
      url: '/jobs/cto-digital-bank',
      company: 'NeoBank India',
    },
    {
      type: 'blog',
      title: 'RBI Digital Lending Guidelines Explained',
      excerpt: 'A comprehensive breakdown of the latest RBI regulations...',
      url: '/blog/rbi-digital-lending-guidelines',
      date: 'March 12, 2025',
    },
    {
      type: 'event',
      title: 'RegTech Innovation Workshop',
      excerpt: 'Hands-on workshop exploring regulatory technology solutions.',
      url: '/events/regtech-innovation-workshop',
      date: 'March 28, 2025',
    },
    {
      type: 'blog',
      title: 'UPI International Expansion',
      excerpt: 'How India\'s UPI is making waves internationally...',
      url: '/blog/upi-international-expansion',
      date: 'March 10, 2025',
    },
    {
      type: 'job',
      title: 'Head of Product - Payments',
      excerpt: 'Build next-generation payment solutions for millions of users.',
      url: '/jobs/head-product-payments',
      company: 'PayTech Solutions',
    },
    {
      type: 'event',
      title: 'BFSI Leadership Conclave',
      excerpt: 'Exclusive gathering of C-suite executives from top financial institutions.',
      url: '/events/bfsi-leadership-conclave',
      date: 'May 5, 2025',
    },
  ],
};

const typeIcons = {
  blog: FileText,
  event: Calendar,
  job: Briefcase,
};

const typeLabels = {
  blog: 'Blog Post',
  event: 'Event',
  job: 'Job Opening',
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('digital banking');
  const [activeFilter, setActiveFilter] = useState('all');
  const [results, setResults] = useState(searchResults.all);

  const filterResults = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setResults(searchResults.all);
    } else {
      setResults(searchResults.all.filter((item) => item.type === filter));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would trigger an API call
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-white" data-testid="search-page">
      <Header forceDark={true} />

      {/* Search Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-[#07549c] to-[#054178]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Search Fintech Forum
          </h1>
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, events, jobs..."
              className="w-full h-14 pl-14 pr-32 text-lg rounded-xl border-0 shadow-xl"
              data-testid="search-input"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#07549c] hover:bg-[#054178]"
            >
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          {/* Filters */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600">Filter by:</span>
              <div className="flex gap-2 ml-2">
                {['all', 'blog', 'event', 'job'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => filterResults(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter
                        ? 'bg-[#07549c] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                    data-testid={`filter-${filter}`}
                  >
                    {filter === 'all' ? 'All Results' : typeLabels[filter] + 's'}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-slate-500">
              {results.length} results for "<span className="font-medium text-slate-700">{searchQuery}</span>"
            </p>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {results.map((result, index) => {
              const Icon = typeIcons[result.type];
              return (
                <Link
                  key={index}
                  to={result.url}
                  className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-[#07549c] hover:shadow-lg transition-all group"
                  data-testid={`search-result-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      result.type === 'blog' ? 'bg-blue-100 text-blue-600' :
                      result.type === 'event' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          result.type === 'blog' ? 'bg-blue-100 text-blue-700' :
                          result.type === 'event' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {typeLabels[result.type]}
                        </span>
                        {result.date && (
                          <span className="text-sm text-slate-500">{result.date}</span>
                        )}
                        {result.company && (
                          <span className="text-sm text-slate-500">{result.company}</span>
                        )}
                      </div>
                      <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors mb-2">
                        {result.title}
                      </h3>
                      <p className="text-slate-600">{result.excerpt}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">
              Previous
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-medium ${
                  page === 1 ? 'bg-[#07549c] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-6">Popular Searches</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['UPI', 'Digital Banking', 'RBI Guidelines', 'Fintech Summit', 'Neo Banks', 'Open Banking', 'AI in Banking', 'RegTech'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-4 py-2 bg-white rounded-full text-slate-600 hover:bg-[#07549c] hover:text-white transition-colors shadow-sm"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;
