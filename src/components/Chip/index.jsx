/* eslint-disable react/prop-types */
import { ChipContainer } from "./index.styled";

export default function Chip({ categories=[], selectedCategory, onSelectCategory,}){
    return(
        <ChipContainer>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category === selectedCategory ? null : category)}
          style={{
            backgroundColor: selectedCategory === category ? "#007bff" : "#f0f0f0",
            color: selectedCategory === category ? "#fff" : "#000",
            padding: "8px 16px",
            margin: "0 8px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {category}
        </button>
      ))}
    </ChipContainer>
    )
}