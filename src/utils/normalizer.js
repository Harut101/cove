export function postsDataNormalize(posts) {
  return posts.map((post) => {
    const clone = { ...post };

    return {
      id: clone.id,
      title: clone.title || "No title",
      link_title: clone.link_title || "No link title",
      link: clone.link || "#",
      text: clone.body?.en ? clone.body.en.substr(0, 50) + "..." : "",
      className: clone.id === 1 ? "card__link--red" : "",
      target: clone.id === 1 ? "_blank" : ""
    };
  });
}
