import React, { useState } from 'react'

function TransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  })

  //Function for handling the submit form
  function handleSubmit(event) {
    event.preventDefault()
    // console.log(formData)
  }
  //Function for handling onChange event
  function handleChange(event){
    // const key = event.target.value
    console.log(event.target)
    setFormData({...formData, date: event.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" id="date" value={formData.date} onChange={handleChange}/>
      <input type="text" id="description" placeholder='Description' value={formData.description} onChange={handleChange}/>
      <input type="text" id='category' placeholder='category' value={formData.category} onChange={handleChange}/>
      <input type="number" id='amount' placeholder='Amount' value={formData.amount}onChange={handleChange}/>
      <input type="submit" value="Add Transaction" />
    </form>
  )
}

export default TransactionForm

