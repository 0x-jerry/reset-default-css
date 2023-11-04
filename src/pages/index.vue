<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="text-center">UI Kit Example</h1>
    <p class="text-center">
      Examples:
      <a href="list.html">list</a>
      ,
      <a href="demo.html">demo</a>
    </p>
    <div class="container-box align-right center" style="width: 350px" data-title="Title">
      <div class="row">
        <label for="">number</label>
        <input type="number" name="" id="" />
      </div>
      <div class="row">
        <label for="">text</label>
        <input type="text" name="" id="" />
      </div>
      <div class="col">
        <p>textarea</p>
        <textarea name="" id="" cols="30" rows="10">
font test => == !=
        </textarea>
      </div>
      <div class="row">
        <label for="">disabled</label>
        <input type="text" name="" id="" disabled />
      </div>
      <div class="row">
        <input type="checkbox" name="" id="checkbox" />
        <label class="checkbox" for="checkbox">checkbox</label>
      </div>
      <div class="row">
        <input type="checkbox" name="" id="checkbox1" checked />
        <label class="checkbox" for="checkbox1">checkbox checked</label>
      </div>
      <div class="row">
        <input type="checkbox" name="" id="checkbox2" disabled />
        <label class="checkbox" for="checkbox2">checkbox disabled</label>
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
