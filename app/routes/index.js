import Ember from 'ember';
import data from '../data/challenges';

export default Ember.Route.extend({
  model: function(){
    console.log(data);
    return data;
  }
});
