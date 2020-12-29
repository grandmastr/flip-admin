import {
  DashboardOutlined,
  LineChartOutlined,
  GiftOutlined,
  PullRequestOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const extraNavTree = [
  {
    key: 'extra-users',
    path: `${APP_PREFIX_PATH}/pages/user-list`,
    title: 'Users',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'extra-transactions',
    path: `${APP_PREFIX_PATH}/pages/transaction-list`,
    title: 'Transactions',
    icon: LineChartOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'extra-giftcards',
    path: `${APP_PREFIX_PATH}/pages/giftcards`,
    title: 'Giftcards',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'extra-giftcards-details',
        path: `${APP_PREFIX_PATH}/pages/giftcards/edit`,
        title: 'Details',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'extra-giftcards-request',
        path: `${APP_PREFIX_PATH}/pages/giftcards/requests`,
        title: 'Buy requests',
        icon: PullRequestOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
    key: 'extra-bitcoin',
    path: `${APP_PREFIX_PATH}/pages/giftcards`,
    title: 'Bitcoin',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'extra-bitcoin-details',
        path: `${APP_PREFIX_PATH}/pages/bitcoin/details`,
        title: 'Details',
        icon: DollarCircleOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
]

const navigationConfig = [
  ...extraNavTree,
]

export default navigationConfig;
