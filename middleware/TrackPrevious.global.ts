export default defineNuxtRouteMiddleware((to) => {
  const historyStack = useState<string[]>('historyStack', () => []) // функция для создания глобального реактивного состояния, в моем случае массива путей
  const last = historyStack.value[historyStack.value.length - 1] // настоящая страница
  if (to.fullPath !== last) {
    // to.fullPath - след страница с query параметрами
    historyStack.value.push(to.fullPath)
  }
})
