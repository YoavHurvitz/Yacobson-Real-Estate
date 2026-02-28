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
        transition={{ duration: 0.5, ease: "easeOut" }}
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
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 group cursor-pointer"
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

      {/* Free Guide / Educational Resource CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="max-w-5xl mx-auto mt-16 md:mt-24 rounded-3xl relative overflow-hidden bg-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f4a261]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8 h-full w-full">
          <div>
            <span className="text-gray-400 font-bold tracking-widest text-sm mb-3 block uppercase">מדריך חינמי • בלעדי</span>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">מתכננים מכירה השנה?</h3>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
              קבלו במתנה את <b className="text-white font-medium">"המדריך המושלם למוכר 2024"</b> - כולל 6 סודות לעיצוב פנים שמעלים את ערך הנכס בעד 15% ללא שיפוץ מסיבי. מידע ששווה אלפי שקלים, בחינם.
            </p>
          </div>
          <a
            href="https://wa.me/972500000000?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%93%D7%A8%D7%99%D7%9A%20%D7%94%D7%97%D7%99%D7%A0%D7%9E%D7%99%20%D7%9C%D7%9E%D7%95%D7%9B%D7%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer shrink-0"
          >
            שלחו לי וואטסאפ
          </a>
        </div>
      </motion.div>
    </section>
  );
}
