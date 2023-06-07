import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  login: DS.attr('string'),
  password: DS.attr('string')
});

export let ValidationRules = {
  login: {
    descriptionKey: 'models.i-i-s-new-project-client.validations.login.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  password: {
    descriptionKey: 'models.i-i-s-new-project-client.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClientE', 'i-i-s-new-project-client', {
    login: attr('Логин', { index: 0 }),
    password: attr('Пароль', { index: 1 })
  });

  modelClass.defineProjection('ClientL', 'i-i-s-new-project-client', {
    login: attr('Логин', { index: 0 }),
    password: attr('Пароль', { index: 1 })
  });
};
