import React from 'react'

const Props = (Props) => {
    let name = Props.name
  return (
    <div>
        <button onClick={Props.click} className={Props.button}>{name}</button>
    </div>
  )
}

export default Props