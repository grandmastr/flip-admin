import * as React from 'react'
import {Card, Row, Col, Modal, Switch, Input, Button} from 'antd'
import {EditOutlined} from "@ant-design/icons";

/**
 * you can add other props that will be needed to make this work well
 * depending on what you have from the api
 **/
const Giftcard = ({slug, name, title, imageSource}) => {
  const [visible, setVisible] = React.useState(false)
  const [enableBuying, setEnableBuying] = React.useState(false)

  const onChange = () => setEnableBuying(b => !b)

  return (
    <>
      <Card title={title || 'Steam'} extra={<EditOutlined onClick={() => setVisible(true)}/>} style={{width: 300}}>
        <p>Current price - $100</p>
        <img src={imageSource || 'https://swifttradesng.netlify.app/static/media/steam.aa6ed68b.png'} alt="steam card"
             style={{width: '100%'}}/>
      </Card>
      <Modal
        title={`${title} details`}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="submit" type={'primary'} onClick={console.log}>
            Submit
          </Button>
        ]}
      >
        <form action="">
          <label style={{marginBottom: 12}}>
            <p>
              Enable buying
            </p>
            <Switch defaultChecked checked={enableBuying} onChange={onChange}/>
          </label>
          <br/>
          <br/>
          <label style={{marginBottom: 12}}>
            <p>
              New Price
            </p>
            <Input placeholder={'$120'}/>
          </label>
        </form>
      </Modal>
    </>
  )
}

const GiftCards = () => {
  return <>
    <Row gutter={[40, 40]}>
      <Col span={6}>
        <Giftcard imageSource={'https://swifttradesng.netlify.app/static/media/hulu.f5335b13.webp'}
                  title={'Hulu card'}/>
      </Col>
      <Col span={6}>
        <Giftcard title={'Steam card'}/>
      </Col>
      <Col span={6}>
        <Giftcard imageSource={'https://swifttradesng.netlify.app/static/media/itunes.b485b84e.webp'}
                  title={'iTunes card'}/>
      </Col>
    </Row>
  </>
}

export default GiftCards;
