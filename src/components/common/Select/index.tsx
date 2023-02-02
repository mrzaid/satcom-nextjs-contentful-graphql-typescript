import React, { useEffect, useRef, useState } from 'react'
import { ArrowDown } from '../Icons'
type SelectProps = {
  className?: string
  options: string[]
  onChange?: (value: string) => void
}
const Select: React.FC<SelectProps> = ({ className, options, onChange }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    const clickEventHandler = (ev: MouseEvent) => {
      if (dropdownRef.current) {
        const shouldClose = !!!dropdownRef.current.contains(ev.target as Node)
        if (shouldClose) {
          setIsOpen(false)
        }
      }
    }
    setTimeout(() => {
      document.addEventListener('click', clickEventHandler)
    }, 10)
    return () => {
      document.removeEventListener('click', clickEventHandler)
    }
  }, [])

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    onChange?.(value)
  }
  return (
    <div
      ref={dropdownRef}
      className={'relative w-full ' + (className && className)}
    >
      <div className="flex w-full">
        <div className="px-5 w-full border-[1px] border-r-[0] border-black rounded-l-xl py-[11px] xl:px-[30px] xl:py-[9px] duration-300 ease-out">
          {selectedOption || '...'}
        </div>
        <button
          type="button"
          onClick={toggling}
          className="bg-black p-[8.5px] arrow-btn cursor-pointer duration-300 dropdown-btn rounded-r-xl"
        >
          <i>
            <ArrowDown className="arrow" />
          </i>
        </button>
      </div>
      <div
        className="absolute duration-300 z-[5] custom-scroll mt-3 border-[1px] border-black rounded-xl w-full dropdown-list overflow-auto max-w-[inherit]"
        style={isOpen ? { maxHeight: 284 } : { maxHeight: 0, opacity: 0 }}
      >
        <ul className="w-full h-full py-[11px] xl:py-[9px] overflow-hidden bg-white">
          {options.map((option, i) => (
            <li
              className="cursor-pointer capitalize leading-7 px-5 xl:px-[30px] duration-100 hover:bg-yellowLight "
              onClick={onOptionClicked(option)}
              key={i}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
