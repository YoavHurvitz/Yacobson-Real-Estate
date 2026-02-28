import { useRef } from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[80vh] bg-black">
      <div className="absolute inset-0 z-0 h-[100%]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Office"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-accent font-bold tracking-wider mb-8 shadow-2xl"
        >
          <Award className="w-5 h-5" />
          <span>16+ שנות ניסיון</span>
        </motion.div>

        {/* Title with Glow Animation and Colorful Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 20, textShadow: "0px 0px 0px rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0)" }}
          whileInView={{ opacity: 1, y: 0, textShadow: "0px 0px 40px rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.4)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
        >
          המשרד המוביל במרכז <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4a261]">
            לקנייה והשכרה
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-12 drop-shadow-md font-light"
        >
          יעקובסון נכסים הוקמה בשנת 2008 על ידי שאולי יעקובסון.
          אנו מעניקים שירותי תיווך ושיווק נכסים באזור המרכז, בהתמחות מיוחדת בתל-אביב, גבעתיים ורמת-גן.
          שירות אישי ומקיף עם רשת קשרים של עו״ד, שמאים, אדריכלים ויועצי משכנתאות לשירות מושלם תחת קורת גג אחת, וגישה למערכות מידע בלעדיות לקונים ולמוכרים.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            קראו עוד עלינו
          </button>
        </motion.div>
      </div>
    </section>
  );
}
