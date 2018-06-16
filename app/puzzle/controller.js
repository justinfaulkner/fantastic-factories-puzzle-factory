import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['board'],
  board: true,

  selectedBlueprints: Ember.A(),

  actions: {
    addBlueprint(blueprint) {
      this.get('selectedBlueprints').pushObject(blueprint);
    }
  }
});
