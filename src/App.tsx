import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import RandomQuote from './components/RandomQuote';
import ThemeToggle from './components/ThemeToggle';
import { Quote } from './types';
import { Book } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpeaker, setFilterSpeaker] = useState('');
  const [filterEpisode, setFilterEpisode] = useState('');
  const [filterSeason, setFilterSeason] = useState('');

  useEffect(() => {
    fetch('/src/data/quotes.json')
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
        setFilteredQuotes(data);
      })
      .catch(error => console.error('Error loading quotes:', error));
  }, []);

  useEffect(() => {
    const results = quotes.filter(quote =>
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) &&
      quote.speaker.toLowerCase().includes(filterSpeaker.toLowerCase()) &&
      quote.episode.name.toLowerCase().includes(filterEpisode.toLowerCase()) &&
      (filterSeason === '' || quote.season.toString() === filterSeason)
    );
    setFilteredQuotes(results);
    setCurrentPage(1);
  }, [searchTerm, filterSpeaker, filterEpisode, filterSeason, quotes]);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = filteredQuotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold flex items-center">
              <Book className="mr-2" />
              Criminal Minds Quotes
            </h1>
            <ThemeToggle />
          </header>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar
            speakers={Array.from(new Set(quotes.map(q => q.speaker)))}
            episodes={Array.from(new Set(quotes.map(q => q.episode.name)))}
            seasons={Array.from(new Set(quotes.map(q => q.season))).sort((a, b) => a - b)}
            setFilterSpeaker={setFilterSpeaker}
            setFilterEpisode={setFilterEpisode}
            setFilterSeason={setFilterSeason}
          />
          <RandomQuote quotes={quotes} />
          <main>
            {currentQuotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} />
            ))}
          </main>
          <Pagination
            quotesPerPage={quotesPerPage}
            totalQuotes={filteredQuotes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;