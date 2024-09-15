"use client"

import Image from "next/image";
import "./page.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css'

import { useEffect } from "react";

import ScrollToTopButton from "./widgets/ScrollToTopButton";
import Sidebar from "./widgets/Sidebar";
import Technologies from "./widgets/Technologies";
import Projects from "./widgets/Projects";
import Experiences from "./widgets/Experiences";
import Input from "./components/Input";
import Contact from "./widgets/Contact";
import { SectionNames } from "./constants/SectionNames";
import { GithubOriginal, LinkedinOriginal } from "devicons-react";
export default function Home() {
  useEffect(() => {
    AOS.init();

    return () => { }
  }, [])

  return (
    <main>
      <header>
        <nav data-aos="fade-up" data-aos-duration="2000">
          <a href="https://github.com/martinez30" target="_blank">
            <GithubOriginal size={30} />
          </a>
          <a href="https://linkedin.com/in/paulomartinsdev" target="_blank">
            <LinkedinOriginal size={30} />
          </a>
        </nav>
      </header>
      <Sidebar />
      <section id={SectionNames.principal}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">Paulo Martins</h1>
          <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">Desenvolvedor Fullstack</h2>
          <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="700">Transformando ideias em soluções completas, do backend ao frontend</p>
        </div>
        <Image src="/me.png" alt="Foto de perfil" width={400} height={400} data-aos="fade-up" data-aos-duration="2000" />
      </section>
      <section id={SectionNames.about_me} data-aos="fade-up" data-aos-duration="3000">
        <h2>Sobre mim</h2>
        <p>Desenvolvedor .NET apaixonado por tecnologia e inovação transformando linhas de códigos em soluções. Minha busca incessante pelo conhecimento me mantém atualizado com as últimas tendências do setor, permitindo-me criar soluções que atendem as expectativas.</p>
      </section>
      <Technologies />
      <Projects />
      <Experiences />
      {/* <Certifications /> */}
      {/* <section id="recommendations" data-aos="fade-up" data-aos-duration="2000">
        <h2>Recomendações</h2>
      </section> */}
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}
