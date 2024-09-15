"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function ScrollToTopButton() {
    useEffect(() => {
        const showScrollToTopButton = () => {
            let scrollToTopButton = document.getElementById('scroll_to_top')
            if (!!scrollToTopButton) {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    scrollToTopButton.style.opacity = '1';
                }
                else {
                    scrollToTopButton.style.opacity = '0';
                }
            }
        }

        window.addEventListener('scroll', showScrollToTopButton)
        return () => window.removeEventListener('scroll', showScrollToTopButton)
    }, [])


    return (
        <button id="scroll_to_top" onClick={() => window.scrollTo({ top: 0 })}>
            <Image src="/icons/chevron.png" alt="Scroll ao topo" height={20} width={20} />
        </button>
    )
}