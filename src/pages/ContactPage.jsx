// import React, { useState } from 'react';
// import Header from '../components/marketing/Header';
// import Footer from '../components/marketing/Footer';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Textarea } from '../components/ui/textarea';
// import { Label } from '../components/ui/label';
// import { toast } from 'sonner';
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
// import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const ContactPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, subject, message } = formData;

//     if (!name || !email || !subject || !message) {
//       toast.error('Please fill in all fields');
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post(`${API}/contact`, formData);
//       toast.success('Message sent successfully! We will get back to you soon.');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       const msg = error.response?.data?.detail || 'Failed to send message. Please try again.';
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Visit Us',
//       lines: ['123 Financial District', 'Mumbai - 400001, India'],
//     },
//     {
//       icon: Phone,
//       title: 'Call Us',
//       lines: ['+91 22 1234 5678', '+91 22 8765 4321'],
//     },
//     {
//       icon: Mail,
//       title: 'Email Us',
//       lines: ['contact@fintechforum.com', 'support@fintechforum.com'],
//     },
//     {
//       icon: Clock,
//       title: 'Office Hours',
//       lines: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM'],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white" data-testid="contact-page">
//       <Header />

//       {/* Hero */}
//       <section className="pt-32 pb-20 bg-slate-50">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//           <div className="max-w-3xl mx-auto text-center">
//             <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//               Contact Us
//             </p>
//             <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
//               Get In Touch
//             </h1>
//             <p className="text-slate-600 text-lg">
//               Have questions or want to learn more? We'd love to hear from you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10" data-testid="contact-form">
//               <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-6">
//                 Send Us a Message
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <Label htmlFor="name" className="text-slate-700">
//                       Your Name
//                     </Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       type="text"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="John Doe"
//                       className="mt-1.5 h-12"
//                       data-testid="contact-name-input"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="email" className="text-slate-700">
//                       Email Address
//                     </Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       className="mt-1.5 h-12"
//                       data-testid="contact-email-input"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="subject" className="text-slate-700">
//                     Subject
//                   </Label>
//                   <Input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="How can we help?"
//                     className="mt-1.5 h-12"
//                     data-testid="contact-subject-input"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="message" className="text-slate-700">
//                     Message
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us more about your inquiry..."
//                     className="mt-1.5 min-h-[150px]"
//                     data-testid="contact-message-input"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#07549c] hover:bg-[#054178] h-12 text-base font-semibold"
//                   data-testid="contact-submit-btn"
//                 >
//                   {loading ? (
//                     'Sending...'
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">
//                 Contact Information
//               </h2>

//               <div className="grid gap-6">
//                 {contactInfo.map((info, index) => (
//                   <div
//                     key={info.title}
//                     className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl"
//                     data-testid={`contact-info-${index}`}
//                   >
//                     <div className="w-12 h-12 rounded-full bg-[#07549c]/10 flex items-center justify-center flex-shrink-0">
//                       <info.icon className="w-6 h-6 text-[#07549c]" />
//                     </div>
//                     <div>
//                       <h3 className="font-['Outfit'] font-semibold text-slate-900 mb-1">
//                         {info.title}
//                       </h3>
//                       {info.lines.map((line, i) => (
//                         <p key={i} className="text-slate-600">
//                           {line}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Map Placeholder */}
//               <div className="mt-8 rounded-xl overflow-hidden h-64 bg-slate-100" data-testid="contact-map">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5127073785046!2d72.82512!3d18.9332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzU5LjUiTiA3MsKwNDknMzAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Office Location"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ContactPage;


import React, { useState } from 'react';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// ❌ removed axios + backend

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // ✅ fake API delay
      await new Promise((res) => setTimeout(res, 1000));

      toast.success('Message sent successfully! (Demo Mode)');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['123 Financial District', 'Mumbai - 400001, India'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+91 22 1234 5678', '+91 22 8765 4321'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['contact@fintechforum.com', 'support@fintechforum.com'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      lines: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Contact Us
            </p>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-slate-600 text-lg">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                </div>

                <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" />

                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more..." />

                <Button type="submit" disabled={loading} className="w-full bg-[#07549c] hover:bg-[#054178] h-12">
                  {loading ? 'Sending...' : <> <Send className="w-5 h-5 mr-2" /> Send Message </>}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#07549c]/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-[#07549c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-slate-600">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden h-64 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5127073785046!2d72.82512!3d18.9332"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;