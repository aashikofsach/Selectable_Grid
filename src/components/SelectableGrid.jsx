import React, { useState } from 'react'

function SelectableGrid({ rows = 10, cols = 10 }) {
  // console.log(rows , cols)
  const [isMouseDown, setIsMouseDown] = useState(false);

  function handleMouseDown(index) {
    setIsMouseDown(true)
    console.log(index)
  }

  function handleMouseUp(index) {
    setIsMouseDown(false)
    console.log(index)
  }

  function handleMouseEnter(index) {
    if (setIsMouseDown)
      console.log(index)
  }
  return (
    <div className='grid' style={{ "--rows": rows, "---cols": cols }} >
      {
        [...Array(rows * cols).keys()].map((_, i) => <div key={i} className='box' onMouseDown={() => handleMouseDown(i + 1)} onMouseEnter={() => handleMouseEnter(i + 1)} onMouseUp={() => handleMouseUp(i + 1)}>
          {i + 1}
        </div>)
      }

    </div>
  )
}

export default SelectableGrid