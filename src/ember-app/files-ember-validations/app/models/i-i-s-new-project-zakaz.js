import {
  defineNamespace,
  defineProjections,
  Model as ZakazMixin
} from '../mixins/regenerated/models/i-i-s-new-project-zakaz';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ZakazMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
