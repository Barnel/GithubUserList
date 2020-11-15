import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../apiClient'
import { useHistory } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../App'
import { Paginator } from '../utils/Paginator'
import { RawUser, User, UserActions } from './UserUtils'
import { CustomPageContainer } from './UserStyledComponents'
import { StyledTableBodyCell, StyledTableHeadCell, StyledTable, StyledTableBody, StyledTableHead, StyledTableBodyRow } from '../utils/UtilStyledComponents'

export const UserList: React.FC = () => {
    const { pageNumber, pageSize } = useSelector((appState: AppState) => appState.userState)
    const history = useHistory()
    const dispatch = useDispatch()

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(pageNumber)

    useEffect(() => {
        dispatch({
            type: UserActions.changePage,
            payload: page
        })
        
        const minimumUserId = page*pageSize
        fetchUsers(minimumUserId).then((rawUsers) => {
            setUsers(rawUsers.map((rawUser: RawUser) => new User(rawUser)))
        })
    }, [page, pageSize, dispatch])

    const routeChange = (name: string) =>{ 
        let path = `/users/${name}`;
        history.push(path);
      }

    return <CustomPageContainer>
        <StyledTable>
            <StyledTableHead>
                <StyledTableHeadCell>Avatar</StyledTableHeadCell>
                <StyledTableHeadCell>Name</StyledTableHeadCell>
            </StyledTableHead>
            <StyledTableBody>
                {users.map((user: User, index: number) => {
                    return <StyledTableBodyRow key={user.id} rowIndex={index}>
                        <StyledTableBodyCell onClick={() => routeChange(user.userName)}>
                            <img
                                width="64"
                                height="64"
                                src={user.avatarUrl}
                                alt="avatar"
                            />
                        </StyledTableBodyCell>
                        <StyledTableBodyCell>{user.userName}</StyledTableBodyCell>
                    </StyledTableBodyRow>
                })}
            </StyledTableBody>
        </StyledTable>
        <Paginator currentPageIndex={page} changePage={setPage}/>
    </CustomPageContainer>
}