import React from 'react'
import { Container } from './styles'

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    
}

const SelectedInput: React.FC<ISelectInputProps> = ({ options}) => {
  return (
    <Container>
        <select>
            {
                options.map(option => (
                    <option
                    key={option.value}
                    value={option.value}>{option.label}</option>
                ))
            }
        </select>
    </Container>
  )
}

export default SelectedInput