
一个点击增加数字的原始react写法：
```javascript
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleClickBtn = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClickBtn}>Click Me</button>
      </div>
    );
  }
}
```
react hooks写法：
```javascript
import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}
export default Example;
```
Hooks本质上就是一类特殊的函数,hooks的目的就是让你不再写class，让function一统江湖。
#### useState
>useState是react自带的一个hook函数，它的作用是用来声明状态变量。
useState这个函数接收的参数是状态的初始值(Initial state)，它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数。
声明一个状态：
```javascript
// 声明一个状态
const [count, setCount] = useState(0)

{/* 读取状态中的值 */}
<p>You clicked {count} times</p>

{/* 改变state中的值， 直接调用setCount函数，这个函数接收的参数是修改过的新状态值。*/}
<button onClick={()=>{setCount(count+1)}}>Click Me</button>
```