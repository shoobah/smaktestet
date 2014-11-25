import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource('challenge', function() {
        this.route('challenges', {
            path: '/:challenge_id'
        });
    });
});

export default Router;
