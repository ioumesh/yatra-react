import styled from "styled-components";

const StyledHomepageBody = styled.div`
    display: flex;
    background-color:#fdfafa;
    max-width: 1440px;

    @media all and (max-width: 900px) {
        flex-direction: column;
    }
`;

export { StyledHomepageBody };