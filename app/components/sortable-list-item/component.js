import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  lastItem: computed('index', 'list.length', function() {
    let index = this.get('index');
    let length = this.get('list.length');
    return index >= (length - 1);
  }),

  actions: {
    moveLeft() {
      let index = this.get('index');
      let start = index - 1;
      let list = this.get('list');
      let element = list.objectAt(index);
      list.removeAt(index)
      let newList = list.splice(start, 0, element);
    },

    moveRight() {
      let index = this.get('index');
      let start = index + 1;
      let list = this.get('list');
      let element = list.objectAt(index);
      list.removeAt(index)
      let newList = list.splice(start, 0, element);
    }
  }
});
