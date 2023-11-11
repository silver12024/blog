const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
   res.send('Hi!')
})

app.get('/api/helloworld', (req, res) => {
   res.json({sayHi: 'hello from server, nice to meet you!'})
})

app.get("/api/posts", async (req, res) => {
   axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
         let posts = response.data;
         console.log('posts: ', posts);
         res.json(posts)
      })
      .catch(err => console.log(err));
 });

 app.get("/api/comments", async (req, res) => {
   axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => {
         let comments = response.data;
         console.log('comments: ', comments);
         res.json(comments)
      })
      .catch(err => console.log(err));
 });

app.listen(5000, () => {
   console.log('App listening on port 5000')
})