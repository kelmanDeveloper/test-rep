<template>
  <div class="page">
    <!-- TOP ROW -->
    <div class="top">
      <PanelFrame>
        <template #title>Selected (User items)</template>
        <template #meta>selected: {{ leftSelected.length }} / {{ maxLeft }}</template>

        <div class="selectedRow">
          <div v-if="leftSelected.length === 0" class="placeholder"></div>

          <div v-else class="selectedRow__grid">
            <div v-for="it in leftSelected" :key="it.id" class="selectedRow__cell">
              <ItemCard :item="it" selected @click="left.toggle(it)" />
            </div>
          </div>
        </div>
      </PanelFrame>

      <PanelFrame>
        <template #title>SELECTED ITEM</template>

        <div class="selectedSingle">
          <div v-if="!rightSelected" class="placeholder"></div>

          <div v-else class="selectedSingle__box">
            <ItemCard :item="rightSelected" selected @click="right.clear()" />
          </div>
        </div>
      </PanelFrame>
    </div>

    <!-- BOTTOM ROW -->
    <div class="bottom">
      <PanelFrame>
        <template #title>User items</template>

        <div class="itemsContainer">
          <ItemGrid :items="userItemsList" :isSelected="left.isSelected" @itemClick="left.toggle" />
        </div>
      </PanelFrame>

      <PanelFrame>
        <template #title>Choice items</template>

        <div class="itemsContainer">
          <ItemGrid
            :items="choiceItemsList"
            :isSelected="right.isSelected"
            @itemClick="right.select"
          />
        </div>
      </PanelFrame>
    </div>
  </div>
</template>

<script setup>
import PanelFrame from "@/shared/ui/PanelFrame.vue";
import ItemGrid from "@/shared/ui/ItemGrid.vue";
import ItemCard from "@/shared/ui/ItemCard.vue";

import { choiceItems, MAX_LEFT_SELECTED, userItems } from "@/features/outfit-picker/model/constants";
import { useLeftMultiSelection, useRightSingleSelection } from "@/features/outfit-picker/model/useSelection";

const maxLeft = MAX_LEFT_SELECTED;

const userItemsList = userItems;
const choiceItemsList = choiceItems;

const left = useLeftMultiSelection({ max: maxLeft });
const right = useRightSingleSelection();

const leftSelected = left.selected;
const rightSelected = right.selected;
</script>

<style scoped>
.page {
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  gap: 20px;
  min-height: 100vh;
}

.top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.top > :nth-child(2) {
  aspect-ratio: 1;
  max-height: 300px;
}

.bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.selectedRow {
  min-height: 120px;
  display: flex;
  flex-direction: column;
}

.selectedRow__grid {
  display: grid;
  grid-template-columns: repeat(2, 60px);
  gap: 10px;
  margin-top: 10px;
}

.selectedRow__cell {
  width: 60px;
  height: 60px;
}

.selectedSingle {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.selectedSingle__box {
  width: 100px;
  height: 100px;
}

.itemsContainer {
  display: flex;
  flex-direction: column;
}

.placeholder {
  width: 100%;
  flex: 1;
  min-height: 100px;
  border: none;
  background: transparent;
}

.selectedSingle .placeholder {
  min-height: 200px;
}

@media (max-width: 1024px) {
  .page {
    padding: 16px;
    gap: 16px;
  }

  .top,
  .bottom {
    gap: 16px;
  }

  .top > :nth-child(2) {
    max-height: 250px;
  }

  .selectedRow__grid {
    grid-template-columns: repeat(2, 50px);
  }

  .selectedRow__cell {
    width: 50px;
    height: 50px;
  }

  .selectedSingle__box {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 768px) {
  .page {
    padding: 12px;
    gap: 12px;
  }

  .top,
  .bottom {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .top > :nth-child(2) {
    aspect-ratio: 1;
    max-height: none;
  }

  .selectedRow {
    min-height: 100px;
  }

  .selectedRow__grid {
    grid-template-columns: repeat(3, 50px);
    gap: 8px;
  }

  .selectedRow__cell {
    width: 50px;
    height: 50px;
  }

  .selectedSingle {
    min-height: 150px;
  }

  .selectedSingle__box {
    width: 70px;
    height: 70px;
  }

  .selectedSingle .placeholder {
    min-height: 150px;
  }
}

/* Маленькие мобильные */
@media (max-width: 480px) {
  .page {
    padding: 8px;
    gap: 8px;
  }

  .top,
  .bottom {
    gap: 8px;
  }

  .selectedRow__grid {
    grid-template-columns: repeat(2, 45px);
    gap: 6px;
  }

  .selectedRow__cell {
    width: 45px;
    height: 45px;
  }

  .selectedSingle__box {
    width: 60px;
    height: 60px;
  }
}
</style>
