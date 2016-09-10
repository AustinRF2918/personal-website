import DS from 'ember-data';

// Not quite neccessary yet: Once we link this
// up to a REST server it will be however!

export default DS.Model.extend({
    name: DS.attr(),
    occupation: DS.attr(),
    workplace: DS.attr(),
    education: DS.attr(),
    school: DS.attr()
});
