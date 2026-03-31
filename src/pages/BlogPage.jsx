import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Posts', count: 24 },
  { id: 'fintech', name: 'Fintech Trends', count: 8 },
  { id: 'banking', name: 'Digital Banking', count: 6 },
  { id: 'regulation', name: 'Regulation & Compliance', count: 4 },
  { id: 'innovation', name: 'Innovation', count: 3 },
  { id: 'payments', name: 'Payments', count: 3 },
];

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-digital-banking-2025',
    title: 'The Future of Digital Banking in 2025: Trends to Watch',
    excerpt: 'Explore the key trends shaping digital banking this year, from AI-driven personalization to embedded finance solutions.',
    category: 'banking',
    author: 'Rajesh Kumar',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    slug: 'rbi-digital-lending-guidelines',
    title: 'Understanding RBI\'s New Digital Lending Guidelines',
    excerpt: 'A comprehensive breakdown of the latest RBI regulations and their impact on fintech lending platforms.',
    category: 'regulation',
    author: 'Priya Sharma',
    date: 'March 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    slug: 'upi-international-expansion',
    title: 'UPI Goes Global: International Expansion and Opportunities',
    excerpt: 'How India\'s UPI is making waves internationally and creating new business opportunities for fintech companies.',
    category: 'payments',
    author: 'Amit Verma',
    date: 'March 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    slug: 'ai-fraud-detection-banking',
    title: 'AI-Powered Fraud Detection: Protecting Banks in the Digital Age',
    excerpt: 'How artificial intelligence is revolutionizing fraud detection and prevention in the banking sector.',
    category: 'innovation',
    author: 'Dr. Sunita Rao',
    date: 'March 8, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    slug: 'embedded-finance-revolution',
    title: 'Embedded Finance: The Silent Revolution Transforming Industries',
    excerpt: 'From e-commerce to healthcare, embedded finance is changing how consumers access financial services.',
    category: 'fintech',
    author: 'Michael Chen',
    date: 'March 5, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    slug: 'open-banking-india-progress',
    title: 'Open Banking in India: Progress and Challenges Ahead',
    excerpt: 'An in-depth look at India\'s journey towards open banking and the Account Aggregator framework.',
    category: 'banking',
    author: 'Ananya Desai',
    date: 'March 3, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    featured: false,
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white" data-testid="blog-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Knowledge Center
            </p>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-slate-600 text-lg">
              Stay updated with the latest trends, insights, and thought leadership in the BFSI industry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all"
                data-testid={`featured-post-${post.id}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="px-3 py-1 bg-[#07549c]/10 text-[#07549c] rounded-full font-medium">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#07549c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User className="w-4 h-4" />
                      {post.author}
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#07549c] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                        activeCategory === category.id
                          ? 'bg-[#07549c] text-white'
                          : 'bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                      data-testid={`category-${category.id}`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-sm ${activeCategory === category.id ? 'text-white/80' : 'text-slate-400'}`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Popular Tags */}
                <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mt-8 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['UPI', 'AI', 'RegTech', 'Neo Banks', 'CBDC', 'Blockchain', 'Open Banking', 'InsurTech'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white rounded-full text-sm text-slate-600 hover:bg-[#07549c] hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                    data-testid={`blog-post-${post.id}`}
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-xs font-medium">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#07549c] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-[#07549c] text-white rounded-lg font-semibold hover:bg-[#054178] transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
