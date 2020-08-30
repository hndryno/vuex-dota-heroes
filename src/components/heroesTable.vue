<template>
    <div>
        <h1>{{ hero_type }} HEROES</h1>
        <b-table striped hover :items="type">
          <template v-slot:cell(name)="data">
              {{data.value}}
          </template>
       </b-table>
    </div>
</template>

<script>
export default {
  props: {
    hero_type: String,
    type: Array
  }
}
</script>
