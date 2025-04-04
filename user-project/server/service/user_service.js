// service/user_service.js
const mariaDB = require('../database/mapper.js');
const { userInfo } = require('../database/sql/users.js');

// 전체조회
  const findAll = async ()=>{
  let list = await mariaDB.query('userList')
                          .catch(err => console.log(err));
  return list;
};

// 단건조회
  const findByUserNo = async (selectedUser)=>{
  let list = await mariaDB.query('userInfo', selectedUser)
                            .catch(err => console.log(err));
  let info = list[0];
    return info;
  };

// 등록
  const createNewUser = async(userInfo)=>{
    let insertInfo = getInsertInfo(userInfo);
    let result = await mariaDB.query('userInsert', insertInfo)
                        .catch(err => console.log(err)); 
    if(result.insertId > 0){
      return { result : true, user_no : result.insertId}
    }else{
      return { result : false };
    }  
  };

  function getInsertInfo(target){
    let result = [
      target.user_id,
      target.user_pwd,
      target.user_name,
      target.user_gender,
      target.user_age
    ];
    return result;
  }

module.exports = {
  findAll,
  findByUserNo,
  createNewUser
};