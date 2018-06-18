import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  blueprints: computed(function() {
    let objects = [
      {key: 'alu', name: 'Aluminum-Factory', prettyName: 'Aluminum Factory'},
      {key: 'ass', name: 'Assembly-Line', prettyName: 'Assembly Line'},
      {key: 'bat', name: 'Battery-Factory', prettyName: 'Battery Factory'},
      {key: 'bea', name: 'Beacon', prettyName: 'Beacon'},
      {key: 'bio', name: 'Biolab', prettyName: 'Biolab'},
      {key: 'bla', name: 'Black-Market', prettyName: 'Black Market'},
      {key: 'con', name: 'Concrete-Plant', prettyName: 'Concrete Plant'},
      {key: 'cry', name: 'Cryolab', prettyName: 'Cryolab'},
      {key: 'doj', name: 'Dojo', prettyName: 'Dojo'},
      {key: 'fit', name: 'Fitness-Center', prettyName: 'Fitness Center'},
      {key: 'fou', name: 'Foundry', prettyName: 'Foundry'},
      {key: 'ful', name: 'Fulfillment-Center', prettyName: 'Fulfillment Center'},
      {key: 'gol', name: 'Golem-Blue', prettyName: 'Golem Blue'},
      {key: 'gol1', name: 'Golem-Red', prettyName: 'Golem Red'},
      {key: 'gym', name: 'Gym', prettyName: 'Gym'},
      {key: 'har', name: 'Harvester', prettyName: 'Harvester'},
      {key: 'inc', name: 'Incinerator', prettyName: 'Incinerator'},
      {key: 'lab', name: 'Laboratory', prettyName: 'Laboratory'},
      {key: 'man', name: 'Manufactory', prettyName: 'Manufactory'},
      {key: 'meg', name: 'Mega-Factory', prettyName: 'Mega Factory'},
      {key: 'meg1', name: 'Megalith-JBF', prettyName: 'Megalith JBF'},
      {key: 'meg11', name: 'Megalith-JZC', prettyName: 'Megalith JZC'},
      {key: 'meg111', name: 'Megalith-LDC', prettyName: 'Megalith LDC'},
      {key: 'mot', name: 'Motherlode', prettyName: 'Motherlode'},
      {key: 'nuc', name: 'Nuclear-Plant', prettyName: 'Nuclear Plant'},
      {key: 'obe', name: 'Obelisk-(1)', prettyName: 'Obelisk (1)'},
      {key: 'obe1', name: 'Obelisk-AT', prettyName: 'Obelisk AT'},
      {key: 'obe11', name: 'Obelisk-JHE', prettyName: 'Obelisk JHE'},
      {key: 'pow', name: 'Power-Plant', prettyName: 'Power Plant'},
      {key: 'rec', name: 'Recycling-Plant', prettyName: 'Recycling Plant'},
      {key: 'ref', name: 'Refinery', prettyName: 'Refinery'},
      {key: 'rep', name: 'Replicator', prettyName: 'Replicator'},
      {key: 'rob', name: 'Robot-Blue', prettyName: 'Robot Blue'},
      {key: 'rob1', name: 'Robot-Red', prettyName: 'Robot Red'},
      {key: 'rob11', name: 'Robot-Yellow', prettyName: 'Robot Yellow'},
      {key: 'scr', name: 'Scrap-Yard', prettyName: 'Scrap Yard'},
      {key: 'sol', name: 'Solar-Array', prettyName: 'Solar Array'},
      {key: 'tem', name: 'Temp-Agency', prettyName: 'Temp Agency'},
      {key: 'tra', name: 'Trash-Compactor', prettyName: 'Trash Compactor'},
      {key: 'uni', name: 'University', prettyName: 'University'},
      {key: 'war', name: 'Warehouse', prettyName: 'Warehouse'}
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
