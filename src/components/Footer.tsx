import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-10 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-lg font-extrabold text-heading">
              Vapt<span className="text-primary">i</span>a
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-body">
            © 2024 Vaptia Soluções. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-body hover:text-primary transition-colors duration-200"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-body hover:text-primary transition-colors duration-200"
            >
              Política de Privacidade
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
