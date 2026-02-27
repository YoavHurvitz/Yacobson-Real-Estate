import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, animate, useInView } from 'motion/react';
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

  return <span ref={ref}>{count}{suffix}</span>;
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gray-900">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Property at Golden Hour" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </motion.div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <motion.div
          style={{ opacity }}
          className="max-w-4xl flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-right mx-auto md:mx-0"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30, textShadow: "0px 0px 0px rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0)" }}
            animate={{ opacity: 1, y: 0, textShadow: "0px 0px 40px rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.3)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight drop-shadow-lg"
          >
            הנכס הבא שלכם <br className="hidden md:block" /> מתחיל <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4a261]">כאן</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl font-normal drop-shadow-md leading-relaxed md:leading-relaxed"
          >
            משרד תיווך בוטיק המעניק ליווי אישי, מקצועי ודיסקרטי. אנו כאן כדי להפוך את עסקת הנדל״ן הבאה שלכם לבטוחה ומשתלמת ביותר.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-2"
          >
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent-hover transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/30 group w-full sm:w-auto"
            >
              דברו איתנו עכשיו
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
            
            {/* Trust Indicator - Avatars + Google Stars */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-lg">
              <div className="flex -space-x-3 space-x-reverse">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover shadow-md" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover shadow-md" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover shadow-md" alt="Customer" />
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
                  <span className="text-white font-medium text-xs">דירוג 5.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated KPIs */}
        <div className="mt-auto pt-16 grid grid-cols-3 gap-2 md:gap-8 max-w-3xl mx-auto md:mx-0 text-center md:text-right">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center md:items-start"
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
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col items-center md:items-start"
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
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center md:items-start"
          >
            <Award className="w-5 h-5 md:w-6 md:h-6 text-white/80 mb-2 md:mb-3" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-1">
              <CountUp end={15} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/70 font-medium">שנות ניסיון</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

