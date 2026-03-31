import React from 'react';
import Marquee from 'react-fast-marquee';

const partnersRow1 = [
  "/airtel.jpg",
  "/axis.jpg",
  "/bank-of-india.png",
  "/city-union-bank.png",
  "/deuetech.png",
  "/eqites.png",
  "/fino.png",
  "/idfc.jpg",
  "/indian-oversise.jpg",
  "/kotak.png",
  "/paytm.png",
  "/post-bank.jpg",
  "/sbm.png",
  "/south-indian.png",
  "/suryaday.png",
  "/yes.jpg",
];

const partnersRow2 = [
  "/bharat.png",
  "/deloitee.png",
  "/eable.png",
  "/evoulate.png",
  "/falcon.png",
  "/FIS.png",
  "/fss.png",
  "/fulltron-1.png",
  "/happy.png",
  "/hyperface.png",
  "/iftas.png",
  "/knight.png",
  "/m2p.png",
  "/msc.png",
  "/novo.png",
  "/npci.png",
  "/nttdara.png",
  "/ondc.png",
  "/paypint.png",
  "/payswiff.png",
  "/phi-1.png",
  "/protean.png",
  "/softsell.png",
  "/wibmo.png",
  "/wtc.png",
];

const PartnerLogo = ({ src }) => (
  <div className="flex items-center justify-center mx-6">
    <img
      src={src}
      alt="partner"
      className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
    />
  </div>
);

// const PartnersSlider = () => {
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

const PartnersSlider = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Trusted By
          </p>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto" />
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-hidden bg-white py-8 group">
        {/* Gradient Left */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Gradient Right */}
        <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...partnersRow1, ...partnersRow1].map((src, index) => (
            <PartnerLogo key={index} src={src} />
          ))}
        </div>
      </div>

      {/* Row 2 (reverse) */}
      <div className="relative overflow-hidden bg-white py-8 border-t border-slate-100 group">
        <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...partnersRow2, ...partnersRow2].map((src, index) => (
            <PartnerLogo key={index} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
