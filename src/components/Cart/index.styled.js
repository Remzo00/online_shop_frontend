import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 48px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 8px;
  }

  p {
    color: #718096;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 32px;
`;

export const CartGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

export const CartItemCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border: 1px solid #e2e8f0;
`;

export const ItemContent = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ItemImageContainer = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  color: #718096;
`;

export const PriceQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityLabel = styled.span`
  color: #4a5568;
`;

export const QuantityInput = styled.input`
  width: 64px;
  padding: 4px 8px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  text-align: center;
`;

export const PriceContainer = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
`;

export const UnitPrice = styled.div`
  font-size: 14px;
  color: #718096;
`;

export const RemoveButton = styled.button`
  padding: 8px 16px;
  color: #e53e3e;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #fff5f5;
  }
`;

export const SummaryCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border: 1px solid #e2e8f0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  &.total {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
  }
`;

export const SummaryLabel = styled.span`
  color: #4a5568;
  font-size: 16px;
`;

export const SummaryValue = styled.span`
  color: #2d3748;
  font-weight: 600;

  &.total {
    font-size: 20px;
    color: #2d3748;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182ce;
  }
`;
