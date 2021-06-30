## API

description | url | method | {body}/params | need token | response
----|----|--------|-------------|------------|-------
create new user | /user/new | POST | {login, password} | NO | {token}/{message : "error"}
login user | /user/login | POST | {login, password} | NO | {token}/{message : "error"}
get user information| /user/getinf | GET | ---- | YES | {data : {message : "some user data"}}/{message : "error"}