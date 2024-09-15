import Image from "next/image"
import styled from "styled-components"

export default function Certification() {
    return (
        <Container>
            <h3>Titulo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores voluptatum ea nulla quis excepturi molestiae ipsam, aspernatur ad ab deserunt eos suscipit eaque sunt iure sequi voluptate vel vitae!</p>
        </Container>
    )
}

const Container = styled.article`
    width: 100%;
    max-width: 300px;
    border: 2px solid #e0e0e0;
    padding: 10px;
    border-radius: 8px;

    h3 {
        font-size: 26px;
    }

    p {
        font-size: 16px;
    }
`