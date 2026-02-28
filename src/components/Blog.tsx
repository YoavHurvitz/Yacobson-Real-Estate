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
        <section className="py-24 px-4 md:px-12 lg:px-24 bg-white" id="blog">
            <div className="max-w-7xl mx-auto">
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
            </div>
        </section>
    );
}
