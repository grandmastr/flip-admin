import React from 'react'
import moment from 'moment'
import { Avatar, Drawer, Divider } from 'antd'
import { MailOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons'

const UserView = ({ data, visible, close }) => {
  return (
    <Drawer
      width={300}
      placement="right"
      onClose={close}
      closable={false}
      visible={visible}
    >
      <div className="text-center mt-3">
        <Avatar size={80} src={data?.img} />
        <h3 className="mt-2 mb-0">{`${data?.firstName} ${data?.lastName}`}</h3>
        <span className="text-muted">{data?.email}</span>
      </div>
      <Divider dashed />
      <div className="">
        <h6 className="text-muted text-uppercase mb-3">Account details</h6>
        <p>
          <UserOutlined />
          <span className="ml-3 text-dark">Id: {data?.id}</span>
        </p>
        <p>
          <CalendarOutlined />
          <span className="ml-3 text-dark">
            Created on {data && moment(data.createdAt).format('Do MMM YYYY')}
          </span>
        </p>
      </div>
      <div className="mt-5">
        <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
        <p>
          <MailOutlined />
          <span className="ml-3 text-dark">
            {data?.email ? data?.email : '-'}
          </span>
        </p>
      </div>
    </Drawer>
  )
}

export default UserView
