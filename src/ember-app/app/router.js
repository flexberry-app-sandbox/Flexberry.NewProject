import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-new-project-client-l');
  this.route('i-i-s-new-project-client-e',
  { path: 'i-i-s-new-project-client-e/:id' });
  this.route('i-i-s-new-project-client-e.new',
  { path: 'i-i-s-new-project-client-e/new' });
  this.route('i-i-s-new-project-coupon-l');
  this.route('i-i-s-new-project-coupon-e',
  { path: 'i-i-s-new-project-coupon-e/:id' });
  this.route('i-i-s-new-project-coupon-e.new',
  { path: 'i-i-s-new-project-coupon-e/new' });
  this.route('i-i-s-new-project-product-l');
  this.route('i-i-s-new-project-product-e',
  { path: 'i-i-s-new-project-product-e/:id' });
  this.route('i-i-s-new-project-product-e.new',
  { path: 'i-i-s-new-project-product-e/new' });
  this.route('i-i-s-new-project-zakaz-l');
  this.route('i-i-s-new-project-zakaz-e',
  { path: 'i-i-s-new-project-zakaz-e/:id' });
  this.route('i-i-s-new-project-zakaz-e.new',
  { path: 'i-i-s-new-project-zakaz-e/new' });
});

export default Router;
