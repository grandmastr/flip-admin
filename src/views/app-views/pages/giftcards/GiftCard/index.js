import React from 'react'
import { Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const GiftCard = ({ setState, cardData }) => {
  const { cardName, imageSource } = cardData
  return (
    <>
      <Card
        title={cardName || 'Steam'}
        extra={
          <EditOutlined
            onClick={() =>
              setState({
                activeCardData: cardData,
                showModal: true,
              })
            }
          />
        }
        style={{ width: 200 }}
      >
        <p>Current price - $100</p>
        <img
          src={
            imageSource ||
            'https://swifttradesng.netlify.app/static/media/steam.aa6ed68b.png'
          }
          alt="steam card"
          style={{ width: '100%' }}
        />
      </Card>
    </>
  )
}

export default GiftCard
