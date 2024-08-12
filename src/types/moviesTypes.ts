export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails extends Movie {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres?: GenresEntity[] | null;
  homepage: string;
  imdb_id: string;
  origin_country?: string[] | null;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
}
export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
export interface GenresEntity {
  id: number;
  name: string;
}
export interface ProductionCompaniesEntity {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}
export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
