import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Table, Tooltip, message, Button, DatePicker } from 'antd'
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'
import UserView from './UserView'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import {
  fetchUser,
  fetchUsers,
  showLoading,
  hideErrorMessage,
} from 'redux/actions/Users'
import userData from 'assets/data/user-list.data.json'

const UserList = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  const [{ userProfileVisible, selectedUser }, setState] = useState({
    userProfileVisible: false,
    selectedUser: null,
  })

  useEffect(() => {
    dispatch(showLoading())
    dispatch(fetchUsers())
  }, [dispatch])

  const deleteUser = useCallback((userId) => {
    setState((s) => ({
      ...s,
      users: s.users.filter((item) => item.id !== userId),
    }))
    message.success({ content: `Deleted user ${userId}`, duration: 2 })
  }, [])

  const showUserProfile = useCallback((userInfo) => {
    setState((s) => ({
      ...s,
      userProfileVisible: true,
      selectedUser: userInfo,
    }))
  }, [])

  const closeUserProfile = () => {
    setState((s) => ({
      ...s,
      userProfileVisible: false,
      selectedUser: null,
    }))
  }

  const tableColumns = useMemo(
    () => [
      {
        title: 'User',
        dataIndex: 'email',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={`${record.firstName} ${record.lastName}`}
              subTitle={record.email}
            />
          </div>
        ),
      },
      {
        title: 'Role',
        dataIndex: 'type',
      },
      {
        title: 'Created On',
        dataIndex: 'createdAt',
        render: (date) => <span>{moment(date).format('Do MMM YYYY')} </span>,
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  showUserProfile(elm)
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  deleteUser(elm.id)
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ],
    [showUserProfile, deleteUser],
  )
  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <DatePicker.RangePicker />
      </div>
      <Card bodyStyle={{ padding: '0px' }}>
        <Table
          columns={tableColumns}
          dataSource={users ? users : []}
          rowKey="id"
        />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            closeUserProfile()
          }}
        />
      </Card>
    </>
  )
}

export default UserList
