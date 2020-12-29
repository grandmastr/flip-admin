import React, { Component } from 'react'
import { connect } from "react-redux";
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {
	fetchUser,
	fetchUsers,
	showLoading,
	hideErrorMessage,
} from 'redux/actions/Users';
import userData from "assets/data/user-list.data.json";

export class UserList extends Component {

	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null
	}

	componentDidMount() {
		console.log("Loading data");
		const { showLoading, fetchUsers } = this.props;
		showLoading();
		fetchUsers();
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
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
		const { userProfileVisible, selectedUser } = this.state;
		const { users } = this.props;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'email',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={`${record.firstName} ${record.lastName}`} subTitle={record.email}/>
					</div>
				),
				// sorter: {
				// 	compare: (a, b) => {
				// 		a = a.name.toLowerCase();
  			// 			b = b.name.toLowerCase();
				// 		return a > b ? -1 : b > a ? 1 : 0;
				// 	},
				// },
			},
			{
				title: 'Role',
				dataIndex: 'type',
				// sorter: {
				// 	compare: (a, b) => a.role.length - b.role.length,
				// },
			},
			{
				title: 'Created On',
				dataIndex: 'createdAt',
				render: date => (
					<span>{moment(date).format("Do MMM YYYY")} </span>
				),
				// sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
			},
			// {
			// 	title: 'Status',
			// 	dataIndex: 'status',
			// 	render: status => (
			// 		<Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
			// 	),
			// 	sorter: {
			// 		compare: (a, b) => a.status.length - b.status.length,
			// 	},
			// },
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users ? users.users : []} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

const mapStateToProps = ({ users: _users }) => {
  const { users, user } =  _users;
  return { users, user }
};

const mapDispatchToProps = {
	fetchUser,
	fetchUsers,
	showLoading,
	hideErrorMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UserList));
