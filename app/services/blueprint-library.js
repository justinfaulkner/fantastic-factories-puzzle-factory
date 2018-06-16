import Service from '@ember/service';

export default Service.extend({
  mappings() {
    return [
      {key: 'maf', name: 'Manufactory'},
      {key: 'mef', name: 'Megafactory'},
      {key: 'bio', name: 'Biolab'},
    ]
  }
});
