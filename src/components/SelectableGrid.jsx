import React, { useState } from 'react'

function SelectableGrid({ rows = 10, cols = 10 }) {
  // console.log(rows , cols)
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBox, setSelectedBox] = useState([])

  function handleMouseDown(boxNumber) {
    setIsMouseDown(true)
    // console.log(index)
    setSelectedBox([boxNumber])
  }

  function handleMouseUp() {
    setIsMouseDown(false)
    // console.log(index)
  }

  function handleMouseEnter(boxNumber) {
    if (isMouseDown) {
      const startBox = selectedBox[0];
      const endBox = boxNumber;

      const startRow = Math.floor((startBox - 1) / cols);
      const startCol = (startBox - 1) % cols;

      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);

      const minCol = Math.min(startCol , endCol);
      const maxCol = Math.max(startCol , endCol);

      const selected = [] ;

      for(let i=minRow ; i<=maxRow ; i++)
      {
        for(let j=minCol ; j<=maxCol ; j++)
        {
          selected.push(i*cols + (j+1))
        }
      }

      // console.log(selected)
      setSelectedBox(selected)

    }

  }
  return (
    <div className='grid' style={{ "--rows": rows, "--cols": cols }} >
      {
        [...Array(rows * cols).keys()].map((_, i) => <div key={i} className={`box ${selectedBox.includes(i+1) ? "include" : ""}`} onMouseDown={() => handleMouseDown(i + 1)} onMouseEnter={() => handleMouseEnter(i + 1)} onMouseUp={() => handleMouseUp(i + 1)}>
          {i + 1}
        </div>)
      }

    </div>
  )
}

export default SelectableGrid