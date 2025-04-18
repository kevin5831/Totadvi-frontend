// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    jwt: {
      landing:`${ROOTS.AUTH}/landing`, 
      login: `${ROOTS.AUTH}/login`,
      register: `${ROOTS.AUTH}/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    forecastRevnue: `${ROOTS.DASHBOARD}/forecastRevenue`,
    coaUpload: `${ROOTS.DASHBOARD}/coaUpload`,
    transactionUpload: `${ROOTS.DASHBOARD}/transactionUpload`,
    admin: {
      root: `${ROOTS.DASHBOARD}/admin`,
      checkList: `${ROOTS.DASHBOARD}/admin/checkList`,
      userManagement: `${ROOTS.DASHBOARD}/admin/userManagement`,
    },
    subscription: `${ROOTS.DASHBOARD}/subscription`,
    help: `${ROOTS.DASHBOARD}/help`
  },
};
