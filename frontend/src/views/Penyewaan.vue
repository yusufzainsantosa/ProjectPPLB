<template>
  <div class="booking">
    <form-wizard
      title=""
      subtitle=""
      color="#3B6064"
    >
      <tab-content title="Penyewaan">
        <div class="d-flex">
          <div
            class="card mx-2 p-4"
            style="min-width: 400px;"
          >
            <div class="card-body court-form">
              <div class="mb-4 d-flex justify-content-center">
                <img
                  :src="require('@/assets/images/court.jpg')"
                  class="rounded"
                  alt="image_court"
                >
              </div>
              <div>
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form
                    @submit.prevent="handleSubmit(registerUser)"
                    class="mx-auto"
                  >
                    <div class="mb-3">
                      <ValidationProvider
                        name="Pilih Lapangan"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label class="form-label">
                          Pilih Lapangan
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="court"
                        >
                          <option value="">
                            Select
                          </option>
                          <option
                            v-for="(value, idx) in selectCourt"
                            :key="idx"
                            :value="value.value"
                          >
                            {{ value.name }}
                          </option>
                        </select>
                        <span class="notif">
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-3">
                      <ValidationProvider
                        name="Pilih Tanggal"
                        rules="required|email"
                        v-slot="{ errors }"
                      >
                        <label
                          for="input-select-date"
                          class="form-label"
                        >
                          Pilih Tanggal
                        </label>
                        <input
                          id="input-select-date"
                          type="email"
                          class="form-control"
                          v-model="date"
                        >
                        <span class="notif">
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-3">
                      <ValidationProvider
                        name="Pilih Waktu Mulai"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label class="form-label">
                          Pilih Waktu Mulai
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="court"
                        >
                          <option value="">
                            Select
                          </option>
                          <option
                            v-for="value in 13"
                            :key="value"
                            :value="value + 8"
                          >
                            {{ hourFormat(value) }}
                          </option>
                        </select>
                        <span class="notif">
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-3">
                      <ValidationProvider
                        name="Pilih Durasi"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label
                          for="input-time-duration"
                          class="form-label"
                        >
                          Pilih Durasi
                        </label>
                        <input
                          id="input-time-duration"
                          type="number"
                          class="form-control"
                          v-model="duration"
                        >
                        <span class="notif">
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
          <div
            class="card mx-2 flex-grow-1 p-4"
            style="min-width: 600px;"
          >
            <div class="card-body"> 
              <div class="mb-2 d-flex justify-content-center">
                <select
                  class="form-select select-show-court"
                  aria-label="Default select example"
                  v-model="showCourt"
                >
                  <option value="">
                    Select
                  </option>
                  <option
                    v-for="(value, idx) in selectCourt"
                    :key="idx"
                    :value="value.value"
                  >
                    {{ value.name }}
                  </option>
                </select>
              </div>
              <div class="d-flex justify-content-center mb-2">
                <div class="d-flex mx-3 align-items-center">
                  <div class="box-available border mx-2 roundedx" />
                  Tersedia
                </div>
                <div class="d-flex mx-3 align-items-center">
                  <div class="box-not-available border mx-2 rounded" />
                  Tidak Tersedia
                </div>
              </div>
              <div>           
                <vue-cal
                  :selected-date="new Date()"
                  :time-from="9 * 60"
                  :time-to="23 * 60"  
                  :disable-views="['years']"
                  hide-weekends
                  :events="events"
                />
              </div> 
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content
        title="Pembayaran"
        lazy="true"
      >
        <div class="card">
          <div class="card-body d-flex">
            <div style="min-width:300px;">
              <h4 class="mb-4 fw-bold">
                Data Penyewa
              </h4>
              <div>
                <p class="fw-bold">
                  Andika Kangen Band
                </p>
                <p class="my-0">
                  andika@gmail.com
                </p>
                <p class="my-0">
                  (+62) 81234578910
                </p>
              </div>
            </div>
            <div class="vl mx-3" />
            <div class="flex-grow-1">
              <div class="row mb-3">
                <div class="col-4">                  
                  <h4 class="fw-bold">
                    No. Transaksi
                  </h4>
                </div>
                <div class="col-8">
                  <h4 class="fw-bold">
                    202111240001
                  </h4>
                </div>
                <div class="col-4">                  
                  <p>
                    Waktu Transaksi
                  </p>
                </div>
                <div class="col-8">
                  <p>
                    24 November 2021, 07.30 WIB
                  </p>
                </div> 
              </div>
              
              <div class="row">
                <div class="col-4">                  
                  <img
                    :src="require('@/assets/images/court.jpg')"
                    class="rounded img-thumbnail-court"
                    alt="image_court"
                  >
                </div>
                <div class="col-8 d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    <p class="fw-bold mb-auto">
                      Lapangan 1
                    </p>
                    <div>
                      <p class="my-0">
                        24 November 2021
                      </p>
                      <p class="my-0">
                        10.00-12.00 WIB
                      </p>
                      <p class="my-0">
                        Durasi 2 jam
                      </p>
                    </div>                    
                  </div>
                  <div class="d-flex align-items-end">
                    <p class="mb-0">
                      Rp 40.000
                    </p>
                  </div>
                </div>
              </div>
              
              <hr class="my-4">

              <div class="row">
                <div class="col-4" /> 
                <div class="col-8 d-flex justify-content-between">
                  <div class="row w-100">
                    <div class="col-6">
                      <p>
                        Total Penyewaan
                      </p>
                    </div>
                    <div class="col-6 d-flex flex-row-reverse">
                      <p class="mb-0">
                        Rp 40.000
                      </p>
                    </div>
                    <div class="col-6">
                      <p>
                        Metode Pembayaran
                      </p>
                    </div>
                    <div class="col-6 d-flex flex-row-reverse">
                      <p class="fw-bold">
                        BNI Virtual Account
                      </p>
                    </div>            
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content
        title="Selesai"
        lazy="true"
      >
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: {
    FormWizard,
    TabContent,
    ValidationObserver,
    ValidationProvider,
    VueCal
  },
  data () {
    return {
      showCourt: '',
      court: '',
      date: '',
      time: '',
      duration: 0,
      events: [],
      selectCourt: [
        {
          name: 'Lapangan 1',
          value: 1
        },
        {
          name: 'Lapangan 2',
          value: 2
        },
        {
          name: 'Lapangan 3',
          value: 3
        }
      ]
    }
  },
  computed: {
    minDate () {
      return new Date()
    }
  },
  watch: {
    duration () {
      if (this.duration < 0) this.duration = 0
    }
  },
  methods: {
    bookingCourt () {
      console.log('test')
    },
    hourFormat (value) {
      if ((value + 8) < 10) return `0${value + 8}.00`
      else return `${value + 8}.00`
    }
  }
}
</script>

<style lang="scss">
#Penyewaan0 {
  div.vuecal__flex.vuecal__body {
    height: 400px;
  }
}
</style>
<style lang="scss" scoped>
.booking {
  .court-form {
    .notif {
      color: red;
      font-size: 13px;
    }
  }
  .box-available {
    height: 15px;
    width: 15px;
  }
  .box-not-available {
    background-color: #C1C1C1;
    height: 15px;
    width: 15px;
  }
  .btn-calender {
    width: 120px;
  }
  .img-thumbnail-court {
    width: 180px;
  }
  .select-show-court {
    width: 300px;
  }
  .vl {
    border-left: 1px solid black;
    height: 420px;
  }
}
</style>