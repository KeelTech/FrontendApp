import * as USER_ACTIONS from './commons/user.js';
import * as AUTH_ACTIONS from './commons/auth.js';
import * as LOGIN_ACTIONS from './commons/login.js';
import * as SIGNUP_ACTIONS from './commons/signup.js';
import * as PASSWORD_RESET_ACTIONS from './commons/passwordReset';
import * as CONSUMER_TASKS from './commons/consumerTaskInfo.js';
import * as AGENT_TASKS from './commons/agentTask.js';
import * as DOCUMENT_VAULT from './commons/documentVault.js';
import * as CHAT from './commons/chat.js';

module.exports = Object.assign(
  {},
  USER_ACTIONS,
  AUTH_ACTIONS,
  LOGIN_ACTIONS,
  SIGNUP_ACTIONS,
  PASSWORD_RESET_ACTIONS,
  CONSUMER_TASKS,
  AGENT_TASKS,
  DOCUMENT_VAULT,
  CHAT
);
