<template>
  <div class="court">
    <div
      class="card m-4 flex-grow-1 p-4"
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
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: {
    VueCal
  },
  data () {
    return {
      showCourt: '',
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
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.court {
  .box-available {
    height: 15px;
    width: 15px;
  }
  .box-not-available {
    background-color: #C1C1C1;
    height: 15px;
    width: 15px;
  }
  .select-show-court {
    width: 300px;
  }
}
</style>