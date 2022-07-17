import { defineComponent, ref } from 'vue'

export default defineComponent(() => {
  const count = ref(0)
  function addCount() {
    count.value++
  }
  return () => 
    <div>
      <button class="bg-gray-100" onClick={addCount}>add count</button>
      <br />
      <span>count: {count.value}</span>
    </div>
})