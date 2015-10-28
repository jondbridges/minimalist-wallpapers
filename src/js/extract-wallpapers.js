export default (posts) => {
  return posts
    .filter(post => !post.data.over_18)
    .map(post => post.data.url)
    .filter(url => /(jpg|jpeg|png|gif|webp|svg)/.exec(url));
};
