import DS from 'ember-data';

var Data = DS.Model.extend({
    currentTest: DS.attr()
});

Data.FIXTURES = [{
    id: 1,
    currentTest: 'Mjölkchoklad'
}, {
    id: 2,
    currentTest: 'Cola'
}, {
    id: 3,
    currentTest: 'Bordsvatten'
}, {
    id: 4,
    currentTest: 'Småkakor'
}];

export default Data;
