<template>
  <section class="panel">
    <header class="panel__header">
      <div class="panel__title">
        <slot name="title" />
      </div>
      <div class="panel__meta">
        <slot name="meta" />
      </div>
    </header>

    <div class="panel__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.panel {
  border: 2px solid #111;
  padding: 12px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.panel__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.panel__title {
  font-weight: 600;
  font-size: 14px;
  color: #111;
}

.panel__meta {
  opacity: 0.8;
  font-size: 12px;
  white-space: nowrap;
  color: #111;
}

.panel__content {
  flex: 1;
  min-height: 40px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .panel {
    padding: 10px;
  }

  .panel__header {
    gap: 10px;
    margin-bottom: 10px;
  }

  .panel__title {
    font-size: 13px;
  }

  .panel__meta {
    font-size: 11px;
  }
}

@media (max-width: 768px) {
  .panel {
    padding: 8px;
    border-width: 1.5px;
  }

  .panel__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 8px;
  }

  .panel__title {
    font-size: 12px;
  }

  .panel__meta {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .panel {
    padding: 6px;
    border-width: 1.5px;
  }

  .panel__header {
    gap: 4px;
    margin-bottom: 6px;
  }

  .panel__title {
    font-size: 11px;
  }

  .panel__meta {
    font-size: 9px;
  }
}
</style>
