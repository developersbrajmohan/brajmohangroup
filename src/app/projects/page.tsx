"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";

const categories = ["All", "Real Estate", "Civil Infra", "Solar", "Interiors"];

const projects = [
    { title: "Commercial Complex", category: "Real Estate", location: "Patna", image: "/images/projects/commercial-complex.jpg" },
    { title: "Modern Interior Design", category: "Interiors", location: "Boring Road", image: "/images/projects/interior-design.jpg" },
    { title: "Smart Meter Installation", category: "Civil Infra", location: "Bihar State Grid", image: "/images/projects/smart-meter.jpg" },
    { title: "Solar Power Installation", category: "Solar", location: "Rooftop Project", image: "/images/projects/solar-installation.jpg" }
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Our Portfolio"
                subtitle="Executing Excellence Across Bihar"
                image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
            />

            <SectionWrapper>
                <div className="container mx-auto px-6">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full border text-sm uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                    ? "bg-bmd-gold text-bmd-navy border-bmd-gold font-bold"
                                    : "bg-transparent text-white border-white/20 hover:border-bmd-gold hover:text-bmd-gold"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.title}
                                >
                                    <ProjectCard
                                        title={project.title}
                                        category={project.category}
                                        location={project.location}
                                        image={project.image}
                                        className="aspect-[4/3]"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </SectionWrapper>
        </main>
    );
}
