import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveTweets } from './tweets';
import { receiveUsers } from './tweets';

export const AUTHED_ID = 'sarah_edo';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ tweets, users }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
