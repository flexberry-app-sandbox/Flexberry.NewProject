import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.clothes.caption'),
          title: i18n.t('forms.application.sitemap.clothes.title'),
          children: [{
            link: 'i-i-s-new-project-coupon-l',
            caption: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-coupon-l.caption'),
            title: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-coupon-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-new-project-client-l',
            caption: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-client-l.caption'),
            title: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-client-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-new-project-zakaz-l',
            caption: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-zakaz-l.caption'),
            title: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-zakaz-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-new-project-product-l',
            caption: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-product-l.caption'),
            title: i18n.t('forms.application.sitemap.clothes.i-i-s-new-project-product-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})