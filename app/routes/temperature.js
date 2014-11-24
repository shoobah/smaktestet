import Ember from 'ember';

this.store.createRecord('temperature',{
  date: Date.now(),
  temp: 7
});

export default Ember.Route.extend({
    model: function() {
        var data = this.store.find('temperature');
        console.log('model', data);
        return data;
    }
});
