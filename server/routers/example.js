import express from 'express';



const router = express.Router();
  router.get('/*',(req,res,next)=> {
    console.log('init number',req.session.number)
    if(!req.session.number){
      req.session.number = 0;
    }
    next();
  })
  router.get('/fetch',(req,res)=>{
    console.log('fetch number',req.session.number)
    res.send(`${req.session.number}`);
  })
router.get('/add/:increment',(req,res)=>{
  req.session.number += Number(req.params.increment);
  console.log(`add number by ${req.params.increment}`,req.session.number)
  res.send(`${req.session.number}`);
})


export default router;