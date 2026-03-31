import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { MessageSquare, Users, TrendingUp, Clock, ThumbsUp, Eye, ChevronRight, Search, Filter, Flame, Award, Star } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const topics = [
  { id: 'digital-banking', name: 'Digital Banking', icon: '🏦', count: 234, color: '#07549c' },
  { id: 'payments', name: 'Payments & UPI', icon: '💳', count: 189, color: '#5F259F' },
  { id: 'regulation', name: 'Regulation & Compliance', icon: '⚖️', count: 156, color: '#004C8F' },
  { id: 'fintech', name: 'Fintech Innovation', icon: '🚀', count: 312, color: '#00D09C' },
  { id: 'lending', name: 'Digital Lending', icon: '💰', count: 98, color: '#F58220' },
  { id: 'insurance', name: 'InsurTech', icon: '🛡️', count: 76, color: '#97144D' },
  { id: 'wealth', name: 'Wealth Management', icon: '📈', count: 112, color: '#072654' },
  { id: 'careers', name: 'Career & Jobs', icon: '💼', count: 203, color: '#387ED1' },
];

const discussions = [
  {
    id: 1,
    slug: 'rbi-cbdc-pilot-expansion',
    title: 'RBI announces expansion of CBDC pilot to 1 million users - What are the implications for banks?',
    excerpt: 'The Reserve Bank of India has announced a significant expansion of its Central Bank Digital Currency pilot. This raises important questions about the future of traditional banking...',
    topic: 'digital-banking',
    author: {
      name: 'Rajesh Sharma',
      role: 'CEO, Digital Banking Solutions',
      avatar: 'RS',
      avatarColor: '#07549c',
    },
    stats: { views: 2340, replies: 67, likes: 189 },
    timestamp: '2 hours ago',
    trending: true,
    pinned: true,
  },
  {
    id: 2,
    slug: 'upi-international-rollout',
    title: 'UPI now live in 7 countries - Share your cross-border payment experiences',
    excerpt: 'With UPI expanding internationally, many of us are curious about real-world experiences. Has anyone used UPI abroad? What were the fees and exchange rates like?',
    topic: 'payments',
    author: {
      name: 'Priya Mehta',
      role: 'VP Payments, TechFin Corp',
      avatar: 'PM',
      avatarColor: '#5F259F',
    },
    stats: { views: 1890, replies: 45, likes: 134 },
    timestamp: '5 hours ago',
    trending: true,
    pinned: false,
  },
  {
    id: 3,
    slug: 'ai-kyc-compliance',
    title: 'Implementing AI for KYC - Compliance challenges and solutions',
    excerpt: 'We are exploring AI-based KYC solutions but facing regulatory pushback. Would love to hear from others who have successfully implemented this...',
    topic: 'regulation',
    author: {
      name: 'Amit Verma',
      role: 'Chief Compliance Officer',
      avatar: 'AV',
      avatarColor: '#004C8F',
    },
    stats: { views: 1456, replies: 38, likes: 92 },
    timestamp: '8 hours ago',
    trending: false,
    pinned: false,
  },
  {
    id: 4,
    slug: 'neo-bank-profitability',
    title: 'Can neo-banks ever be profitable? Discussing unit economics',
    excerpt: 'With most neo-banks still burning cash, let us discuss the path to profitability. What metrics matter most? Share your thoughts on sustainable business models...',
    topic: 'fintech',
    author: {
      name: 'Dr. Sunita Rao',
      role: 'Fintech Analyst',
      avatar: 'SR',
      avatarColor: '#00D09C',
    },
    stats: { views: 2890, replies: 89, likes: 245 },
    timestamp: '1 day ago',
    trending: true,
    pinned: false,
  },
  {
    id: 5,
    slug: 'bnpl-regulation-impact',
    title: 'New BNPL regulations - How will this impact the lending landscape?',
    excerpt: 'RBI is set to introduce stricter regulations for Buy Now Pay Later products. Let us discuss the potential impact on fintech lenders and consumers...',
    topic: 'lending',
    author: {
      name: 'Michael Chen',
      role: 'MD, Lending Platform',
      avatar: 'MC',
      avatarColor: '#F58220',
    },
    stats: { views: 1234, replies: 56, likes: 78 },
    timestamp: '1 day ago',
    trending: false,
    pinned: false,
  },
  {
    id: 6,
    slug: 'embedded-insurance-future',
    title: 'Embedded Insurance - The next big opportunity in InsurTech?',
    excerpt: 'With e-commerce and travel platforms integrating insurance at checkout, embedded insurance is growing rapidly. What are the opportunities and challenges?',
    topic: 'insurance',
    author: {
      name: 'Ananya Desai',
      role: 'InsurTech Founder',
      avatar: 'AD',
      avatarColor: '#97144D',
    },
    stats: { views: 987, replies: 34, likes: 67 },
    timestamp: '2 days ago',
    trending: false,
    pinned: false,
  },
];

const topContributors = [
  { name: 'Rajesh Sharma', role: 'CEO', posts: 156, avatar: 'RS', color: '#07549c' },
  { name: 'Priya Mehta', role: 'VP Payments', posts: 134, avatar: 'PM', color: '#5F259F' },
  { name: 'Dr. Sunita Rao', role: 'Analyst', posts: 112, avatar: 'SR', color: '#00D09C' },
  { name: 'Amit Verma', role: 'CCO', posts: 98, avatar: 'AV', color: '#004C8F' },
  { name: 'Michael Chen', role: 'MD', posts: 87, avatar: 'MC', color: '#F58220' },
];

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');

  const filteredDiscussions = selectedTopic === 'all'
    ? discussions
    : discussions.filter((d) => d.topic === selectedTopic);

  const trendingDiscussions = discussions.filter((d) => d.trending);

  return (
    <div className="min-h-screen bg-white" data-testid="community-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#07549c] to-[#054178] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-8 h-8" />
              <span className="font-semibold tracking-widest uppercase text-sm text-white/80">Community</span>
            </div>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              BFSI Discussions
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Join the conversation with 9000+ industry professionals. Share insights, ask questions, and learn from peers.
            </p>
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search discussions..."
                className="w-full h-14 pl-12 pr-4 text-slate-900 rounded-xl bg-white"
                data-testid="community-search"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="font-['Outfit'] text-3xl font-bold text-[#07549c]">9,234</div>
              <div className="text-slate-500 text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="font-['Outfit'] text-3xl font-bold text-[#07549c]">1,456</div>
              <div className="text-slate-500 text-sm">Discussions</div>
            </div>
            <div className="text-center">
              <div className="font-['Outfit'] text-3xl font-bold text-[#07549c]">12,890</div>
              <div className="text-slate-500 text-sm">Replies</div>
            </div>
            <div className="text-center">
              <div className="font-['Outfit'] text-3xl font-bold text-[#07549c]">342</div>
              <div className="text-slate-500 text-sm">Online Now</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Topics */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Topics */}
                <div>
                  <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-4">Topics</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedTopic('all')}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                        selectedTopic === 'all'
                          ? 'bg-[#07549c] text-white'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>All Topics</span>
                      <span className={selectedTopic === 'all' ? 'text-white/80' : 'text-slate-400'}>
                        {discussions.length}
                      </span>
                    </button>
                    {topics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                          selectedTopic === topic.id
                            ? 'bg-[#07549c] text-white'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                        data-testid={`topic-${topic.id}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{topic.icon}</span>
                          <span className="text-sm">{topic.name}</span>
                        </span>
                        <span className={`text-xs ${selectedTopic === topic.id ? 'text-white/80' : 'text-slate-400'}`}>
                          {topic.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Top Contributors */}
                <div>
                  <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-4">Top Contributors</h3>
                  <div className="space-y-3">
                    {topContributors.map((contributor, index) => (
                      <div key={contributor.name} className="flex items-center gap-3">
                        <div className="relative">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: contributor.color }}
                          >
                            {contributor.avatar}
                          </div>
                          {index < 3 && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-yellow-900">{index + 1}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 text-sm">{contributor.name}</p>
                          <p className="text-xs text-slate-500">{contributor.posts} posts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Discussion CTA */}
                <div className="p-6 bg-[#07549c] rounded-xl text-white">
                  <h4 className="font-semibold mb-2">Have a question?</h4>
                  <p className="text-sm text-white/80 mb-4">
                    Start a discussion and get answers from industry experts.
                  </p>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#07549c]">
                    Start a Discussion
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content - Discussions */}
            <div className="lg:col-span-3 space-y-8">
              {/* Trending */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <h2 className="font-['Outfit'] text-xl font-bold text-slate-900">Trending Discussions</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {trendingDiscussions.slice(0, 2).map((discussion) => (
                    <Link
                      key={discussion.id}
                      to={`/community/${discussion.slug}`}
                      className="group p-5 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 hover:shadow-lg transition-all"
                      data-testid={`trending-${discussion.id}`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-medium text-orange-600">Trending</span>
                        <span className="text-xs text-slate-400">• {discussion.timestamp}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors line-clamp-2 mb-2">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {discussion.stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {discussion.stats.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {discussion.stats.likes}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* All Discussions */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-['Outfit'] text-xl font-bold text-slate-900">All Discussions</h2>
                  <select className="px-3 py-2 border rounded-lg text-sm text-slate-600">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Most Replies</option>
                  </select>
                </div>
                <div className="space-y-4">
                  {filteredDiscussions.map((discussion) => (
                    <Link
                      key={discussion.id}
                      to={`/community/${discussion.slug}`}
                      className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-[#07549c] hover:shadow-lg transition-all"
                      data-testid={`discussion-${discussion.id}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                          style={{ backgroundColor: discussion.author.avatarColor }}
                        >
                          {discussion.author.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            {discussion.pinned && (
                              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded font-medium">
                                Pinned
                              </span>
                            )}
                            {discussion.trending && (
                              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded font-medium flex items-center gap-1">
                                <Flame className="w-3 h-3" /> Trending
                              </span>
                            )}
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                              {topics.find((t) => t.id === discussion.topic)?.name}
                            </span>
                          </div>
                          <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors mb-2">
                            {discussion.title}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-2 mb-3">{discussion.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <span className="font-medium text-slate-700">{discussion.author.name}</span>
                              <span>•</span>
                              <span>{discussion.author.role}</span>
                              <span>•</span>
                              <span>{discussion.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {discussion.stats.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {discussion.stats.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                {discussion.stats.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#07549c] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <Button variant="outline" className="border-[#07549c] text-[#07549c] hover:bg-[#07549c] hover:text-white">
                    Load More Discussions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
