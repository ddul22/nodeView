// database/sql/users.js
// Table : t_users

// 전체조회
const userList = 
`SELECT user_no
		    , user_id
        , user_pwd
        , user_name
        , user_age
        , user_gender
        , join_date
FROM t_users
ORDER by user_no`;

// 단건조회
const userInfo = 
`SELECT user_no
		    , user_id
        , user_pwd
        , user_name
        , user_age
        , user_gender 
        , join_date
FROM t_users
WHERE user_no = ?`;

// 등록
const userInsert =
`INSERT INTO t_users(user_id, user_pwd, user_name, user_gender, user_age)
VALUES(?, ?, ?, ?, ?);`;

// 수정
const userUpdate =
`UPDATE t_user
SET ?
WHERE user_no = ?`;

module.exports = {
  userList,
  userInfo,
  userInsert,
  userUpdate,
}