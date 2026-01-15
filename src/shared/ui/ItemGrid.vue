<template>
  <div class="grid" role="list">
    <div v-for="item in items" :key="item.id" class="grid__cell" role="listitem">
      <ItemCard :item="item" :selected="isSelected(item)" @click="emit('itemClick', item)" />
    </div>
  </div>
</template>

<script setup>
import ItemCard from "@/shared/ui/ItemCard.vue";

const props = defineProps({
  items: { type: Array, required: true },
  isSelected: { type: Function, required: true },
});

const emit = defineEmits(["itemClick"]);
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.grid__cell {
  min-width: 0;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }
}
</style>
