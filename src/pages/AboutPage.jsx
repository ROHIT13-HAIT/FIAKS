import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Users, Target, Award, Globe, CheckCircle } from 'lucide-react';

const advisoryCommittee = [
  {
    name: 'Dr. Raghuram Rajan',
    title: 'Former Governor, Reserve Bank of India',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
  },
  {
    name: 'Nandan Nilekani',
    title: 'Co-founder, Infosys; Architect of Aadhaar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    name: 'Chanda Kochhar',
    title: 'Former MD & CEO, ICICI Bank',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
  },
  {
    name: 'Uday Kotak',
    title: 'Founder, Kotak Mahindra Bank',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white" data-testid="about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              About Us
            </p>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Empowering the Future of Finance
            </h1>
            <p className="text-slate-600 text-lg">
              For over a decade, Fintech Forum has been the catalyst for transformation in the 
              Banking, Financial Services, and Insurance sector.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#07549c] text-white rounded-2xl p-10" data-testid="mission-card">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="font-['Outfit'] text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To create a collaborative ecosystem where financial services professionals can 
                share knowledge, build partnerships, and drive innovation that benefits the 
                entire industry and society at large.
              </p>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-10" data-testid="vision-card">
              <Globe className="w-12 h-12 mb-6" />
              <h3 className="font-['Outfit'] text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the world's most trusted platform for BFSI professionals, setting the 
                standard for excellence in industry collaboration, thought leadership, and 
                sustainable financial innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Founded in 2010, Fintech Forum emerged from a simple yet powerful idea: 
                  that the financial services industry needed a dedicated platform where 
                  professionals could come together to address common challenges and 
                  opportunities.
                </p>
                <p>
                  What started as small gatherings of banking executives has grown into 
                  a global community spanning multiple continents. Our journey has been 
                  marked by countless successful events, transformative partnerships, 
                  and the unwavering support of our members.
                </p>
                <p>
                  Today, we continue to evolve, embracing new technologies and expanding 
                  our reach while staying true to our founding principles of collaboration, 
                  integrity, and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#07549c]/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Collaboration', desc: 'Building bridges across the industry' },
              { icon: Award, title: 'Excellence', desc: 'Setting the highest standards' },
              { icon: Target, title: 'Innovation', desc: 'Embracing change and new ideas' },
              { icon: CheckCircle, title: 'Integrity', desc: 'Trust through transparency' },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow"
                data-testid={`value-card-${index}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#07549c]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#07549c]" />
                </div>
                <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-20 bg-slate-50" id="committee">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Leadership
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Honorary Advisory Committee
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our advisory committee comprises distinguished leaders who guide our strategic 
              direction and ensure we maintain the highest standards of excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryCommittee.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`advisory-member-${index}`}
              >
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
