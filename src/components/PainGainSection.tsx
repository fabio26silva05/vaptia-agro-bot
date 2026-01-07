import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldWayItems = [
  "Cliente espera horas no Zap",
  "Equipe sobrecarregada na safra",
  "Perde venda por não achar preço",
  "Fecha às 18h e domingo",
];

const vaptiaWayItems = [
  "Resposta em 0 segundos (24/7)",
  "IA entende áudio de trator ligado",
  "Consulta estoque em tempo real",
  "Transbordo inteligente para vendas",
];

export const PainGainSection = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-32 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            O Balcão Tradicional vs. A Máquina Vaptia
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Veja a diferença entre o atendimento convencional e a automação inteligente
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Old Way Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-muted rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-xl font-bold text-heading mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </span>
              O Jeito Antigo
            </h3>
            <ul className="space-y-4">
              {oldWayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vaptia Way Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 lg:p-10 border-2 border-primary shadow-card relative overflow-hidden"
          >
            {/* Highlight badge */}
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              Recomendado
            </div>

            <h3 className="text-xl font-bold text-heading mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </span>
              O Padrão Vaptia
            </h3>
            <ul className="space-y-4">
              {vaptiaWayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-body font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
