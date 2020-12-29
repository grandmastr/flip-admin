import React, {Component} from 'react'
import {Card, Table, Switch, Radio, Form, Tag, Tooltip, message, Button, Modal} from 'antd';
import userData from "assets/data/user-list.data.json";
import TransactionView from "./TransactionView";

const tableColumns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: () => <Tag color={'blue'}>
      Bitcoin
    </Tag>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => <Tag color={'green'}>
      Success
    </Tag>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a style={{marginRight: 16}}>Delete</a>
      </span>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    date: new Date().toLocaleString(),
    user: 'James Olsen',
    amount: '$300',
    description: 'Bought bitcoin',
  });
}

const expandable = {expandedRowRender: record => <p>{record.description}</p>};
const showHeader = true;
const pagination = {position: 'bottom'};

export class UserList extends Component {
  state = {
    users: userData,
    userProfileVisible: false,
    selectedUser: null,
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandable,
    title: undefined,
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    showDetails: false
  }

  handleToggle = prop => enable => {
    this.setState({[prop]: enable});
  };

  handleSizeChange = e => {
    this.setState({size: e.target.value});
  };

  handleTableLayoutChange = e => {
    this.setState({tableLayout: e.target.value});
  };

  handleExpandChange = enable => {
    this.setState({expandable: enable ? expandable : undefined});
  };

  handleEllipsisChange = enable => {
    this.setState({ellipsis: enable});
  };

  handleHeaderChange = enable => {
    this.setState({showHeader: enable ? showHeader : false});
  };

  handleRowSelectionChange = enable => {
    console.log(enable)
    this.setState({rowSelection: enable ? {} : undefined});
  };

  handleYScrollChange = enable => {
    this.setState({yScroll: enable});
  };

  handleXScrollChange = e => {
    this.setState({xScroll: e.target.value});
  };

  handleDataChange = hasData => {
    this.setState({hasData});
  };

  handlePaginationChange = e => {
    const {value} = e.target;
    this.setState({
      pagination: value === 'none' ? false : {position: value},
    });
  };

  deleteUser = userId => {
    this.setState({
      users: this.state.users.filter(item => item.id !== userId),
    })
    message.success({content: `Deleted user ${userId}`, duration: 2});
  }

  showUserProfile = userInfo => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null
    });
  }

  render() {
    const {userProfileVisible, selectedUser} = this.state;


    return (
      <Card bodyStyle={{'padding': '0px'}}>
        <Table
          {...this.state}
          columns={tableColumns}
          dataSource={this.state.hasData ? data : null}
        />
      </Card>
    )
  }
}

export default UserList
