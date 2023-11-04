<script lang="ts" setup></script>

<template>
  <div>
    <div class="container-box align-right center" style="width: 350px" data-title="Title">
      <div class="text-right">
        <label>Number:</label>
        <input type="number" />
      </div>
      <div class="text-right">
        <label>Text:</label>
        <input type="text" />
      </div>
      <div>
        <p>Textarea</p>
        <textarea rows="10">font test => == !=</textarea>
      </div>
      <div class="row">
        <label for="">disabled</label>
        <input type="text" name="" id="" disabled />
      </div>
      <div class="">
        <label>
          <input type="checkbox" />
          <span>Checkbox </span>
        </label>
      </div>
      <div class="">
        <label>
          <input type="checkbox" checked />
          <span>Checkbox checked </span>
        </label>
      </div>
      <div class="">
        <label>
          <input type="checkbox" disabled />
          <span>Checkbox disabled </span>
        </label>
      </div>
      <div class="">
        <label>
          <input type="checkbox" disabled checked />
          <span>Checkbox disabled </span>
        </label>
      </div>
      <div class="row">
        <input type="button" value="submit" autofocus />
        <button>button</button>
        <button disabled>disabled</button>
      </div>
      <div class="row">
        <label for="">select</label>
        <select name="" id="">
          <option value="1">option1</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </select>
      </div>
      <div class="row">
        <label for="">disabled select</label>
        <select name="" id="" disabled>
          <option value="1">option1</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="less"></style>
