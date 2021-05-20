const prod = {
  url: {
    URL_REACT: "https://myapp.herokuapp.com",
    URL_JAVASCRIPT: "https://myapp.herokuapp.com",
  },
};

const dev = {
  urls: {
    URL_REACT: "http://localhost:8000/api/v1/concepts/react",
    URL_JAVASCRIPT: "http://localhost:8000/api/v1/concepts/js",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
