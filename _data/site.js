module.exports = {
  meta: {
    title: "Blogify",
    description: "",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: {
    // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Golam Mohiuddin",
    authorEmail: "rabby.mohiuddin@gmail.com",
  },
  hero: {
    // used in hero section of main page ie. index.html.njk
    title: "Welcome to Blogify",
    description: "",
  },
};
