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
    <section id={id} className="py-24 px-4 md:px-12 lg:px-24 relative bg-premium-gradient">
      {/* Gentle background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">איך נוכל לעזור לכם היום?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-3 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white"
        >
          <div className="flex flex-row justify-between md:grid md:grid-cols-3 gap-2 md:gap-4">
            {options.map(opt => {
              const Icon = opt.icon;
              const isActive = activeTab === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 md:gap-3 p-3 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-[1.02]'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-100'
                    }`}
                >
                  <Icon className="w-5 h-5 md:w-8 md:h-8" />
                  <span className="font-bold text-sm md:text-lg text-center leading-tight">
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
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 md:pt-8 mt-4 md:mt-4 border-t border-gray-100">
                  <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-1.5 md:mb-2">שם מלא</label>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="ישראל ישראלי"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5 md:mb-2">מספר טלפון</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="050-0000000"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-right shadow-sm dir-rtl placeholder:text-right"
                          dir="rtl"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5 md:mb-2">הודעה (אופציונלי)</label>
                      <textarea
                        id="message"
                        placeholder="ספרו לנו קצת על מה שאתם מחפשים..."
                        rows={3}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none shadow-sm"
                      />
                    </div>

                    <button type="submit" className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:shadow-lg active:scale-[0.98] cursor-pointer">
                      שלחו פנייה
                      <Send className="w-5 h-5" />
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
