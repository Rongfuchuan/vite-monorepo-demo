import { defineComponent, ref } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent(() => {
  const msg = ref('before')
  setTimeout(() => {
    msg.value = 'after'
  }, 2000)
  return () => 
    <div class="h-full">
      portal msg: { msg.value }
      <RouterView />
    </div>
})