import Taro, { Component } from '@tarojs/taro'
//Provider组件使组件层级中的connect()方法都能够获得Redux store
import { Provider } from '@tarojs/redux'

import configStore from './store'
import Index from './pages/index'

import './app.scss'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>

    )
  }
}

Taro.render(<App />, document.getElementById('app'))
