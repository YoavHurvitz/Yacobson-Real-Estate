import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Home, Shield, TrendingUp, Users, Target, Eye } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: "נכסים בבלעדיות",
    desc: "גישה למאגר נכסי יוקרה סודיים ובלעדיים שאינם מפורסמים בשוק הפתוח, המותאמים בדיוק לדרישות שלכם."
  },
  {
    icon: Shield,
    title: "ביטחון ושקט נפשי",
    desc: "ליווי צמוד של עורכי דין, שמאים ויועצי משכנתאות מהשורה הראשונה, כדי להבטיח עסקה בטוחה ומשתלמת."
  },
  {
    icon: TrendingUp,
    title: "מומחיות בשוק",
    desc: "ניתוח מעמיק של מגמות השוק, תמחור מדויק ואסטרטגיות שיווק מתקדמות המבטיחות תוצאות מקסימליות."
  },
  {
    icon: Users,
    title: "שירות אישי 24/7",
    desc: "סוכן אישי המלווה אתכם יד ביד, זמין לכל שאלה, ומנהל עבורכם את כל המשא ומתן במקצועיות."
  },
  {
    icon: Target,
    title: "משא ומתן אגרסיבי",
    desc: "אנו מייצגים את האינטרסים שלכם בנחישות, וחוסכים ללקוחותינו בממוצע 8% ממחיר הנכס המבוקש."
  },
  {
    icon: Eye,
    title: "שקיפות מלאה",
    desc: "תעודכנו בזמן אמת בכל שלב של התהליך, ללא הפתעות או אותיות קטנות. אמינות היא מילת המפתח."
  }
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 px-6 md:px-12 lg:px-24 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
          למה לבחור בנו
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
          היתרונות <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4a261]">שלנו</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent transition-colors duration-500">
              <feature.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
