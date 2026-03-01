import { motion } from 'motion/react';
import { Building2, Home, Key, LineChart } from 'lucide-react';

const services = [
    {
        id: 'buying',
        title: 'קניית נכסים',
        description: 'ליווי צמוד במציאת נכס החלומות שלכם, החל מאיתור הנכס, דרך משא ומתן ועד קבלת המפתח. אנו נדאג שתעשו את העסקה המשתלמת והבטוחה ביותר.',
        icon: Home,
    },
    {
        id: 'selling',
        title: 'מכירת נכסים',
        description: 'מקסום שווי הנכס שלכם בתהליך מכירה שקוף ומקצועי. שיווק ממוקד, סינון קונים פוטנציאליים וניהול משא ומתן חסר פשרות עבורכם.',
        icon: Key,
    },
    {
        id: 'commercial',
        title: 'נדל״ן מסחרי',
        description: 'מומחיות באיתור ושיווק משרדים, חנויות ושטחי מסחר. הבנה עמוקה של צרכי העסק והתאמת הנכס המושלם להצלחה מסחרית.',
        icon: Building2,
    },
    {
        id: 'investments',
        title: 'השקעות ויזמות',
        description: 'איתור עסקאות נדל״ן בעלות פוטנציאל השבחה גבוה. ליווי משקיעים, ניתוח כדאיות כלכלית ותכנון אסטרטגיית השקעה חכמה.',
        icon: LineChart,
    },
];

export default function Services() {
    return (
        <section className="py-24 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden" id="services">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                    dir="rtl"
                >
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">תחומי ההתמחות שלנו</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                        הפתרון המלא <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-[#d14d30]">לצרכי הנדל״ן שלכם</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto md:text-lg">
                        אנו מציעים מעטפת שירותים מקצועית ואישית, המותאמת בדיוק למטרות שלכם בשוק הנדל״ן המקומי.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" dir="rtl">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="group p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Visual subtle accent line on top */}
                                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-accent" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
