import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              voluptatibus aut, aperiam, aliquam officiis possimus omnis eos
              magnam culpa dignissimos tempore accusantium. Harum aspernatur
              perferendis quod aperiam odit quidem cupiditate vitae vero. Maxime
              porro, perspiciatis commodi fugit nisi quas dolores perferendis
              ducimus, tenetur at iusto ullam quibusdam magni voluptatum,
              suscipit harum corrupti qui animi? Iure officiis voluptatum
              dolorum magni ad ipsam ab nostrum, quaerat, dicta veniam itaque
              iste laudantium debitis libero, incidunt tempora vel adipisci
              molestiae vero at molestias! Vel aperiam voluptates quis labore at
              nam eaque, incidunt quidem nostrum!
            </p>
          </div>
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
