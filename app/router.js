import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  //this.route('about',{path:'/favs'});
  this.route('bookmarks', function() {
    this.route('new');

    this.route('edit', {
      path: '/edit/:bookmark_id'
    });
    this.route('about');
  });

  this.route('page-not-found', {
    path: '/*wilcard'
  });
});

export default Router;
