<template>
  <div>
    <h1 class="text-center">UI Kit Example</h1>
    <p class="text-center">
      Examples:
      <a @click="$router.push('./')">home</a>
      ,
      <a @click="$router.push('./list')">list</a>
      ,
      <a @click="$router.push('./demo')">demo</a>
    </p>

    <div class="m-auto w-fit">
      <router-view></router-view>
    </div>
  </div>
</template>
