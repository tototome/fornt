<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="id" label="主键" />
      <el-table-column prop="borrowAmount" label="借款额度" />
      <el-table-column prop="integralStart" label="积分区间开始" />
      <el-table-column prop="integralEnd" label="积分区间结束" />
      <el-table-column label="操作">
         <template slot-scope="scope">
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="danger"
            @click="deleteById(scope.row.id)"
            >删除</el-button
          >
          <!-- 地址写错了怎么检查 复制地址在路由里面检查 -->
          <router-link
            :to="'/core/interal-grade/edit/' + scope.row.id"
            style="margin-left: 10px"
          >
            <el-button icon="el-icon-edit" size="mini" type="primary"
              >修改</el-button
            >
          </router-link>
        </template>

      
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// @表示根目录和java中的src/java
import integralGradeApi from "@/api/core/integral-grade";

export default {
  data() {
    return {
      list: [{ index: 1, borrowAmount: 100, integralStart: 1, integralEnd: 5 }],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      integralGradeApi.getList().then((response) => {
        this.list = response.data.list;
      });
    },
    deleteById(id) {
      // alert("删除id为" + id + "的数据");
      integralGradeApi.deleteById(id).then(response=>{
        this.$message.success("删除成功")
        this.fetchData()
      })
    },

  },
};
</script>
