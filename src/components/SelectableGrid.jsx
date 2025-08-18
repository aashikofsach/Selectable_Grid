import React from 'react'

function SelectableGrid({rows=10, cols=10}) {
  console.log(rows , cols)
  return (
    <div className='grid' style={{"--rows": rows, "---cols":cols}}>
      {
        [...Array(rows*cols).keys()].map((_,i)=> <div className='box'> 
          {i+1}
        </div>)
      }

    </div>
  )
}

export default SelectableGrid