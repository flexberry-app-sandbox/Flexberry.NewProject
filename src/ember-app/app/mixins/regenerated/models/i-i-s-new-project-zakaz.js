import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  status: DS.attr('string'),
  client: DS.belongsTo('i-i-s-new-project-client', { inverse: null, async: false }),
  coupon: DS.belongsTo('i-i-s-new-project-coupon', { inverse: null, async: false }),
  orderProduct: DS.hasMany('i-i-s-new-project-order-product', { inverse: 'zakaz', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-new-project-zakaz.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-new-project-zakaz.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  coupon: {
    descriptionKey: 'models.i-i-s-new-project-zakaz.validations.coupon.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderProduct: {
    descriptionKey: 'models.i-i-s-new-project-zakaz.validations.orderProduct.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ZakazE', 'i-i-s-new-project-zakaz', {
    status: attr('Статус', { index: 0 }),
    coupon: belongsTo('i-i-s-new-project-coupon', 'Купон', {
      productName: attr('Купон', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'productName' }),
    client: belongsTo('i-i-s-new-project-client', 'Клиент', {
      login: attr('Клиент', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'login' }),
    orderProduct: hasMany('i-i-s-new-project-order-product', 'Товарная продукция', {
      amount: attr('Количество', { index: 0 }),
      product: belongsTo('i-i-s-new-project-product', 'Товар', {
        name: attr('Товар', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('ZakazL', 'i-i-s-new-project-zakaz', {
    status: attr('Статус', { index: 0 }),
    coupon: belongsTo('i-i-s-new-project-coupon', 'Купон', {
      productName: attr('Купон', { index: 1 })
    }, { index: -1, hidden: true }),
    client: belongsTo('i-i-s-new-project-client', 'Клиент', {
      login: attr('Клиент', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
