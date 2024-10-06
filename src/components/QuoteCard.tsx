import React from 'react';
import { Quote } from '../types';
import { Quote as QuoteIcon } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
      <div className="flex items-start mb-4">
        <QuoteIcon className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" />
        <p className="text-gray-800 dark:text-gray-200 text-lg italic">{quote.text}</p>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p><span className="font-semibold">Speaker:</span> {quote.speaker}</p>
        <p><span className="font-semibold">Author:</span> {quote.author}</p>
        <p><span className="font-semibold">Season:</span> {quote.season}</p>
        <p><span className="font-semibold">Episode:</span> {quote.episode.name} (Episode {quote.episode.number})</p>
      </div>
    </div>
  );
};

export default QuoteCard;