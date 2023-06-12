
export async function getFlower(id){
  const data = await fetchData(`/api/flowers/${id}`, `Load flower ${id} failed`)
  console.log(data)
  return data
}
export async function getHomeFlowers(){
  const data = await fetchData("/api/flowers", "Failed to fetch host flowers")
  return data
}
export async function getFlowerpotAndBouquet(){
  const data = await fetchData('/api/FlowerpotAndBouquet', 'Load flowerpots and bouquet failed')
  return data
}
export async function getHostFlowers(id){
  const data = await fetchData(`/api/host/flowers/${id}`, `Load flower ${id} failed`)
  return data
}
async function fetchData(path, errorMessage){
  const res =  await fetch(path)
  if(!res.ok){
    const error = new Error(errorMessage);
    error.statusText = res.statusText;
    error.status = res.status;
    throw error;
  }
  const data = await res.json()
  return data.flowers
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message);
    error.statusText = res.statusText;
    error.status = res.status;
    throw error
  }

  return data
}