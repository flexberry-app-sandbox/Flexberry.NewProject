import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-new-project-client', 'Unit | Serializer | i-i-s-new-project-client', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-new-project-client',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
