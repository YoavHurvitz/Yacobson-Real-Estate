import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="relative overflow-hidden bg-gray-900 pt-24 pb-12 px-8 md:px-16 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Home Night" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              בואו נבנה את <br /> בית החלומות שלכם
            </h2>
            <p className="text-white/70 text-lg max-w-md">
              אנחנו כאן כדי לעזור לכם בכל שאלה או רעיון פרויקט. בין אם יש לכם שאלה על השירותים שלנו או שאתם מוכנים להתחיל.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right flex flex-col gap-4"
          >
            <div className="flex items-center justify-end gap-3 text-white/80 hover:text-white transition-colors">
              <span className="text-lg" dir="ltr">+972 50-123-4567</span>
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <a href="mailto:contact@breeze.co.il" className="flex items-center justify-end gap-3 text-white/80 hover:text-white transition-colors">
              <span className="text-lg">contact@breeze.co.il</span>
              <Mail className="w-5 h-5 text-accent" />
            </a>
            <div className="flex items-center justify-end gap-3 text-white/80 hover:text-white transition-colors">
              <span className="text-lg">שדרות רוטשילד 22, תל אביב</span>
              <MapPin className="w-5 h-5 text-accent" />
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white tracking-tight">
            Breeze
          </div>
          
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">פרטיות</a>
            <a href="#" className="hover:text-white transition-colors">עוגיות</a>
            <a href="#" className="hover:text-white transition-colors">נגישות</a>
          </div>

          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} כל הזכויות שמורות ל-Breeze.
          </div>
        </div>
      </div>
    </footer>
  );
}
