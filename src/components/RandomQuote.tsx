import React, { useState } from 'react';
import { Quote } from '../types';
import QuoteCard from './QuoteCard';
import { Shuffle } from 'lucide-react';

interface RandomQuoteProps {
  quotes: Quote[];
}

const RandomQuote: React.FC<RandomQuoteProps> = ({ quotes }) => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className="mb-8">
      <button
        onClick={getRandomQuote}
        className="mb-4 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 flex items-center"
      >
        <Shuffle className="mr-2" />
        Get Random Quote
      </button>
      {randomQuote && <QuoteCard quote={randomQuote} />}
    </div>
  );
};

export default RandomQuote;