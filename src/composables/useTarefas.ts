import { computed, ref } from 'vue';

const tarefas = ref<string[]>([])
const novaTarefa = ref('')

const adicionarTarefa = () => {
    tocado.value = true
    if (erroTarefa.value) return
    if (novaTarefa.value.trim() === '') return

    tarefas.value.push(novaTarefa.value)
    novaTarefa.value = ''
    tocado.value = false
}

const removerTarefa = (index: number) => {
    tarefas.value.splice(index, 1)
}

const erroTarefa = computed(() =>
    !novaTarefa.value.trim() ? "Campo Obrigatório" : "")
const tocado = ref(false)

export function useTarefas() {
    return { tarefas, novaTarefa, adicionarTarefa, removerTarefa, erroTarefa, tocado }
}






// import { ref, computed } from "vue";

// interface Tarefa {
//   id: number;
//   texto: string;
//   feita: boolean;
// }

// export function useTarefas() {
//   const tarefas = ref<Tarefa[]>([]);
//   const pendentes = computed(() =>
//     tarefas.value.filter(t => !t.feita).length)

//   function adicionar(texto: string) {
//     tarefas.value.push({ id: Date.now(), texto, feita:false})
//   }

//   function remover(id: number) {
//     tarefas.value = tarefas.value.filter(t => t.id !== id)
//   }

//   return { tarefas, pendentes, adicionar, remover }

// }