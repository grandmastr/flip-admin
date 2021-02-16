import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
import { handleGetNewCardSales } from '../../../../../redux/actions/Admin'

const NewSales = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleGetNewCardSales())
  }, [dispatch])
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

export default NewSales
