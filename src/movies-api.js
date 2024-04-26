import axios from "axios";

const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTAzZDBmYzA1NThjNTEyYmI5MjQwZTE0MTAzZGE0NiIsInN1YiI6IjY2Mjc3NWZhY2I2ZGI1MDE2M2FmOTE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6IiLU4H7aKc-COxZsmwXNxIT6GQfi45XPSUBziM603c";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${apiToken}`;
  return config;
});

export const getMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getMoviesSearch = async (searchQuery) => {
  const response = await axios.get("3/search/movie", {
    params: {
      query: searchQuery,
      language: "en-US",
      // page: 1,
    },
  });
  return response.data.results;
};

export const getMovieId = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdCredits = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      // page: 1,
    },
  });
  return response.data;
};
