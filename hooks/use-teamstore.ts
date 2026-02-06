import { create } from 'zustand'

type TeamStore = {
  refresh: boolean
  toggleRefresh: () => void
}

export const useTeamStore = create<TeamStore>(set => ({
  refresh: false,
  toggleRefresh: () => set(state => ({ refresh: !state.refresh }))
}))
