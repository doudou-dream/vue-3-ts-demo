
<script setup>

</script>

<template>
  <div class="h-full overflow-auto">
    <el-menu
        active-text-color="#409eff"
        background-color="#ffffff"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#303133"
    >
      <el-sub-menu index="1">
        <template #title>
          <i-ep-location/>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item disabled index="3">
        <el-icon>
          <document/>
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
