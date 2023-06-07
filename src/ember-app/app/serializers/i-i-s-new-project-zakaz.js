import { Serializer as ZakazSerializer } from
  '../mixins/regenerated/serializers/i-i-s-new-project-zakaz';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ZakazSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
