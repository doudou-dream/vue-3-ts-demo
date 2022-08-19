<script setup>

</script>

<template>
  <el-container class="h-screen bg-gray-50">
    <el-aside class="p-4 w-16">
      <div class="border border-gray-200 shadow-lg h-full bg-white overflow-hidden">
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row items-center">
            <el-image :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
                      class="w-7 h-7 mr-2"
                      fit="cover"/>
            <span class="font-bold">MaidouAdmin</span>
          </div>
          <i-ep-fold class="cursor-pointer"/>
        </div>
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
                <el-icon>
                  <location/>
                </el-icon>
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
      </div>
    </el-aside>
    <el-container>
      <div class="flex flex-row items-center py-4">
        <div class="shadow-lg h-full p-3 rounded">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>

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

.el-menu {
  border-right: none;
}
</style>
