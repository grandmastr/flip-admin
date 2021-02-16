import {
  DashboardOutlined,
  LineChartOutlined,
  GiftOutlined,
  PullRequestOutlined,
  DollarCircleOutlined,
  NodeCollapseOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const extraNavTree = [
  {
    key: 'extra-dashboard',
    path: `${APP_PREFIX_PATH}/pages/dashboard`,
    title: 'Dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'extra-users',
    path: `${APP_PREFIX_PATH}/pages/user-list`,
    title: 'Users',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'extra-transactions',
    path: `${APP_PREFIX_PATH}/pages/transaction-list`,
    title: 'Transactions',
    icon: LineChartOutlined,
    breadcrumb: false,
    submenu: [],
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
        submenu: [],
      },
      {
        key: 'extra-giftcards-request',
        path: `${APP_PREFIX_PATH}/pages/giftcards/requests`,
        title: 'All Card Sales',
        icon: PullRequestOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'extra-giftcards-new',
        path: `${APP_PREFIX_PATH}/pages/giftcards/new`,
        title: 'New Card Sales',
        icon: PullRequestOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
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
        submenu: [],
      },
    ],
  },
  {
    key: 'extra-withdrawals',
    path: `${APP_PREFIX_PATH}/pages/withdrawals`,
    title: 'Withdrawals',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'extra-withdrawals-list',
        path: `${APP_PREFIX_PATH}/pages/withdrawals/all`,
        title: 'Withdrawal requests',
        icon: NodeCollapseOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'extra-withdrawals-new',
        path: `${APP_PREFIX_PATH}/pages/withdrawals/new`,
        title: 'New Withdrawal requests',
        icon: NodeCollapseOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
]

const navigationConfig = [...extraNavTree]

export default navigationConfig
