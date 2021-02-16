import React, { useState } from 'react'
import { Modal, Switch, Radio, Input, Button } from 'antd'
import { Capitalize } from '../../../../../helpers'

const GiftModal = ({
  activeCardData,
  showModal,
  handleCloseModal,
  handleSubmitForm,
}) => {
  const [
    { activeCurrency, isAvailable, NGN, GHS, min, max },
    setFormState,
  ] = useState({
    activeCurrency: `${activeCardData.type_currency[0].currency}_${activeCardData.type_currency[0].type}`,
    isAvailable: false,
    NGN: 0,
    GHS: 0,
    min: 0,
    max: 0,
  })

  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }

  const submitForm = () => {
    const argument =
      activeCardData.cardName +
      '.' +
      activeCurrency.split('_')[0] +
      '.' +
      activeCurrency.split('_')[1]
    handleSubmitForm(argument, {
      rates: [
        {
          min,
          max,
          rate: {
            NGN,
            GHS,
          },
          isAvailable,
        },
      ],
    })
  }
  return (
    <Modal
      title={`${activeCardData.cardName} details`}
      visible={showModal}
      onCancel={handleCloseModal}
      footer={[
        <Button
          key="submit"
          type={'primary'}
          from={'currencyForm'}
          onClick={() => submitForm()}
        >
          Submit
        </Button>,
      ]}
    >
      <form
        id="currencyForm"
        onSubmit={(e) => {
          e.preventDefault()
          submitForm()
        }}
      >
        <label style={{ marginBottom: 12 }}>
          <p>Enable buying</p>
          <Switch
            checked={isAvailable}
            onChange={(value) => {
              setFormState((s) => ({ ...s, isAvailable: value }))
            }}
          />
        </label>

        <div>
          <h4>Card Type</h4>
          {activeCardData && activeCardData.type_currency && (
            <Radio.Group
              name="radiogroup"
              value={activeCurrency}
              onChange={({ target }) => {
                setFormState((s) => ({ ...s, activeCurrency: target.value }))
              }}
            >
              {activeCardData.type_currency.map((item) => (
                <Radio
                  value={`${item.currency}_${item.type}`}
                  key={`${item.currency}_${item.type}`}
                >
                  {item.type}
                </Radio>
              ))}
            </Radio.Group>
          )}
        </div>

        <div>
          <span
            style={{ fontWeight: 'bold', fontSize: '1rem', marginRight: '2em' }}
          >
            Currency:
          </span>
          {activeCurrency.split('_')[0].toUpperCase()}
        </div>
        <br />
        <label style={{ marginBottom: 12 }}>
          <p>NGN rate</p>
          <Input
            placeholder={'NGN 100'}
            value={NGN}
            name="NGN"
            onChange={handleInput}
          />
        </label>
        <br />
        <br />
        <label style={{ marginBottom: 12 }}>
          <p>GHS rate</p>
          <Input
            placeholder={'GHS 100'}
            value={GHS}
            name="GHS"
            onChange={handleInput}
          />
        </label>

        <label style={{ marginBottom: 12 }}>
          <p>min (dollars)</p>
          <Input
            placeholder={'$100'}
            value={min}
            name="min"
            onChange={handleInput}
          />
        </label>
        <br />
        <br />
        <label style={{ marginBottom: 12 }}>
          <p>max (dollars)</p>
          <Input
            placeholder={'$100'}
            value={max}
            name="max"
            onChange={handleInput}
          />
        </label>
      </form>
    </Modal>
  )
}

export default GiftModal
