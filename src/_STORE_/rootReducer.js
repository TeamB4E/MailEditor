import { combineReducers } from 'redux';

import templates from './templates';
import lastOpenedTemplates from './lastOpenedTemplates';
import activeTemplate from './activeTemplate';

const rootReducer = combineReducers({
  templates,
  lastOpenedTemplates,
  activeTemplate,
});

export default rootReducer;
