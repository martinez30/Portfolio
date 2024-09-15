'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import { SectionNames } from "../constants/SectionNames";

export default function Experiences() {
    const ref = useRef<HTMLTableSectionElement>(null);

    return (
        <section id={SectionNames.experience} data-aos="fade-up" data-aos-duration="2000" ref={ref}>
            <h2>Experiências Profissionais</h2>
            <div style={{ position: "relative", height: 300 }}>
                <Image
                    src="/timeline.png"
                    alt="Timeline"
                    sizes="100vw"
                    objectFit="contain"
                    fill
                />
            </div>
        </section>
    )
}
