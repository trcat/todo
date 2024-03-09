export interface TodoItem {
  key: Array<string>,
  value: { title: string, description?: string},
  versionstamp: string
}