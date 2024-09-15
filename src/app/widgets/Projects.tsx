import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../components/Project";
import { SectionNames } from "../constants/SectionNames";

export default function Projects() {

    const projects = [
        {
            title: "Cine Unifenas",
            message: "Projeto desenvolvido em Agosto de 2020 para praticar estudos sobre Arquitetura MVC com .NET Core 4.5",
            link: "https://github.com/martinez30/cinema",
            techs: ['csharp', "react", "sqlserver"]
        },
        {
            title: "Devagram",
            message: "Projeto desenvolvido em Outubro de 2022 para praticar estudos sobre VueJS no curso da Devaria",
            link: "https://github.com/martinez30/vue-devagram",
            techs: ["vuejs"]
        },
        {
            title: 'Imersao FullCycle',
            message: 'Projeto desenvolvido em Agosto de 2023 para praticas estudos sobre NestJS na semana da Imersão FullCycle',
            link: 'https://github.com/martinez30/imersao-fullcycle-backend-nest',
            techs: ['nestjs', 'mongo', 'docker']
        },
        {
            title: 'Padrões de projetos',
            message: 'Projeto desenvolvido para praticas estudos sobre padrões de projetos em C#',
            link: 'https://github.com/martinez30/DesignPatterns',
            techs: ['csharp']
        },
        {
            title: 'CarLand',
            message: 'Projeto desenvolvido no 4º período de Ciência da Computação, como parte de um desafio voltado à solução de problemas no controle de aluguel de veículos em locadoras de automóveis.',
            link: 'https://github.com/martinez30/CarLand',
            techs: ['csharp', 'sqlserver']
        },
        {
            title: 'Arquitetura Serverless',
            message: 'Projeto desenvolvido em Setembro de 2022 para praticar estudos sobre arquitetura Serverless com AWS Lambda',
            link: 'https://github.com/martinez30/arquitetura-serverless',
            techs: ['aws', 'node']
        },
        {
            title: 'Docker',
            message: 'Projeto desenvolvido em Setembro de 2022 para praticar estudos sobre montagem de containers Docker',
            link: 'https://github.com/martinez30/primeira-aplicacao-docker',
            techs: ['docker', 'csharp', 'node']
        }
    ]

    return (
        <section id={SectionNames.projects} data-aos="fade-up" data-aos-duration="2000">
            <h2>Projetos</h2>
            <div className="swiper-nav-btns">
                <button className="swiper-button-prev">
                    <MdArrowBackIos />
                </button>
                <button className="swiper-button-next">
                    <MdArrowForwardIos />
                </button>
            </div>
            <Swiper
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        centeredSlidesBounds: true,
                        centeredSlides: true
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                {projects.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Project
                            title={item.title}
                            message={item.message}
                            link={item.link}
                            techs={item.techs}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}