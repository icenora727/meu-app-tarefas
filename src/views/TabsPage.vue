<script setup lang="ts">
import { IonBackButton, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { checkboxOutline, personOutline, homeOutline } from 'ionicons/icons';

</script>

<template>
    <IonPage>
        <IonTabs>

            <IonRouterOutlet/>

            <IonTabBar slot="bottom">

                <IonBackButton/>

                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon :icon="homeOutline" />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tarefas" href="/tabs/tarefas">
                    <IonIcon :icon="checkboxOutline" />
                    <IonLabel>Tarefas</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon :icon="personOutline" />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>

            </IonTabBar>

        </IonTabs>
    </IonPage>
</template>