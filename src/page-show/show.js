import {Component} from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {Button, Modal} from 'antd'

import ShowStore from './store-show'

const store = new ShowStore()

@observer
export default class Show extends Component {
  @observable modalVisible = false

  componentWillMount() {
    store.getContent()
  }

  render() {
    return (
      <div className="page-show">
        <h3>Store示例：</h3>
        <div>
          {
            store.content ?
              <div>
                <div>{store.content}</div>
                <Button onClick={() => store.clearContent()}>删除内容</Button>
              </div>
            :
              <Button onClick={() => store.getContent()}>加载内容</Button>
          }
        </div>

        <h3>UI状态示例：</h3>
        <Button onClick={() => this.openModal()}>打开浮层</Button>
        <Modal
          title="Basic Modal"
          visible={this.modalVisible}
          onOk={() => this.closeModal()}
          onCancel={() => this.closeModal()}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }

  @action openModal() {
    this.modalVisible = true
  }

  @action closeModal() {
    this.modalVisible = false
  }
}
