const { useState, useEffect } = React;

// Navbar Component
const Navbar = ({ activeSection, setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease',
            padding: '1.5rem 0'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    cursor: 'pointer'
                }} onClick={() => setActiveSection('Home')}>
                    SA
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveSection(item);
                            }}
                            style={{
                                textDecoration: 'none',
                                color: activeSection === item ? '#667eea' : '#333',
                                fontWeight: activeSection === item ? '600' : '500',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#667eea'}
                            onMouseLeave={(e) => {
                                if (activeSection !== item) e.target.style.color = '#333';
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// Hero Section
const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Full Stack Developer & Problem Solver";
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '2rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '4rem',
                alignItems: 'center',
                width: '100%',
                justifyItems: 'center'
            }}>
                <div style={{ animation: 'fadeInLeft 1s ease', textAlign: 'center', maxWidth: '800px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
                        Hi, I'm
                    </h3>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Shikhar Anand
                    </h1>
                    <h2 style={{
                        fontSize: '1.8rem',
                        marginBottom: '2rem',
                        minHeight: '3rem',
                        color: '#ffd700'
                    }}>
                        {displayText}
                        <span style={{ animation: 'blink 1s infinite' }}>|</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '2rem',
                        opacity: 0.9,
                        lineHeight: '1.8'
                    }}>
                        BTech CS Student at KIET | MERN Stack Enthusiast | DSA Problem Solver
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#contact" style={{
                            padding: '1rem 2rem',
                            background: 'white',
                            color: '#667eea',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}>
                            Get In Touch
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: '600',
                            border: '2px solid white',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#667eea';
                            e.target.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(0)';
                        }}>
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </section>
    );
};

// About Section
const About = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            background: 'white'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    About Me
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    <div>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '2',
                            color: '#555',
                            marginBottom: '1.5rem'
                        }}>
                            I'm a passionate BTech Computer Science student at KIET Group of Institutions, currently in my 6th semester. 
                            With a strong foundation in data structures and algorithms, I've solved over 250+ problems on LeetCode.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '2',
                            color: '#555',
                            marginBottom: '1.5rem'
                        }}>
                            My expertise lies in building full-stack web applications using the MERN stack. I'm currently honing my 
                            backend development skills while maintaining a strong focus on algorithmic problem-solving.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '2',
                            color: '#555'
                        }}>
                            I've participated in prestigious hackathons like Smart India Hackathon and the Innotech program, 
                            where I developed innovative solutions to real-world problems.
                        </p>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        padding: '2rem',
                        borderRadius: '20px',
                        color: 'white'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700' }}>
                            Quick Facts
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { icon: '🎓', text: 'BTech CS @ KIET (CGPA: 8.3/10)' },
                                { icon: '💻', text: '250+ LeetCode Problems Solved' },
                                { icon: '🚀', text: 'MERN Stack Developer' },
                                { icon: '📍', text: 'Varanasi, Uttar Pradesh' },
                                { icon: '🏆', text: 'Smart India Hackathon Participant' }
                            ].map((fact, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1.1rem'
                                }}>
                                    <span style={{ fontSize: '1.5rem' }}>{fact.icon}</span>
                                    <span>{fact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section
const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'C++', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'Python', level: 75 },
                { name: 'SQL', level: 70 },
                { name: 'HTML/CSS', level: 90 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'React.js', level: 85 },
                { name: 'Node.js', level: 75 },
                { name: 'Express.js', level: 75 },
                { name: 'Tailwind CSS', level: 80 }
            ]
        },
        {
            title: 'Databases & Tools',
            skills: [
                { name: 'MongoDB', level: 80 },
                { name: 'MySQL', level: 70 },
                { name: 'Git & GitHub', level: 85 },
                { name: 'VS Code', level: 90 }
            ]
        },
        {
            title: 'Core Competencies',
            skills: [
                { name: 'Data Structures & Algorithms', level: 85 },
                { name: 'Object-Oriented Programming', level: 80 },
                { name: 'RESTful APIs', level: 75 },
                { name: 'Problem Solving', level: 90 }
            ]
        }
    ];

    return (
        <section id="skills" style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Skills & Expertise
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, idx) => (
                        <div key={idx} style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                color: '#667eea'
                            }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <span style={{ fontWeight: '600', color: '#333' }}>
                                                {skill.name}
                                            </span>
                                            <span style={{ color: '#667eea', fontWeight: '600' }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            height: '8px',
                                            background: '#e0e0e0',
                                            borderRadius: '10px',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                width: `${skill.level}%`,
                                                height: '100%',
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                transition: 'width 1s ease'
                                            }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Section
const Projects = () => {
    const projects = [
        {
            title: 'E-Learning Platform',
            description: 'A comprehensive e-learning website with interactive lessons, quizzes, and real-time user analytics. Features personalized content delivery to increase learner engagement by 30%.',
            tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
            highlights: [
                'Interactive lesson modules',
                'Real-time quiz system',
                'User progress analytics',
                'Personalized recommendations'
            ],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'Mental Health Companion App',
            description: 'A responsive mental wellness platform offering mood tracking, journaling, and curated self-care resources with secure authentication.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            highlights: [
                'Daily mood tracking',
                'Private journaling feature',
                'Emotional insights dashboard',
                'Self-care resource library'
            ],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }
    ];

    return (
        <section id="projects" style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            background: 'white'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Featured Projects
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, idx) => (
                        <div key={idx} style={{
                            background: 'white',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <div style={{
                                height: '200px',
                                background: project.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                color: 'white'
                            }}>
                                {idx === 0 ? '📚' : '💚'}
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    marginBottom: '1rem',
                                    color: '#333'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.8'
                                }}>
                                    {project.description}
                                </p>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        marginBottom: '0.5rem',
                                        color: '#667eea'
                                    }}>
                                        Key Features:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        color: '#666'
                                    }}>
                                        {project.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} style={{
                                                marginBottom: '0.5rem',
                                                paddingLeft: '1.5rem',
                                                position: 'relative'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: '#667eea'
                                                }}>✓</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} style={{
                                            background: '#f0f0f0',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            color: '#667eea',
                                            fontWeight: '600'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Education Section
const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science',
            institution: 'KIET Group of Institutions',
            location: 'Ghaziabad, India',
            duration: 'Oct 2023 – Jul 2027',
            grade: 'CGPA: 8.3/10',
            courses: [
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Database Management Systems',
                'Operating Systems'
            ]
        },
        {
            degree: 'Intermediate / +2 (C.B.S.E)',
            institution: 'Divine Sainik School',
            location: 'Lahartara, Varanasi, UP',
            duration: '2022 – 2023',
            grade: 'Percentage: 73%',
            courses: []
        },
        {
            degree: 'High School (C.B.S.E)',
            institution: 'Divine Sainik School',
            location: 'Lahartara, Varanasi, UP',
            duration: '2020 – 2021',
            grade: 'Percentage: 86%',
            courses: []
        }
    ];

    return (
        <section id="education" style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    Education & Achievements
                </h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {education.map((edu, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateX(0)';
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem'
                            }}>
                                {edu.degree}
                            </h3>
                            <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.5rem',
                                opacity: 0.9
                            }}>
                                {edu.institution}
                            </p>
                            <div style={{
                                display: 'flex',
                                gap: '2rem',
                                marginBottom: '1rem',
                                flexWrap: 'wrap'
                            }}>
                                <span>📍 {edu.location}</span>
                                <span>📅 {edu.duration}</span>
                                <span>🎯 {edu.grade}</span>
                            </div>
                            {edu.courses.length > 0 && (
                                <div>
                                    <h4 style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600'
                                    }}>
                                        Relevant Coursework:
                                    </h4>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.5rem'
                                    }}>
                                        {edu.courses.map((course, cIdx) => (
                                            <span key={cIdx} style={{
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem'
                                            }}>
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div style={{
                    marginTop: '3rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem'
                    }}>
                        🏆 Achievements & Activities
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
                        <li style={{ marginBottom: '0.8rem' }}>
                            ⭐ Solved 250+ problems on LeetCode across Easy, Medium, and Hard difficulties
                        </li>
                        <li style={{ marginBottom: '0.8rem' }}>
                            🚀 Participated in Smart India Hackathon (SIH)
                        </li>
                        <li style={{ marginBottom: '0.8rem' }}>
                            💡 Participated in Innotech program
                        </li>
                        <li>
                            🎯 Focus on optimal time and space complexity in problem-solving
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

// Contact Section
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            background: 'white'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Get In Touch
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            color: '#333'
                        }}>
                            Let's Connect!
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#666',
                            marginBottom: '2rem'
                        }}>
                            I'm currently looking for internship opportunities and open to collaborating on 
                            interesting projects. Feel free to reach out!
                        </p>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <a href="mailto:shikharanand2604@gmail.com" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateX(10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
                                📧 shikharanand2604@gmail.com
                            </a>
                            <a href="tel:+918604282605" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateX(10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
                                📱 +91-8604282605
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateX(10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
                                💼 LinkedIn Profile
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: '#667eea',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateX(10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
                                💻 GitHub Profile
                            </a>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: '#667eea',
                                fontSize: '1.1rem'
                            }}>
                                📍 Lahartara, Varanasi, UP, India
                            </div>
                        </div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        padding: '2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        border: 'none',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        border: 'none',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        border: 'none',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>
                            <button type="submit" style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'white',
                                color: '#667eea',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer style={{
            background: '#1a1a1a',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <p style={{ fontSize: '1rem' }}>
                © 2026 Shikhar Anand. Built with React.js | Designed for Excellence
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>
                Available for Internship Opportunities
            </p>
        </footer>
    );
};

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('Home');

    return (
        <div>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
};

// Render App
ReactDOM.render(<App />, document.getElementById('root'));
