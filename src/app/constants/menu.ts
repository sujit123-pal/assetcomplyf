import { environment } from 'src/environments/environment';
const adminRoot = environment.adminRoot;
export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-shop-4',
    label: 'Settings',
    to: `${adminRoot}/dashboards`,
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'Asset Category',
        to: `${adminRoot}/dashboards/asset`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Model',
        to: `${adminRoot}/dashboards/model`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Purchase Order Setting',
        to: `${adminRoot}/dashboards/purchase-order-setting`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Brand',
        to: `${adminRoot}/dashboards/brand`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Unit',
        to: `${adminRoot}/dashboards/unit`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Activity Type',
        to: `${adminRoot}/dashboards/activity-type`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Movement Status',
        to: `${adminRoot}/dashboards/movement-status`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Tax Settings',
        to: `${adminRoot}/dashboards/tax-settings`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Vendor Setting',
        to: `${adminRoot}/dashboards/vendor-setting`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Reason Settings',
        to: `${adminRoot}/dashboards/reason-settings`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Meter Type Settings',
        to: `${adminRoot}/dashboards/meter-type-settings`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Condition Setting',
        to: `${adminRoot}/dashboards/condition-settings`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Department',
        to: `${adminRoot}/dashboards/department`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Status',
        to: `${adminRoot}/dashboards/status`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Address',
        to: `${adminRoot}/dashboards/address`,
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'Item Creation',
        to: `${adminRoot}/dashboards/item`,
      },
    ],
  },
  {
    icon: 'iconsminds-digital-drawing',
    label: 'Reports',
    to: `${adminRoot}/pages`,
    subs: [
      {
        label: 'menu.authorization',
        to: '/user',
        subs: [
          {
            icon: 'simple-icon-user-following',
            label: 'menu.login',
            to: '/user/login',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-follow',
            label: 'menu.register',
            to: '/user/register',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-unfollow',
            label: 'menu.forgot-password',
            to: '/user/forgot-password',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-following',
            label: 'menu.reset-password',
            to: '/user/reset-password',
            newWindow: true,
          },
        ],
      },
      {
        label: 'menu.product',
        to: `${adminRoot}/pages/product`,
        subs: [
          {
            icon: 'simple-icon-credit-card',
            label: 'menu.data-list',
            to: `${adminRoot}/pages/product/data-list`,
          },
          {
            icon: 'simple-icon-list',
            label: 'menu.thumb-list',
            to: `${adminRoot}/pages/product/thumb-list`,
          },
          {
            icon: 'simple-icon-grid',
            label: 'menu.image-list',
            to: `${adminRoot}/pages/product/image-list`,
          },
          {
            icon: 'simple-icon-picture',
            label: 'menu.details',
            to: `${adminRoot}/pages/product/details`,
          },
          {
            icon: 'simple-icon-book-open',
            label: 'menu.details-alt',
            to: `${adminRoot}/pages/product/details-alt`,
          },
        ],
      },
      {
        label: 'menu.profile',
        to: `${adminRoot}/pages/profile`,
        subs: [
          {
            icon: 'simple-icon-share',
            label: 'menu.social',
            to: `${adminRoot}/pages/profile/social`,
          },
          {
            icon: 'simple-icon-link',
            label: 'menu.portfolio',
            to: `${adminRoot}/pages/profile/portfolio`,
          },
        ],
      },
      {
        label: 'menu.blog',
        to: `${adminRoot}/pages/blog`,
        subs: [
          {
            icon: 'simple-icon-share',
            label: 'menu.blog-list',
            to: `${adminRoot}/pages/blog/blog-list`,
          },
          {
            icon: 'simple-icon-link',
            label: 'menu.blog-detail',
            to: `${adminRoot}/pages/blog/blog-detail`,
          },
        ],
      },
      {
        label: 'menu.miscellaneous',
        to: `${adminRoot}/pages/miscellaneous`,
        subs: [
          {
            icon: 'simple-icon-question',
            label: 'menu.faq',
            to: `${adminRoot}/pages/miscellaneous/faq`,
          },
          {
            icon: 'simple-icon-graduation',
            label: 'menu.knowledge-base',
            to: `${adminRoot}/pages/miscellaneous/knowledge-base`,
          },

          {
            icon: 'simple-icon-diamond',
            label: 'menu.prices',
            to: `${adminRoot}/pages/miscellaneous/prices`,
          },
          {
            icon: 'simple-icon-magnifier',
            label: 'menu.search',
            to: `${adminRoot}/pages/miscellaneous/search`,
          },
          {
            icon: 'simple-icon-envelope-open',
            label: 'menu.mailing',
            to: `${adminRoot}/pages/miscellaneous/mailing`,
          },
          {
            icon: 'simple-icon-bag',
            label: 'menu.invoice',
            to: `${adminRoot}/pages/miscellaneous/invoice`,
          },

          {
            icon: 'simple-icon-exclamation',
            label: 'menu.error',
            to: '/error',
            newWindow: true,
          },
        ],
      },
    ],
  },
  {
    icon: 'iconsminds-air-balloon-1',
    label: 'Maintenance',
    to: `${adminRoot}/applications`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'menu.todo',
        to: `${adminRoot}/applications/todo`,
      },
      {
        icon: 'simple-icon-calculator',
        label: 'menu.survey',
        to: `${adminRoot}/applications/survey`,
      },
      // {
      //   icon: 'simple-icon-calculator',
      //   label: 'menu.survey-detail',
      //   to: `${adminRoot}/applications/survey-detai`'
      // },
      {
        icon: 'simple-icon-bubbles',
        label: 'menu.chat',
        to: `${adminRoot}/applications/chat`,
      },
    ],
  },
  {
    icon: 'iconsminds-pantone',
    label: 'Assets',
    to: `${adminRoot}/ui`,
    subs: [
      {
        label: 'menu.forms',
        to: `${adminRoot}/ui/forms`,
        subs: [
          {
            icon: 'simple-icon-notebook',
            label: 'menu.layouts',
            to: `${adminRoot}/ui/forms/layouts`,
          },
          {
            icon: 'simple-icon-puzzle',
            label: 'menu.components',
            to: `${adminRoot}/ui/forms/components`,
          },
          {
            icon: 'simple-icon-check',
            label: 'menu.validations',
            to: `${adminRoot}/ui/forms/validations`,
          },
          {
            icon: 'simple-icon-magic-wand',
            label: 'menu.wizard',
            to: `${adminRoot}/ui/forms/wizard`,
          },
        ],
      },
      {
        label: 'menu.datatables',
        to: `${adminRoot}/ui/datatables`,
        subs: [
          {
            icon: 'simple-icon-screen-desktop',
            label: 'menu.fullpage',
            to: `${adminRoot}/ui/datatables/fullpage`,
          },
          {
            icon: 'simple-icon-mouse',
            label: 'menu.scrollable',
            to: `${adminRoot}/ui/datatables/scrollable`,
          },
          {
            icon: 'simple-icon-notebook',
            label: 'menu.responsive',
            to: `${adminRoot}/ui/datatables/responsive`,
          },
        ],
      },
      {
        label: 'menu.components',
        to: `${adminRoot}/ui/components`,
        subs: [
          {
            icon: 'simple-icon-layers',
            label: 'menu.accordion',
            to: `${adminRoot}/ui/components/accordion`,
          },
          {
            icon: 'simple-icon-bell',
            label: 'menu.alerts',
            to: `${adminRoot}/ui/components/alerts`,
          },
          {
            icon: 'simple-icon-badge',
            label: 'menu.badges',
            to: `${adminRoot}/ui/components/badges`,
          },
          {
            icon: 'simple-icon-control-play',
            label: 'menu.buttons',
            to: `${adminRoot}/ui/components/buttons`,
          },
          {
            icon: 'simple-icon-layers',
            label: 'menu.cards',
            to: `${adminRoot}/ui/components/cards`,
          },
          {
            icon: 'simple-icon-picture',
            label: 'menu.carousel',
            to: `${adminRoot}/ui/components/carousel`,
          },
          {
            icon: 'simple-icon-chart',
            label: 'menu.charts',
            to: `${adminRoot}/ui/components/charts`,
          },
          {
            icon: 'simple-icon-arrow-up',
            label: 'menu.collapse',
            to: `${adminRoot}/ui/components/collapse`,
          },
          {
            icon: 'simple-icon-arrow-down',
            label: 'menu.dropdowns',
            to: `${adminRoot}/ui/components/dropdowns`,
          },
          {
            icon: 'simple-icon-book-open',
            label: 'menu.editors',
            to: `${adminRoot}/ui/components/editors`,
          },

          {
            icon: 'simple-icon-star',
            label: 'menu.icons',
            to: `${adminRoot}/ui/components/icons`,
          },
          {
            icon: 'simple-icon-note',
            label: 'menu.input-groups',
            to: `${adminRoot}/ui/components/input-groups`,
          },
          {
            icon: 'simple-icon-screen-desktop',
            label: 'menu.jumbotron',
            to: `${adminRoot}/ui/components/jumbotron`,
          },
          {
            icon: 'simple-icon-map',
            label: 'menu.maps',
            to: `${adminRoot}/ui/components/maps`,
          },
          {
            icon: 'simple-icon-docs',
            label: 'menu.modal',
            to: `${adminRoot}/ui/components/modal`,
          },
          {
            icon: 'simple-icon-cursor',
            label: 'menu.navigation',
            to: `${adminRoot}/ui/components/navigation`,
          },
          {
            icon: 'simple-icon-options',
            label: 'menu.pagination',
            to: `${adminRoot}/ui/components/pagination`,
          },
          {
            icon: 'simple-icon-pin',
            label: 'menu.popover-tooltip',
            to: `${adminRoot}/ui/components/popover-tooltip`,
          },
          {
            icon: 'simple-icon-shuffle',
            label: 'menu.sortable',
            to: `${adminRoot}/ui/components/sortable`,
          },
          {
            icon: 'simple-icon-grid',
            label: 'menu.tables',
            to: `${adminRoot}/ui/components/tables`,
          },
        ],
      },
    ],
  },
  /*
  {
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.menu',
    to: `${adminRoot}/menu`,
    subs: [
      {
        icon: 'simple-icon-logout',
        label: 'menu.types',
        to: `${adminRoot}/menu/types`,
      },
      {
        icon: 'simple-icon-layers',
        label: 'menu.levels',
        to: `${adminRoot}/menu/levels`,
        subs: [
          {
            icon: 'simple-icon-arrow-right',
            label: 'menu.third-level-1',
            to: `${adminRoot}/menu/levels/third-level-1`,
          },
          {
            icon: 'simple-icon-arrow-right',
            label: 'menu.third-level-2',
            to: `${adminRoot}/menu/levels/third-level-2`,
          },
          {
            icon: 'simple-icon-arrow-right',
            label: 'menu.third-level-3',
            to: `${adminRoot}/menu/levels/third-level-3`,
          },
        ],
      },
    ],
  },
  {
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
  },
  {
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://vien-docs.coloredstrategies.com/',
    newWindow: true,
  },
  */
];
export default data;