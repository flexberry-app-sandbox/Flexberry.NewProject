import {
  defineNamespace,
  defineProjections,
  Model as OrderProductMixin
} from '../mixins/regenerated/models/i-i-s-new-project-order-product';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OrderProductMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
