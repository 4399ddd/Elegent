import request from '@/utils/request.js'


//批量删除--
export function killOrderGood(ids) {
    //console.log("my data");
    //console.log(ids);
    return request.delete('/good/deleteselect?ids='+ids);
}

//文章分类列表查询
export const goodCategoryListService=()=>{
   //const tokenStore=useTokenStore();
  //在pinia中定义的响应式数据，都不需要.value
  //return request.get('/category',{headers:{'Authorization':tokenStore.token}});
  return request.get('/category');
}
//商品分类添加接口
export const goodCategoryAddService=(categoryData)=>{
  return request.post('/category',categoryData)
}
//商品分类修改
export const goodCategoryUpdateService=(categoryData)=>{
     return  request.put('/category',categoryData);
}
//商品分类删除
export const goodCategoryDeleteService=(id)=>{
   return request.delete('/category?id='+id);
}
//商品列表查询
export const goodListService =(params)=>{
   return request.get('/good',{params:params})
}
//商品添加
export const goodAddService=(goodData)=>{
      return   request.post('good',goodData);

}
//商品修改
export const xxhUpdateGoodWay=(myGoodData)=>{

    return request.put('/good',myGoodData)

}
//删除商品
export const myGoodDeleteService=(id,url)=>{
    let filename = url.split("com/")[1];
    return request.delete('/good?id='+id+"&filename="+filename);
}