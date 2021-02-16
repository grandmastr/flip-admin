import React, { useMemo, useCallback, useState, useEffect } from 'react'
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
  Button,
} from 'antd'
import userData from 'assets/data/user-list.data.json'
import { handleGetAllWithDrawal } from 'redux/actions/Admin'

const expandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
}
const showHeader = true
const pagination = { position: 'bottom' }

const NewWithDrawals = (props) => {
  const dispatch = useDispatch()
  const [
    {
      users,
      userProfileVisible,
      selectedUser,
      bordered,
      loading,
      pagination,
      size,
      expandable,
      title,
      showHeader,
      rowSelection,
      scroll,
      hasData,
      tableLayout,
      showDetails,
      selectedRowKeys,
      openModal,
      selectedData,
    },
    setState,
  ] = useState({
    users: userData,
    userProfileVisible: false,
    selectedUser: null,
    bordered: false,
    loading: false,
    pagination: 0,
    size: 'default',
    expandable: false,
    title: undefined,
    showHeader: true,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    showDetails: false,
    selectedRowKeys: [],
    openModal: false,
    selectedData: {},
  })

  useEffect(() => {
    dispatch(handleGetAllWithDrawal())
  }, [dispatch])

  const tableColumns = useMemo(
    () => [
      {
        title: 'User',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Reference no.',
        dataIndex: 'ref',
        key: 'ref',
        render: (text) => <span>ref</span>,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: () => <Tag color={'green'}>Success</Tag>,
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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{ marginRight: 16 }}>Delete</a>
          </span>
        ),
      },
    ],
    [],
  )

  const data = []
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      date: new Date().toLocaleString(),
      user: 'James Olsen',
      amount: '$300',
      ref: '12eadsdwq1',
      description: 'Bought bitcoin',
    })
  }

  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <h1>All Withdrawals</h1>
        <DatePicker.RangePicker showTIme />
      </div>
      <Card bodyStyle={{ padding: '0px' }}>
        <Table
          columns={tableColumns}
          dataSource={hasData ? data : null}
          onRow={(record) => ({
            onClick: () => {
              setState((s) => ({
                ...s,
                openModal: true,
                selectedData: { ...record },
              }))
              console.log('amanda', record)
            },
          })}
        />
        <Modal
          visible={openModal}
          onCancel={() =>
            setState((s) => ({ ...s, openModal: false, selectedData: {} }))
          }
          title={'Transaction Details'}
          footer={false}
        >
          <Row>
            <Col>
              <div style={{ marginBottom: '24px' }}>
                <h5>User</h5>
                <span>{selectedData.user || ''}</span>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <h5>Reference No.</h5>
                <span>{selectedData.ref || ''}</span>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <h5>Date</h5>
                <span>{selectedData.date || ''}</span>
              </div>
              <div>
                <h5>Note</h5>
                <span>{selectedData.description || ''}</span>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row className={'mt-4'}>
            <div style={{ margin: 'auto' }}>
              <Button type={'danger'} className={'mr-4'}>
                Reject
              </Button>
              <Button type={'primary'}>Accept</Button>
            </div>
          </Row>
        </Modal>
      </Card>
    </>
  )
}

export default NewWithDrawals
