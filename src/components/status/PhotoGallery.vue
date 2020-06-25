<template>
  <div id="photo-gallery">
    <div class="g-header">
      <div style="display:flex; justify-content: center; opacity: 0.19">
        <figure class="image is-48x48">
            <img src="@/assets/icons/Photos.svg">
        </figure>
      </div>
      <div class="g-title">Kết quả thu được sau khi bay</div>
      <div class="g-note">
        Drone đã kết thúc hành trình. Kết quả thu được đã được tự động lưu lại. 
      </div>
    </div>
    <div class="gallery">
      <div v-for="(item, i) in 12" :key="i" class="photo-show">
        <figure class="image is-5by3">
          <img :src="require('@/assets/images/' + i + '.jpg')"  style="object-fit: cover">
        </figure>
      </div>
    </div>
    <div class="g-foot">
        <button class="button is-primary" type="button" @click="$parent.close()">OK</button>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    getImgUrl(value) {
        return `https://picsum.photos/id/43${value}/1230/500`
    }
  }
}
</script>

<style lang="scss" scoped>
#photo-gallery {
  background: white;
  padding: 30px;
  border-radius: 13px;

    .gallery {
      display: flex;
      flex-wrap: wrap;
      max-height: 60vh;
      margin: 20px 0;
    }

    .photo-show {
      width: 150px;
      margin: 5px;
    }

    .g-header {
      text-align: center;
    }

    .g-title {
      color: #606060;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 600;
    }

    .g-note {
      color: #b8b8b8;
    }

    .g-foot {
      text-align: center;
    }
}
</style>