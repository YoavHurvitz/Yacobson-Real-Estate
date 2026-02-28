import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'motion/react';
import { ArrowLeft, Star, Users, Building2, Award } from 'lucide-react';
import Navbar from './Navbar';

function CountUp({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return controls.stop;
    }
  }, [inView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function Hero() {

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col bg-gray-900">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0 h-[100%]"
      >
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Property at Golden Hour"
          className="w-full h-full object-cover object-[center_0%]"
          fetchPriority="high"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <motion.div
          className="max-w-4xl flex flex-col gap-6 md:gap-8 items-center text-center mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, textShadow: "0px 0px 0px rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0)" }}
            animate={{ opacity: 1, y: 0, textShadow: "0px 0px 40px rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.3)" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight drop-shadow-lg"
          >
            העסקה הבאה <br className="hidden md:block" /> שלך מתחילה <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4a261]">כאן</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl font-normal drop-shadow-md leading-relaxed md:leading-relaxed"
          >
            שיווק נכסים פרטיים להשכרה ומכירה באזור תל-אביב, רמת גן וגבעתיים. ליווי אישי, מקצועיות ללא פשרות, ומעטפת מלאה עד למפתח.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2 w-full"
          >
            <a
              href="https://wa.me/972523402559?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A0%D7%9B%D7%A1%D7%99%D7%9D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent-hover transition-all active:scale-95 shadow-xl shadow-accent/30 group w-full sm:w-auto cursor-pointer"
            >
              דברו איתנו
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>

            {/* Trust Indicator - Avatars + Google Stars */}
            <div
              onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-lg cursor-pointer hover:bg-white/20 transition-colors"
            >
              <div className="flex -space-x-3 space-x-reverse">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover shadow-md" alt="לקוחה מרוצה - תמונת פרופיל" decoding="async" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover shadow-md" alt="לקוח מרוצה - תמונת פרופיל" decoding="async" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover shadow-md" alt="לקוחה מרוצה - תמונת פרופיל" decoding="async" />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <GoogleIcon />
                  <span className="text-white font-medium text-xs">מעל 130 המלצות 5.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated KPIs */}
        <div className="mt-auto pt-16 grid grid-cols-3 gap-2 md:gap-8 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Users className="w-5 h-5 md:w-6 md:h-6 text-white/80 mb-2 md:mb-3" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-1">
              <CountUp end={500} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/70 font-medium">לקוחות מרוצים</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white/80 mb-2 md:mb-3" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-1">
              <CountUp end={1200} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/70 font-medium">עסקאות מוצלחות</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Award className="w-5 h-5 md:w-6 md:h-6 text-white/80 mb-2 md:mb-3" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-1">
              <CountUp end={16} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/70 font-medium">שנות ניסיון</div>
          </motion.div>
        </div>
      </div>

      {/* As Seen On / Press Mentions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/5 py-4 md:py-6 mt-8 md:mt-12"
      >
        <motion.div
          initial={{ opacity: 0.5, filter: "grayscale(100%)" }}
          whileInView={{ opacity: 1, filter: "grayscale(0%)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 hover:opacity-100 hover:filter-none transition-all duration-500"
        >
          <span className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-widest text-center">מסוקר ב:</span>
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-tighter">TheMarker</span>
            <span className="text-[#00559c] font-bold text-xl md:text-2xl">גלובס</span>
            <span className="text-[#ff0000] font-black italic text-xl md:text-2xl tracking-tight">כלכליסט</span>
            <span className="text-[#ff0000] font-black tracking-tighter text-2xl md:text-3xl">ynet</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

