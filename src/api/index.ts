import { storageKey } from '../utils'
import type { TodoItem } from './types'

function getDomain() {
  const mode = import.meta.env.MODE
  if (mode === 'production') {
    return localStorage.getItem(storageKey)
  } else if (mode === 'development') {
    return 'http://localhost:8000'
  }
}

async function fetchAPI(input: RequestInfo | URL, init?: RequestInit | undefined) {
  try {
    const res = await fetch(input, init)
    const data = res.json()
    return data
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message)
    } else {
      alert(e)
    }
    console.error(e)
  }
}

export async function getTodo(): Promise<TodoItem[]> {
  return fetchAPI(`${getDomain()}/todo`, { method: 'GET' })
}

export * from './types'