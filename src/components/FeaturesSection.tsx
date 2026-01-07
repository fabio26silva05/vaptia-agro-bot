import { motion } from "framer-motion";
import { Mic, Database, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Audição Biônica Agro",
    description:
      "Entende sotaques, gírias do campo e áudios com barulho de fundo. Trator ligado? Sem problema.",
  },
  {
    icon: Database,
    title: "Integração Total",
    description:
      "Conecta ao seu ERP. O bot só vende o que tem no estoque e no preço certo. Zero erro.",
  },
  {
    icon: ShieldCheck,
    title: "Filtro de Curiosos",
    description:
      "Qualifica quem quer comprar e passa o lead quente para você fechar. Foco no que importa.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Tecnologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            Blindagem Tecnológica
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Soluções desenvolvidas especificamente para as demandas do agronegócio brasileiro
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-heading mb-3">{feature.title}</h3>
              <p className="text-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
