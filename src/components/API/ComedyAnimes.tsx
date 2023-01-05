const basicFetch = async (link: any) => {
  const req = await fetch(link)
  const json = await req.json();
  return json
}

export default{
  getList: async () => {
    return[
      {
        slug: 'Comédia',
        items: await basicFetch('https://kitsu.io/api/edge/anime?filter[categories]=comedy')
      }
    ]
  }
}