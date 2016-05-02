/**
 * Created by moshanpi on 4/28/16.
 */
function mockTest() {
    // 使用 Mock
    // var Mock = require('mockjs')
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|5': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 2
        }]
    })
// 输出结果
    console.log(JSON.stringify(data, null, 4))
}