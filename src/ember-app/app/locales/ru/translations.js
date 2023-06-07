import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'New project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'New project',
          title: 'New project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
