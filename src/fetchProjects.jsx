import { useState, useEffect } from "react"
import { createClient } from "contentful"

const client = createClient({
  space: "uyniivyx5mup",
  environment: "master",
  accessToken: "EbiKMShE6QNaKssF8KH5oUYdMnF2O1G_TvP8WOVJ-_s"
})

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = item?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { isLoading, projects }
}
