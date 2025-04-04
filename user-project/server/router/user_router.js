// router/user_router.js
// 라우터 모듈
const express = require('express');
const router = express.Router();
// 라우팅 = 사용자의 요청9URL+METHOD) + Service + view
const userService = require('../service/user_service.js');

// 전체조회
router.get('/users', async (req,res)=>{
  let list = await userService.findAll();
  res.send(list);
});

// 단건조회
router.get('/users/:no', async(req,res)=>{
  let userNo = req.params.no;
  let info = await userService.findByUserNo(userNo);
  res.send(info);
});

// 등록
router.post('/users', async(req,res)=>{
  let userInfo = req.body;
  let result = await userService.createNewUser(userInfo);
  res.send(result);
});

module.exports = router;