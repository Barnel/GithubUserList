export const UserActions = {
    changePage: 'CHANGE_PAGE'
}

export interface RawUser {
    avatar_url: string
    login: string
    bio: string
    id: string
    name: string
    followers: number
    location: string
}

export class User {
    avatarUrl: string
    userName: string
    userRealName: string
    bio: string
    id: string
    followers: number
    location: string

    constructor(user: RawUser) {
        this.avatarUrl = user.avatar_url
        this.userName = user.login
        this.bio = user.bio
        this.id = user.id
        this.userRealName = user.name
        this.followers = user.followers
        this.location = user.location
    }
}
