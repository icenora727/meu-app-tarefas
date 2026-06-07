<script setup lang="ts">
import { IonButton, IonCardContent, IonIcon, IonItem, IonCard, IonLabel } from "@ionic/vue";
import { trashOutline, checkmarkCircle, ellipseOutline } from "ionicons/icons";

interface Tarefa {
  id: number;
  texto: string;
  feita: boolean;
}

const props = defineProps<{ tarefa: Tarefa }>();
const emit = defineEmits<{
  remover: [id: number];
  concluir: [id: number];
  detalhes: [id: number];
}>();
</script>

<template>
  <IonCard>
    <IonCardContent>
      <IonItem lines="none">
        <IonIcon
          slot="start"
          :icon="props.tarefa.feita ? checkmarkCircle : ellipseOutline"
          :color="props.tarefa.feita ? 'success' : 'medium'"
          @click="emit('concluir', props.tarefa.id)"
        />
        <IonLabel :style="props.tarefa.feita ? 'text-decoration:line-through' : ''">
            {{ props.tarefa.texto }}
        </IonLabel>

        <IonButton @click="
        console.log('emitindo', props.tarefa.id),
        emit('detalhes', props.tarefa.id)
        ">
          Abrir Detalhes
        </IonButton>

        <IonButton slot='end' fill ='clear' color='danger' @click="emit('remover', props.tarefa.id)">
            <IonIcon :icon='trashOutline'/>
        </IonButton>

      </IonItem>
    </IonCardContent>
  </IonCard>
</template>
