import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`;

export const RightCell = styled.td`
  display: flex;
  align-items: left;
  justify-content: end;
  gap: 20px;
  height: 100%;
`;

export const GreyButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  line-height: 1px;
  color: #666666;
  background-color: #d8d8d8;
  cursor: pointer;
`;

export const Icon = styled.span`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTh = styled.th`
  width: 280px;
  height: 60px;
`;

export const HeadText = styled.span`
  color: #666666;
  font-weight: 400;
`;

export const NameText = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;

export const LangText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666666;
`;
