<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto">
                <form @submit.prevent="onSubmit">
                    <h1 class="h3 mb-3 fw-normal">Login</h1>
                
                    <div class="form-floating">
                    <input v-model="userLogin.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Correo Electronico</label>
                    </div>
                    <div class="form-floating">
                    <input v-model="userLogin.secret" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Contraseña</label>
                    </div>
                
                    <!-- <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                    </div> -->
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2005–2024</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    import useAuth from '@/modules/auth/composables/useAuth'
    import { useRouter } from 'vue-router';
import User from '../interfaces/UserInterface';

    const router = useRouter();
    const { signInUser } = useAuth();

    const userLogin = ref<User>({
        email: 'fabian@mail.com',
        secret: '123456',
    });

    const onSubmit = async () => {
        const { ok, message } = await signInUser(userLogin.value);
        if(!ok) return console.error(ok, message)
        router.push({path:'/'})
    };

</script>