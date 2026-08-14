import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Camera, Globe } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  coordinates: { x: number; y: number }; // Percentage based for SVG
  photos: string[];
  description: string;
}

const locations: Location[] = [
  {
    id: 'tokyo',
    name: 'Tokyo, Japan',
    coordinates: { x: 88, y: 42 },
    photos: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80'
    ],
    description: 'Exploring the intersection of ancient tradition and futuristic technology.'
  },
  {
    id: 'london',
    name: 'London, UK',
    coordinates: { x: 48, y: 32 },
    photos: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80'
    ],
    description: 'A hub of history, culture, and some of the best engineering museums in the world.'
  },
  {
    id: 'new-york',
    name: 'New York, USA',
    coordinates: { x: 28, y: 38 },
    photos: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'
    ],
    description: 'The city that never sleeps, filled with architectural marvels and endless energy.'
  },
  {
    id: 'san-francisco',
    name: 'San Francisco, USA',
    coordinates: { x: 15, y: 40 },
    photos: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80'
    ],
    description: 'The heart of tech innovation and the iconic Golden Gate Bridge.'
  },
  {
    id: 'sydney',
    name: 'Sydney, Australia',
    coordinates: { x: 90, y: 80 },
    photos: [
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80'
    ],
    description: 'Stunning harbor views and a vibrant engineering community down under.'
  }
];

const TravelMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] bg-[hsl(var(--card))] rounded-3xl border border-white/5 overflow-hidden group">
      {/* World Map SVG */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-10 fill-[hsl(var(--muted-foreground))] transition-opacity group-hover:opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M150,100 L200,80 L250,90 L300,70 L350,80 L400,60 L450,70 L500,50 L550,60 L600,40 L650,50 L700,30 L750,40 L800,20 L850,30 L900,10 L950,20 V150 L900,160 L850,140 L800,150 L750,130 L700,140 L650,120 L600,130 L550,110 L500,120 L450,100 L400,110 L350,90 L300,100 L250,80 L200,90 L150,70 Z" />
        <path d="M100,200 L150,180 L200,190 L250,170 L300,180 L350,160 L400,170 L450,150 L500,160 L550,140 L600,150 L650,130 L700,140 L750,120 L800,130 L850,110 L900,120 L950,100 V250 L900,260 L850,240 L800,250 L750,230 L700,240 L650,220 L600,230 L550,210 L500,220 L450,200 L400,210 L350,190 L300,200 L250,180 L200,190 L150,170 Z" />
        <path d="M50,300 L100,280 L150,290 L200,270 L250,280 L300,260 L350,270 L400,250 L450,260 L500,240 L550,250 L600,230 L650,240 L700,220 L750,230 L800,210 L850,220 L900,200 L950,210 V350 L900,360 L850,340 L800,350 L750,330 L700,340 L650,320 L600,330 L550,310 L500,320 L450,300 L400,310 L350,290 L300,300 L250,280 L200,290 L150,270 Z" />
        <path d="M0,400 L50,380 L100,390 L150,370 L200,380 L250,360 L300,370 L350,350 L400,360 L450,340 L500,350 L550,330 L600,340 L650,320 L700,330 L750,310 L800,320 L850,300 L900,310 L950,290 V450 L900,460 L850,440 L800,450 L750,430 L700,440 L650,420 L600,430 L550,410 L500,420 L450,400 L400,410 L350,390 L300,400 L250,380 L200,390 L150,370 Z" />
        {/* Abstract World Map Path */}
        <path d="M180,120 Q220,100 260,120 T340,100 T420,120 T500,100 T580,120 T660,100 T740,120 T820,100 T900,120 V250 Q820,270 740,250 T660,270 T580,250 T500,270 T420,250 T340,270 T260,250 T180,270 Z" />
        <path d="M100,300 Q150,280 200,300 T300,280 T400,300 T500,280 T600,300 T700,280 T800,300 T900,280 V400 Q800,420 700,400 T600,420 T500,400 T400,420 T300,400 T200,420 T100,400 Z" />
      </svg>

      {/* Location Markers */}
      {locations.map((loc) => (
        <motion.button
          key={loc.id}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setSelectedLocation(loc)}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 p-2 text-[hsl(var(--accent))] hover:text-white transition-colors"
          style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
        >
          <MapPin className="w-6 h-6 drop-shadow-[0_0_8px_rgba(var(--accent),0.5)]" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {loc.name}
          </span>
        </motion.button>
      ))}

      {/* Photo Overlay / Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 bg-[hsl(var(--background))]/90 backdrop-blur-sm p-6 md:p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Camera className="w-5 h-5 text-[hsl(var(--accent))]" />
                  {selectedLocation.name}
                </h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                  {selectedLocation.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar">
              {selectedLocation.photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video rounded-xl overflow-hidden border border-white/10"
                >
                  <img
                    src={photo}
                    alt={`${selectedLocation.name} photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-6 flex items-center gap-2 text-[10px] font-mono text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
        <Globe className="w-3 h-3" />
        Interactive Travel Log // Click pins to view photos
      </div>
    </div>
  );
};

export default TravelMap;
