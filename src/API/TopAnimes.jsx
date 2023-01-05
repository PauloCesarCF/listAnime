const basicFetch= async (link) => {
  const req = await fetch(link)
  const json = await req.json();
  return json
}

export default{
  getList: async () => {
    return[
      {
        slug: 'Animes em alta',
        items: await basicFetch('https://kitsu.io/api/edge/trending/anime')
      }
    ]
  }
}