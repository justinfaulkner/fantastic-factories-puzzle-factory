import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  blueprints: computed(function() {
    let objects = [
      {key: 'alu', name: 'Aluminum-Factory'},
      {key: 'ass', name: 'Assembly-Line'},
      {key: 'bat', name: 'Battery-Factory'},
      {key: 'bea', name: 'Beacon'},
      {key: 'bio', name: 'Biolab'},
      {key: 'bla', name: 'Black-Market'},
      {key: 'con', name: 'Concrete-Plant'},
      {key: 'cry', name: 'Cryonics-Facility'},
      {key: 'doj', name: 'Dojo'},
      {key: 'fab', name: 'Fabricator'},
      {key: 'fit', name: 'Fitness-Center'},
      {key: 'fou', name: 'Foundry'},
      {key: 'ful', name: 'Fulfillment-Center'},
      {key: 'gol', name: 'Golem-Blue'},
      {key: 'gol1', name: 'Golem-Red'},
      {key: 'gym', name: 'Gym'},
      {key: 'har', name: 'Harvester'},
      {key: 'inc', name: 'Incinerator'},
      {key: 'jun', name: 'Junkyard'},
      {key: 'lab', name: 'Laboratory'},
      {key: 'man', name: 'Manufactory'},
      {key: 'meg', name: 'Mega-Factory'},
      {key: 'meg1', name: 'Megalith-JBF'},
      {key: 'meg11', name: 'Megalith-JZC'},
      {key: 'meg111', name: 'Megalith-LDC'},
      {key: 'mot', name: 'Motherlode'},
      {key: 'nuc', name: 'Nuclear-Plant'},
      {key: 'obe', name: 'Obelisk-(1)'},
      {key: 'obe1', name: 'Obelisk-AT'},
      {key: 'obe11', name: 'Obelisk-JHE'},
      {key: 'pow', name: 'Power-Plant'},
      {key: 'rec', name: 'Recycling-Plant'},
      {key: 'ref', name: 'Refinery'},
      {key: 'rep', name: 'Replicator'},
      {key: 'rob', name: 'Robot-Blue'},
      {key: 'rob1', name: 'Robot-Red'},
      {key: 'rob11', name: 'Robot-Yellow'},
      {key: 'scr', name: 'Scrap-Yard'},
      {key: 'sol', name: 'Solar-Array'},
      {key: 'tem', name: 'Temp-Agency'},
      {key: 'tra', name: 'Trash-Compactor'},
      {key: 'war', name: 'Warehouse'}
    ];
    return Ember.A(objects.map((obj) => {
      let eo = Ember.Object.create(obj);
      return eo;
    }));
  }),

  dice: computed(function() {
    let objects = [
      {key: '1', name: '1'},
      {key: '2', name: '2'},
      {key: '3', name: '3'},
      {key: '4', name: '4'},
      {key: '5', name: '5'},
      {key: '6', name: '6'},
    ];
    return Ember.A(objects.map((obj) => {
      let eo = Ember.Object.create(obj);
      return eo;
    }));
  }),

  resources: computed(function() {
    let objects = [
      {key: 'm', name: 'Metal'},
      {key: 'e', name: 'Energy'}
    ];
    return Ember.A(objects.map((obj) => {
      let eo = Ember.Object.create(obj);
      return eo;
    }));
  })
});
