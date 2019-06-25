import express from 'express';



const router = express.Router();

router.get('/add/:increment',(req,res)=>{
  res.send(` increment by ${req.params.increment}`);
})


export default router;