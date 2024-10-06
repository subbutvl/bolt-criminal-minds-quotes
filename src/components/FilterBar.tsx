import React from 'react';

interface FilterBarProps {
  speakers: string[];
  episodes: string[];
  seasons: number[];
  setFilterSpeaker: (speaker: string) => void;
  setFilterEpisode: (episode: string) => void;
  setFilterSeason: (season: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  speakers, 
  episodes, 
  seasons, 
  setFilterSpeaker, 
  setFilterEpisode, 
  setFilterSeason 
}) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <select
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setFilterSpeaker(e.target.value)}
        defaultValue=""
      >
        <option value="">All Speakers</option>
        {speakers.map((speaker, index) => (
          <option key={index} value={speaker}>{speaker}</option>
        ))}
      </select>
      <select
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setFilterEpisode(e.target.value)}
        defaultValue=""
      >
        <option value="">All Episodes</option>
        {episodes.map((episode, index) => (
          <option key={index} value={episode}>{episode}</option>
        ))}
      </select>
      <select
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setFilterSeason(e.target.value)}
        defaultValue=""
      >
        <option value="">All Seasons</option>
        {seasons.map((season) => (
          <option key={season} value={season.toString()}>Season {season}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;