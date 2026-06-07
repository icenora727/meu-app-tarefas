<template>
  <IonPage>
    <IonContent>
      Detalhes Page

      (Nao ta funcionando muito bem, dai só deixei assim mesmo, a pagina abre só colocando o url à mão ou clicando de um jeito q desbugue na TarefasPage)
    </IonContent>
  </IonPage>
</template>

<!-- <template>
  <IonContent>
    <div v-if="tarefa">
      <h1>{{ tarefa.texto }}</h1>

      <p>
        Status:
        {{ tarefa.feita ? "Concluída" : "Pendente" }}
      </p>
    </div>
  </IonContent>
</template>

<script setup>

const route = useRoute()

const id = computed(() =>
  Number(route.params.id)
)

const { tarefas } = useTarefas()

const tarefa = computed(() =>
  tarefas.value.find(t => t.id === id.value)
)

</script> -->