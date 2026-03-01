import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'כללי הברזל למכירת נכס',
        description: 'כל מה שאתם חייבים לדעת לפני שאתם מעמידים את הנכס שלכם למכירה, טעויות נפוצות ואיך להימנע מהן.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
    {
        id: 2,
        title: 'המדריך לקניית הנכס הראשון שלכם',
        description: 'צעד אחר צעד: איך מתכוננים, מה בודקים ואיך מוודאים שהעסקה הראשונה שלכם תהיה מוצלחת ובטוחה.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
    {
        id: 3,
        title: 'רוצים לתמחר את הבית שלכם?',
        description: 'הסודות של המקצוענים לתמחור מדויק שיביא לקוחות וימקסם את הרווח שלכם מהמכירה.',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
    {
        id: 4,
        title: 'רוצים להעלות את שווי הנכס שלכם?',
        description: 'שדרוגים קטנים שעושים הבדל גדול. טיפים לעיצוב ושיפוץ שיקפיצו את ערך הדירה במינימום השקעה.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
];

export default function Blog() {
    return (
        <section className="py-24 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden" id="blog">
            {/* Top Divider with Soft Curve (Only for visual flow) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 md:h-12 fill-gray-50 drop-shadow-sm">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pt-4 md:pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-right mb-16"
                    dir="rtl"
                >
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">הבלוג שלנו</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                        מדריכים, טיפים, <br className="hidden md:block" />
                        <span className="text-gray-500">ותובנות שוק.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" dir="rtl">
                    {blogPosts.map((post, index) => (
                        <motion.a
                            href={post.link}
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="mt-auto flex items-center text-accent font-bold text-sm gap-2">
                                    <span>קראו עוד</span>
                                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Free Guide / Educational Resource CTA (Duplicated from WhyUs) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
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
