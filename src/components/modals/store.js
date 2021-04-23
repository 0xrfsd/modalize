// store.js
import { createStore, use, set } from 'hooks-state'

const login = createStore({
  username: 'gmonking',
  password: '123',
})

export const useStore = use(login)
export const setStore = set(login)