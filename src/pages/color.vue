<script lang="ts" setup>
import { computed, ref } from 'vue'

const hue = ref(196)

const unit = 26

const totalWidth = 800
const gridWidth = computed(() => totalWidth / unit + 'px')

const type = ref('hsl')
</script>

<template>
  <div>
    <div class="mb-4 flex items-center justify-center">
      <label> <input type="radio" name="color-type" value="hsl" v-model="type" /> hsl </label>
      <label> <input type="radio" name="color-type" value="hwb" v-model="type" /> hwb </label>
      | Hue:
      <input v-model="hue" type="range" min="0" max="360" />
      <span class="w-30px"> {{ hue }} </span>
    </div>

    <div class="cube-layout" :style="{ width: `${totalWidth}px` }">
      <template v-for="i in unit">
        <template v-for="j in unit">
          <div
            class="cube"
            :style="{
              backgroundColor: `${type}(${hue} ${i * (100 / unit)}% ${j * (100 / unit)}%)`,
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
