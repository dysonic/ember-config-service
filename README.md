# ember-config-service

[![Build Status](https://travis-ci.org/gmurphey/ember-config-service.svg?branch=master)](https://travis-ci.org/gmurphey/ember-config-service) [![Ember Observer Score](http://emberobserver.com/badges/ember-config-service.svg)](http://emberobserver.com/addons/ember-config-service) [![Greenkeeper badge](https://badges.greenkeeper.io/gmurphey/ember-config-service.svg)](https://greenkeeper.io/) [![npm version](https://badge.fury.io/js/ember-config-service.svg)](https://badge.fury.io/js/ember-config-service) [![npm](https://img.shields.io/npm/dm/ember-config-service.svg)](https://img.shields.io/npm/dm/ember-config-service.svg)

Get values from your app's `config/environment.js` with a service.

## Compatibility

- Ember.js v4.4 or above
- Ember CLI v4.4 or above
- Node.js v16 or above

Note: V2 is a breaking change as it switches to Ember v4 and Octane Syntax.

## Usage

Install this addon by running the following with [Ember CLI](http://www.ember-cli.com/).

    ember install ember-config-service

The `config` service is now available for you to use in your app. For example, if you added the following to your `config/environment.js`:

```javascript
ENV.api = {
  host: "http://mydomain.com",
  namespace: "myapi",
};
```

You could define your application adapter with the following:

```javascript
import JSONAPIAdapter from "@ember-data/adapter/json-api";
import { inject as service } from "@ember/service";

export default class FooAdapter extends JSONAPIAdapter {
  @service config;

  get host() {
    return this.config.api.host;
  }
  get namespace() {
    return this.config.api.namespace;
  }
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.
