import * as CONSTANTS from '_constants';
import _ from 'lodash';

const _defaultState = 'morning-brief';

const activeTemplate = (state = _defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_TEMPLATE:
      return action.uid;

    default:
      return state;
  }
}

export default activeTemplate;
