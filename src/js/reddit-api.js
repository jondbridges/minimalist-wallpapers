import jsonp from 'jsonp';

class RedditApi {
  constructor () {
    this.minimalWallpaperUrl = 'https://www.reddit.com/r/MinimalWallpaper/top.json?sort=top&t=year';
  }

  getMinimalWallpaperPosts () {
    return new Promise((resolve, reject) => {
      jsonp(this.minimalWallpaperUrl, {param: 'jsonp'}, (err, res) => {
        err ? reject(err) : resolve(res.data.children);
      });
    });
  }
}

export default new RedditApi();
