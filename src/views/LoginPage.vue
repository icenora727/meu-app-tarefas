<script setup lang="ts">
import { IonContent, IonInput, IonPage, toastController } from '@ionic/vue';
import { ref } from 'vue';

import { useIonRouter } from '@ionic/vue';

const router = useIonRouter()

const email = ref('')
const senha = ref('')
const erro = ref(false)

async function login() {

    erro.value = false
    if(
        email.value === 'a' &&
        senha.value === 'a'
    ) {
        localStorage.setItem('logado', 'true')

        const toast = await toastController.create({
            message: 'Login realizado!',
            duration: 2000,
            position: 'top'
        })

        await toast.present()

        router.replace('/tabs/home')

    } else {
        erro.value = true
    }
}

</script>

<template>
    <IonPage>
        <IonContent class="ion-padding">

            <div class="container">

                <h1>Login</h1>
                <p>Entre para continuar</p>

                <IonInput
                v-model="email"
                label="Email"
                label-placement="floating"
                fill="outline"
                type="email"
                />

                <IonInput
                v-model="senha"
                label="Senha"
                label-placement="floating"
                fill="outline"
                type="password"
                />

                <IonButton expand="block" @click="login">
                    Entrar
                </IonButton>

                <p v-if="erro" class="erro">
                    Email ou senha invalidos
                </p>
            </div>

        </IonContent>
    </IonPage>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

h1 {
  font-size: 32px;
  margin-bottom: 0;
}

p {
  margin-top: 0;
  color: gray;
}

.erro {
  color: red;
  text-align: center;
}
</style>