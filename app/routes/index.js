import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        var self = this;
        Ember.run.later(function() {
            self.transitionTo('home');
        }, 30000);
    }
});