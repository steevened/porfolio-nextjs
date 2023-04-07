export async function mutatePortfolio(client: any, key: any, data: any) {
  return client.from(key).insert(data).select();
}
