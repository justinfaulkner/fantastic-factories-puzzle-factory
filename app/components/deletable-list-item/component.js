import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteItem() {
      console.log("HERE!");
      this.get('list').removeAt(this.get('index'));
    }
  }
});
