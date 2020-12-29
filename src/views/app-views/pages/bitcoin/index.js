import * as React from 'react'
import {Card, Row, Col, Switch, Input, Button} from 'antd'

/**
 * you can add other props that will be needed to make this work well
 * depending on what you have from the api
 **/

const BitcoinDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const [enableBuying, setEnableBuying] = React.useState(false)
  // eslint-disable-next-line no-unused-vars
  const [enableSelling, setEnableSelling] = React.useState(false)

  return (
    <Row gutter={16}>
      <Card style={{width: '100%', maxWidth: '500px', margin: 'auto'}}>
        <form action="">
          <Col>
            <label>
              <span>Buy price</span>
              <Input placeholder={'$1200'}/>
            </label>
            <br/>
            <br/>
            <label>
              <span>Sell price</span>
              <Input placeholder={'$1200'}/>
            </label>
            <br/>
            <br/>
            <label>
              <p>
                Enable Buying
              </p>
              <Switch checked={enableBuying}/>
            </label>
            <br/>
            <br/>
            <label>
              <p>
                Enable Selling
              </p>
              <Switch checked={enableSelling}/>
            </label>
            <br/>
            <br/>
            <Button type={'primary'}>
              Submit
            </Button>
          </Col>
        </form>
      </Card>
    </Row>
  )
}

export default BitcoinDetails;
