import request from '@/utils/request'

export default{
    getDictListByParentId(id){
        return request({
            url:`/admin/core/dict/getDictListByParentId/${id}`,
            method:'get'
        })
            
        
    }

}