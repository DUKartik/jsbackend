require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "DUKartik",
  "id": 178579088,
  "node_id": "U_kgDOCqTmkA",
  "avatar_url": "https://avatars.githubusercontent.com/u/178579088?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DUKartik",
  "html_url": "https://github.com/DUKartik",
  "followers_url": "https://api.github.com/users/DUKartik/followers",
  "following_url": "https://api.github.com/users/DUKartik/following{/other_user}",
  "gists_url": "https://api.github.com/users/DUKartik/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DUKartik/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DUKartik/subscriptions",
  "organizations_url": "https://api.github.com/users/DUKartik/orgs",
  "repos_url": "https://api.github.com/users/DUKartik/repos",
  "events_url": "https://api.github.com/users/DUKartik/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DUKartik/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2024-08-16T13:32:45Z",
  "updated_at": "2025-06-19T09:50:45Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login',function(req,res){
    res.send('welcome Sir')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})