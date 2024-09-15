'use client'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SectionNames } from "../constants/SectionNames";
import { IoCog, IoHome } from "react-icons/io5";
import { FaRocket, FaUser } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { HiMail } from "react-icons/hi";

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState(SectionNames.principal);

    const handleScroll = () => {
        if (window !== undefined) {

            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id') ?? '';

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        }
    };

    useEffect(() => {
        if (window !== undefined) {

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    function scrollToSection(sectionId: string) {
        if (window !== undefined) {

            const section = document.getElementById(sectionId);
            if (section) {
                const sectionPosition = section.offsetTop - 20;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                })
            }
        }
    }

    return (
        <Aside data-aos="fade-right" data-aos-duration="2000">
            <nav>
                <article className={`menu-item ${activeSection === SectionNames.principal ? 'active' : ''}`}>
                    <a onClick={() => {
                        if (window !== undefined) {
                            window.scrollTo({ top: 0 })
                        }
                    }}>
                        <IoHome width={20} height={20} />
                    </a>
                    <span>Início</span>
                </article>
                <div className="divider"></div>
                <article className={`menu-item ${activeSection === SectionNames.about_me ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.about_me)}>
                        <FaUser />
                    </a>
                    <span>Sobre mim</span>
                </article>
                <div className="divider"></div>
                <article className={`menu-item ${activeSection === SectionNames.tech_skills ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.tech_skills)}>
                        <IoCog />
                    </a>
                    <span>Tecnologias</span>
                </article>
                <div className="divider"></div>
                <article className={`menu-item ${activeSection === SectionNames.projects ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.projects)}>
                        <FaRocket />
                    </a>
                    <span>Projetos</span>
                </article>
                <div className="divider"></div>
                <article className={`menu-item ${activeSection === SectionNames.experience ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.experience)}>
                        <TbBrain />
                    </a>
                    <span>Experiências</span>
                </article>
                <div className="divider"></div>
                {/* <article className={`menu-item ${activeSection === SectionNames.certifications ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.certifications)}>
                        <Image src="/icons/menu/certificate.png" alt="" width={20} height={20} />
                    </a>
                    <span>Certificações</span>
                </article> 
                <div className="divider"></div>
                */}
                {/* <article className={`menu-item ${activeSection === SectionNames.recommendations ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.recommendations)}>
                        <Image src="/icons/menu/recommendation.png" alt="" width={20} height={20} />
                    </a>
                    <span>Recomendações</span>
                </article> 
                <div className="divider"></div>
                */}
                <article className={`menu-item ${activeSection === SectionNames.contact ? 'active' : ''}`}>
                    <a href="javascript:void(0)" onClick={() => scrollToSection(SectionNames.contact)}>
                        <HiMail />
                    </a>
                    <span>Contato</span>
                </article>
            </nav>
        </Aside>
    )
}

const Aside = styled.aside`
    position: fixed;
    left: 40px;
    top: 20%;
    z-index: 10;

    nav {
        display: flex;
        flex-direction: column;
        font-size: 20px;

        a {
            color: white;
            text-decoration: none;
        }

        .divider {
            margin: auto;
            height: 40px;
            border-right: 2px solid #ccc;
        }

        article {
            position: relative;

            a {
                background-color: white;
                padding: 10px 10px 4px 10px;
                border-radius: 50%;
                cursor: pointer;

                svg {
                    color: #1a1a1a;
                }
            }
            
            &.active, &:hover {
                a {
                    background-color: #6A3894;

                    svg {
                        color: white;
                    }
                }
            }

            span {
                opacity: 0;
                background-color: white;
                padding: 4px 8px;
                border-radius: 4px;
                color: rgba(26, 26, 26, 1);
                white-space: nowrap;
                position: absolute;
                top: -5px;
                left: 60px;
                transition: all .3s ease-in-out;
            }

            span::before {
                position: absolute;
                content: "";

            }
        }

        article:hover {
            span {
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;