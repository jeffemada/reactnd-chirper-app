import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';

export const AUTHED_ID = 'sarah_edo';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ tweets, users }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
