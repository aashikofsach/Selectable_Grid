import React from 'react'

function SelectableGrid({rows=10, cols=10}) {
  console.log(rows , cols)
  return (
    <div className='grid'>
      {
        [...Array(rows*cols).keys()].map((_,i)=> <div> 
          {i+1}
        </div>)
      }

    </div>
  )
}

export default SelectableGrid