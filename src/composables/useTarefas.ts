import { computed, ref } from "vue";
import { alertController } from "@ionic/vue";

interface Tarefa {
  id: number;
  texto: string;
  feita: boolean;
}

export function useTarefas() {
  const tarefas = ref<Tarefa[]>([]);
  const busca = ref('')
  const filtroAtivo = ref<'todas' | 'pendentes' | 'feitas'>('todas')
  //computed: filtra por texto de busca E pelo filtro ativo
  const filtradas = computed( () => {
    const termo = busca.value.toLowerCase()

    return tarefas.value
    .filter(t => t.texto.toLowerCase().includes(termo))
    .filter(t => {
      if (filtroAtivo.value === 'pendentes') return !t.feita
      if (filtroAtivo.value === 'feitas') return t.feita
      return true
    })
  })

  //computed: total de pendentes
  const totalPendentes = computed(
    () => tarefas.value.filter(t => !t.feita).length
  )

  function adicionar(texto: string) {
    if (!texto.trim()) return
    tarefas.value.push({ id: Date.now(), texto, feita: false})
  }

  async function remover(id: number) {
    const alert = await alertController.create({
      header: 'Excluir Tarefa?',
      message: 'Esta ação não pode ser desfeita.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            tarefas.value = tarefas.value.filter(t => t.id !== id)
          }
        }
      ]
    })
    await alert.present()
  }

  function concluir(id: number) {
    const t = tarefas.value.find(t => t.id === id)
    if (t) t.feita = !t.feita
  }

  return { tarefas, busca, filtroAtivo, filtradas, totalPendentes, adicionar, remover, concluir}
}


  // const adicionarTarefa = () => {
  //   tocado.value = true;
  //   if (erroTarefa.value) return;
  //   if (novaTarefa.value.trim() === "") return;

  //   tarefas.value.push(novaTarefa.value);
  //   novaTarefa.value = "";
  //   tocado.value = false;
  // };

//   const removerTarefa = (index: number) => {
//     tarefas.value.splice(index, 1);
//   };

//   const erroTarefa = computed(() =>
//     !novaTarefa.value.trim() ? "Campo Obrigatório" : "",
//   );
//   const tocado = ref(false);
// }


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
