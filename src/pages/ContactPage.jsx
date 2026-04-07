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


// import React, { useState } from 'react';
// import Header from '../components/marketing/Header';
// import Footer from '../components/marketing/Footer';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Textarea } from '../components/ui/textarea';
// import { Label } from '../components/ui/label';
// import { toast } from 'sonner';
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// // ❌ removed axios + backend

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
//       // ✅ fake API delay
//       await new Promise((res) => setTimeout(res, 1000));

//       toast.success('Message sent successfully! (Demo Mode)');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch {
//       toast.error('Something went wrong');
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

//             {/* Form */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
//               <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-6">
//                 Send Us a Message
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
//                   <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
//                 </div>

//                 <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" />

//                 <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more..." />

//                 <Button type="submit" disabled={loading} className="w-full bg-[#07549c] hover:bg-[#054178] h-12">
//                   {loading ? 'Sending...' : <> <Send className="w-5 h-5 mr-2" /> Send Message </>}
//                 </Button>
//               </form>
//             </div>

//             {/* Info */}
//             <div>
//               <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">
//                 Contact Information
//               </h2>
      
//               <div className="grid gap-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
//                     <div className="w-12 h-12 rounded-full bg-[#07549c]/10 flex items-center justify-center">
//                       <info.icon className="w-6 h-6 text-[#07549c]" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-900">{info.title}</h3>
//                       {info.lines.map((line, i) => (
//                         <p key={i} className="text-slate-600">{line}</p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Map */}
//               <div className="mt-8 rounded-xl overflow-hidden h-64 bg-slate-100">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5127073785046!2d72.82512!3d18.9332"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   loading="lazy"
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
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  purpose: "",
  whatsappMember: "",
  message: ""
});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setLoading(false);
  };

  console.log(motion)

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['Knowledge Centre, Aba Karmarkar Road, Yashodham,', 'Goregaon East, Mumbai,', 'Maharashtra 400063'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+91 7700987644'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['contactus@fiaks.com'],
    },
    // {
    //   icon: Clock,
    //   title: 'Office Hours',
    //   lines: ['Mon - Fri: 9AM - 6PM'],
    // },
  ];

  return (
    <div className="min-h-screen bg-white">

      <Header />

      {/* 🔥 HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-[#07549c] to-[#054178] text-white relative overflow-hidden">

        {/* glow */}
        <div className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[120px] top-0 left-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-widest text-sm mb-3"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Let’s Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg"
          >
            We’d love to hear from you. Reach out anytime.
          </motion.p>

        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="py-24 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-4">

    {/* 🔥 ROW 1 */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* ✨ LEFT: FORM */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-xl rounded-3xl p-8 h-fit"
      >
        <h2 className="text-2xl font-bold mb-6 text-slate-900">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name *" />
            <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" />
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Contact No *" />
            <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
          </div>

          {/* ROW 3 */}
          <div className="grid md:grid-cols-2 gap-5">
            <Input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" />

            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full h-11 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#07549c]"
            >
              <option value="">Select Purpose *</option>
              <option value="membership">Membership</option>
              <option value="partnership">Partnership</option>
              <option value="media">Media</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          {/* WHATSAPP */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Are you a member of the FIAKS Knowledge Sharing community on WhatsApp? *
            </label>

            <select
              name="whatsappMember"
              value={formData.whatsappMember}
              onChange={handleChange}
              className="w-full h-11 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#07549c]"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Write your Query / Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#07549c]"
              placeholder="Write your message..."
            />
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#07549c] hover:bg-[#054178] transition hover:scale-105"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>

        </form>
      </motion.div>

      {/* ✨ RIGHT SIDE (UPDATED) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >

        {/* CONTACT INFO */}
        <div className="grid gap-4">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-10 h-10 rounded-full bg-[#07549c]/10 flex items-center justify-center">
                <info.icon className="text-[#07549c]" />
              </div>

              <div>
                <h3 className="font-semibold text-sm">{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j} className="text-slate-600 text-xs">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🗺 MAP (MOVED HERE) */}
        <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[350px]">

          <iframe
            src="https://maps.google.com/maps?q=18.9332,72.82512&z=15&output=embed"
            className="w-full h-full block"
            style={{ border: 0 }}
            loading="lazy"
            title="Office Location"
          />

        </div>

      </motion.div>

    </div>

  </div>

</section>
      <Footer />
    </div>
  );
};

export default ContactPage;