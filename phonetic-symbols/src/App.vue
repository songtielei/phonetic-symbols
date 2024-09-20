<template>
  <header>
    <page-header />
  </header>

  <dialog id="dialog">
    <div class="videoMenu" @click="hideDialog">&times;</div>
    <video controls />
  </dialog>

  <div class="container">

    <dl>
      <dt>{{ t('shortVowels') }}</dt>
      <dd><a href="vowel_short_1.mp4" @click.prevent="showVideo($event)">ɪ</a></dd>
      <dd><a href="vowel_short_2.mp4" @click.prevent="showVideo($event)">ʊ</a></dd>
      <dd><a href="vowel_short_3.mp4" @click.prevent="showVideo($event)">ʌ</a></dd>
      <dd><a href="vowel_short_4.mp4" @click.prevent="showVideo($event)">ɒ</a></dd>
      <dd><a href="vowel_short_5.mp4" @click.prevent="showVideo($event)">ə</a></dd>
      <dd><a href="vowel_short_6.mp4" @click.prevent="showVideo($event)">e</a></dd>
      <dd><a href="vowel_short_7.mp4" @click.prevent="showVideo($event)">æ</a></dd>
    </dl>
    <dl>
      <dt>{{ t('longVowels') }}</dt>
      <dd><a href="vowel_long_1.mp4" @click.prevent="showVideo($event)">iː</a></dd>
      <dd><a href="vowel_long_2.mp4" @click.prevent="showVideo($event)">uː</a></dd>
      <dd><a href="vowel_long_3.mp4" @click.prevent="showVideo($event)">ɑː</a></dd>
      <dd><a href="vowel_long_4.mp4" @click.prevent="showVideo($event)">ɔː</a></dd>
      <dd><a href="vowel_long_5.mp4" @click.prevent="showVideo($event)">ɜː</a></dd>
    </dl>
    <dl>
      <dt>{{ t('diphthongs') }} ({{ t('doubleVowelSounds') }})</dt>
      <dd><a href="vowel_dip_1.mp4" @click.prevent="showVideo($event)">ɪə</a></dd>
      <dd><a href="vowel_dip_2.mp4" @click.prevent="showVideo($event)">ʊə</a></dd>
      <dd><a href="vowel_dip_3.mp4" @click.prevent="showVideo($event)">aɪ</a></dd>
      <dd><a href="vowel_dip_4.mp4" @click.prevent="showVideo($event)">ɔɪ</a></dd>
      <dd><a href="vowel_dip_5.mp4" @click.prevent="showVideo($event)">əʊ</a></dd>
      <dd><a href="vowel_dip_6.mp4" @click.prevent="showVideo($event)">eə</a></dd>
      <dd><a href="vowel_dip_7.mp4" @click.prevent="showVideo($event)">aʊ</a></dd>
      <dd><a href="vowel_dip_8.mp4" @click.prevent="showVideo($event)">eɪ</a></dd>
    </dl>
    <dl>
      <dt>{{ t('voicelessConsonants') }}</dt>
      <dd><a href="con_voiceless_1.mp4" @click.prevent="showVideo($event)">p</a></dd>
      <dd><a href="con_voiceless_2.mp4" @click.prevent="showVideo($event)">t</a></dd>
      <dd><a href="con_voiceless_3.mp4" @click.prevent="showVideo($event)">tʃ</a></dd>
      <dd><a href="con_voiceless_4.mp4" @click.prevent="showVideo($event)">k</a></dd>
      <dd><a href="con_voiceless_5.mp4" @click.prevent="showVideo($event)">f</a></dd>
      <dd><a href="con_voiceless_6.mp4" @click.prevent="showVideo($event)">θ</a></dd>
      <dd><a href="con_voiceless_7.mp4" @click.prevent="showVideo($event)">s</a></dd>
      <dd><a href="con_voiceless_8.mp4" @click.prevent="showVideo($event)">ʃ</a></dd>
    </dl>
    <dl>
      <dt>{{ t('voicedConsonants') }}</dt>
      <dd><a href="con_voiced_1.mp4" @click.prevent="showVideo($event)">b</a></dd>
      <dd><a href="con_voiced_2.mp4" @click.prevent="showVideo($event)">d</a></dd>
      <dd><a href="con_voiced_3.mp4" @click.prevent="showVideo($event)">dʒ</a></dd>
      <dd><a href="con_voiced_4.mp4" @click.prevent="showVideo($event)">ɡ</a></dd>
      <dd><a href="con_voiced_5.mp4" @click.prevent="showVideo($event)">v</a></dd>
      <dd><a href="con_voiced_6.mp4" @click.prevent="showVideo($event)">ð</a></dd>
      <dd><a href="con_voiced_7.mp4" @click.prevent="showVideo($event)">z</a></dd>
      <dd><a href="con_voiced_8.mp4" @click.prevent="showVideo($event)">ʒ</a></dd>
    </dl>
    <dl>
      <dt>{{ t('otherConsonants') }}</dt>
      <dd><a href="con_other_1.mp4" @click.prevent="showVideo($event)">m</a></dd>
      <dd><a href="con_other_2.mp4" @click.prevent="showVideo($event)">n</a></dd>
      <dd><a href="con_other_3.mp4" @click.prevent="showVideo($event)">ŋ</a></dd>
      <dd><a href="con_other_4.mp4" @click.prevent="showVideo($event)">h</a></dd>
      <dd><a href="con_other_5.mp4" @click.prevent="showVideo($event)">l</a></dd>
      <dd><a href="con_other_6.mp4" @click.prevent="showVideo($event)">r</a></dd>
      <dd><a href="con_other_7.mp4" @click.prevent="showVideo($event)">w</a></dd>
      <dd><a href="con_other_8.mp4" @click.prevent="showVideo($event)">j</a></dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n';
import 'normalize.css/normalize.css';
import PageHeader from './components/PageHeader.vue';
import { ElButton, ElDialog, ElTable } from 'element-plus';
import { ref } from 'vue';


const { t } = useI18n();
function showVideo(event: any) {
  const video = <HTMLMediaElement>document.querySelector('video');
  const url = localStorage.getItem(event.target.href.replace(window.location.href, ''));

  if (video && url && video.src !== url) {
    video.src = url;
    video?.play();
  }

  //$('.modal').modal();
  showDialog();
}



function showDialog() {
  const dialog = <HTMLDialogElement>document.querySelector('#dialog');
  dialog?.showModal();
  dialog?.show();
}

function hideDialog() {
  const dialog = <HTMLDialogElement>document.querySelector('#dialog');
  dialog.close();
  const video = <HTMLMediaElement>document.querySelector('video');
  video.pause();
}

</script>

<style scoped>
.container {
  max-width: 524px;
  margin-left: auto;
  margin-right: auto;
}

dt {
  margin: 0px 0px 16px 0px;
}

dd {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0px 10px 0px 0px;
  border: solid 1px;
  border-radius: 5px;
}

dd a {
  display: block;
  text-align: center;
  height: 48px;
  font-size: 2em;
  text-decoration: none;
  font-family: Helvetica, sans-serif;
  padding: 5px 0;
  color: black;
}

.videoMenu {
  width: 700px;
  height: 30px;

}

video {
  width: 700px;
}

dialog {
  top: 130px;
  border: 0px;
  border-radius: 0px;
  padding: 0px;
  background-color: rgba(126, 201, 236, 0.6);
}

dialog::backdrop {
  background-color: rgba(126, 201, 236, 0.6);
}
</style>
