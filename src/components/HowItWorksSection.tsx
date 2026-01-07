import { motion } from "framer-motion";
import { Link, BookOpen, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Conexão Segura",
    description: "Conectamos seu WhatsApp em nossa infra blindada. Sem riscos, sem complicação.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Treinamento",
    description: "A IA aprende seu catálogo, preços e regras de negócio. Ela fala a língua do seu cliente.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Virada de Chave",
    description: "Seu número passa a atender 100% no automático. Vendas acontecem enquanto você dorme.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-section-alt">
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
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            Implementação Sem Dor de Cabeça
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Em três passos simples, sua revenda está funcionando no automático
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            {/* Steps */}
            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-6 lg:gap-10"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-primary">
                      <span className="text-xl font-extrabold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-heading mb-2">{step.title}</h3>
                        <p className="text-body">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
