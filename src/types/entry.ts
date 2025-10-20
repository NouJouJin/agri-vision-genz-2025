export interface Entry {
  id: number;
  creator: string;
  title: string;
  overview: string;
  youtubeUrl: string;
  thumbnail?: string;
  aiTools: string[];
  music?: string;
  message: string;
}
