           <template>
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
        </template>

<script setup lang="ts">
import { IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import { trashOutline, addOutline } from 'ionicons/icons';

import { useTarefas } from '@/composables/useTarefas';

const {
    tarefas,
    novaTarefa,
    tocado,
    erroTarefa,
    adicionarTarefa,
    removerTarefa
} = useTarefas()