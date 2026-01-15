<template>
  <button
    type="button"
    class="item"
    :class="{ 'item--selected': selected }"
    @click="$emit('click')"
  >
    <div class="item__label">{{ item.name }}</div>
  </button>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  selected: { type: Boolean, default: false },
});

defineEmits(["click"]);
</script>

<style scoped>
.item {
  border: 2px solid #111;
  background: #fff;
  padding: 0;
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item--selected {
  background: #a9a9a9;
}

.item__label {
  font-size: 12px;
  font-weight: 500;
  color: #111;
  text-align: center;
  padding: 4px;
  word-break: break-word;
  line-height: 1.2;
}

@media (max-width: 1024px) {
  .item__label {
    font-size: 11px;
    padding: 3px;
  }
}

@media (max-width: 768px) {
  .item__label {
    font-size: 10px;
    padding: 2px;
  }
}

@media (max-width: 480px) {
  .item {
    border-width: 1.5px;
  }

  .item__label {
    font-size: 9px;
    padding: 2px;
  }
}
</style>
