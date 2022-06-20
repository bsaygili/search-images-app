import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vGC10ZuxXynsjOAmWExTemrRLIIJQXIbg4onU5W3S5s",
  },
});
