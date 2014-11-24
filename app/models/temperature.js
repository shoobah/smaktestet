import DS from 'ember-data';

var m = DS.Model.extend({
  time: DS.attr('date'),
  temp: DS.attr('number')
});

m.reopenClass({
  FITURES: [
    {id:1, time:Date.now(), temp:7},
    {id:2, time:Date.now(), temp:4}
  ]
});

export default m;
