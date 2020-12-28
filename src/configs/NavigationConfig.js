import {
  DashboardOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import {APP_PREFIX_PATH, AUTH_PREFIX_PATH} from 'configs/AppConfig'

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
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'extra-giftcards',
    path: `${APP_PREFIX_PATH}/pages/giftcards`,
    title: 'Giftcards',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'extra-giftcards-details',
        path: `${APP_PREFIX_PATH}/pages/giftcards/requests`,
        title: 'Details',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'extra-giftcards-request',
        path: `${APP_PREFIX_PATH}/pages/giftcards/requests`,
        title: 'Buy requests',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
  ...extraNavTree,
]

export default navigationConfig;
