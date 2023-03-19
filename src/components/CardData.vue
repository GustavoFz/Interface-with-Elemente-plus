<template>
  <ElCard>
    <ElText size="large" tag="b">Dados do Alojamento</ElText>
    <ElForm :model="form" label-position="top" :inline="true">
      <ElCol :span="14">
        <ElFormItem label="NOME">
          <ElInput v-model="form.name" />
        </ElFormItem>
      </ElCol>
      <ElCol :span="10">
        <ElFormItem label="REGISTRO AL">
          <ElInput v-model="form.registroAl"> <template #suffix> /AL </template></ElInput>
        </ElFormItem>
      </ElCol>
      <ElCol>
        <ElFormItem label="MORADA">
          <ElInput v-model="form.morada"></ElInput>
        </ElFormItem>
      </ElCol>
      <ElCol :span="6">
        <ElFormItem label="CODIGO POSTAL">
          <ElInput v-model="form.zipCode"></ElInput>
        </ElFormItem>
      </ElCol>
      <ElCol :span="18">
        <ElFormItem label="LOCALIDADE"> <ElInput v-model="form.locale"></ElInput> </ElFormItem
      ></ElCol>
      <ElCol :span="10"
        ><ElFormItem label="REGIAO">
          <ElSelect v-model="form.region" placeholder="please select your zone">
            <ElOption label="Porto" value="porto" />
            <ElOption label="Lisboa" value="lisboa" />
          </ElSelect>
        </ElFormItem>
      </ElCol>
      <ElCol :span="14">
        <ElFormItem label="PAIS">
          <ElSelect v-model="form.pais" placeholder="please select your zone">
            <ElOption v-for="pais in paises" :label="pais.name" :value="pais.code" />
          </ElSelect>
        </ElFormItem>
      </ElCol>
    </ElForm>
  </ElCard>
</template>

<script setup lang="ts">
import { ElCol, ElForm, ElFormItem, ElInput, ElOption, ElSelect, type ElText } from 'element-plus'

import { reactive } from 'vue'
import listJson from '../../paises.json'

const paises = listJson

const form = reactive({
  name: '',
  registroAl: '',
  morada: '',
  zipCode: '',
  locale: '',
  region: '',
  pais: ''
})
</script>
<style scoped>
.el-select {
  width: 100%;
}
.el-card {
  border-radius: 10px;
}
</style>
