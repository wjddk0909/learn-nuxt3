<template>
  <div>
    <NuxtLayout name="admin">
      <template #header>
        <q-header elevated class="bg-primary text-white">
          <q-toolbar>
            <q-toolbar-title>Vue & Nuxt Mastery Admin</q-toolbar-title>
          </q-toolbar>
        </q-header>
      </template>
      <div>
        <div class="q-my-xl text-center">
          <div class="text-h4">레이아웃 재정의 Page</div>
          <p class="q-mt-sm text-grey-8">Admin Layout 실습 페이지</p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style scoped></style>
