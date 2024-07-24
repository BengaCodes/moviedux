import { ComponentPropsWithoutRef } from 'react'

type InputProps = ComponentPropsWithoutRef<'input'> & {
  id: string
  type: string
  label: string
}

const Input = ({ id, type, label, ...otherProps }: InputProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ fontSize: '24px' }} htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} {...otherProps} className='search-input' />
    </div>
  )
}

export default Input
