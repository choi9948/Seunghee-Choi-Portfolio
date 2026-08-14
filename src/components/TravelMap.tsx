import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Camera, Globe } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  coordinates: { x: number; y: number }; // Percentage based
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
      {/* High Quality World Map Background Image */}
    <img
      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80"
      alt="World Map"
      className="w-full h-full object-cover object-[65%_center] opacity-20 transition-opacity group-hover:opacity-30 pointer-events-none filter brightness-90 contrast-125"
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
                  <Camera className="w-5 h-5 text-[hsl(var(--accent))]" /> {selectedLocation.name}
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
        <Globe className="w-3 h-3" /> Interactive Travel Log // Click pins to view photos
      </div>
    </div>
  );
};

export default TravelMap;
