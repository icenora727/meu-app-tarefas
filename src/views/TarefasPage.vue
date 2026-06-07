<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Tarefas</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Adicionar Tarefa</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonInput v-model="novaTarefa" placeholder="Digite uma Tarefa"/>

                    <IonButton expand="block" @click="adicionarNova">

                        <IonIcon :icon="addOutline" slot="start">Adicionar</IonIcon>

                    </IonButton>

                    <IonButton @click="router.push('/tabs/tarefas/123')">
TESTEEEEEEE
                    </IonButton>
                </IonCardContent>
            </IonCard>

            <IonInput v-model="busca" placeholder="Buscar Tarefa..." />

            <IonSegment v-model="filtroAtivo">
                <IonSegmentButton value="todas">Todas</IonSegmentButton>
                <IonSegmentButton value="pendentes">Pendentes</IonSegmentButton>
                <IonSegmentButton value="feitas">Feitas</IonSegmentButton>
            </IonSegment>

            <p>Pendentes: {{ totalPendentes }}</p>


            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        Minhas Tarefas ({{ filtradas.length }})
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <p v-if="!filtradas.length" class="ion-text-center ion-padding">
                        Nenhuma tarefa encontrada.
                    </p>

                    <CardTarefa
                    v-for="t in filtradas"
                    :key="t.id"
                    :tarefa="t"
                    @detalhes="abrirDetalhes"
                    @remover="remover"
                    @concluir="concluir"
                    >
                    </CardTarefa>

                </IonCardContent>
            </IonCard>

        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">

import { useIonRouter } from '@ionic/vue';
const router = useIonRouter()

import { ref } from 'vue';

import { IonSegment, IonSegmentButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import { addOutline } from 'ionicons/icons';

import { useTarefas } from '@/composables/useTarefas';
import CardTarefa from '@/components/CardTarefa.vue';

const {
    busca,
    filtroAtivo,
    filtradas,
    totalPendentes,
    adicionar,
    remover,
    concluir
} = useTarefas()

const novaTarefa = ref('')

function adicionarNova() {
    adicionar(novaTarefa.value)
    novaTarefa.value = ''
}

function abrirDetalhes(id: number) {
    console.log('indo para', id)
    router.replace(`/tabs/tarefas/${id}`)
}

</script>