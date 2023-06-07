import { Serializer as OrderProductSerializer } from
  '../mixins/regenerated/serializers/i-i-s-new-project-order-product';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OrderProductSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
