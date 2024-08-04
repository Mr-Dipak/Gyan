import React from 'react'

function SecondaryButton({ButtonText,onClickEvent, path}) {
  return (
    <button
    onClick={()=>{
      onClickEvent(path);

    }}
    type="button"
    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
    {ButtonText}
    </button>
    
  )
}

export default SecondaryButton