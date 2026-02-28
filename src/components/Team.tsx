import { motion } from 'motion/react';

const team = [
  {
    id: 1,
    name: "יונתן ברק",
    role: "מייסד ומנכ״ל",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "שירה אהרוני",
    role: "סמנכ״לית מכירות",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "עומר גולן",
    role: "יועץ נדל״ן בכיר",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "מאיה כץ",
    role: "מנהלת קשרי לקוחות",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          הכירו את הצוות
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto text-lg"
        >
          אנשים לפני נכסים. המומחים שלנו מלווים אתכם אישית בכל צעד, כי עסקאות גדולות עושים עם אנשים שסומכים עליהם.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium w-full hover:bg-gray-100 transition-colors cursor-pointer">
                  צור קשר
                </button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
