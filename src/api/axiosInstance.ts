import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWY5YWEyOWExNTI2NzNhY2IxYjYxYmVlMGYyMTQzYSIsIm5iZiI6MTcyMzQ1NjE4MS42MjMwMTEsInN1YiI6IjY2YjlkOWYyN2JkZDVkNjAzOWJkYzNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OK9Vben-SATQo0h38bqvs5sYCcDbpc9MbOqdYeSijqo",
  },
});
