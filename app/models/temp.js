import DS from 'ember-data';

var Author = DS.Model.extend({
    partitionKey: DS.attr('string'),
    rowKey: DS.attr('string'),
    temp: DS.attr('number')
});

Author.reopenClass({
    FIXTURES: [{
        id: 1,
        firstName: 'Bugs',
        lastName: 'Bunny'
    }, {
        id: 2,
        firstName: 'Wile E.',
        lastName: 'Coyote'
    }]
});

export default Author;
