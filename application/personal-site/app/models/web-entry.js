import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    genre: DS.attr(),
    date: DS.attr(),
    img: DS.attr(),
    ident: DS.attr(),
});
