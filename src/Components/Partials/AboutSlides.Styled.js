import styled from "styled-components";

export const AboutSlidesStyle = styled.article`
    max-width: 500px;
    text-align: center;
    overflow: hidden;
    margin: 3rem auto 0 auto;
    button {
        display: inline-flex;
        width: 1.5rem;
        height: 1.5rem;
        z-index: 100;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 0 0.5rem 0;
    }
  div {
    display: flex;
    overflow-x: hidden;
    // Animations (måske ikke nødvendige?)
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

   img {
    flex-shrink: 0;
    margin-right: 3rem;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    // Animations
    transform-origin: center center;
    transition: scale(1);
    transition: transform 0.5s;
    scroll-snap-align: start;
   }
  }
`;
