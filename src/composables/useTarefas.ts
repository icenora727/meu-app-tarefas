import { ref, computed } from "vue";

autocomplete Tarefa {
  id: number;
  texto: string;
  feita: boolean;
}

export function useTarefas() {
  const tarefas = ref<Tarefa[]>([]);
  const pendentes = computed(() =>
    tarefas.value.filter(t => !t.feita).length)

  function adicionar(texto: string) {
    tarefas.value.push({ id: Date.now(), texto, feita:false})
  }

  function remover(id: number) {
    tarefas.value = tarefas.value.filter(t => t.id !== id)
  }

  return { tarefas, pendentes, adicionar, remover }

}