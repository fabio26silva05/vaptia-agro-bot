import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O WhatsApp pode bloquear meu número?",
    answer:
      "Utilizamos infraestrutura profissional e fluxos anti-spam que minimizam riscos. Nossa tecnologia segue as melhores práticas para garantir a segurança e estabilidade do seu número.",
  },
  {
    question: "E se o cliente quiser falar com humano?",
    answer:
      "O bot transfere a conversa para o atendente na hora, com todo o histórico da conversa. Seu cliente nunca fica sem atendimento humano quando precisa.",
  },
  {
    question: "Preciso saber programar?",
    answer:
      "Não. Nós entregamos tudo pronto. Você só atende os pedidos que chegam qualificados. Zero conhecimento técnico necessário da sua parte.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "Em média, 5 a 7 dias úteis. Fazemos a conexão, treinamos a IA com seu catálogo e regras, e você já começa a vender no automático.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
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
            Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre a automação Vaptia
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-soft transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-heading font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
