'use client'
import React, { useState } from 'react'

import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'

const DatePickerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
      
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(true);
      }}
      >
        Open
      </button>
      <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(2022, 8, 8)}
        onSelect={(date) => {
          date.preventDefault()
          console.log('Selected date:', date);
          // Avoid any actions that could trigger a page reload
        }}
        minDate={new Date(2022, 10, 10)}
        maxDate={new Date(2023, 0, 10)}
        headerFormat='DD, MM dd'
      />
    </div>
  )
}

export default DatePickerComponent