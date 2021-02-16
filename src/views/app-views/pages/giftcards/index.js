import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { useDispatch } from 'react-redux'
import GiftCardConstant from '../../../../constants/GiftCartConstant'
import { handleUpdateCardRate } from '../../../../redux/actions/Admin'
import GiftModal from './GiftModal'
import Giftcard from './GiftCard'

const GiftCards = () => {
  const dispatch = useDispatch()
  const [{ activeCardData, showModal }, setState] = useState({
    activeCardData: {},
    showModal: false,
  })

  // itunes.usd.physical
  const updateCardRateHandler = (params, formData) => {
    console.log(params, formData, 'sdjdskjkj')
    dispatch(handleUpdateCardRate(params, formData))
  }

  return (
    <>
      <Row gutter={16}>
        {GiftCardConstant().map((cardData, i) => (
          <Col span={5} key={`${cardData.cardName}-${i}`}>
            <Giftcard
              imageSource={
                'https://swifttradesng.netlify.app/static/media/hulu.f5335b13.webp'
              }
              title={cardData.cardName}
              {...{ setState, cardData }}
            />
          </Col>
        ))}
      </Row>

      {showModal && activeCardData && (
        <GiftModal
          {...{ activeCardData, showModal }}
          handleSubmitForm={updateCardRateHandler}
          handleCloseModal={() => setState((s) => ({ ...s, showModal: false }))}
        />
      )}
    </>
  )
}

export default GiftCards
