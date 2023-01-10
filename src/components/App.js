import React from "react";
import blogData from "../data/blog";

import Header from "../components/Header";
import Article from "../components/Article";
import ArticleList from "../components/ArticleList";
import About from "../components/About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
     <About />
     <ArticleList />
     <Article name = {blogData.name} />
    </div>
    
  );
}

export default App;
