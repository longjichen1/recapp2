const API_KEY = "1985ea9f71a9f54b4301260f1e18311a";

/* examples

https://api.themoviedb.org/3/search/movie?api_key=<API_KEY>&language=en-US&page=1&include_adult=false&query="spiderman-no-way-home"



*/

export default {
  HOME: {
    title: "Trending",
    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  },
  WATCHED: {
    title: "WATCHED",
    url: `https://api.themoviedb.org/3/search/movie?api_key=1985ea9f71a9f54b4301260f1e18311a&language=en-US&page=1&include_adult=false&query="spasdfasdfasdfasdfadsfasdfasdfasdf"`,
  },
  DISCOVER: {
    //retrieve from api
  },
};
