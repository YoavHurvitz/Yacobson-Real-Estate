import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "מה מייחד את יעקובסון נכסים מסוכנויות נדל״ן אחרות?",
    answer: "יעקובסון נכסים הוקמה ב-2008 ומאז חרטה על דגלה שירות אישי ומעטפת מלאה של 360 מעלות למוכרים וקונים. אנו משתמשים בכל ערוצי השיווק וכן במערכות מתקדמות (CRM) לייעול מקסימלי, ומקשרים אתכם למומחים מכל התחומים (שמאים, עו״ד, קבלנים)."
  },
  {
    question: "באילו אזורים אתם עובדים?",
    answer: "אנו מתמחים בעיקר באזור המרכז, עם דגש חזק על תל-אביב, גבעתיים ורמת-גן. שוק הנדל״ן באזורים אלו מוכר לנו לפרטי פרטים מה שמאפשר ללקוחותינו ביטחון מרבי בעסקאות."
  },
  {
    question: "האם אתם דואגים לסינון שוכרים בדירות למגורים?",
    answer: "בהחלט. אנו עורכים בדיקות מדוקדקות של דיירים פוטנציאליים, כולל בדיקה מול מערכות בנק ישראל, כדי להבטיח אמינות ושקט נפשי לבעלי הנכסים."
  },
  {
    question: "האם אתם מספקים גם ייעוץ משכנתאות?",
    answer: "כן, משרדנו מציע ליווי וייעוץ מקיף, כולל בתחום המשכנתאות. אנו עובדים בצמוד עם טובי היועצים בשוק כדי לוודא שתקבלו את התנאים האידיאליים לעסקה שלכם."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          שאלות ותשובות נפוצות
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-gray-500"
        >
          ריכזנו עבורכם את השאלות הנפוצות ביותר. לא מצאתם תשובה? צרו קשר.
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            className="border-b border-gray-200 pb-4"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 text-right focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg cursor-pointer"
            >
              <span className="text-xl font-bold pr-4">{faq.question}</span>
              <span className="text-gray-400 flex-shrink-0">
                {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 pb-6 pr-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
