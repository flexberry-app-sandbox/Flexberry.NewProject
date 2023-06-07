import {
  defineNamespace,
  defineProjections,
  Model as CouponMixin
} from '../mixins/regenerated/models/i-i-s-new-project-coupon';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CouponMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
