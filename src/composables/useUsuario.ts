import { ref } from 'vue'

const nome = ref('')

export function useUsuario() {
  return {
    nome
  }
}