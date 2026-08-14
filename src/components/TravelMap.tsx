import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ChevronRight } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
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
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
    ],
    description: 'Exploring the intersection of ancient tradition and futuristic technology.',
  },
  {
    id: 'london',
    name: 'London, UK',
    coordinates: { x: 48, y: 32 },
    photos: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80',
    ],
    description: 'A hub of history, culture, and some of the best engineering museums in the world.',
  },
  {
    id: 'new-york',
    name: 'New York, USA',
    coordinates: { x: 28, y: 38 },
    photos: ['https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'],
    description: 'The city that never sleeps, filled with architectural marvels and endless energy.',
  },
  {
    id: 'san-francisco',
    name: 'San Francisco, USA',
    coordinates: { x: 15, y: 40 },
    photos: ['https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80'],
    description: 'The heart of tech innovation and the iconic Golden Gate Bridge.',
  },
  {
    id: 'sydney',
    name: 'Sydney, Australia',
    coordinates: { x: 90, y: 80 },
    photos: ['https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80'],
    description: 'Stunning harbor views and a vibrant engineering community down under.',
  },
];

const TravelMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] bg-[hsl(var(--card))] rounded-3xl border border-white/5 overflow-hidden group">
      {/* High Quality World Map Background */}
      <img
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80"
        alt="World Map"
        className="w-full h-full object-cover opacity-20 transition-opacity group-hover:opacity-30 pointer-events-none filter brightness-90 contrast-125"
      />

      {/* Location Markers */}
      {locations.map((loc) => (
        <motion.button
          key={loc.id}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setSelectedLocation(loc)}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 p-2 text-[hsl(var(--accent))] hover:text-white transition-colors group/pin"
          style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-6 h-6 bg-[hsl(var(--accent))]/30 rounded-full animate-ping" />
            <MapPin className="w-5 h-5 fill-[hsl(var(--accent))]/20 relative z-10" />
          </div>

          {/* Hover Tooltip */}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-medium bg-black/80 text-white rounded-md whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none border border-white/10 backdrop-blur-sm">
            {loc.name}
          </span>
        </motion.button>
      ))}

      {/* Selected Location Modal / Popup */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 right-6 z-20 p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
          >
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2 max-w-md">
              <div className="flex items-center gap-2 text-[hsl(var(--accent))] text-xs font-mono uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visited Location</span>
              </div>
              <h4 className="text-lg font-bold text-white">{selectedLocation.name}</h4>
              <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                {selectedLocation.description}
              </p>
            </div>

            {/* Photo Previews */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {selectedLocation.photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`${selectedLocation.name} ${i + 1}`}
                  className="w-20 h-20 rounded-xl object-cover border border-white/10 flex-shrink-0"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelMap;
