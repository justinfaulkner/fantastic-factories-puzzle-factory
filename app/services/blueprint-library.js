import Service from '@ember/service';

export default Service.extend({
  mappings() {
    return {
      'maf': 'Manufactory',
      'mef': 'Megafactory',
      'bio': 'Biolab',
    }
  }
});
