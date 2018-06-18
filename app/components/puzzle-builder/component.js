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
    },

    exportImage() {
      html2canvas($('#puzzle-body')[0],
        { 'windowWidth': 1000 }
      ).then(function(canvas) {
        // Download
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'Fantastic_Factories_Puzzle.jpg';
        a.click();
      });
    }
  }

});
