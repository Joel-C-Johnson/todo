import React from 'react'

export default function Template(props) {
    const {data, setData} = props;
  return (
    <div>
        <h3>Template - {data}</h3>
        <button onClick={() => setData(data + 10)}>Add 10</button>
    </div>
  )
}
