import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
// import { useState } from 'react';

import globalCommunitiesImg from '../../images/fiaks_map.png'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';




const fintechCountries = [
  { name: 'Canada', coordinates: [-106.3468, 56.1304] },
  { name: 'USA', coordinates: [-95.7129, 37.0902] },
  { name: 'UK', coordinates: [-3.4359, 55.3781] },
  { name: 'Germany', coordinates: [10.4515, 51.1657] },
  { name: 'Ghana', coordinates: [-1.0232, 7.9465] },
  { name: 'Nigeria', coordinates: [8.6753, 9.0820] },
  { name: 'Egypt', coordinates: [30.8025, 26.8206] },
  { name: 'Kenya', coordinates: [37.9062, -0.0236] },
  { name: 'South Africa', coordinates: [22.9375, -30.5595] },
  { name: 'Israel', coordinates: [34.8516, 31.0461] },
  { name: 'Ethiopia', coordinates: [40.4897, 9.1450] },
  { name: 'Bahrain', coordinates: [50.6378, 25.9304] },
  { name: 'UAE', coordinates: [53.8478, 23.4241] },
  { name: 'Maldives', coordinates: [73.2207, 3.2028] },
  { name: 'Sri Lanka', coordinates: [80.7718, 7.8731] },
  { name: 'Nepal', coordinates: [84.1240, 28.3949] },
  { name: 'India', coordinates: [78.9629, 20.5937] },
  { name: 'Bangladesh', coordinates: [90.3563, 23.6850] },
  { name: 'Myanmar', coordinates: [95.9560, 21.9162] },
  { name: 'Malaysia', coordinates: [101.9758, 4.2105] },
  { name: 'Singapore', coordinates: [103.8198, 1.3521] },
  { name: 'Vietnam', coordinates: [108.2772, 14.0583] },
  { name: 'Hong Kong', coordinates: [114.1694, 22.3193] },
  { name: 'Philippines', coordinates: [121.7740, 12.8797] },
  { name: 'Indonesia', coordinates: [113.9213, -0.7893] },
  { name: 'Australia', coordinates: [133.7751, -25.2744] },
];

const GlobalCommunities = () => {


  // const [activeCity, setActiveCity] = useState("New York");


  return (
    <section className="py-20 md:py-28 bg-white" data-testid="global-communities-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Worldwide Presence
          </p>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Global Communities
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Connecting fintech professionals across major financial hubs worldwide
          </p>
        </div>
        {/* City list */}
        {/* <div className="mt-12 flex flex-wrap justify-center gap-3">
          {fintechCities.map((city) => (
            <span
              key={city.name}
              onClick={() => {
                console.log("Clicked:", city.name); // debug
                setActiveCity(city.name);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors
      ${activeCity === city.name
                  ? 'bg-[#07549c] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-[#07549c] hover:text-white'
                }`}
            >
              {city.name}
            </span>
          ))}
        </div> */}
        {/* <br></br> */}
        {/* <div className="relative bg-slate-50 rounded-2xl p-4 md:p-8 overflow-hidden" data-testid="world-map"> */}
        <div className="relative bg-slate-50 rounded-2xl   overflow-hidden" data-testid="world-map" style={{display:'none'}}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 130,
              center: [20, 25],
            }}
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e2e8f0"
                    stroke="#cbd5e1"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#07549c20', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
            {fintechCountries.map((city) => (
  <Marker key={city.name} coordinates={city.coordinates}>
    <g className="map-marker">

      {/* Uniform pulse for ALL points */}
      <circle r={8} fill="#07549c" opacity={0.25} />
      <circle r={5} fill="#07549c" />

    </g>

    {/* Pin icon for all */}
    <image
      href="/fiaks/pin.png"
      width={50}
      height={50}
      x={-18}
      y={-50}
    />

    {/* City label */}
    <text
      textAnchor="middle"
      y={-18}
      style={{
        fontSize: '10px',
        fill: '#334155',
        fontWeight: 500,
      }}
    >
      {city.name}
    </text>
  </Marker>
))}
          </ComposableMap>
        </div>
        <img src={globalCommunitiesImg} alt='Our Global Communities'/>   

      </div>
    </section>
  );
};

export default GlobalCommunities;
