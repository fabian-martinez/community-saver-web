<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto">
                <form @submit.prevent="onSubmit">
                    <h1 class="h3 mb-3 fw-normal">Registrarse</h1>
                    <div class="form-floating">
                      <input v-model="user.name" type="text" class="form-control" id="floatingInput" placeholder="Nombre">
                      <label for="floatingInput">Nombre</label>
                    </div>
                    <div class="form-floating">
                      <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Correo Electronico</label>
                    </div>
                    <div class="form-floating">
                      <input v-model="user.secret" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Contraseña</label>
                    </div>
                    <div class="form-floating">
                      <input v-model="user.secret" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Repetir Contraseña</label>
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

  import { useRouter } from 'vue-router';
  import User from '../interfaces/UserInterface';
  import useAuth from '../composables/useAuth';

  const router = useRouter();
  const { registerUser } = useAuth();

  const user = ref<User>({
    name: '',
    email: '',
    secret: '',
  });

  const onSubmit = async () => {
    const { ok, message } = await registerUser(user.value);
    if(!ok) return console.error(ok, message)
    router.push({path:'/'})
};

</script>