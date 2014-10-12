import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SmaktestENV.locationType
});

Router.map(function() {
  this.route('temperature');
});

export default Router;
