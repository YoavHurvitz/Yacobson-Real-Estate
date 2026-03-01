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
        <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#FAFAFA] relative overflow-hidden" id="services">
            {/* Top Divider Blending from Properties Section */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 md:h-12 lg:h-16 drop-shadow-sm -translate-y-[1px]">
                    <defs>
                        <linearGradient id="blend-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFF6F6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#blend-gradient)" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3"></path>
                    <path fill="url(#blend-gradient)" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path fill="url(#blend-gradient)" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
            </div>

            {/* Background decorations - texture and gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10 mt-10 md:mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                    dir="rtl"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                        תחומי ההתמחות <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-accent-hover">שלנו</span>
                    </h2>
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
                                className="group p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-all duration-500 relative overflow-hidden ring-1 ring-gray-900/5 group-hover:ring-accent/20"
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
