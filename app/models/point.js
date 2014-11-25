import DS from "ember-data";

export default DS.Model.extend({
    participant: DS.Attr('string'),
    correct: DS.hasMany('flavor')
});
