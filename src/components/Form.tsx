import React, { useState } from 'react'





const Form = () => {

  const handleSubmit = () => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='nameProduct' placeholder='Name product' />
      </form>
    </div>
  )
}

export default Form
