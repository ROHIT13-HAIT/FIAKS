// import React, { useState } from 'react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { toast } from 'sonner';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const JoinCommunity = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleNewsletterSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error('Please enter your email');
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post(`${API}/newsletter/subscribe`, { email, name: name || undefined });
//       toast.success('Successfully subscribed to our newsletter!');
//       setEmail('');
//       setName('');
//     } catch (error) {
//       const message = error.response?.data?.detail || 'Failed to subscribe. Please try again.';
//       toast.error(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="join-section py-20 md:py-28 text-white relative" data-testid="join-section">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//               Join The Most Trusted BFSI Community
//             </h2>
//             <p className="text-white/80 text-lg mb-8 max-w-lg">
//               Become part of an elite network of financial services professionals. 
//               Get exclusive access to events, insights, and opportunities.
//             </p>
            
//             <div className="space-y-4 mb-8">
//               {[
//                 'Access to exclusive industry events',
//                 'Network with 9000+ BFSI professionals',
//                 'Premium research and insights',
//                 'Priority partnership opportunities',
//               ].map((benefit, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
//                   <span className="text-white/90">{benefit}</span>
//                 </div>
//               ))}
//             </div>

//             <Link to="/">
//               <Button
//                 size="lg"
//                 className="bg-white text-[#07549c] hover:bg-slate-100 font-semibold px-8 py-6 text-lg"
//                 data-testid="become-member-btn"
//               >
//                 Become a Member
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
//             </Link>
//           </div>

//           {/* Right - Newsletter Form */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8" data-testid="newsletter-form">
//             <h3 className="font-['Outfit'] text-2xl font-semibold mb-2">
//               Stay Updated
//             </h3>
//             <p className="text-white/70 mb-6">
//               Subscribe to our newsletter for the latest updates and insights.
//             </p>

//             <form onSubmit={handleNewsletterSubmit} className="space-y-4">
//               <Input
//                 type="text"
//                 placeholder="Your Name (Optional)"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
//                 data-testid="newsletter-name-input"
//               />
//               <Input
//                 type="email"
//                 placeholder="Your Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
//                 data-testid="newsletter-email-input"
//               />
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold h-12"
//                 data-testid="newsletter-submit-btn"
//               >
//                 {loading ? 'Subscribing...' : 'Subscribe to Newsletter'}
//               </Button>
//             </form>

//             <p className="text-white/50 text-sm mt-4">
//               We respect your privacy. Unsubscribe at any time.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinCommunity;
