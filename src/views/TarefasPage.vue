<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="Home" />
                </ion-buttons>
                <IonTitle>Tarefas</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Adicionar Tarefa</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonInput v-model="novaTarefa" placeholder="Digite uma Tarefa" label="Nome da Tarefa"
                        labelPlacement="floating" :clear-input="true" :errorText="erroTarefa"
                        :class="{ 'ion-invalid ion-touched': tocado && erroTarefa }" @ionBlur="tocado = true" />

                    <IonButton expand="block" @click="adicionarTarefa" fill="solid" color="primary">

                        <IonIcon :icon="addOutline">Adicionar</IonIcon>
                    </IonButton>
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        Minhas Tarefas ({{ tarefas.length }})
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <p v-if="!tarefas.length" class="ion-text-center ion-padding">
                        Nenhuma tarefa cadastrada. Adicione a primeira!
                    </p>

                    <IonList>
                        <IonItem v-for="(tarefa, id) in tarefas" :key="id">
                            <IonLabel>{{ tarefa }}</IonLabel>
                            <IonButton color="danger" @click="removerTarefa(id)" fill="clear" slot="end">
                                <IonIcon :icon="trashOutline"></IonIcon>
                            </IonButton>
                        </IonItem>
                    </IonList>

                </IonCardContent>
            </IonCard>

        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">
import { IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import { trashOutline, addOutline } from 'ionicons/icons';

import { useTarefas } from '@/composables/useTarefas';

const {
    tarefas,
    busca,
    filtroAtivo,
    filtradas,
    totalPendentes,
    tocado,
    erroTarefa,
    adicionarTarefa,
    removerTarefa,
    concluir
} = useTarefas()

const novaTarefa = ref('')
function adicionarNova() {
    adicionar(novaTarefa.value)
    novaTarefa.value = ''
}


// import { computed, ref } from 'vue';

// const tarefas = ref<string[]>([])
// const novaTarefa = ref('')

// const adicionarTarefa = () => {
//     tocado.value = true
//     if (erroTarefa.value) return
//     if (novaTarefa.value.trim() === '') return

//     tarefas.value.push(novaTarefa.value)
//     novaTarefa.value = ''
//     tocado.value = false
// }

// const removerTarefa = (index: number) => {
//     tarefas.value.splice(index, 1)
// }

// const erroTarefa = computed(() =>
//     !novaTarefa.value.trim() ? "Campo Obrigatório" : "")
// const tocado = ref(false)

</script>


<style scoped></style>
