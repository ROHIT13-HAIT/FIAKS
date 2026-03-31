import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '../components/ui/button';

const blogPostsData = {
  'future-of-digital-banking-2025': {
    id: 1,
    title: 'The Future of Digital Banking in 2025: Trends to Watch',
    excerpt: 'Explore the key trends shaping digital banking this year, from AI-driven personalization to embedded finance solutions.',
    category: 'Digital Banking',
    author: {
      name: 'Rajesh Kumar',
      role: 'Chief Digital Officer, National Bank',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    content: `
      <p>The digital banking landscape is undergoing a seismic shift as we progress through 2025. Financial institutions worldwide are racing to adopt cutting-edge technologies while meeting evolving customer expectations. In this comprehensive analysis, we explore the key trends that will define digital banking in the coming months.</p>

      <h2>1. AI-Driven Hyper-Personalization</h2>
      <p>Artificial intelligence has moved beyond basic chatbots to become the cornerstone of customer experience. Banks are now leveraging AI to deliver hyper-personalized services:</p>
      <ul>
        <li>Predictive financial advice based on spending patterns</li>
        <li>Personalized product recommendations at the right moment</li>
        <li>Dynamic pricing models tailored to individual risk profiles</li>
        <li>Automated wealth management with human-like insights</li>
      </ul>

      <h2>2. Embedded Finance Integration</h2>
      <p>The lines between banking and everyday commerce continue to blur. Embedded finance is enabling non-financial companies to offer seamless financial services within their platforms. E-commerce sites now offer instant credit, ride-sharing apps provide insurance, and social media platforms facilitate peer-to-peer payments.</p>

      <blockquote>"By 2025, embedded finance will be a $7 trillion industry, fundamentally changing how consumers interact with financial services."</blockquote>

      <h2>3. Open Banking Maturation</h2>
      <p>Open banking frameworks are reaching maturity across major markets. In India, the Account Aggregator ecosystem is enabling unprecedented data sharing between financial institutions. This is creating new opportunities for:</p>
      <ul>
        <li>Alternative credit scoring using non-traditional data</li>
        <li>Seamless account switching between providers</li>
        <li>Consolidated financial dashboards</li>
        <li>Real-time financial health monitoring</li>
      </ul>

      <h2>4. Sustainable Banking Initiatives</h2>
      <p>Environmental, Social, and Governance (ESG) considerations are no longer optional. Digital banks are introducing carbon footprint tracking, green investment options, and sustainable lending criteria. Customers increasingly expect their financial partners to align with their values.</p>

      <h2>The Road Ahead</h2>
      <p>As we navigate through 2025, the banks that will thrive are those that embrace innovation while maintaining trust and security. The digital transformation journey is no longer about technology adoption—it's about reimagining the entire banking experience.</p>

      <p>Financial institutions must focus on building agile infrastructure, fostering partnerships with fintechs, and cultivating a culture of continuous innovation. The future belongs to those who can balance technological advancement with human-centric design.</p>
    `,
    tags: ['Digital Banking', 'AI', 'Open Banking', 'Fintech', 'Innovation'],
  },
  'rbi-digital-lending-guidelines': {
    id: 2,
    title: 'Understanding RBI\'s New Digital Lending Guidelines',
    excerpt: 'A comprehensive breakdown of the latest RBI regulations and their impact on fintech lending platforms.',
    category: 'Regulation & Compliance',
    author: {
      name: 'Priya Sharma',
      role: 'Head of Compliance, FinServe Ltd',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    },
    date: 'March 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    content: `
      <p>The Reserve Bank of India's latest digital lending guidelines mark a significant milestone in regulating the fintech lending ecosystem. These regulations aim to protect consumers while fostering responsible innovation in the lending sector.</p>

      <h2>Key Highlights of the Guidelines</h2>
      <p>The new framework introduces several critical requirements for digital lending platforms:</p>
      <ul>
        <li>Mandatory disclosure of all fees and charges upfront</li>
        <li>Direct disbursement to borrower accounts</li>
        <li>Cooling-off period for loan cancellation</li>
        <li>Restrictions on automatic debit mechanisms</li>
      </ul>

      <h2>Impact on Fintech Lenders</h2>
      <p>These guidelines will fundamentally change how digital lenders operate. Companies must now ensure complete transparency in their operations and align their business models with regulatory expectations.</p>

      <blockquote>"The guidelines strike a balance between innovation and consumer protection, setting a template for digital lending regulation globally."</blockquote>

      <h2>Compliance Timeline</h2>
      <p>Existing platforms have been given a 90-day window to comply with the new requirements. New entrants must ensure full compliance before commencing operations.</p>
    `,
    tags: ['RBI', 'Regulation', 'Digital Lending', 'Compliance', 'Fintech'],
  },
};

const relatedPosts = [
  {
    id: 3,
    slug: 'upi-international-expansion',
    title: 'UPI Goes Global: International Expansion and Opportunities',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
    date: 'March 10, 2025',
  },
  {
    id: 4,
    slug: 'ai-fraud-detection-banking',
    title: 'AI-Powered Fraud Detection: Protecting Banks in the Digital Age',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    date: 'March 8, 2025',
  },
  {
    id: 5,
    slug: 'embedded-finance-revolution',
    title: 'Embedded Finance: The Silent Revolution Transforming Industries',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    date: 'March 5, 2025',
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPostsData[slug] || blogPostsData['future-of-digital-banking-2025'];

  return (
    <div className="min-h-screen bg-white" data-testid="blog-post-page">
      <Header forceDark={true} />

      {/* Article Header */}
      <section className="pt-32 pb-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#07549c] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#07549c] text-white rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 mb-8">{post.excerpt}</p>

          {/* Author Info */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-900">{post.author.name}</p>
                <p className="text-sm text-slate-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl -mt-4">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Social Share Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 flex lg:flex-col gap-3">
                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#0077b5] hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#1da1f2] hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#4267B2] hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-11">
              <article
                className="prose prose-lg prose-slate max-w-none prose-headings:font-['Outfit'] prose-headings:text-slate-900 prose-a:text-[#07549c] prose-blockquote:border-l-[#07549c] prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="font-semibold text-slate-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700 hover:bg-[#07549c] hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-8 flex items-center gap-6">
                <button className="flex items-center gap-2 text-slate-600 hover:text-[#07549c]">
                  <ThumbsUp className="w-5 h-5" />
                  <span>124 Likes</span>
                </button>
                <button className="flex items-center gap-2 text-slate-600 hover:text-[#07549c]">
                  <MessageCircle className="w-5 h-5" />
                  <span>18 Comments</span>
                </button>
                <button className="flex items-center gap-2 text-slate-600 hover:text-[#07549c]">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Author Box */}
              <div className="mt-12 p-8 bg-slate-50 rounded-2xl">
                <div className="flex items-start gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-1">
                      {post.author.name}
                    </h3>
                    <p className="text-slate-500 mb-3">{post.author.role}</p>
                    <p className="text-slate-600 mb-4">
                      Experienced banking professional with over 20 years in digital transformation and fintech innovation.
                    </p>
                    <Button variant="outline" className="border-[#07549c] text-[#07549c] hover:bg-[#07549c] hover:text-white">
                      Follow Author
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relPost) => (
              <Link
                key={relPost.id}
                to={`/blog/${relPost.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 group-hover:text-[#07549c] transition-colors line-clamp-2">
                    {relPost.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">{relPost.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
