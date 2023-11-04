<script lang="ts" setup>
import { computed, ref } from 'vue'

const hue = ref(196)

const unit = 26

const totalWidth = 800
const gridWidth = computed(() => totalWidth / unit + 'px')
</script>

<template>
  <div>
    <div class="text-center mb-4">
      <input v-model="hue" type="range" min="0" max="360" />
      <span> {{ hue }} </span>
    </div>

    <div class="cube-layout" :style="{ width: `${totalWidth}px` }">
      <template v-for="i in unit">
        <template v-for="j in unit">
          <div
            class="cube"
            :style="{
              backgroundColor: `hsl(${hue} ${i * (100 / unit)}% ${j * (100 / unit)}%)`,
              height: `${totalWidth / unit}px`,
            }"
          >
            {{ i }},{{ j }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cube-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(v-bind('gridWidth'), 1fr));
}

.cube {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
}
</style>
