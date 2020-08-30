<template>
  <div class="about">
    <HeroesTable
      hero_type="STRENGTH"
      :type="strength"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeroesTable from '@/components/heroesTable'
export default {
  components: {
    HeroesTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'strength'
    ])
  }
}
</script>
