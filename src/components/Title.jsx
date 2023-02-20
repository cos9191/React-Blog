import styled, { css } from "styled-components";

export const TitleSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    XSMALL: "xsmall",
};

const TitleSizeValue = {
    [TitleSize.BIG]: {
        fontSize: "44px",
        lineHeight: "50px",
    },
    [TitleSize.MEDIUM]: {
        fontSize: "36px",
        lineHeight: "41px",
    },
    [TitleSize.SMALL]: {
        fontSize: "24px",
        lineHeight: "31px",
    },
    [TitleSize.XSMALL]: {
        fontSize: "18px",
        lineHeight: "27px",
    },
};

const StyledTitle = styled.h1`
  font-weight: 700;
  margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
  color: ${props => props.color || props.theme.colors.primary};
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.SMALL];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }}
`;

const Title = (props) => {

    return <StyledTitle {...props}/>
};

export default Title;
