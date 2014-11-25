import Ember from 'ember';

export default Ember.Route.extend({
    path: '/:challenge_id',
    model: function(params) {
        console.log('params.challenge_id', params.challenge_id);
    }
});
