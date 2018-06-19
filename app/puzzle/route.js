import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    board: {},
    cardIDs: {},
    diceIDs: {},
    resourceIDs: {},
    hideInstructions: {}
  }
});
