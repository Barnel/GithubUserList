import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { fetchUser } from '../apiClient';
import { useHistory } from "react-router"
import { RawUser, User } from './UserUtils';
import { CustomPageContainer } from './UserStyledComponents';
import { CenteredContainer, CenteredColumnContainer, StyledTableBodyRow, StyledTableHeadCell, StyledTableBodyCell, StyledTable, StyledBigImg } from '../utils/UtilStyledComponents';

export interface UserDetailsUrlParams {
    name: string
}

export const UserDetails: React.FC<any> = () => {
    const history = useHistory()
    const params = useParams<UserDetailsUrlParams>()
    const userName = params.name

    const [user, setUser] = useState<User>()

    useEffect(() => {
        fetchUser(userName).then((rawUser: RawUser) => {
            console.log(rawUser)
            setUser(new User(rawUser))})
            
    }, [userName])

    return (
        <CustomPageContainer>
            <CenteredContainer>
                <button onClick={() => history.goBack()}>Back</button>
            </CenteredContainer>
            {user && 
            <CenteredColumnContainer>
                <StyledBigImg
                    src={user.avatarUrl}
                    alt="avatar"
                />
                <StyledTable>
                    <StyledTableBodyRow rowIndex={0}>
                        <StyledTableHeadCell>Github name</StyledTableHeadCell>
                        <StyledTableBodyCell>{user.userName  || '-'}</StyledTableBodyCell>
                    </StyledTableBodyRow>
                    <StyledTableBodyRow rowIndex={1}>
                        <StyledTableHeadCell>Real name</StyledTableHeadCell>
                        <StyledTableBodyCell>{user.userRealName}</StyledTableBodyCell>
                    </StyledTableBodyRow>
                    <StyledTableBodyRow rowIndex={2}>
                        <StyledTableHeadCell>Bio</StyledTableHeadCell>
                        <StyledTableBodyCell>{user.bio || '-'}</StyledTableBodyCell>
                    </StyledTableBodyRow>
                    <StyledTableBodyRow rowIndex={3}>
                        <StyledTableHeadCell>Followers</StyledTableHeadCell>
                        <StyledTableBodyCell>{user.followers}</StyledTableBodyCell>
                    </StyledTableBodyRow>
                    <StyledTableBodyRow rowIndex={4}>
                        <StyledTableHeadCell>Location</StyledTableHeadCell>
                        <StyledTableBodyCell>{user.location || '-'}</StyledTableBodyCell>
                    </StyledTableBodyRow>
                </StyledTable>
            </CenteredColumnContainer>}
        </CustomPageContainer>
    )
}