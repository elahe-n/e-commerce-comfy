import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="PageHero" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
            officiis nulla sunt eos? Cumque minus asperiores aut, architecto,
            perferendis placeat qui nam ipsum culpa error ratione veritatis!
            Dolorum, vitae! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Et, mollitia? Nulla et voluptatem voluptatibus beatae? Ipsa
            cupiditate autem delectus doloribus tempora hic. Accusamus harum
            molestiae deserunt. Quas, sequi. Sunt provident nostrum soluta,
            quibusdam maiores repellendus ex fugiat dolorem culpa libero.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
