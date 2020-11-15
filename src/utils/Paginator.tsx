import React from 'react'
import { PaginatorButton, PaginatorContainer } from './UtilStyledComponents'

export interface PaginatorProps {
    currentPageIndex: number
    changePage: (newPageNumber: number) => void
}

export const Paginator: React.FC<PaginatorProps> = ({currentPageIndex, changePage}) => {
    return <PaginatorContainer>
        <p>Current page: {currentPageIndex+1}</p>
        <div>
            <PaginatorButton onClick={() => changePage(0)}>First</PaginatorButton>
            <PaginatorButton onClick={() => changePage(currentPageIndex-1 >= 0 ? currentPageIndex - 1 : 0)}>Previous</PaginatorButton>
            <PaginatorButton onClick={() => changePage(currentPageIndex+1)}>Next</PaginatorButton>
        </div>
    </PaginatorContainer>
}