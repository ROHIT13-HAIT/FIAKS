import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';

import banner from '../../src/images/banners/partners.jpg' 

const partnersRow1 = [
  "/fiaks/airtel.jpg",
  "/fiaks/axis.jpg",
  "/fiaks/bank-of-india.png",
  "/fiaks/city-union-bank.png",
  "/fiaks/deuetech.png",
  "/fiaks/eqites.png",
  "/fiaks/fino.png",
  "/fiaks/idfc.jpg",
  "/fiaks/indian-oversise.jpg",
  "/fiaks/kotak.png",
  "/fiaks/paytm.png",
  "/fiaks/post-bank.jpg",
  "/fiaks/sbm.png",
  "/fiaks/south-indian.png",
  "/fiaks/suryaday.png",
  "/fiaks/yes.jpg",
];

const partnersRow2 = [
  "/fiaks/bharat.png",
  "/fiaks/deloitee.png",
  "/fiaks/eable.png",
  "/fiaks/evoulate.png",
  "/fiaks/falcon.png",
  "/fiaks/FIS.png",
  "/fiaks/fss.png",
  "/fiaks/fulltron-1.png",
  "/fiaks/happy.png",
  "/fiaks/hyperface.png",
  "/fiaks/iftas.png",
  "/fiaks/knight.png",
  "/fiaks/m2p.png",
  "/fiaks/msc.png",
  "/fiaks/novo.png",
  "/fiaks/npci.png",
  "/fiaks/nttdara.png",
  "/fiaks/ondc.png",
  "/fiaks/paypint.png",
  "/fiaks/payswiff.png",
  "/fiaks/phi-1.png",
  "/fiaks/protean.png",
  "/fiaks/softsell.png",
  "/fiaks/wibmo.png",
  "/fiaks/wtc.png",
];

const PartnerLogo = ({ src }) => (
  <div className="flex items-center justify-center m-5 card">
    <img
      src={src}
      alt="partner"
      className="h-12 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300 shadow-lg rounded-md" style={{  border: '1px solid rgb(221 221 221 / 49%)'}}
    />
  </div>
);

// const Partners = () => {
//   return (
//     <section className="py-20 md:py-28 bg-slate-50" id="partners" data-testid="partners-section">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//         <div className="text-center mb-16">
//           <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//             Trusted By
//           </p>
//           <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//             Our Partners
//           </h2>
//           <div className="w-16 h-1 bg-[#07549c] mx-auto" />
//         </div>
//       </div>

//       {/* Full width marquee */}
//       <div className="partners-marquee bg-white py-8" data-testid="partners-marquee">
//         <Marquee gradient gradientColor="#f8fafc" gradientWidth={100} speed={40}>
//   {partnersRow1.map((src, index) => (
//     <PartnerLogo key={index} src={src} />
//   ))}
// </Marquee>
//       </div>

//       {/* Second row - reverse direction */}
//       <div className="bg-white py-8 border-t border-slate-100">
//         <Marquee gradient gradientColor="#ffffff" gradientWidth={100} speed={30} direction="right">
//   {partnersRow2.map((src, index) => (
//     <PartnerLogo key={index} src={src} />
//   ))}
// </Marquee>
//       </div>
//     </section>
//   );
// };

const Partners = () => {
  return (

    <div className="min-h-screen bg-white" data-testid="events-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="relative" style={{ marginTop: '80px' }}>
        <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
        <div className="">
          <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              Our Associates Are Our Assets
            </h1>
            <p className="text-white text-lg max-w-2xl">
              Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Trusted By
            </p>
            <div className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-black">Our Partners</span>
              <span className="text-[#07549c] "> (Banks)</span>{' '}
            </div>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          </div>
       

        {/* Row 1 */}
        <div className="relative overflow-hidden py-8 group">
          {/* Gradient Left */}
          <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r" />
          {/* Gradient Right */}
          <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l" />

          <div className="flex flex-wrap justify-center">
            {[...partnersRow1, ...partnersRow1].map((src, index) => (
              <PartnerLogo key={index} src={src} />
            ))}
          </div>
        </div>
 
         </div>
      </section>

       <section className="py-16 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
               Trusted By
            </p>
            <div className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-black">Our Partners</span>
              <span className="text-[#07549c] "> (Non-Banks)</span>{' '}
            </div>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          </div>
       

        {/* Row 1 */}
        <div className="relative overflow-hidden bg-white py-8 group">
          {/* Gradient Left */}
          <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r" />
          {/* Gradient Right */}
          <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l" />

          <div className="flex flex-wrap justify-center">
            {[...partnersRow2, ...partnersRow2].map((src, index) => (
              <PartnerLogo key={index} src={src} />
            ))}
          </div>
        </div>
 
         </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-[#07549c]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Partner with Fintech Forum to organize industry-leading events and reach thousands of BFSI professionals.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-[#07549c] rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
