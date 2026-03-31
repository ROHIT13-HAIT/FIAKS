import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { useState } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';




const fintechCities = [
  { name: 'New York', coordinates: [-74.006, 40.7128] },
  { name: 'London', coordinates: [-0.1276, 51.5074] },
  { name: 'Singapore', coordinates: [103.8198, 1.3521] },
  { name: 'Hong Kong', coordinates: [114.1694, 22.3193] },
  { name: 'Dubai', coordinates: [55.2708, 25.2048] },
  { name: 'Mumbai', coordinates: [72.8777, 19.076] },
  { name: 'Shanghai', coordinates: [121.4737, 31.2304] },
  { name: 'San Francisco', coordinates: [-122.4194, 37.7749] },
  { name: 'Frankfurt', coordinates: [8.6821, 50.1109] },
  { name: 'Sydney', coordinates: [151.2093, -33.8688] },
  { name: 'Tokyo', coordinates: [139.6917, 35.6895] },
  { name: 'Zurich', coordinates: [8.5417, 47.3769] },
  { name: 'Toronto', coordinates: [-79.3832, 43.6532] },
  { name: 'Bangalore', coordinates: [77.5946, 12.9716] },
];

const GlobalCommunities = () => {


  const [activeCity, setActiveCity] = useState("New York");


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
        <div className="mt-12 flex flex-wrap justify-center gap-3">
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
        </div>
        <br></br>
        {/* <div className="relative bg-slate-50 rounded-2xl p-4 md:p-8 overflow-hidden" data-testid="world-map"> */}
        <div className="relative bg-slate-50 rounded-2xl   overflow-hidden" data-testid="world-map">
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
            {fintechCities.map((city) => {
              const isActive = activeCity === city.name;

              return (
                <Marker key={city.name} coordinates={city.coordinates}>
                  <g className="map-marker cursor-pointer">

                    {/* Pulse animation ONLY for active */}
                    {isActive && (
                      <>
                        <circle r={8} fill="#07549c" opacity={0.3} />
                        <circle r={5} fill="#07549c" />
                      </>
                    )}

                    {/* Default circle */}
                    {!isActive && (
                      <>
                        <circle r={8} fill="#000000" opacity={0.3} />
                        <circle r={5} fill="#000000" />
                      </>
                    )}
                  </g>
                  {/* Active PNG marker */}
                  {/* {isActive && (
          <image
            href="/pin.png"
            width={60}
            height={60}
            x={-20}
            y={-60}
          />
        )}
     */}

                  {/* PNG marker for ALL cities */}
                  <image
                    href="/pin.png"
                    width={isActive ? 75 : 50}   // slightly bigger when active
                    height={isActive ? 75 : 50}
                    x={isActive ? -22 : -18}
                    y={isActive ? -65 : -50}
                  />
                  <text
                    textAnchor="middle"
                    y={-18}
                    style={{
                      fontSize: '10px',
                      fill: isActive ? '#07549c' : '#334155',
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {city.name}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>


      </div>
    </section>
  );
};

export default GlobalCommunities;
