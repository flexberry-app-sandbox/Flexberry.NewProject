import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-new-project-client', 'Unit | Model | i-i-s-new-project-client', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-new-project-client',
    'model:i-i-s-new-project-coupon',
    'model:i-i-s-new-project-order-product',
    'model:i-i-s-new-project-product',
    'model:i-i-s-new-project-zakaz',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
