import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import {getPagesCountArray} from "../utils/getPagesCountArray";

const StyledPagination = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageButton = styled(Button)`
  padding: 10px;
  min-width: 38px;
  font-weight: ${(props) => props.active? 'bold' : 'normal'};
  border-color: ${(props) => props.active? 'orange' : 'teal' };
  color: ${(props) => props.active? 'orange' : 'teal' };
`;

const Pagination = ({totalPages, currentPage, setCurrentPage, ...props}) => {

    const pagesArray = getPagesCountArray(totalPages)

    const changePage = (page) => {
        setCurrentPage(page)
    }

    return (
        <StyledPagination {...props}>
            {pagesArray.map(page =>
                <PageButton
                    onClick={() => changePage(page)}
                    key={page}
                    active={page === currentPage}
                >
                    {page}
                </PageButton>
            )}
        </StyledPagination>
    )
};

export default Pagination;
