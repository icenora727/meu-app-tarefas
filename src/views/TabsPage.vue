<script setup lang="ts">
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { checkboxOutline } from 'ionicons/icons';

</script>

<template>
    <IonPage>
        <IonTabs>

            <IonRouterOutlet/>

            <IonTabBar slot="bottom">

                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon :icon="checkboxOutline" />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tarefas" href="/tabs/tarefas">
                    <IonIcon :icon="checkboxOutline" />
                    <IonLabel>Tarefas</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon :icon="checkboxOutline" />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>

            </IonTabBar>

        </IonTabs>
    </IonPage>
</template>