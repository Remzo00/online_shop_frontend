/* eslint-disable react/prop-types */
import { ChipContainer } from "./index.styled";

export default function Chip({ categories, selectedCategory, onSelectCategory,}){
    return(
        <ChipContainer>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{
            backgroundColor: selectedCategory === category ? '#007bff' : '#e9ecef',
            color: selectedCategory === category ? 'white' : 'black',
            border: 'none',
            padding: '8px 16px',
            margin: '4px',
            borderRadius: '16px',
            cursor: 'pointer'
          }}
        >
          {category}
        </button>
      ))}
    </ChipContainer>
    )
}