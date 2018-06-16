import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({

  componentLibrary: inject(),

  editMode: false,

  init() {
    this._super(...arguments);
    if(this.get('cardIDs.length') == 0) {
      this.set('editMode', true);
    }
  },

  actions: {
    enterEditMode() {
      this.set('editMode', true);
    },

    exitEditMode() {
      this.set('editMode', false);
    }
  }

});
