<template>
  <div class="menu" v-show="menuFlag">
    <div class="close" @click="menuFlag = false">&times;</div>
    <ul>
      <li class="selectFile">
        <input type="file" webkitdirectory directory multiple mozdirectory ref="fileSelect" @change="getSongs($event)" />
        <a href="#" @click="invokeInput">选择文件</a>
      </li>
    </ul>
  </div>
  <div class="header">

    <div class="left">
      <label for="hamburger" @click="menuFlag = true">&#9776;</label>

      <span>音标</span>
    </div>
    <div class="right">
      <div class="lang gap">
        <span class="item" :class="{ active: locale === 'zh-cn' }" @click="changeLanguage('zh-cn')">中文</span>
        <span class="item" :class="{ active: locale === 'en' }" @click="changeLanguage('en')">EN</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import getSongs from '@/libs/video';

const { locale } = useI18n();
const menuFlag = ref(false);
const fileSelect = ref<any>(null);

function changeLanguage(lang: any) {
  locale.value = lang;
  localStorage.setItem('locale', lang);
}
function invokeInput() {
  //console.log(fileSelect.value.change());
  const input = document.querySelector('input[type=file]');

  const e = document.createEvent("MouseEvents");
  e.initEvent("click", true, true);
  input?.dispatchEvent(e);


  //   const event = new MouseEvent("change");

  // // Listen for the event.
  // input.addEventListener(
  //   "change",
  //   (e) => {
  //     console.log(e);
  //     /* … */
  //   },
  //   true,
  // );

  // console.log(input);
  // // Dispatch the event.
  // input.dispatchEvent(event);


}

</script>
<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  background-color: #000;
  color: #fff;
  padding: 0px 20px;
}

.lang {
  font-size: 14px;
}

.item {}

.right {
  .lang {
    font-size: 14px;

    .item {
      cursor: pointer;

      &.active {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}

.left label {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
}

.menu {
  color: #fff;
  position: absolute;
  width: 200px;
  height: 100%;
  border: 1px solid;
  background-color: #000;

  &.active {
    display: none;

  }

}

.close {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: 1px solid;
  border-radius: 5px;
  position: absolute;
  right: 0px;
}

video {
  width: 100%;
  height: 100%;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

input[type=file] {
  display: none;
}
</style>
