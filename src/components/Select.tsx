import { ComponentPropsWithoutRef } from 'react'

type SelectProps = {
  options: {
    option: string
    value: string
  }[]
  label: string
  id: string
  defaultOption: string
} & ComponentPropsWithoutRef<'select'>

const Select = ({
  options,
  label,
  id,
  defaultOption,
  ...otherProps
}: SelectProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...otherProps} className='filter-dropdown'>
        <option value={defaultOption}>{defaultOption}</option>
        {options.map(({ value, option }) => (
          <option key={value} value={value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
