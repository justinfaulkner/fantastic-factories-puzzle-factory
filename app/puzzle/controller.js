import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  queryParams: ['board', 'cardIDs', 'diceIDs', 'resourceIDs','hideInstructions'],

  componentLibrary: inject(),

  cardIDs: Ember.A(),
  diceIDs: Ember.A(),
  resourceIDs: Ember.A(),

  board: true,
  hideInstructions: false,

  selectedBlueprints: computed('cardIDs.[]', function() {
    let cardIDs = this.get('cardIDs');
    let mappings = this.get('componentLibrary.blueprints');
    return cardIDs.map((id) => {
      return mappings.find((el) => {
        return el.get('key') == id;
      });
    });
  }),

  selectedDice: computed('diceIDs.[]', function() {
    let diceIDs = this.get('diceIDs');
    let mappings = this.get('componentLibrary.dice');
    return diceIDs.map((id) => {
      return mappings.find((el) => {
        return el.get('key') == id;
      });
    });
  }),

  selectedResources: computed('resourceIDs.[]', function() {
    let resourceIDs = this.get('resourceIDs');
    let mappings = this.get('componentLibrary.resources');
    return resourceIDs.map((id) => {
      return mappings.find((el) => {
        return el.get('key') == id;
      });
    });
  }),

  actions: {
    addBlueprint(blueprint) {
      this.get('cardIDs').pushObject(blueprint.get('key'));
    },

    addDie(die) {
      this.get('diceIDs').pushObject(die.get('key'));
    },

    addResource(resource) {
      this.get('resourceIDs').pushObject(resource.get('key'));
    }
  }
});
