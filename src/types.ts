export interface Quote {
  text: string;
  speaker: string;
  author: string;
  season: number;
  episode: {
    name: string;
    number: number;
  };
}