import React from 'react';
import HeroSection from './HeroSection';
import MovieCarousel from './MovieCarousel';
import { ALL_MOVIES, GENRES } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const HomePage: React.FC = () => {
  const t = useTranslations();

  const featuredMovie = ALL_MOVIES[5]; // Cybernetic Revolt for a cool hero
  const topMovies = [...ALL_MOVIES].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const newReleases = [...ALL_MOVIES].sort((a, b) => b.year - a.year).slice(0, 10);

  return (
    <div>
      <HeroSection movie={featuredMovie} />
      <div className="py-8 space-y-12">
        <MovieCarousel 
          title={t('top_this_week')}
          movies={topMovies} 
        />
        <MovieCarousel
            title={t('newly_added')}
            movies={newReleases}
        />
        {GENRES.map(genre => (
          <MovieCarousel
            key={genre}
            title={genre}
            movies={ALL_MOVIES.filter(m => m.genre === genre)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
