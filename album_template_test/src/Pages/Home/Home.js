import * as React from 'react';
import { HomeHeroSection } from './HomeHeroSection';
import { StyledCard } from './StyledCard';
import { CardsContainer } from './CardsContainer';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Home = () => {
  return (
    <main>
      <HomeHeroSection />
      <CardsContainer>
        {cards.map((card) => <StyledCard card={card} key={card} />)}
      </CardsContainer>
    </main>
  )
};