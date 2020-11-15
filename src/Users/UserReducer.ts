import { Action } from "../utils/Action";
import { UserActions } from "./UserUtils";

export class UserState {
    pageNumber: number
    pageSize: number

    constructor(pageNo: number = 0, pageSize: number = 10) {
        this.pageNumber = pageNo
        this.pageSize = pageSize
    }
}

export const UserReducer = (state: UserState = new UserState(), action: Action) => {
    switch (action.type) {
      case UserActions.changePage:
        return new UserState(action.payload);
      default:
        return state;
    }
  };