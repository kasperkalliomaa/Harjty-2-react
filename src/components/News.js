import { useState } from "react";
import axios from "axios";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = "";

export default function Movie() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);

  const handleSearch = () => {
    if (search) {
      const address = `${API_URL}?q=${search}&apiKey=${API_KEY}`;
      axios
        .get(address)
        .then((response) => {
          setNews(response.data.articles);
        })
        .catch((error) => {
          console.error("Virhe hakemisessa:", error);
          alert("ERROR... Tarkista API KEY")
        });
    }
  };

  return (
    <div id="container">
      <div>
        <h3>News</h3>
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search news</button>
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
