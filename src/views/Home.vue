<script setup>
import LayLogo from './menu/LayLogo.vue'
import LayMenu from './menu/LayMenu.vue'
import LayBreadcrumb from './header/LayBreadcrumb.vue'
</script>

<template>
  <el-container class="h-screen bg-gray-50">
    <el-aside class="p-4 w-16">
      <div class="border border-gray-200 shadow-lg h-full bg-white overflow-hidden">
        <lay-logo/>
        <lay-menu/>
      </div>
    </el-aside>
    <el-container>
      <div class="flex flex-row py-4 justify-between">
        <lay-breadcrumb/>
        <div class="px-2 py-4 mr-5 shadow-lg h-full flex flex-row items-center">
          <i-ep-full-screen class="cursor-pointer" />
        </div>
      </div>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.shadow-lg {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
}
</style>
