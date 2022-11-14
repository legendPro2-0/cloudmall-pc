import { defineStore } from 'pinia'
import http from '../utils/http'

export const useShopsStore = defineStore('shops', () => {
  http.get('');
  return {  }
})
