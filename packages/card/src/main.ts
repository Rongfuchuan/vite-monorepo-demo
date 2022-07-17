import './index.css'
import { createApp } from 'vue'
import App from './App'
import { router } from './router'

function bootstrap() {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

bootstrap()