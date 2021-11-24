<template>
  <div class="home">
    <div class="card first-part">
      <img
        :src="require('@/assets/images/badminton.jpg')"
        class="card-img"
        alt="bg-badminton"
      >
      <div class="card-img-overlay d-flex align-items-center p-5">
        <div class="card-home-text p-3 pb-4 rounded">
          <h5 class="card-title fw-bold">
            Sewa lapangan badminton di Badmins! 
          </h5>
          <p class="card-text m-0">
            Menyediakan penyewaan lapangan badminton.
          </p>
          <p class="card-text m-0">
            Lapangan ini dapat disewa untuk latihan, pertandingan, ataupun acara. 
          </p>
          <p class="card-text m-0">
            Yuk, ditunggu apalagi segera sewa lapanganmu sekarang. 
          </p>
        </div>
      </div>
    </div>
    <div class="second-part p-4">
      <h5 class="text-center part-title fw-bold mb-4">
        Prosedur dan Waktu Penyewaan  
      </h5>
      <div class="d-flex flex-wrap justify-content-around">
        <div class="card mx-3 my-2">
          <div class="card-body bg-white rounded">
            <h5 class="card-title fw-bold">
              Prosedur
            </h5>
            <h6 class="card-subtitle mb-2">
              Bagi para penyewa lapangan badmins, berikut tahapannya:
            </h6>
            <p class="card-text m-0">
              <span class="fw-bold">1. Daftar</span>, harus memiliki akun badmins terlebih dahulu
            </p>
            <p class="card-text m-0">
              <span class="fw-bold">2. Penyewaan</span>, melakukan pemesanan dengan memilih lapangan, waktu, dan durasi yang tersedia
            </p>
            <p class="card-text m-0">
              <span class="fw-bold">3. Pembayaran</span>, selanjutnya membayarkan pemesanan dapat melalui Internet Banking, M-Banking, ataupun ke ATM
            </p>
            <p class="card-text m-0">
              <span class="fw-bold">4. Selesai</span>, pemesanan yang sudah dibayar akan dikonfirmasi secara otomatis dan menerima notifikasi melalui email
            </p>
          </div>
        </div>
        <div class="card mx-3 my-2">
          <div class="card-body bg-white rounded">
            <h5 class="card-title fw-bold">
              Waktu Penyewaan
            </h5>
            <p class="card-text">
              Badmins buka setiap hari, mulai pukul 09.00 - 21.00 WIB dengan biaya penyewaan sebesar Rp 20.000,-/jam.
            </p>
            <p class="card-text">
              Sebelum melakukan pemesanan, diharapkan bagi penyewa untuk memeriksa ketersediaan lapangan, waktu, serta durasi :)
            </p>            
          </div>
        </div>
      </div>
    </div>
    <div class="third-part p-4">
      <h5 class="text-center part-title fw-bold mb-4">
        Jelajahi Lokasi Badmins 
      </h5>
      <div class="d-flex justify-content-center">
        <l-map
          style="height: 350px; width: 700px;"
          :zoom="zoom"
          :center="center"
        >
          <l-tile-layer
            :url="url"
            :attribution="attribution"
          />
          <l-marker :lat-lng="markerLatLng" />
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]      
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  watch: {
  },
  methods: {
  },
  created () {
  }  
}
</script>

<style lang="scss" scoped>
.home {
  .card-title {
    color: #3B6064;
    font-size: 17px;
  }
  .card-text {
    font-size: 15px;
  }
  .part-title {
    color: #3B6064;
    font-size: 18px;
  }

  .first-part {
    border-radius: 0px;

    .card-home-text {
      background-color: rgb(228, 228, 228);
      height: min-content;
    }
    img {
      transform: scaleX(-1);
    }
  }
  .second-part {
    background-color: #E6E6E6;

    .card {
      .card-body {
        min-width: 440px;
        max-width: 600px;
      }
    }
  }
}
</style>