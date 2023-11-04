<template>
  <div class="routes">
    <button @click="$router.push('/')">Home</button>
    <button @click="$router.push('/list')">List</button>
    <button @click="$router.push('/demo')">Demo</button>
  </div>
  <router-view></router-view>
</template>
