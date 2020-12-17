import React from "react";
import "./css/Article.css";

export default function Article(props) {
  function renderParagraph(p, index) {
    return (
      <p className="paragraph" key={index}>
        {p}
      </p>
    );
  }

  return (
    <div className="article-wrapper article-wrapper-ml-lg">
      <h1
        className={props.isdarkThemeActive ? "heading heading-dark" : "heading"}
      >
        {props.heading}
      </h1>
      {props.paragraph.map(renderParagraph)}
    </div>
  );
}
