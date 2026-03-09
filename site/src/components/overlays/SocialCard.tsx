'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useJourney } from '@/stores/useJourney';
import { useCamera } from '@/stores/useCamera';
import { Instagram, Youtube, X as XIcon, XCircle } from 'lucide-react';

export function SocialCard() {
    const { activePanel, closePanel } = useJourney();
    const { unlockScroll } = useCamera();

    const isOpen = activePanel === "socials";

    const handleClose = () => {
        closePanel();
        unlockScroll();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-12 right-12 z-50 bg-background-surface border border-border/50 rounded-lg p-6 w-80 shadow-2xl backdrop-blur-sm"
                >
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors"
                    >
                        <XCircle size={20} />
                    </button>

                    <h3 className="font-heading text-lg text-primary mb-1 uppercase tracking-wider">Follow Us</h3>
                    <p className="font-sans text-sm text-text-secondary mb-6 line-clamp-2">
                        Stay updated with the latest Street Games drops and brand activations across Nairobi.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center gap-3 p-3 bg-background-alt rounded hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30">
                            <Instagram size={18} />
                            <span className="font-mono text-xs tracking-wider">@streetgamesKE</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 p-3 bg-background-alt rounded hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30">
                            <Youtube size={18} />
                            <span className="font-mono text-xs tracking-wider">Relledomi Ent</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 p-3 bg-background-alt rounded hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30">
                            <XIcon size={18} />
                            <span className="font-mono text-xs tracking-wider">@relledomi</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
