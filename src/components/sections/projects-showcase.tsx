"use client";

import SectionWrapper from "../ui/section-wrapper";
import MagneticButton from "../ui/magnetic-button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../ui/project-card";

const projects = [
    {
        title: "Commercial Complex",
        category: "Real Estate Development",
        location: "Patna, Bihar",
        image: "/images/projects/commercial-complex.jpg"
    },
    {
        title: "Modern Interior Design",
        category: "Luxury Interiors",
        location: "Boring Road, Patna",
        image: "/images/projects/interior-design.jpg"
    },
    {
        title: "Smart Meter Installation",
        category: "Utility Infrastructure",
        location: "Bihar State Power Grid",
        image: "/images/projects/smart-meter.jpg"
    },
    {
        title: "Solar Power Installation",
        category: "Renewable Energy",
        location: "Rooftop Project",
        image: "/images/projects/solar-installation.jpg"
    },
];

export default function ProjectsShowcase() {
    return (
        <SectionWrapper id="projects" className="bg-bmd-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-bmd-gold"></span>
                            <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase">Selected Works</span>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-serif font-bold leading-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-bmd-gold to-yellow-200">History</span>
                        </h2>
                    </div>
                    <Link href="/projects">
                        <MagneticButton className="mt-6 md:mt-0 border-white/20 hover:border-bmd-gold bg-white/5 hover:bg-bmd-gold hover:text-bmd-navy transition-all duration-300">
                            View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
                        </MagneticButton>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            category={project.category}
                            location={project.location}
                            image={project.image}
                            className="aspect-[16/10]"
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
