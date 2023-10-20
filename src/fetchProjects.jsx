import { createClient } from "contentful"

const client = createClient({
  space: "uyniivyx5mup",
  environment: "master",
  accessToken: "EbiKMShE6QNaKssF8KH5oUYdMnF2O1G_TvP8WOVJ-_s"
})

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response))
