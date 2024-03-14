export interface TodoData {
  title: string
  description?: string
  id?: string
}

export interface TodoItem {
  key: Array<string>
  value: TodoData
  versionstamp: string
}
