import React, { useEffect, useMemo } from 'react'
import {
  Card,
  Table,
  Tag,
  message,
  DatePicker,
  Modal,
  Row,
  Col,
  Image,
  Tooltip,
  Button,
} from 'antd'
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import AvatarStatus from '../../../../../components/shared-components/AvatarStatus'
import { handleGetAllGiftSaleTransactions } from '../../../../../redux/actions/Admin'

const GiftCardSalesTransactions = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleGetAllGiftSaleTransactions())
  }, [dispatch])
  const tableColumns = useMemo(() => [
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
              onClick={console.log}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={console.log}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ])
  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <DatePicker.RangePicker />
      </div>
      <Card bodyStyle={{ padding: '0px' }}>
        {/* <Table columns={tableColumns} dataSource={[]} rowKey="id" /> */}
        {/* <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            closeUserProfile()
          }}
        /> */}
      </Card>
    </>
  )
}

export default GiftCardSalesTransactions
