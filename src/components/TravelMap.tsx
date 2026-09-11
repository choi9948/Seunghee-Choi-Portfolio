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
    id: 'seoul',
    name: 'Seoul, South Korea',
    coordinates: { x: 82.5, y: 38 },
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'toronto',
    name: 'Toronto, Canada',
    coordinates: { x: 22.5, y: 35},
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'quebec-city',
    name: 'Quebec City, Canada',
    coordinates: { x: 25, y: 30.5},
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'montreal',
    name: 'Montreal, Canada',
    coordinates: { x: 23.5, y: 32 },
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'new-york',
    name: 'New York, USA',
    coordinates: { x: 24, y: 37 },
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'chicago',
    name: 'Chicago, USA',
    coordinates: { x: 20, y: 36 },
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'washington-dc',
    name: 'Washington DC, USA',
    coordinates: { x: 23, y: 38},
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'boston',
    name: 'Boston, USA',
    coordinates: { x: 25, y: 35.5 },
    photos: [],
    description: 'Coming Soon',
  },
  {
    id: 'tsushima-island',
    name: 'Tsushima Island, Japan',
    coordinates: { x: 83, y: 39.5 },
    photos: [],
    description: 'Coming Soon',
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
          <MapPin className="w-4 h-4 drop-shadow-[0_0_8px_rgba(var(--accent),0.5)]" />
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
