<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="Home"></ion-back-button>
                </ion-buttons>
                <IonTitle>Tarefas</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonInput 
            v-model="novaTarefa"
            placeholder="Digite uma Tarefa" 
            label="Nome da Tarefa" 
            labelPlacement="floating" 
            :clear-input="true"
            :errorText="erroTarefa"
            :class="{'ion-invalid ion-touched': tocado && erroTarefa}"
            @ionBlur="tocado = true"
            />

            <IonButton expand="block" @click="adicionarTarefa" fill="solid" color="primary">
                <IonIcon :icon="addOutline"></IonIcon>
            </IonButton>

            <p v-if="!tarefas.length" class="ion-text-center ion-padding">
                Nenhuma tarefa cadastrada. Adicione a primeira!
            </p>

            <IonList>
                <IonItem v-for="(tarefa, index) in tarefas" :key="index">
                    <IonLabel>{{ tarefa }}</IonLabel>
                    <IonButton color="danger" @click="removerTarefa(index)" fill="clear" slot="end">
                        <IonIcon :icon="trashOutline"></IonIcon>
                    </IonButton>
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">
import { IonBackButton, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { trashOutline, addOutline } from 'ionicons/icons';

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

const erroTarefa = computed( () => 
    !novaTarefa.value.trim() ? "Campo Obrigatório" : "")
const tocado = ref(false)
</script>


<style scoped>

</style>
