import { Axios } from "./axiosInstance";
import { MovieDetails } from "@types";

export const fetchMoviesByPage = async (page: number) => {
  const response = await Axios.get(
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  );
  return response.data;
};

export const fetchMoviesByTitle = async (query: string, page: number) => {
  const response = await Axios.get(
    `search/movie?query=${query.replace(
      / /g,
      "%20",
    )}&include_adult=true&language=en-US&page=${page}`,
  );
  return response.data;
};

export const fetchMovieDetails = async (id: number) => {
  const response = await Axios.get(
    `movie/${id}?append_to_response=images%2Ccredits`,
  );

  return response.data as MovieDetails;
};
