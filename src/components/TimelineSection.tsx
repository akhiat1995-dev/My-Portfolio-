import { Briefcase, GraduationCap, Award } from 'lucide-react';

const TimelineSection = () => {
    const experiences = [
        {
            title: "LinkedIn Freelancer & Digital Marketing Strategist",
            company: "Self-Employed",
            period: "Current",
            desc: "Developing and executing growth strategies for B2B founders and companies.",
            icon: Briefcase
        },
        {
            title: "Economic & Social Services Officer",
            company: "Public Sector",
            period: "Previous",
            desc: "Managed administrative and strategic social operations with focus on data precision.",
            icon: Award
        },
        {
            title: "Internships (TGR, Banque Populaire)",
            company: "Multiple Entities",
            period: "Early Career",
            desc: "Gained foundational experience in financial services and public treasury operations.",
            icon: Award
        }
    ];

    const education = [
        {
            title: "AI Development",
            school: "JobInTech / SUPMIR Academy",
            period: "2024",
            desc: "Specializing in Intelligent Agents, LLMs, and System Automation.",
            icon: GraduationCap
        },
        {
            title: "Bachelor’s Degree – Economics & Management",
            school: "University",
            period: "Graduated",
            desc: "Theoretical and practical foundation in business dynamics and economic modeling.",
            icon: GraduationCap
        }
    ];

    return (
        <section id="section" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Experience Column */}
                    <div id="experience">
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-primary rounded-xl text-white">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-primary">Professional Experience</h2>
                        </div>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                                        <exp.icon className="w-5 h-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 border border-slate-100 rounded-2xl group-[.is-active]:border-secondary/20 transition-all">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-primary">{exp.title}</div>
                                            <time className="font-bold text-xs text-secondary uppercase tracking-widest">{exp.period}</time>
                                        </div>
                                        <div className="text-slate-400 text-xs font-medium mb-3">{exp.company}</div>
                                        <div className="text-slate-500 text-sm">{exp.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certs Column */}
                    <div id="education">
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-secondary rounded-xl text-white">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-primary">Education & Certifications</h2>
                        </div>

                        <div className="space-y-10">
                            {education.map((edu, idx) => (
                                <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-secondary transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-xl text-primary">{edu.title}</h3>
                                            <p className="text-secondary text-sm font-semibold">{edu.school}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 uppercase tracking-widest">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm">
                                        {edu.desc}
                                    </p>
                                </div>
                            ))}

                            <div id="certifications" className="p-8 bg-primary rounded-2xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Award className="w-32 h-32" />
                                </div>
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <Award className="w-5 h-5 mr-3 text-secondary" />
                                    Certifications Overview
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> AI & Technology Specialist</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> Digital Marketing & Analytics</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> Professional Project Tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
