import { getOwner } from '@ember/application';
import Service from '@ember/service';

export default class ConfigService extends Service {
  constructor() {
    super(...arguments);
    const ENV = getOwner(this).resolveRegistration('config:environment');
    Object.assign(this, ENV);
  }
}
