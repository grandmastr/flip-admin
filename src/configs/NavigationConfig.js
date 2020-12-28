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
  // {
  //   key: 'extra-auth',
  //   path: `${AUTH_PREFIX_PATH}`,
  //   title: 'sidenav.authentication',
  //   icon: SafetyOutlined,
  //   breadcrumb: true,
  //   submenu: [
  //     {
  //       key: 'extra-auth-login-1',
  //       path: `${AUTH_PREFIX_PATH}/login-1`,
  //       title: 'sidenav.authentication.login.1',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     },
  //     {
  //       key: 'extra-auth-login-2',
  //       path: `${AUTH_PREFIX_PATH}/login-2`,
  //       title: 'sidenav.authentication.login.2',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     },
  //     {
  //       key: 'extra-auth-register-1',
  //       path: `${AUTH_PREFIX_PATH}/register-1`,
  //       title: 'sidenav.authentication.register.1',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     },
  //     {
  //       key: 'extra-auth-register-2',
  //       path: `${AUTH_PREFIX_PATH}/register-2`,
  //       title: 'sidenav.authentication.register.2',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     },
  //     {
  //       key: 'extra-auth-forgot-password',
  //       path: `${AUTH_PREFIX_PATH}/forgot-password`,
  //       title: 'sidenav.authentication.forgetPassword',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   key: 'extra-errors',
  //   path: `${AUTH_PREFIX_PATH}/error-1`,
  //   title: 'sidenav.errors',
  //   icon: StopOutlined,
  //   breadcrumb: true,
  //   submenu: [
  //     {
  //       key: 'extra-errors-error-1',
  //       path: `${AUTH_PREFIX_PATH}/error-1`,
  //       title: 'sidenav.errors.error.1',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     },
  //     {
  //       key: 'extra-errors-error-2',
  //       path: `${AUTH_PREFIX_PATH}/error-2`,
  //       title: 'sidenav.errors.error.2',
  //       icon: '',
  //       breadcrumb: true,
  //       submenu: []
  //     }
  //   ]
  // }


]

const navigationConfig = [
  ...extraNavTree,
]

export default navigationConfig;
