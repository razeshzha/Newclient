'use client'
import React, { useEffect, useState } from 'react'

interface IProp {
  value: number;
  setValue: (x: number) => void;
}

export const QuantityInput: React.FC<IProp> = ({ value, setValue }) => {
  const [quantity, setQuantity] = useState(value)

  const increaseQTY = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQTY = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    if (!isNaN(val) && val >= 1) {
      setQuantity(val)
    }
  }

  useEffect(() => {
    setValue(quantity)
  }, [quantity, setValue])

  return (
    <div className='flex items-center rounded-md border border-blue-500 w-fit my-2'>
      <button
        className='text-2xl font-bold h-10 w-10 cursor-pointer aspect-square'
        onClick={decreaseQTY}
      >
        -
      </button>
      <input
        type="number"
        className='max-w-[100px] text-center outline-none'
        value={quantity}
        onChange={handleChange}
      />
      <button
        className='text-2xl font-bold h-10 w-10 cursor-pointer aspect-square'
        onClick={increaseQTY}
      >
        +
      </button>
    </div>
  )
}
