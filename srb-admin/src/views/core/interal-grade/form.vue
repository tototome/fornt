<template>
  <div class="app-container">
    <!-- 输入表单 -->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存/更新
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import integralGradeApi from "@/api/core/integral-grade";

export default {
  data() {
    return {
      integralGrade: {},
      saveBtnDisabled: false,
    };
  },
  created() {
    if (this.$route.params.id) {
      this.integralGrade.id = this.$route.params.id;
      integralGradeApi.getById(this.integralGrade.id).then((response) => {
        this.$message.success("回显成功");
        this.integralGrade = response.data.integralGrade;
      });
    }
  },
  methods: {
    saveOrUpdate() {
      // alert("保存或者更新按钮")
      this.saveBtnDisabled = true;
      // 提交后端保存/修改数据
      if (this.integralGrade.id) {
        alert(this.integralGrade.id);
        this.updateById();
      } else {
        this.save();
      }
    },
    save() {
      integralGradeApi.save(this.integralGrade).then((response) => {
        this.$message.success("保存成功");
        this.back();
      });
    },
    updateById(){
        integralGradeApi.updateById(this.integralGrade).then((response) => {
        this.$message.success("修改成功");
        this.back();
      });
    },
    back() {
      this.$router.push("/core/interal-grade/list");
      
    },
  },
};
</script>
