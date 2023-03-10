import React from "react";

export default function Card({ title, text, target, linkTitle, href, rel, linkClassName, onClick }) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>

      <div className="card__text">{text}</div>
      <a className={`default-link card__link ${linkClassName}`} target={target} rel={rel} href={href} onClick={() => onClick(href)}>
        {linkTitle}
      </a>
    </div>
  );
}
