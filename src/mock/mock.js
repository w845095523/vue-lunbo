import Mock from 'mockjs'

var data = [
    {id:1,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:2,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:3,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:4,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:5,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:6,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:7,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:8,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:9,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:10,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:11,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:12,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:13,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:14,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
    {id:15,pic:"http://dummyimage.com/100x100",link:'https://www.baidu.com/?tn=80035161_1_dg'},
]

Mock.mock('/carousel','post',function(options){
    let {count}  = JSON.parse(options.body);

    let list = data.slice(0,count)

    return {
        "status":200,
        "count":count,
        "list":list
    }
})
///反反复复