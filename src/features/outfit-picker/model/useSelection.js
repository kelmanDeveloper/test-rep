import { computed, ref } from "vue";

export function useLeftMultiSelection({ max }) {
  const selected = ref([]);

  const selectedIds = computed(() => new Set(selected.value.map((i) => i.id)));

  const isSelected = (item) => selectedIds.value.has(item.id);

  const toggle = (item) => {
    const idx = selected.value.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      selected.value.splice(idx, 1);
      return;
    }

    if (selected.value.length >= max) return;

    selected.value.push(item);
  };

  const clear = () => {
    selected.value = [];
  };

  return { selected, selectedIds, isSelected, toggle, clear };
}

export function useRightSingleSelection() {
  const selected = ref(null);

  const isSelected = (item) => selected.value?.id === item.id;

  const select = (item) => {
    // Тоггл-поведение: если кликнули по уже выбранному элементу — снимаем выбор
    if (selected.value?.id === item.id) {
      selected.value = null;
      return;
    }

    selected.value = item;
  };

  const clear = () => {
    selected.value = null;
  };

  return { selected, isSelected, select, clear };
}
