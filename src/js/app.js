import RedditApi from './reddit-api';
import ExtractWallpapers from './extract-wallpapers';
import DisplayWallpapers from './display-wallpapers';

RedditApi.getMinimalWallpaperPosts()
  .then(ExtractWallpapers)
  .then(DisplayWallpapers);

export default {};
