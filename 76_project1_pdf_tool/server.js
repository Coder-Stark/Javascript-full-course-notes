const express = require('express')

const path = require('path');
const multer = require('multer');
const app = express()
const upload = multer({dest : 'uploads/'})
app.use('/static' , express.static('public'))
const {mergePdfs} = require('./merge')

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , 'templates/index.html'))
})
app.post('/merge', upload.array('pdfs',2) , async(req, res,next) =>{
  console.log(req.files);
  let d = await mergePdfs(path.join(__dirname , req.files[0].path) , path.join(__dirname , req.files[1].path))
  res.redirect(`http://localhost:3000/static/${d}.pdf`)

  // res.send({data : req.files})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})