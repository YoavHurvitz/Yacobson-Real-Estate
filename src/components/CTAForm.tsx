import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Home, Key, UserCircle } from 'lucide-react';

interface CTAFormProps {
  id?: string;
}

export default function CTAForm({ id }: CTAFormProps) {
  const [activeTab, setActiveTab] = useState<string | null>('buy');

  const options = [
    { id: 'buy', labelDesktop: 'אני רוצה לקנות', labelMobile: 'לקנות', icon: Home },
    { id: 'sell', labelDesktop: 'אני רוצה למכור', labelMobile: 'למכור', icon: Key },
    { id: 'agent', labelDesktop: 'דברו עם סוכן', labelMobile: 'סוכן', icon: UserCircle },
  ];

  return (
    <section id={id} className="py-16 md:py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-accent">
      {/* Dynamic Background with Gradients and Noise Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-black/20 mix-blend-overlay"></div>

        {/* Soft Grain/Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* Floating gradient orbs */}
        <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[40%] -right-[10%] w-[800px] h-[800px] bg-black/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">מוכנים לעשות את הצעד הבא?</h2>
          <p className="mt-3 text-white/80 font-medium md:text-lg">השאירו פרטים ונלווה אתכם בדרך לעסקה המשתלמת ביותר</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-white/95 backdrop-blur-2xl rounded-3xl p-4 md:p-6 shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white/40 ring-1 ring-black/5"
        >
          <div className="flex flex-row justify-between md:grid md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
            {options.map(opt => {
              const Icon = opt.icon;
              const isActive = activeTab === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className={`flex-1 flex flex-row items-center justify-center gap-2 md:gap-3 px-3 py-3 md:py-4 rounded-xl transition-all duration-300 cursor-pointer border ${isActive
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md transform scale-[1.02]'
                    : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-accent' : ''}`} />
                  <span className="font-bold text-sm md:text-base text-center leading-tight">
                    <span className="hidden md:inline">{opt.labelDesktop}</span>
                    <span className="md:hidden">{opt.labelMobile}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeTab && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-2 md:pt-4 border-t border-gray-100/80">
                  {/* Desktop: Horizontal layout, Mobile: Vertical layout */}
                  <form className="flex flex-col lg:flex-row gap-4" dir="rtl" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex-1">
                      <label htmlFor="fullName" className="sr-only">שם מלא</label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="שם מלא"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="phone" className="sr-only">מספר טלפון</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="מספר טלפון"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium text-right dir-rtl"
                        dir="rtl"
                      />
                    </div>
                    <div className="flex-[1.5]">
                      <label htmlFor="message" className="sr-only">הודעה</label>
                      <input
                        id="message"
                        type="text"
                        placeholder="פירוט (אופציונלי)"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                      />
                    </div>

                    <button type="submit" className="lg:w-auto w-full px-8 bg-accent text-white font-bold text-lg py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-hover transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer whitespace-nowrap">
                      <span>שלחו פנייה</span>
                      <Send className="w-5 h-5 rtl:rotate-180" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
