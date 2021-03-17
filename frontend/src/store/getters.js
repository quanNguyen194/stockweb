export default {
  token: (state) => state.token,
  user: (state) => state.user,
  isLoading: (state) => state.flags.isLoading,
  isAdminPage: (state) => state.user.role === 'admin',
  store: (state) => state.store,
  company: (state) => state.company
}
