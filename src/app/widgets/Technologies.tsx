import styled from 'styled-components';

import { AmazonwebservicesOriginalWordmark, AngularOriginal, AzureOriginal, BlazorOriginal, CsharpOriginal, DartOriginal, DjangoPlain, DjangorestOriginal, DjangorestOriginalWordmark, DotnetcoreOriginal, ExpressOriginal, ExpressOriginalWordmark, FlaskOriginal, FlutterOriginal, GooglecloudOriginal, JavascriptOriginal, MicrosoftsqlserverOriginal, MongodbOriginal, MysqlOriginal, NestjsOriginal, NextjsOriginal, NodejsOriginal, NuxtjsOriginal, PostgresqlOriginal, PythonOriginal, ReactOriginal, SqliteOriginal, TypescriptOriginal, VuejsOriginal, XamarinOriginal } from "devicons-react";
import { SectionNames } from '../constants/SectionNames';
import useWidth from '../hooks/useWidth';

export default function Technologies() {
    const width = useWidth();

    const languageIconSize = width > 1000
        ? 50
        : 40;
    const frameworksIconSize = width > 1000
        ? 45
        : 30;

    return (
        <section id={SectionNames.tech_skills} data-aos="fade-up" data-aos-duration="2000">
            <h2>Tecnologias</h2>
            <Container>
                <CardContainer>
                    <h3>Back-end</h3>
                    <h5>Linguagens de programação</h5>
                    <div>
                        <CsharpOriginal size={languageIconSize} />
                        <JavascriptOriginal size={languageIconSize} />
                        <PythonOriginal size={languageIconSize} />
                    </div>
                    <h5>Frameworks</h5>
                    <div>
                        <DotnetcoreOriginal size={frameworksIconSize} />
                        <NestjsOriginal size={frameworksIconSize} />
                        <NodejsOriginal size={frameworksIconSize} />
                        <FlaskOriginal size={frameworksIconSize} />
                    </div>
                </CardContainer>
                <CardContainer>
                    <h3>Front-end</h3>
                    <h5>Linguagens de programação</h5>
                    <div className='center'>
                        <CsharpOriginal size={languageIconSize} />
                        <JavascriptOriginal size={languageIconSize} />
                    </div>
                    <h5>Frameworks</h5>
                    <div>
                        <BlazorOriginal size={frameworksIconSize} />
                        <ReactOriginal size={frameworksIconSize} />
                        <AngularOriginal size={frameworksIconSize} />
                        <VuejsOriginal size={frameworksIconSize} />
                        <NextjsOriginal size={frameworksIconSize} />
                        <NuxtjsOriginal size={frameworksIconSize} />
                    </div>
                </CardContainer>
                <CardContainer>
                    <h3>Mobile</h3>
                    <h5>Linguagens de programação</h5>
                    <div>
                        <CsharpOriginal size={languageIconSize} />
                        <DartOriginal size={languageIconSize} />
                        <JavascriptOriginal size={languageIconSize} />
                    </div>
                    <h5>Frameworks</h5>
                    <div>
                        <XamarinOriginal size={frameworksIconSize} />
                        <FlutterOriginal size={frameworksIconSize} />
                        <ReactOriginal size={frameworksIconSize} />
                    </div>
                </CardContainer>
                <CardContainer>
                    <h3>Banco de dados</h3>
                    <div>
                        <MysqlOriginal size={languageIconSize} />
                        <MicrosoftsqlserverOriginal size={languageIconSize} />
                        <PostgresqlOriginal size={languageIconSize} />
                        <MongodbOriginal size={languageIconSize} />
                    </div>
                </CardContainer>
                <CardContainer>
                    <h3>Cloud</h3>
                    <div>
                        <AmazonwebservicesOriginalWordmark size={languageIconSize} />
                        <AzureOriginal size={languageIconSize} />
                        <GooglecloudOriginal size={languageIconSize} />
                    </div>
                </CardContainer>
            </Container>
            {/* <Swiper
                navigation
                modules={[Navigation]}
                slidesPerView={3}
                slidesPerGroup={3}
            >
                {techs.map(tech => (
                    <SwiperSlide>
                        {tech}
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </section>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

const CardContainer = styled.div`
    width: 100%;
    max-width: 350px;
    background-color: rgba(255,255,255, .7);
    color: #1A1A1A;
    border: 2px solid rgba(255,255,255, .7);
    border-radius: 8px;
    padding: 10px 20px;
    transition: all .3s ease-in-out;

    h3 {
        font-size: 2.6rem;
        text-align: center;
        font-weight: 700;
    }

    h5 {
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

    div {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        &.center {
            justify-content: center;
            gap: 30px;
        }
    }

    &:hover {
        background-color: white;
        color: #1A1A1A;
    }

    @media screen and (max-width: 1000px) {
        max-width: 250px;
        
        h3 {
            font-size: 2rem;
        }

        h5 {
            font-size: 1.6rem;
        }

        svg {
            width: 10px;
            height: 10px;
        }
    }

    @media screen and (max-width: 740px) {
        max-width: 100%;
    }
`