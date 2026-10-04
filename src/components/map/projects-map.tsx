'use client';
import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useRef, useState, useMemo } from 'react';
import mapboxgl from 'mapbox-gl';
import { Project } from '@/lib/types';

interface ProjectsMapProps {
  projects: Project[];
}

// Inlined at build time (public env var), safe at module scope.
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
const MAPBOX_TOKEN_ERROR =
  'Mapbox access token is missing. Please set NEXT_PUBLIC_MAPBOX_TOKEN in .env.local';

export default function ProjectsMap({ projects }: ProjectsMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    location: 'all',
  });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(() =>
    MAPBOX_TOKEN ? null : MAPBOX_TOKEN_ERROR,
  );

  const [geocodedLocations, setGeocodedLocations] = useState<Map<string, string>>(new Map());

  const uniqueTypes = Array.from(
    new Set(projects.map(p => p.type).filter(Boolean))
  ).sort();

  const uniqueLocations = useMemo(() => {
    const locations = projects
      .filter(p => p.coordinates?.lat && p.coordinates?.lng)
      .map(p => {
        const key = `${p.coordinates!.lat},${p.coordinates!.lng}`;
        return geocodedLocations.get(key) || 'Unknown';
      });
    return Array.from(new Set(locations)).sort();
  }, [projects, geocodedLocations]);

  useEffect(() => {
    const geocodeLocations = async () => {
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

      if (!token) {
        return;
      }

      const locationMap = new Map<string, string>();
      const projectsWithCoords = projects.filter(p => p.coordinates?.lat && p.coordinates?.lng);

      for (const project of projectsWithCoords) {
        const key = `${project.coordinates!.lat},${project.coordinates!.lng}`;
        if (locationMap.has(key)) continue;

        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${project.coordinates!.lng},${project.coordinates!.lat}.json?access_token=${token}`
          );
          const data = await response.json();

          if (data.features && data.features.length > 0) {
            const place = data.features[0];
            const locationName = place.place_name || place.text || 'Unknown';

            const cleanLocation = locationName
              .split(',')
              .map((part: string) => part.trim())
              .filter((part: string) => !/^\d+$/.test(part))
              .slice(0, 2)
              .join(', ');
            locationMap.set(key, cleanLocation || 'Unknown');
          } else {
            locationMap.set(key, 'Unknown');
          }
        } catch (error) {
          locationMap.set(key, 'Unknown');
        }
      }

      setGeocodedLocations(locationMap);
    };

    if (projects.length > 0) {
      geocodeLocations();
    }
  }, [projects]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    if (!MAPBOX_TOKEN) {
      return;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [90.3987, 23.7277],
        zoom: 11,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      map.current.on('load', () => {
        setMapLoaded(true);
      });

      map.current.on('error', (e) => {
        setMapError(e.error?.message || 'Failed to load map');
      });

      return () => {
        map.current?.remove();
      };
    } catch {
      // Report the init failure from a callback: updating state synchronously
      // in the effect body would cascade renders (react-hooks/set-state-in-effect).
      queueMicrotask(() => setMapError('Failed to initialize map'));
    }
  }, []);

  const markerElementsRef = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    if (!map.current) {
      return;
    }

    const filteredProjects = projects.filter(p => {
      if (filters.status !== 'all' && p.status !== filters.status) return false;
      if (filters.type !== 'all' && p.type !== filters.type) return false;
      if (filters.location !== 'all' && p.coordinates?.lat && p.coordinates?.lng) {
        const key = `${p.coordinates.lat},${p.coordinates.lng}`;
        const geocodedLocation = geocodedLocations.get(key);
        if (geocodedLocation !== filters.location) return false;
      }
      return true;
    });

    const points = filteredProjects
      .filter(p => p.coordinates?.lat && p.coordinates?.lng)
      .map(p => ({
        type: 'Feature' as const,
        properties: {
          ...p,
          cluster: false,
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [p.coordinates!.lng, p.coordinates!.lat],
        },
      }));

    const existingMarkers = document.querySelectorAll('.custom-marker');
    existingMarkers.forEach(m => m.remove());
    markerElementsRef.current.clear();

    if (points.length === 0) {
      return;
    }

    points.forEach(point => {
      const coords = point.geometry.coordinates as [number, number];
      const props = point.properties as Project;

      const el = document.createElement('div');
      el.className = 'custom-marker';
      const projectId = String(props.id || '');
      markerElementsRef.current.set(projectId, el);
      el.innerHTML = `
        <svg width="32" height="38" viewBox="0 0 534 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M266.575 0C413.775 9.90227e-05 533.099 119.375 533.1 266.575C533.1 315.2 520.025 360.626 497.3 399.876L266.55 799.726L35.7998 399.876C13.0748 360.626 0 315.2 0 266.575C0.000165003 119.375 119.35 0 266.575 0ZM132.55 448.58C136.873 445.878 141.162 443.346 145.485 440.981V198.992H139.034V127.127C136.67 125.979 134.509 124.864 132.55 123.851V448.58ZM399.741 125.101C397.58 126.352 395.418 127.534 393.257 128.646V198.992H386.771V441.488C391.905 444.021 396.262 446.351 399.741 448.344V125.101ZM382.786 133.915C380.625 134.96 378.463 135.951 376.302 136.888V198.992H369.851V433.754C374.511 435.713 378.835 437.672 382.786 439.529V133.915ZM149.505 438.819C153.828 436.523 158.151 434.429 162.44 432.504V198.992H155.956V134.726C153.727 133.814 151.565 132.868 149.505 131.956V438.819ZM365.832 141.244C363.67 142.089 361.542 142.9 359.381 143.677V198.992H352.896V427.269C357.455 428.856 361.779 430.477 365.832 432.099V141.244ZM166.426 430.714C170.78 428.822 175.104 427.1 179.396 425.546V198.992H172.91V141.211C170.681 140.468 168.52 139.657 166.426 138.88V430.714ZM348.91 147.188C346.749 147.864 344.587 148.506 342.426 149.114V281.233H335.941V421.864C340.435 423.157 344.758 424.497 348.91 425.884V147.188ZM183.381 424.128C187.736 422.615 192.059 421.252 196.351 420.041V281.233H189.865V146.683C187.67 146.041 185.509 145.365 183.381 144.724V424.128ZM331.956 151.85C329.794 152.356 327.632 152.864 325.471 153.303V281.234H318.986V417.542C323.444 418.555 327.768 419.602 331.956 420.75V151.85ZM200.336 418.96C204.695 417.785 209.019 416.76 213.306 415.887V281.233H206.82V151.106C204.627 150.607 202.466 150.089 200.336 149.553V418.96ZM315.001 155.261C312.839 155.639 310.677 155.966 308.516 156.24V281.233H302.031V414.333C306.453 415.04 310.777 415.828 315.001 416.697V155.261ZM217.291 415.144C221.65 414.306 225.973 413.62 230.26 413.084V281.234H223.775V154.552C221.582 154.178 219.421 153.784 217.291 153.37V415.144ZM298.046 157.49C295.884 157.724 293.722 157.904 291.561 158.03V333.078H285.076V412.205C289.467 412.606 293.79 413.124 298.046 413.759V157.49ZM234.245 412.61C238.604 412.101 242.928 411.741 247.215 411.529V333.078H240.73V156.949C238.533 156.715 236.371 156.445 234.245 156.139V412.61ZM277.849 158.706C275.687 158.774 273.525 158.773 271.363 158.773V333.078H268.121V411.192C272.512 411.3 276.835 411.525 281.091 411.867V333.078H277.849V158.706ZM251.2 411.327C255.557 411.125 259.88 411.09 264.136 411.124V333.078H257.685V158.402C255.492 158.276 253.33 158.13 251.2 157.963V411.327Z" fill="#000"/>
</svg>

      `;
      el.style.cssText = `
        cursor: pointer;
      `;

      el.addEventListener('click', () => {
        setSelectedProject(props);
      });

      new mapboxgl.Marker(el)
        .setLngLat(coords)
        .addTo(map.current!);
    });
  }, [mapLoaded, filters, projects, geocodedLocations]);

  useEffect(() => {
    markerElementsRef.current.forEach((el, projectId) => {
      const isActive = selectedProject && String(selectedProject.id) === projectId;
      const path = el.querySelector('path');
      if (path) {
        path.setAttribute('fill', isActive ? '#C6B399' : '#000');
      }
    });
  }, [selectedProject]);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapContainer.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="relative w-full h-full" style={{ height: '600px' }}>
      <div ref={mapContainer} className="w-full h-full" />

      {mapError && (
        <div className="absolute top-4 left-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-xl z-50">
          <p className="font-bold">Map Error</p>
          <p>{mapError}</p>
        </div>
      )}

      {!mapLoaded && !mapError && (
        <div className="absolute top-4 left-4 bg-black/80 text-white p-[12px] rounded">
          Loading map...
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-white backdrop-blur-sm p-2 z-[60]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4">
          <div className="flex-1 relative">
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full bg-transparent text-black border border-black/30 rounded p-[12px] appearance-none cursor-pointer text-sm md:text-base"
            >
              <option value="all">All Status</option>
              <option value="active">Ongoing</option>
              <option value="pending">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L6 6L11 1" />
              </svg>
            </div>
          </div>
          <div className="flex-1 relative">
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full bg-transparent text-black border border-black/30 rounded p-[12px] appearance-none cursor-pointer text-sm md:text-base"
            >
              <option value="all">All Types</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L6 6L11 1" />
              </svg>
            </div>
          </div>
          <div className="flex-1 relative">
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full bg-transparent text-black border border-black/30 rounded p-[12px] appearance-none cursor-pointer text-sm md:text-base"
            >
              <option value="all">All Locations</option>
              {uniqueLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L6 6L11 1" />
              </svg>
            </div>
          </div>
          <button
            onClick={toggleFullscreen}
            className="bg-black hover:bg-white cursor-pointer hover:text-black text-white px-4 py-[12px] rounded border border-black/30 text-sm md:text-base"
          >
            Fullscreen
          </button>
        </div>
      </div>

      {selectedProject && (
        <div className="absolute top-0 right-0 bottom-0  w-full xl:!w-[30%]  bg-white shadow-xl flex flex-col z-50">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute xl:top-4 xl:right-4 top-2 right-2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {selectedProject.image && (
            <img loading="lazy" decoding="async"
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[300px] object-cover flex-shrink-0"
            />
          )}
          <div className="p-2 flex flex-col justify-between h-full">
            <h3 className="c-heading-h2 mb-2">{selectedProject.title}</h3>
            <div className="xl:pb-[90px] pb-[150px]">
              {selectedProject.href && (
                <a
                  href={selectedProject.href}
                  data-astro-cid-n7iexiqw="true"
                  className="c-button c-text-cta c-button-m"
                >
                  <span className="c-button-bg" data-astro-cid-n7iexiqw></span>
                  <span className="c-button_inner" data-astro-cid-n7iexiqw>
                    <span className="c-bullet" data-astro-cid-n7iexiqw>
                      <span className="c-bullet-hover" data-astro-cid-n7iexiqw></span>
                    </span>
                    <span className="c-button_label" data-astro-cid-n7iexiqw>
                      <span className="c-button_label-hover" data-astro-cid-n7iexiqw>
                        View Project
                      </span>
                    </span>
                  </span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
