import styled from 'styled-components'

export const StyledBigImg = styled.img`
    width: 256px;
    height: 256px;
    margin-bottom: 25px;
`

export const StyledTable = styled.table`
    width: 100%;
`

export const StyledTableHead = styled.thead`
`

export const StyledTableBody = styled.tbody`
`

export const StyledTableHeadCell = styled.th`
    text-align: center;
    color: black;
    font-size: 18px;
`

export const StyledTableBodyRow = styled.tr<{rowIndex: number}>`
    ${(props) => props.rowIndex % 2 === 0 ? `background-color: #E8E8E8;` : ''}
`

export const StyledTableBodyCell = styled.td`
    text-align: center;
    color: black;
    font-size: 16px;
    font-weight: lighter;
`

export const PaginatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PaginatorButton = styled.button`
    margin: 5px;
`

export const CenteredContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 2em;
`

export const CenteredColumnContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`