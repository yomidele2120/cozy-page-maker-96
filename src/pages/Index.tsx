import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          forma.
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </motion.div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-8 md:px-16">
        <div className="max-w-3xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Design that
            <br />
            <span className="text-accent-foreground/60">speaks softly.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground max-w-md mx-auto"
          >
            Less noise. More meaning. We craft digital experiences that resonate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <Button variant="default" size="lg" className="group">
              Get started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-8 md:px-16">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground text-center"
        >
          © 2024 forma. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default Index;
