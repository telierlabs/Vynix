import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';
import SubscriptionPage from './components/SubscriptionPage';
import Footer from './components/Footer';
import AllMoviesPage from './components/AllMoviesPage';
import { AppProvider, useAppContext } from './contexts/AppContext';
import ProfilePage from './components/ProfilePage';
import FavoritesPage from './components/FavoritesPage';
import FaqPage from './components/FaqPage';
import MovieInfoPage from './components/MovieInfoPage';
import AiAssistant from './components/AiAssistant';

const MainContent: React.FC = () => {
  const { currentPage, selectedMovie, searchQuery } = useAppContext();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'watch':
      return selectedMovie ? <WatchPage movie={selectedMovie} /> : <HomePage />;
    case 'search':
      return <SearchPage query={searchQuery} />;
    case 'subscriptions':
      return <SubscriptionPage />;
    case 'all-movies':
      return <AllMoviesPage />;
    case 'profile':
      return <ProfilePage />;
    case 'favorites':
      return <FavoritesPage />;
    case 'faq':
        return <FaqPage />;
    case 'movie-info':
        return selectedMovie ? <MovieInfoPage movie={selectedMovie} /> : <HomePage />;
    default:
      return <HomePage />;
  }
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="bg-vynix-black text-vynix-text min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <MainContent />
        </main>
        <Footer />
        <AiAssistant /> 
      </div>
    </AppProvider>
  );
};

export default App;
``` [❶](code://python)
