import React from 'react';
import {Button, message} from 'antd'

function App() {
  const handleClick = () => {
    message.success('success')
  }
  return (
    <div>
     <h1> react admin init</h1>
     <Button type='primary' onClick={handleClick}>primary</Button>
    </div>
  );
}

export default App;
