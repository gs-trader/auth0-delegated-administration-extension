export const AUDITOR_ACCESS_LEVEL = 0;

export const USER_ACCESS_LEVEL = 1;

export const ADMIN_ACCESS_LEVEL = 2;

export const AUDITOR_ROLE_NAME = 'Delegated Admin - Auditor';

export const USER_ROLE_NAME = 'Delegated Admin - User';

export const ADMIN_ROLE_NAME = 'Delegated Admin - Administrator';

export const AUDITOR_PERMISSION = 'read:users';

export const USER_PERMISSION = 'manage:users';

export const ADMIN_PERMISSION = 'manage:config';

export const VALID_SCRIPTS = [
  'access',
  'filter',
  'create',
  'memberships',
  'settings'
];
