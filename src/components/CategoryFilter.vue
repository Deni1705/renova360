<template>
    <div class="category-filter">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="$emit('filter', category)"
        :class="{ active: selectedCategory === category }"
        class="category-button"
      >
        {{ category }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryFilter',
    props: {
      categories: {
        type: Array,
        required: true
      },
      selectedCategory: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .category-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  
    .category-button {
      padding: 0.5rem 1rem;
      border: 1px solid #007bff;
      background-color: white;
      color: #007bff;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s;
  
      &:hover, &.active {
        background-color: #007bff;
        color: white;
      }
    }
  }
  </style>