export function getQuery(client: any, key: string) {
  return client.from(key).select('*');
}
