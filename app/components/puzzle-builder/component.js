import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({

  blueprintLibrary: inject(),

  blueprintsForDropdown: computed(function() {
    return this.get('blueprintLibrary.mappings')();
  }),

  actions: {
    
  }
});
