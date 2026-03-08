const { useState, useEffect } = React;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <div className="text-2xl font-heading font-extrabold text-navy cursor-pointer" onClick={() => scrollTo('home')}>
                    MBA Planner<span className="text-emerald">.</span>
                </div>
                <ul className="hidden md:flex gap-8 text-slate-600 font-medium">
                    {['Features', 'Inside', 'Benefits', 'Pricing', 'FAQ'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()); }}
                                className="hover:text-emerald transition-colors"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <button 
                    onClick={() => scrollTo('pricing')}
                    className="bg-emerald hover:bg-emerald-dark text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-emerald/30 transition-all hover:-translate-y-1"
                >
                    Get Started
                </button>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <header id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
            {/* Background glowing orb */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald/10 blur-3xl z-0"></div>
            
            <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-dark font-semibold text-sm">
                        2026 Edition Available Now
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-navy leading-tight">
                        The Ultimate MBA<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-emerald-dark">
                            Success Planner
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
                        Plan your MBA journey, track your skills, prepare for placements, and stay productive — all in one powerful planner.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a href="#pricing" className="bg-emerald hover:bg-emerald-dark text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-xl shadow-emerald/30 transition-all hover:-translate-y-1 flex items-center gap-2">
                            Download Now <i className="ph-bold ph-arrow-right"></i>
                        </a>
                        <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-gold text-sm"><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i></div>
                                <span className="text-xs text-slate-500 font-medium">5,000+ Students</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <img src="assets/hero_mockup.png" alt="MBA Success Planner Mockup" className="w-full h-auto drop-shadow-2xl animate-float mix-blend-multiply" />
                    
                    {/* Floating stat card 1 */}
                    <div className="absolute top-[10%] -right-[5%] bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="bg-emerald/10 p-2 rounded-lg text-emerald">
                            <i className="ph-fill ph-check-circle text-2xl"></i>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-navy text-xl">100%</div>
                            <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Placement Ready</div>
                        </div>
                    </div>

                    {/* Floating stat card 2 */}
                    <div className="absolute bottom-[10%] -left-[10%] bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 flex items-center gap-3 animate-float" style={{ animationDelay: '2.5s' }}>
                         <div className="bg-gold/10 p-2 rounded-lg text-gold">
                            <i className="ph-fill ph-trend-up text-2xl"></i>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-navy text-xl">10x</div>
                            <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Productivity</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Problem = () => {
    const problems = [
        { icon: 'ph-calendar-x', title: 'Managing assignments and deadlines' },
        { icon: 'ph-certificate', title: 'Tracking skills and certifications' },
        { icon: 'ph-briefcase', title: 'Preparing for placements' },
        { icon: 'ph-linkedin-logo', title: 'Building LinkedIn and resume' },
        { icon: 'ph-chart-line-down', title: 'Staying consistent with productivity' },
    ];

    return (
        <section className="py-24 bg-slate-50" id="problem">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-navy mb-4">MBA Students Struggle With...</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Most MBA students feel overwhelmed. This planner helps you stay organized and focused on what actually matters.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {problems.map((prob, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 border border-slate-100 group">
                            <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <i className={`ph ${prob.icon} text-2xl`}></i>
                            </div>
                            <h3 className="font-semibold text-navy text-lg leading-tight">{prob.title}</h3>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 bg-gradient-to-r from-navy to-navy-light rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl border-l-4 border-emerald">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-heading font-bold mb-3">Stop struggling. Start excelling.</h3>
                        <p className="text-lg text-slate-300">Our comprehensive framework turns chaos into a structured path to success.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    const features = [
        { icon: 'ph-file-text', title: 'Resume Growth Tracker', desc: 'Track every improvement in your resume. Never forget a project or achievement again.' },
        { icon: 'ph-linkedin-logo', title: 'LinkedIn Growth Tracker', desc: 'Measure posts, connections, and outreach to build a powerful professional network.' },
        { icon: 'ph-books', title: 'Case Study & Certification', desc: 'Keep track of courses, case competitions, and external learning effectively.' },
        { icon: 'ph-target', title: 'Skill Development Planner', desc: 'Identify missing skills and build competencies that target companies actually want.' },
        { icon: 'ph-buildings', title: 'Placement Application', desc: 'Track target companies, application status, interviews, and final results.' },
        { icon: 'ph-calendar-check', title: 'Weekly Performance Dashboard', desc: 'Measure your productivity, habits, and progress with beautiful weekly reviews.' },
    ];

    return (
        <section className="py-32 bg-white" id="features">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-emerald font-semibold uppercase tracking-widest text-sm mb-2 block">What You Get Inside</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">Everything You Need To Succeed</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feat, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald/10 hover:-translate-y-2 hover:bg-white group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald text-3xl mb-6 group-hover:bg-emerald group-hover:text-white transition-colors">
                                    <i className={`ph ${feat.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">{feat.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Audience = () => {
    const audiences = [
        'MBA Students looking to organize their chaos.',
        'Management Aspirants wanting a head start.',
        'Freshers preparing intensively for placements.',
        'Students who want better daily productivity.',
        'Anyone serious about structured career growth.'
    ];

    return (
        <section className="py-32 bg-navy text-white relative overflow-hidden" id="audience">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald/10 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <span className="text-gold font-semibold uppercase tracking-widest text-sm mb-3 block">Perfect For</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 text-white">Who is this planner designed for?</h2>
                    <ul className="space-y-6">
                        {audiences.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-slate-300 text-lg">
                                <i className="ph-fill ph-check-circle text-emerald text-2xl mt-0.5"></i>
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/^(.*?)\s/, '<strong>$1</strong> ')}} />
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="glass p-10 md:p-14 rounded-3xl relative">
                    <i className="ph-fill ph-quotes absolute top-6 right-8 text-6xl text-white/10"></i>
                    <p className="text-xl md:text-2xl font-body italic leading-relaxed mb-8 relative z-10">
                        "This planner completely changed how I approached my MBA. Instead of reacting to deadlines, I was proactively building my profile. Got placed in week 1."
                    </p>
                    <div className="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/100?img=5" alt="Rahul S." className="w-14 h-14 rounded-full border-2 border-emerald" />
                        <div>
                            <strong className="block text-white text-lg">Rahul S.</strong>
                            <span className="text-emerald font-medium">IIM Bangalore</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Preview = () => {
    const tags = ['Skill Tracker', 'Placement Tracker', 'LinkedIn Tracker', 'Study Planner'];
    
    return (
        <section className="py-32 bg-slate-50" id="inside">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Take A Peek Inside</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Beautifully designed pages optimized for digital note-taking apps.</p>
                </div>
                
                <div className="max-w-5xl mx-auto relative group">
                    <div className="absolute inset-0 bg-emerald/5 mix-blend-multiply rounded-[2.5rem] transform group-hover:scale-[1.02] transition-transform duration-500"></div>
                    <img src="assets/planner_preview.png" alt="Planner Preview Screens" className="w-full h-auto drop-shadow-2xl mix-blend-multiply relative z-10 transition-transform duration-500 hover:scale-[1.01]" />
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mt-16">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold text-navy shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald/30 hover:text-emerald transition-all cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Benefits = () => {
    const benefits = [
        { icon: 'ph-stack', title: 'Stay organized during MBA', desc: 'No more missed deadlines or forgotten assignments.' },
        { icon: 'ph-file-pdf', title: 'Build strong resume', desc: 'Strategically map out experiences recruiters look for.' },
        { icon: 'ph-trend-up', title: 'Track real progress', desc: "See exactly how much you're improving week over week." },
        { icon: 'ph-lightning', title: 'Improve productivity', desc: 'Focus on high-impact tasks instead of busywork.' },
        { icon: 'ph-handshake', title: 'Prepare for placements confidently', desc: "Walk into interviews knowing you're fully prepared." },
    ];

    return (
        <section className="py-32 bg-white" id="benefits">
            <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="absolute top-[-5%] left-[-5%] w-full h-full bg-emerald rounded-3xl opacity-10"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students studying" className="rounded-3xl shadow-2xl relative z-10 object-cover aspect-[4/5] w-full max-w-md mx-auto" />
                </div>
                
                <div className="order-1 lg:order-2">
                    <span className="text-emerald font-semibold uppercase tracking-widest text-sm mb-3 block">Why Students Love It</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-12">The unfairly massive advantage</h2>
                    
                    <div className="space-y-8">
                        {benefits.map((b, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 shadow-sm border border-slate-100 flex items-center justify-center text-emerald text-2xl flex-shrink-0 group-hover:bg-emerald group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald/30 transition-all">
                                    <i className={`ph ${b.icon}`}></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-navy mb-1">{b.title}</h4>
                                    <p className="text-slate-500">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Pricing = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-white to-slate-50" id="pricing">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden relative transform transition-transform hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-navy to-emerald"></div>
                    
                    <div className="p-10 text-center border-b border-slate-100">
                        <h3 className="text-2xl font-bold text-navy mb-4">Simple & Affordable</h3>
                        <div className="flex justify-center items-start text-navy mb-2">
                            <span className="text-2xl font-semibold mt-2">₹</span>
                            <span className="text-7xl font-heading font-extrabold leading-none">99</span>
                        </div>
                        <p className="text-emerald font-semibold">Instant download after purchase.</p>
                    </div>
                    
                    <div className="p-10 bg-slate-50/50">
                        <ul className="space-y-4 mb-10">
                            {['High-quality digital PDF', 'GoodNotes / Notability friendly', 'Hyperlinked navigation', 'Print-ready format', 'Lifetime access'].map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                                    <i className="ph-fill ph-check-circle text-emerald text-xl"></i> {feat}
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="block w-full text-center bg-emerald hover:bg-emerald-dark text-white text-xl py-4 rounded-xl font-bold shadow-lg shadow-emerald/30 transition-all hover:scale-105 animate-pulse-glow">
                            Buy Now
                        </a>
                        <p className="text-center text-sm text-slate-400 mt-6 flex items-center justify-center gap-2">
                            <i className="ph ph-shield-check text-lg"></i> Secure payment powered by Razorpay
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const faqs = [
        { q: 'Is this a physical product?', a: 'No, this is a digital PDF planner. You will receive an instant download link immediately after purchase.' },
        { q: 'Can I use it on mobile?', a: 'Yes, it works on mobile, tablet, or laptop. We recommend using a PDF annotation app like GoodNotes, Notability, or Adobe Acrobat for the best experience.' },
        { q: 'Is this suitable for all MBA students?', a: 'Yes, it works for any specialization (Marketing, Finance, HR, Operations, etc.). The trackers are versatile and focus on core skills and placement preparation applicable to all MBA students.' },
    ];
    
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="py-32 bg-slate-50" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300">
                            <button 
                                className={`w-full text-left px-8 py-6 flex justify-between items-center transition-colors ${openIdx === idx ? 'bg-slate-50/80' : 'hover:bg-slate-50/50'}`}
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                            >
                                <span className="font-semibold text-lg text-navy pr-4">{faq.q}</span>
                                <i className={`ph ph-caret-down text-2xl text-slate-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-emerald' : ''}`}></i>
                            </button>
                            <div 
                                className="overflow-hidden transition-all duration-300 ease-in-out" 
                                style={{ maxHeight: openIdx === idx ? '200px' : '0' }}
                            >
                                <p className="px-8 pb-6 text-slate-500">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => {
    return (
        <section className="py-32 relative bg-navy flex items-center justify-center overflow-hidden">
            {/* Dark image background with overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/80"></div>
            
            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">Start Your MBA Journey <br />The Smart Way</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join thousands of students who have organized their lives and nailed their placements.</p>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing').scrollIntoView({behavior: 'smooth'}); }} className="inline-block bg-gold hover:bg-gold-light text-navy text-xl px-10 py-5 rounded-xl font-bold shadow-2xl shadow-gold/20 transition-all hover:-translate-y-1 hover:scale-105">
                    Download the Planner Now
                </a>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-navy-light text-slate-400 py-12 text-center border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-2xl font-heading font-extrabold text-white mb-6">
                    MBA Planner<span className="text-emerald">.</span>
                </div>
                <div className="flex justify-center gap-6 mb-8">
                    {['instagram-logo', 'twitter-logo', 'linkedin-logo'].map(icon => (
                        <a key={icon} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald hover:text-white transition-all hover:-translate-y-1 text-xl">
                            <i className={`ph ph-${icon}`}></i>
                        </a>
                    ))}
                </div>
                <p className="text-slate-300 mb-2">&copy; 2026 Ultimate MBA Success Planner</p>
                <p className="text-sm">All Rights Reserved</p>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div className="font-body text-slate-800 bg-white">
            <Navbar />
            <Hero />
            <Problem />
            <Features />
            <Audience />
            <Preview />
            <Benefits />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
