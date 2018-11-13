import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      //创建一个初始的todolist
      list: [
        'get up',
        'coding',
        'sleep',
      ],
      inputVal: ''
    }
  }
  //...生命周期函数，暂时不需要关注

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  //添加按钮onClick时，添加事项，然后更新list
  addItem() {
    let { list } = this.state

    let inputVal = this.inputVal
    if (inputVal !== undefined) {//有输入的情况下去掉值中两头空格
      inputVal = inputVal.replace(/^\s+|\s+$/g, "")
    }
    //如果输入框的值为空，则返回，否则添加到事项列表
    if (inputVal == '' || inputVal == undefined) return
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }
  //输入框onInput的时候，它的值暂存起来
  inputHandler(e) {
    //不参与渲染的变量可不使用state储存，提高性能
    this.inputVal = e.target.value
  }

  //根据索引删除事项，然后更新list
  delItem(index) {
    let { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    let { list, inputVal } = this.state;
    // console.log(this.state)
    return (
      <View className='index'>
        <Input className='input' type='text' value={inputVal} onInput={this.inputHandler.bind(this)}></Input>
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        <View className='list_wrap'>
          <Text>taro实战Todo list demo</Text>
          {
            list.map((item, index) => {
              return <View className='list' key='index'>
                <Text>{index + 1}.{item}</Text>
                <Text className='del' onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}

