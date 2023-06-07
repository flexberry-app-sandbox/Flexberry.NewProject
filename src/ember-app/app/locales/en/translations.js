import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNewProjectClientLForm from './forms/i-i-s-new-project-client-l';
import IISNewProjectCouponLForm from './forms/i-i-s-new-project-coupon-l';
import IISNewProjectProductLForm from './forms/i-i-s-new-project-product-l';
import IISNewProjectZakazLForm from './forms/i-i-s-new-project-zakaz-l';
import IISNewProjectClientEForm from './forms/i-i-s-new-project-client-e';
import IISNewProjectCouponEForm from './forms/i-i-s-new-project-coupon-e';
import IISNewProjectProductEForm from './forms/i-i-s-new-project-product-e';
import IISNewProjectZakazEForm from './forms/i-i-s-new-project-zakaz-e';
import IISNewProjectClientModel from './models/i-i-s-new-project-client';
import IISNewProjectCouponModel from './models/i-i-s-new-project-coupon';
import IISNewProjectOrderProductModel from './models/i-i-s-new-project-order-product';
import IISNewProjectProductModel from './models/i-i-s-new-project-product';
import IISNewProjectZakazModel from './models/i-i-s-new-project-zakaz';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-new-project-client': IISNewProjectClientModel,
    'i-i-s-new-project-coupon': IISNewProjectCouponModel,
    'i-i-s-new-project-order-product': IISNewProjectOrderProductModel,
    'i-i-s-new-project-product': IISNewProjectProductModel,
    'i-i-s-new-project-zakaz': IISNewProjectZakazModel
  },

  'application-name': 'New project',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'New project',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'New project',
          title: 'New project'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        clothes: {
          caption: 'Clothes',
          title: 'Clothes',
          'i-i-s-new-project-coupon-l': {
            caption: 'Купоны',
            title: ''
          },
          'i-i-s-new-project-client-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-new-project-zakaz-l': {
            caption: 'Заказы',
            title: ''
          },
          'i-i-s-new-project-product-l': {
            caption: 'Товары',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-new-project-client-l': IISNewProjectClientLForm,
    'i-i-s-new-project-coupon-l': IISNewProjectCouponLForm,
    'i-i-s-new-project-product-l': IISNewProjectProductLForm,
    'i-i-s-new-project-zakaz-l': IISNewProjectZakazLForm,
    'i-i-s-new-project-client-e': IISNewProjectClientEForm,
    'i-i-s-new-project-coupon-e': IISNewProjectCouponEForm,
    'i-i-s-new-project-product-e': IISNewProjectProductEForm,
    'i-i-s-new-project-zakaz-e': IISNewProjectZakazEForm
  },

});

export default translations;
