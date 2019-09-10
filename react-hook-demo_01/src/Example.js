import React, { useState } from 'react';
function Example() {
  // 数组解构，声明一个状态
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* 读取状态中的值 */}
      <p>You clicked {count} times</p>
      {/* 改变state中的值 */}
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Example;