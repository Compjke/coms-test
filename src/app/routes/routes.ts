// src/routes.ts

export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT_US: '/about-us',
  CATALOG: '/catalog',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
  CONTACTS_AND_SUPPORT: '/contacts-and-support',

  // Auth routes
  AUTH: '/auth',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGIN: '/auth/login',
  AUTH_RESET_PASSWORD: '/auth/reset-password',
  AUTH_NEW_PASSWORD: '/auth/:resetToken/reset-password',
  AUTH_EMAIL_CONFIRMATION: '/auth/:confirmationToken/email-confirmation',
  AUTH_PASSWORD_CHANGE: '/auth/:resetToken/password-change',
  AUTH_EMAIL_CHANGE: '/auth/:actionToken/email-change',
  AUTH_EMAIL_CANCELLATION: '/auth/:actionToken/email-change-cancellation',
  AUTH_DELETE_ACCOUNT: '/auth/:deletionToken/delete-account',
  LOGIN_CALLBACK: '/login-callback',
  LOGOUT_CALLBACK: '/logout-callback',

  // Private routes
  PERSONAL_CABINET: '/personal-cabinet',
  PERSONAL_CABINET_MAIN_INFO: '/personal-cabinet/main-information',
  PERSONAL_CABINET_MAIN_INFO_EDIT: '/personal-cabinet/main-information/edit',
  PERSONAL_CABINET_ABOUT_ME: '/personal-cabinet/about-me',
  PERSONAL_CABINET_ABOUT_ME_EDIT: '/personal-cabinet/about-me/edit',
  PERSONAL_CABINET_ADDRESS: '/personal-cabinet/address',
  PERSONAL_CABINET_ADDRESS_EDIT: '/personal-cabinet/address/edit',
  PERSONAL_CABINET_OCCUPATION: '/personal-cabinet/occupation',
  PERSONAL_CABINET_OCCUPATION_EDIT: '/personal-cabinet/occupation/edit',
  PERSONAL_CABINET_ACCOUNT_SETTINGS: '/personal-cabinet/account-settings',
  PERSONAL_CABINET_ACCOUNT_SETTINGS_EDIT: '/personal-cabinet/account-settings/edit',
  MY_APPLICATIONS: '/my-applications',

  // Information
  INFO: '/info',

  // Fallback route
  NOT_FOUND: '*', // Catch-all route for 404 Not Found pages
};