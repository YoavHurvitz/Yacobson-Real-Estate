import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ChevronRight, ChevronLeft, MapPin, Maximize, BedDouble, Bath } from "lucide-react";

const filters = ["הכל", "למכירה", "להשכרה", "יוקרה"];

const allProperties = [
  {
    id: 1, image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop", title: "פנטהאוז בצפון תל אביב",
    price: "₪12,500,000", type: "למכירה", location: "תל אביב, צפון הישן",
    beds: 5, baths: 3, sqm: 220,
  },
  {
    id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", title: "וילה עם בריכה בהרצליה פיתוח",
    price: "₪28,000,000", type: "למכירה", location: "הרצליה פיתוח",
    beds: 7, baths: 5, sqm: 450,
  },
  {
    id: 3, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", title: "דירת גן במגדל יוקרה",
    price: "₪18,000 / חודש", type: "להשכרה", location: "תל אביב, לב העיר",
    beds: 3, baths: 2, sqm: 130,
  },
  {
    id: 4, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", title: "דירת גג עם נוף לים",
    price: "₪9,800,000", type: "יוקרה", location: "נתניה, חוף הים",
    beds: 4, baths: 2, sqm: 180,
  },
  {
    id: 5, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", title: "לופט תעשייתי מעוצב",
    price: "₪15,000 / חודש", type: "להשכרה", location: "תל אביב, פלורנטין",
    beds: 2, baths: 2, sqm: 140,
  },
  {
    id: 6, image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop", title: "דירת גן מפנקת",
    price: "₪6,500,000", type: "למכירה", location: "רמת השרון",
    beds: 4, baths: 2, sqm: 160,
  }
];

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState("הכל");
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = activeFilter === "הכל" ? allProperties : allProperties.filter((p) => p.type === activeFilter);

  const scroll = (dir: "right" | "left") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -380 : 380;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="properties" className="py-24 px-6 md:px-12 lg:px-24 bg-premium-gradient" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">הנכסים שלנו</span>
        <div className="flex flex-col mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              נכסי פרימיום <span className="text-accent">בבלעדיות</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl text-lg mb-6">
            קולקציית הנכסים הייחודית שלנו שלא תמצאו בלוחות הרגילים. חלק מהנכסים שלנו נמצאים בשיווק שקט (Off-Market) מטעמי דיסקרטיות.
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${activeFilter === f
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-white/80 text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 scroll-smooth hide-scrollbar" style={{ scrollbarWidth: "none" }}>
          {filtered.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="min-w-[340px] md:min-w-[380px] group"
            >
              <div className="rounded-[2rem] overflow-hidden bg-white/90 backdrop-blur-sm border border-white hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold shadow-sm">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{property.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                    <MapPin size={16} />
                    {property.location}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                    <span className="flex items-center gap-1.5"><BedDouble size={16} /> {property.beds}</span>
                    <span className="flex items-center gap-1.5"><Bath size={16} /> {property.baths}</span>
                    <span className="flex items-center gap-1.5"><Maximize size={16} /> {property.sqm} מ״ר</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{property.price}</span>
                    <button className="px-5 py-2.5 rounded-full bg-gray-50 text-gray-900 text-sm font-bold hover:bg-accent hover:text-white transition-colors cursor-pointer">
                      פרטים נוספים
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={() => scroll("right")} aria-label="גלול ימינה" className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors z-10 text-gray-600 cursor-pointer">
          <ChevronRight size={24} />
        </button>
        <button onClick={() => scroll("left")} aria-label="גלול שמאלה" className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors z-10 text-gray-600 cursor-pointer">
          <ChevronLeft size={24} />
        </button>
      </div>
    </section>
  );
}
