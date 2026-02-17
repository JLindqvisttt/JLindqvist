/**
 * CvPage – Interactive CV/resume page with PDF export.
 */
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import html2pdf from 'html2pdf.js';
import {
    FaGraduationCap, FaBriefcase, FaCode, FaGlobe, FaCar,
    FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaLink,
    FaCertificate, FaUserTie, FaDownload
} from 'react-icons/fa';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
};

const CvPage = () => {
    const cvRef = useRef(null);

    const handleDownloadPdf = () => {
        // Build a clean inline-styled HTML string for reliable PDF rendering
        const printHtml = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a2e; max-width: 800px; margin: 0 auto;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0d2b30, #143d44); padding: 28px 32px; display: flex; align-items: center; gap: 24px;">
                <img src="${require('../images/CV_IMAGE.PNG')}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(255,255,255,0.2); filter: grayscale(100%);" />
                <div>
                    <h1 style="color: #fff; font-size: 22px; margin: 0 0 2px 0;">Jonathan Lindqvist</h1>
                    <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 0 0 10px 0;">Software Engineer</p>
                    <div style="color: rgba(255,255,255,0.6); font-size: 11px; line-height: 1.8;">
                        Sundbyberg, Stockholm &nbsp;|&nbsp; +46 76 257 43 06 &nbsp;|&nbsp; linkanjontes@gmail.com<br/>
                        linkedin.com/in/jonathanlindqvist &nbsp;|&nbsp; jonathanlindqvist.netlify.app
                    </div>
                </div>
            </div>
            <div style="height: 3px; background: linear-gradient(90deg, #1f8696, #2dd4bf, #1f8696);"></div>

            <!-- Body -->
            <div style="padding: 20px 32px 28px;">

                <!-- Profile -->
                <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e0f0f2; padding-bottom: 6px; margin: 0 0 10px 0;">Profile</h3>
                <p style="font-size: 12px; color: #555; line-height: 1.6; margin: 0 0 18px 0;">Goal-oriented and driven software engineer with experience in system development, test automation, and release management in Linux-based project environments. Accustomed to working in complex technical environments with high demands on quality, structure, and collaboration. Takes responsibility, drives initiatives, and actively contributes to both technical solutions and team development.</p>

                <!-- Work Experience -->
                <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e0f0f2; padding-bottom: 6px; margin: 0 0 10px 0;">Work Experience</h3>

                <div style="margin-bottom: 14px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Software Engineer — Knightec Group, Stockholm</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">February 2026 – Present</div>
                    <p style="font-size: 11px; color: #555; line-height: 1.5; margin: 0;">Employed as a software engineer in a technology consulting firm focused on system development and technical solutions for client projects. Working in cross-functional teams with design, development, and implementation of robust and scalable system solutions.</p>
                </div>

                <div style="margin-bottom: 14px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Software Engineer — Saab Aeronautics, Järfälla</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 2px;">June 2024 – February 2026</div>
                    <div style="font-size: 10.5px; color: #666; font-style: italic; margin-bottom: 4px;">Saab Aeronautics (via Xamera), November 2023 – June 2024</div>
                    <p style="font-size: 11px; color: #555; line-height: 1.5; margin: 0 0 6px 0;">Worked on an internal Saab project focused on software development and test automation for verification.</p>
                    <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #555; line-height: 1.6;">
                        <li>Development and enhancement of internal tools and systems in Python</li>
                        <li>Responsible for automated testing with pytest</li>
                        <li>Development of web-based application with Node.js and JavaScript</li>
                        <li>Working in Linux environment as primary development platform</li>
                        <li>Version control and daily work with Git in large codebases</li>
                        <li>Carried out release procedures and responsible for creating and packaging releases</li>
                        <li>Worked with and improved CI/CD pipelines using Jenkins</li>
                        <li>Used JIRA daily for issue tracking, sprint planning, backlog management, and follow-up within an agile workflow (Scrum)</li>
                        <li>Served as Scrum Master for an extended period</li>
                        <li>Onboarded and supported new team members</li>
                        <li>Took own initiative and responsibility for technical and process-related decisions</li>
                    </ul>
                </div>

                <div style="margin-bottom: 14px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Store Associate / Evening Manager — Coop, Tyresö</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">May 2018 – November 2023</div>
                    <p style="font-size: 11px; color: #555; line-height: 1.5; margin: 0 0 4px 0;">Worked alongside studies. Held the role of evening manager for several years with full responsibility for store operations.</p>
                    <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #555; line-height: 1.6;">
                        <li>Responsible for store operations during evening shifts</li>
                        <li>Cash register work and customer service</li>
                        <li>Responsible for mail and package handling (Postnord)</li>
                        <li>Sales of Svenska Spel and ATG products</li>
                        <li>Leadership, accountability, and problem-solving in a fast-paced environment</li>
                    </ul>
                </div>

                <div style="margin-bottom: 14px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Barista — Waynes Coffee, Stockholm</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">July 2017 – January 2018</div>
                    <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #555; line-height: 1.6;">
                        <li>Customer service</li>
                        <li>Cash register work</li>
                        <li>Barista</li>
                        <li>Food preparation and cleaning</li>
                    </ul>
                </div>

                <div style="margin-bottom: 14px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Mail Carrier — Svensk Direktreklam, Stockholm</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">July 2016 – December 2017</div>
                    <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #555; line-height: 1.6;">
                        <li>Distribution of advertising mail</li>
                        <li>Independent work with own responsibility</li>
                    </ul>
                </div>

                <!-- Education -->
                <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e0f0f2; padding-bottom: 6px; margin: 18px 0 10px 0;">Education</h3>

                <div style="margin-bottom: 12px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Computer Technology, B.Sc. in Engineering, 180 credits — KTH</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">August 2020 – June 2023</div>
                    <p style="font-size: 11px; color: #555; line-height: 1.5; margin: 0;">Focus on software development, networking, and scalable systems, including microservice architecture.</p>
                </div>

                <div style="margin-bottom: 12px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Technology and Economics, B.Sc. in Engineering, 180 credits — KTH</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">January 2020 – August 2020</div>
                    <p style="font-size: 11px; color: #555; line-height: 1.5; margin: 0;">Courses in finance, including marketing and accounting.</p>
                </div>

                <div style="margin-bottom: 12px; padding-left: 12px; border-left: 3px solid #e0f0f2;">
                    <div style="font-weight: 600; font-size: 12px; color: #1a1a2e;">Technology Program — Nacka Gymnasium</div>
                    <div style="font-size: 11px; color: #1f8696; font-weight: 600; margin: 2px 0 4px;">August 2015 – June 2018</div>
                    <p style="font-size: 11px; color: #555; line-height: 1.5; margin: 0;">Focus on computer technology and programming.</p>
                </div>

                <!-- Skills -->
                <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e0f0f2; padding-bottom: 6px; margin: 18px 0 10px 0;">Skills</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
                    <tr>
                        <td style="vertical-align: top; padding: 6px 10px; width: 50%; border: 1px solid #e0f0f2; background: rgba(31,134,150,0.03);">
                            <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.3px;">Programming Languages</strong><br/>
                            <span style="color: #1f8696;">Python, Java, JavaScript, C/C++, HTML/CSS, Bash</span>
                        </td>
                        <td style="vertical-align: top; padding: 6px 10px; width: 50%; border: 1px solid #e0f0f2; background: rgba(31,134,150,0.03);">
                            <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.3px;">Frameworks & Tools</strong><br/>
                            <span style="color: #1f8696;">React.js, Node.js, Spring Boot, pytest, Jenkins</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="vertical-align: top; padding: 6px 10px; width: 50%; border: 1px solid #e0f0f2; background: rgba(31,134,150,0.03);">
                            <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.3px;">Databases</strong><br/>
                            <span style="color: #1f8696;">MySQL, MongoDB, Neo4j</span>
                        </td>
                        <td style="vertical-align: top; padding: 6px 10px; width: 50%; border: 1px solid #e0f0f2; background: rgba(31,134,150,0.03);">
                            <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.3px;">Other</strong><br/>
                            <span style="color: #1f8696;">Linux, Git, CI/CD, Jira, Agile (Scrum), Android Studio</span>
                        </td>
                    </tr>
                </table>

                <!-- Other -->
                <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e0f0f2; padding-bottom: 6px; margin: 18px 0 10px 0;">Other</h3>
                <div style="font-size: 11px; line-height: 2;">
                    <span><strong>Languages:</strong> English, Swedish</span><br/>
                    <span><strong>Driving Licence:</strong> B</span>
                </div>

                <!-- Certification -->
                <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e0f0f2; padding-bottom: 6px; margin: 18px 0 10px 0;">Certification</h3>
                <div style="font-size: 12px; font-weight: 600; padding-left: 12px; border-left: 3px solid #e0f0f2;">Cisco — Internet Networking Course</div>

                <!-- References -->
                <div style="border-top: 2px solid #e0f0f2; margin-top: 18px; padding-top: 12px;">
                    <h3 style="color: #1f8696; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">References</h3>
                    <p style="font-size: 11px; color: #666; font-style: italic; margin: 0;">Available upon request.</p>
                </div>
            </div>
        </div>`;

        // Create a temporary container off-screen
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.left = '0';
        container.style.top = '0';
        container.style.width = '210mm';
        container.style.background = '#ffffff';
        container.style.zIndex = '-9999';
        container.style.overflow = 'visible';
        container.innerHTML = printHtml;
        document.body.appendChild(container);

        const opt = {
            margin: [8, 8, 8, 8],
            filename: 'Jonathan_Lindqvist_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                backgroundColor: '#ffffff',
                width: container.scrollWidth,
                windowWidth: container.scrollWidth
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        html2pdf().set(opt).from(container.firstElementChild).save().then(() => {
            document.body.removeChild(container);
        });
    };

    return (
        <div className="bg-section">
            <NavbarComponent />

            <div style={{ paddingTop: '70px' }}>
                <div className="container">

                    {/* ── Download Button ── */}
                    <motion.div
                        className="cv-download-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <button className="cv-download-btn" onClick={handleDownloadPdf} aria-label="Download PDF">
                            <FaDownload />
                        </button>
                    </motion.div>

                    <motion.div
                        className="cv-container"
                        ref={cvRef}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        {/* ── Header ── */}
                        <div className="cv-header">
                            <img
                                src={require('../images/CV_IMAGE.PNG')}
                                alt="Jonathan Lindqvist"
                                className="cv-photo"
                            />
                            <div className="cv-header-info">
                                <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                                    Jonathan Lindqvist
                                </h1>
                                <p style={{ fontWeight: 500, fontSize: '1.05rem', marginBottom: '1rem' }}>
                                    Software Engineer
                                </p>
                                <div className="cv-header-details">
                                    <span><FaMapMarkerAlt /> Sundbyberg, Stockholm</span>
                                    <span><FaPhone /> +46 76 257 43 06</span>
                                    <span><FaEnvelope /> linkanjontes@gmail.com</span>
                                    <span><FaLinkedin /> linkedin.com/in/jonathanlindqvist</span>
                                    <span><FaLink /> jonathanlindqvist.netlify.app</span>
                                </div>
                            </div>
                        </div>

                        <div className="cv-body">

                        {/* ── Profile ── */}
                        <h3 className="cv-section-title">
                            <FaUserTie /> Profile
                        </h3>
                        <p className="cv-entry-desc" style={{ marginBottom: '1.5rem' }}>
                            Goal-oriented and driven software engineer with experience in system development,
                            test automation, and release management in Linux-based project environments.
                            Accustomed to working in complex technical environments with high demands on
                            quality, structure, and collaboration. Takes responsibility, drives initiatives,
                            and actively contributes to both technical solutions and team development.
                        </p>

                        {/* ── Employment ── */}
                        <h3 className="cv-section-title">
                            <FaBriefcase /> Work Experience
                        </h3>

                        <div className="cv-entry">
                            <div className="cv-entry-title">
                                Software Engineer — Knightec Group, Stockholm
                            </div>
                            <div className="cv-entry-date">February 2026 – Present</div>
                            <p className="cv-entry-desc">
                                Employed as a software engineer in a technology consulting firm focused on
                                system development and technical solutions for client projects. Working in
                                cross-functional teams with design, development, and implementation of robust
                                and scalable system solutions.
                            </p>
                        </div>

                        <div className="cv-entry">
                            <div className="cv-entry-title">
                                Software Engineer — Saab Aeronautics, Järfälla
                            </div>
                            <div className="cv-entry-date">June 2024 – February 2026</div>
                            <div className="cv-entry-subtitle">
                                Saab Aeronautics (via Xamera), November 2023 – June 2024
                            </div>
                            <p className="cv-entry-desc">
                                Worked on an internal Saab project focused on software development and
                                test automation for verification. Responsibilities remained the same both
                                during the consulting assignment and after transitioning to permanent employment.
                            </p>
                            <ul className="cv-entry-list">
                                <li>Development and enhancement of internal tools and systems in Python</li>
                                <li>Responsible for automated testing with pytest</li>
                                <li>Development of web-based application with Node.js and JavaScript</li>
                                <li>Working in Linux environment as primary development platform</li>
                                <li>Version control and daily work with Git in large codebases</li>
                                <li>Carried out release procedures and responsible for creating and packaging releases</li>
                                <li>Worked with and improved CI/CD pipelines using Jenkins</li>
                                <li>Used JIRA daily for issue tracking, sprint planning, backlog management, and follow-up within an agile workflow (Scrum)</li>
                                <li>Served as Scrum Master for an extended period</li>
                                <li>Onboarded and supported new team members</li>
                                <li>Took own initiative and responsibility for technical and process-related decisions</li>
                            </ul>
                        </div>

                        <div className="cv-entry">
                            <div className="cv-entry-title">Store Associate / Evening Manager — Coop, Tyresö</div>
                            <div className="cv-entry-date">May 2018 – November 2023</div>
                            <p className="cv-entry-desc">
                                Worked alongside studies. Held the role of evening manager for several years
                                with full responsibility for store operations.
                            </p>
                            <ul className="cv-entry-list">
                                <li>Responsible for store operations during evening shifts</li>
                                <li>Cash register work and customer service</li>
                                <li>Responsible for mail and package handling (Postnord)</li>
                                <li>Sales of Svenska Spel and ATG products</li>
                                <li>Leadership, accountability, and problem-solving in a fast-paced environment</li>
                            </ul>
                        </div>

                        <div className="cv-entry">
                            <div className="cv-entry-title">Barista — Waynes Coffee, Stockholm</div>
                            <div className="cv-entry-date">July 2017 – January 2018</div>
                            <ul className="cv-entry-list">
                                <li>Customer service</li>
                                <li>Cash register work</li>
                                <li>Barista</li>
                                <li>Food preparation and cleaning</li>
                            </ul>
                        </div>

                        <div className="cv-entry">
                            <div className="cv-entry-title">Mail Carrier — Svensk Direktreklam, Stockholm</div>
                            <div className="cv-entry-date">July 2016 – December 2017</div>
                            <ul className="cv-entry-list">
                                <li>Distribution of advertising mail</li>
                                <li>Independent work with own responsibility</li>
                            </ul>
                        </div>

                        {/* ── Education ── */}
                        <h3 className="cv-section-title">
                            <FaGraduationCap /> Education
                        </h3>

                        <div className="cv-entry">
                            <div className="cv-entry-title">
                                Computer Technology, B.Sc. in Engineering, 180 credits — KTH Royal Institute of Technology
                            </div>
                            <div className="cv-entry-date">August 2020 – June 2023</div>
                            <p className="cv-entry-desc">
                                Education in applied information technology with focus on software development,
                                networking, and scalable systems, including microservice architecture.
                            </p>
                        </div>

                        <div className="cv-entry">
                            <div className="cv-entry-title">
                                Technology and Economics, B.Sc. in Engineering, 180 credits — KTH Royal Institute of Technology
                            </div>
                            <div className="cv-entry-date">January 2020 – August 2020</div>
                            <p className="cv-entry-desc">
                                Courses in finance, including marketing and accounting.
                            </p>
                        </div>

                        <div className="cv-entry">
                            <div className="cv-entry-title">
                                Technology Program — Nacka Gymnasium
                            </div>
                            <div className="cv-entry-date">August 2015 – June 2018</div>
                            <p className="cv-entry-desc">
                                Focus on computer technology and programming. Developed a custom web shop in
                                PHP with an SQL database.
                            </p>
                        </div>

                        {/* ── Skills ── */}
                        <h3 className="cv-section-title">
                            <FaCode /> Skills
                        </h3>

                        <div className="cv-skills-grid">
                            <div className="cv-skill-category">
                                <h4 className="cv-skill-category-title">Programming Languages & Technology</h4>
                                <div className="cv-skill-tags">
                                    {['Python', 'Java', 'JavaScript', 'C / C++', 'HTML / CSS', 'Bash'].map((s, i) => (
                                        <span className="cv-skill-tag" key={i}>{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="cv-skill-category">
                                <h4 className="cv-skill-category-title">Frameworks & Tools</h4>
                                <div className="cv-skill-tags">
                                    {['React.js', 'Node.js', 'Spring Boot', 'pytest', 'Jenkins'].map((s, i) => (
                                        <span className="cv-skill-tag" key={i}>{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="cv-skill-category">
                                <h4 className="cv-skill-category-title">Databases</h4>
                                <div className="cv-skill-tags">
                                    {['MySQL', 'MongoDB', 'Neo4j'].map((s, i) => (
                                        <span className="cv-skill-tag" key={i}>{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="cv-skill-category">
                                <h4 className="cv-skill-category-title">Other</h4>
                                <div className="cv-skill-tags">
                                    {['Linux', 'Git', 'CI/CD', 'Jira', 'Agile Methods (Scrum)', 'Android Studio'].map((s, i) => (
                                        <span className="cv-skill-tag" key={i}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Other ── */}
                        <h3 className="cv-section-title">
                            <FaGlobe /> Other
                        </h3>

                        <div className="cv-other-row">
                            <span className="cv-other-label">Languages</span>
                            <span className="cv-other-value">English, Swedish</span>
                        </div>
                        <div className="cv-other-row">
                            <span className="cv-other-label">Driving Licence</span>
                            <span className="cv-other-value">
                                <FaCar style={{ color: 'var(--accent)' }} /> B
                            </span>
                        </div>

                        {/* ── Certification ── */}
                        <h3 className="cv-section-title">
                            <FaCertificate /> Certification
                        </h3>
                        <div className="cv-entry">
                            <div className="cv-entry-title">Cisco — Internet Networking Course</div>
                        </div>

                        {/* ── References ── */}
                        <div className="cv-references">
                            <h3 className="cv-section-title" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                                References
                            </h3>
                            <p style={{ color: 'var(--cv-text-muted)', fontStyle: 'italic' }}>
                                Available upon request.
                            </p>
                        </div>

                        </div>{/* end cv-body */}
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CvPage;
