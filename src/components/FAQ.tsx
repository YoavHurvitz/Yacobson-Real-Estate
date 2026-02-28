import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "מה מייחד את Breeze מסוכנויות נדל״ן אחרות?",
    answer: "אנו מתמקדים בהתאמה אישית, שקיפות מלאה ומקצועיות ללא פשרות. הצוות שלנו מלווה כל לקוח באופן אישי, מתוך הבנה עמוקה של צרכיו, תוך שימוש בטכנולוגיות מתקדמות לאיתור הנכס המושלם."
  },
  {
    question: "האם אתם מלווים גם משקיעים מחו״ל?",
    answer: "בהחלט. יש לנו מחלקה ייעודית למשקיעי חוץ, המספקת מעטפת מלאה הכוללת ייעוץ משפטי, מיסוי, וניהול הנכס לאחר הרכישה."
  },
  {
    question: "איך מתבצע תהליך הערכת השווי?",
    answer: "הערכת השווי שלנו מתבססת על ניתוח מעמיק של נתוני השוק העדכניים, עסקאות דומות באזור, ומאפייניו הייחודיים של הנכס. התהליך מבוצע על ידי שמאי מוסמך מטעמנו."
  },
  {
    question: "האם אתם מטפלים גם בנכסים מסחריים?",
    answer: "כן, יש לנו צוות מומחים המתמחה בנדל״ן מסחרי, משרדים, ושטחי מסחר במיקומים המבוקשים ביותר."
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
