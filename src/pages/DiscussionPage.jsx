import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { ArrowLeft, MessageSquare, ThumbsUp, Share2, Bookmark, Flag, MoreHorizontal, Reply, Clock, Eye, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const discussionsData = {
  'rbi-cbdc-pilot-expansion': {
    id: 1,
    title: 'RBI announces expansion of CBDC pilot to 1 million users - What are the implications for banks?',
    content: `
      <p>The Reserve Bank of India has announced a significant expansion of its Central Bank Digital Currency (CBDC) pilot program, aiming to reach 1 million users by Q2 2025. This is a major milestone that raises important questions about the future of traditional banking.</p>

      <p>Key highlights from the announcement:</p>
      <ul>
        <li>Pilot expansion to 15 cities from current 5</li>
        <li>Integration with 50+ banks and payment providers</li>
        <li>New features including offline transactions and programmable payments</li>
        <li>Focus on retail use cases initially</li>
      </ul>

      <p>As someone who has been following CBDC developments closely, I see several implications:</p>

      <h3>For Traditional Banks:</h3>
      <ol>
        <li><strong>Disintermediation Risk:</strong> Direct RBI-to-consumer transactions could bypass traditional banking rails</li>
        <li><strong>Deposit Competition:</strong> CBDC could compete with bank deposits, especially in a high-interest environment</li>
        <li><strong>Technology Investment:</strong> Banks will need to invest in CBDC integration capabilities</li>
      </ol>

      <h3>For Fintech:</h3>
      <ol>
        <li><strong>New Opportunities:</strong> CBDC wallets, programmable payment apps, cross-border solutions</li>
        <li><strong>Competition:</strong> Government-backed digital currency vs private payment solutions</li>
      </ol>

      <p>I would love to hear perspectives from those in the banking and fintech industry:</p>
      <ul>
        <li>How is your organization preparing for CBDC?</li>
        <li>What use cases do you see as most promising?</li>
        <li>What concerns do you have about the rollout?</li>
      </ul>

      <p>Looking forward to a healthy discussion!</p>
    `,
    topic: 'Digital Banking',
    author: {
      name: 'Rajesh Sharma',
      role: 'CEO, Digital Banking Solutions',
      avatar: 'RS',
      avatarColor: '#07549c',
      verified: true,
      posts: 156,
      joined: 'Member since 2019',
    },
    stats: { views: 2340, replies: 67, likes: 189 },
    timestamp: '2 hours ago',
    fullDate: 'March 16, 2025 at 10:30 AM',
  },
  'upi-international-rollout': {
    id: 2,
    title: 'UPI now live in 7 countries - Share your cross-border payment experiences',
    content: `
      <p>With UPI expanding internationally to Singapore, UAE, France, UK, Mauritius, Nepal, and Bhutan, I am curious about real-world experiences from the community.</p>

      <p>I recently used UPI in Singapore and was pleasantly surprised by the seamless experience. The transaction was instant, and the exchange rate was competitive.</p>

      <p>Some questions for the community:</p>
      <ul>
        <li>Has anyone used UPI abroad? What was your experience?</li>
        <li>How do the fees compare to traditional forex cards or wire transfers?</li>
        <li>What improvements would you like to see in the international UPI experience?</li>
      </ul>

      <p>Share your experiences below!</p>
    `,
    topic: 'Payments & UPI',
    author: {
      name: 'Priya Mehta',
      role: 'VP Payments, TechFin Corp',
      avatar: 'PM',
      avatarColor: '#5F259F',
      verified: true,
      posts: 134,
      joined: 'Member since 2020',
    },
    stats: { views: 1890, replies: 45, likes: 134 },
    timestamp: '5 hours ago',
    fullDate: 'March 16, 2025 at 7:00 AM',
  },
};

const replies = [
  {
    id: 1,
    author: {
      name: 'Amit Verma',
      role: 'Chief Compliance Officer',
      avatar: 'AV',
      avatarColor: '#004C8F',
      verified: true,
    },
    content: `Great points raised here. From a compliance perspective, CBDC presents both opportunities and challenges.

The programmable payments feature is particularly interesting - it could help with automated compliance checks. However, we need clarity on:
- KYC requirements for CBDC wallets
- Transaction monitoring obligations
- Cross-border CBDC transfers

Our bank is currently evaluating integration options. Would be happy to share more once we have concrete plans.`,
    timestamp: '1 hour ago',
    likes: 45,
    replies: 3,
    isLiked: false,
  },
  {
    id: 2,
    author: {
      name: 'Dr. Sunita Rao',
      role: 'Fintech Analyst',
      avatar: 'SR',
      avatarColor: '#00D09C',
      verified: false,
    },
    content: `This is a fascinating development. I have been researching CBDCs globally, and India's approach is quite pragmatic.

Some observations:
1. The phased rollout is smart - learning from each stage
2. Focus on retail first makes sense given UPI success
3. Offline capability is crucial for financial inclusion

One concern: privacy implications. How will transaction data be handled? This needs clear guidelines.

@Rajesh Sharma - great summary of the implications. Would you be open to discussing this on our upcoming podcast?`,
    timestamp: '45 minutes ago',
    likes: 32,
    replies: 1,
    isLiked: true,
  },
  {
    id: 3,
    author: {
      name: 'Michael Chen',
      role: 'MD, Lending Platform',
      avatar: 'MC',
      avatarColor: '#F58220',
      verified: true,
    },
    content: `From a fintech lending perspective, programmable CBDC could be game-changing.

Imagine:
- Automated loan disbursements with spending restrictions
- Smart contract-based EMI collections
- Real-time credit assessment based on CBDC transaction history

We are already exploring partnerships with banks participating in the pilot. The potential for innovation here is enormous.`,
    timestamp: '30 minutes ago',
    likes: 28,
    replies: 5,
    isLiked: false,
  },
  {
    id: 4,
    author: {
      name: 'Ananya Desai',
      role: 'InsurTech Founder',
      avatar: 'AD',
      avatarColor: '#97144D',
      verified: false,
    },
    content: `Interesting discussion! From an insurance perspective, CBDC could enable:

- Instant claim settlements
- Usage-based premium collection
- Micro-insurance products with small-value transactions

The key will be integration with existing insurance platforms. Looking forward to seeing how this evolves.`,
    timestamp: '15 minutes ago',
    likes: 18,
    replies: 0,
    isLiked: false,
  },
];

const relatedDiscussions = [
  { id: 2, slug: 'upi-international-rollout', title: 'UPI now live in 7 countries - Share your cross-border payment experiences' },
  { id: 3, slug: 'ai-kyc-compliance', title: 'Implementing AI for KYC - Compliance challenges and solutions' },
  { id: 4, slug: 'neo-bank-profitability', title: 'Can neo-banks ever be profitable? Discussing unit economics' },
];

const DiscussionPage = () => {
  const { slug } = useParams();
  const discussion = discussionsData[slug] || discussionsData['rbi-cbdc-pilot-expansion'];

  const [replyContent, setReplyContent] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [likedReplies, setLikedReplies] = useState({});

  const handleLikeReply = (replyId) => {
    setLikedReplies((prev) => ({
      ...prev,
      [replyId]: !prev[replyId],
    }));
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (!replyContent.trim()) {
      toast.error('Please enter your reply');
      return;
    }
    toast.success('Reply posted successfully!');
    setReplyContent('');
    setReplyingTo(null);
  };

  return (
    <div className="min-h-screen bg-white" data-testid="discussion-page">
      <Header forceDark={true} />

      {/* Header */}
      <section className="pt-32 pb-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <Link to="/community" className="inline-flex items-center gap-2 text-[#07549c] hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Community
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#07549c] text-white rounded-full text-sm font-medium">
              {discussion.topic}
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              {discussion.fullDate}
            </span>
          </div>

          <h1 className="font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            {discussion.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: discussion.author.avatarColor }}
              >
                {discussion.author.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-slate-900">{discussion.author.name}</p>
                  {discussion.author.verified && (
                    <CheckCircle className="w-4 h-4 text-[#07549c]" />
                  )}
                </div>
                <p className="text-sm text-slate-500">{discussion.author.role}</p>
                <p className="text-xs text-slate-400">{discussion.author.joined} • {discussion.author.posts} posts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
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
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          {/* Main Post */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <article
              className="prose prose-slate max-w-none prose-headings:font-['Outfit'] prose-headings:text-slate-900 prose-h3:text-lg prose-a:text-[#07549c]"
              dangerouslySetInnerHTML={{ __html: discussion.content }}
            />

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-[#07549c] hover:text-white transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span>{discussion.stats.likes}</span>
                </button>
                <button
                  onClick={() => setReplyingTo('main')}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Reply className="w-5 h-5" />
                  <span>Reply</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-slate-100">
                  <Bookmark className="w-5 h-5 text-slate-400" />
                </button>
                <button className="p-2 rounded-lg hover:bg-slate-100">
                  <Share2 className="w-5 h-5 text-slate-400" />
                </button>
                <button className="p-2 rounded-lg hover:bg-slate-100">
                  <Flag className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Reply Form */}
          {replyingTo === 'main' && (
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Write a Reply</h3>
              <form onSubmit={handleSubmitReply}>
                <Textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="min-h-[120px] mb-4"
                  data-testid="reply-textarea"
                />
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setReplyingTo(null)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-[#07549c] hover:bg-[#054178]" data-testid="submit-reply">
                    Post Reply
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Replies */}
          <div>
            <h2 className="font-['Outfit'] text-xl font-bold text-slate-900 mb-6">
              {discussion.stats.replies} Replies
            </h2>

            <div className="space-y-6">
              {replies.map((reply) => (
                <div
                  key={reply.id}
                  className="bg-white rounded-xl border border-slate-200 p-6"
                  data-testid={`reply-${reply.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: reply.author.avatarColor }}
                    >
                      {reply.author.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-900">{reply.author.name}</span>
                        {reply.author.verified && (
                          <CheckCircle className="w-4 h-4 text-[#07549c]" />
                        )}
                        <span className="text-slate-400">•</span>
                        <span className="text-sm text-slate-500">{reply.author.role}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3">{reply.timestamp}</p>

                      <div className="prose prose-sm prose-slate max-w-none mb-4">
                        <p className="whitespace-pre-line">{reply.content}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLikeReply(reply.id)}
                          className={`flex items-center gap-1 text-sm ${
                            likedReplies[reply.id] || reply.isLiked
                              ? 'text-[#07549c] font-medium'
                              : 'text-slate-500 hover:text-slate-700'
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span>{reply.likes + (likedReplies[reply.id] ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700">
                          <Reply className="w-4 h-4" />
                          <span>Reply ({reply.replies})</span>
                        </button>
                        <button className="p-1 rounded hover:bg-slate-100">
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Replies */}
            <div className="text-center mt-8">
              <Button variant="outline" className="border-[#07549c] text-[#07549c] hover:bg-[#07549c] hover:text-white">
                Load More Replies
              </Button>
            </div>
          </div>

          {/* Related Discussions */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-['Outfit'] text-lg font-bold text-slate-900 mb-4">Related Discussions</h3>
            <div className="space-y-3">
              {relatedDiscussions.map((related) => (
                <Link
                  key={related.id}
                  to={`/community/${related.slug}`}
                  className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-medium text-slate-900 hover:text-[#07549c]">{related.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiscussionPage;
