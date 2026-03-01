import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Home, Shield, TrendingUp, Users, Target, Eye } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: "חשיפה מקסימלית בכל הערוצים",
    desc: "אנו משקיעים בכל ערוצי השיווק: יד 2, הומלס, מדלן, פייסבוק, אינסטגרם ועוד, כדי לחשוף את הנכס שלכם לקהל עצום."
  },
  {
    icon: Shield,
    title: "מעטפת מקצועית שלמה",
    desc: "עבודה עם מומחים מומלצים למענה מקיף: שמאים, עורכי דין, שיפוצניקים, ואנשי תחזוקה אמינים."
  },
  {
    icon: TrendingUp,
    title: "ייעוץ משכנתאות ונדל״ן",
    desc: "משתפים פעולה עם יועצי משכנתאות מהשורה הראשונה, כדי שתקבלו ייעוץ מדויק ונכון לפני כל עסקה."
  },
  {
    icon: Users,
    title: "שירות אמין ומסור",
    desc: "סוכני נדל״ן מובחרים מטעמנו הפועלים בשקיפות ומקצועיות, כדי להעניק לכם שקט נפשי מלא לאורך כל התהליך."
  },
  {
    icon: Target,
    title: "התאמה מדויקת במערכת CRM",
    desc: "שימוש בטכנולוגיות מתקדמות לניהול דירות ולקוחות, להתאמה מהירה ואפקטיבית בין נכסים לקונים ולשוכרים."
  },
  {
    icon: Eye,
    title: "סינון דיירים אמין",
    desc: "הקפדה על איכות ובדיקות אמינות קפדניות כדי להכניס שוכרים איכותיים בלבד, תוך התנהלות מול מערכות בנק ישראל."
  }
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAFAFA] relative overflow-hidden" ref={ref}>
      {/* Top Divider with Soft Curve (Only for visual flow) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 md:h-12 fill-white drop-shadow-sm">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Background decorations - texture and gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 mt-6 md:mt-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            למה לבחור <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-accent-hover">בנו</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6 flex gap-4 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] cursor-pointer relative overflow-hidden ring-1 ring-gray-900/5 hover:ring-accent/20"
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
              href="https://wa.me/972523402559?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%93%D7%A8%D7%99%D7%9A%20%D7%94%D7%97%D7%99%D7%A0%D7%9E%D7%99%20%D7%9C%D7%9E%D7%95%D7%9B%D7%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer shrink-0"
            >
              שלחו לי וואטסאפ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
