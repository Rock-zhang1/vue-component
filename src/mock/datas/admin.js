import Mock from 'mockjs'

let arr = [];

for (let i = 0; i < 123; i++){
    arr.push(Mock.mock({
        'id': i+1,
        "name": '@cname',               // 随机中文名
        "age": Mock.Random.integer(10,80),   // 随机年纪 
        "address": Mock.Random.county(true),   // 随机城市名
        "date": Mock.Random.datetime()         // 随机时间 yyyy-MM-dd HH:mm:ss
    }))
}
// Mock.mock('http://localhost:8080/api/admin', arr)
export default arr;