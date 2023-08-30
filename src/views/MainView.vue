<template lang="">
    <div>
    <header>
      <div class="image-container">
          <img src="@/assets/people.jpeg" alt="Imagen alusiva 1">
          Photo by <a href="https://unsplash.com/@wildlittlethingsphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Helena Lopes</a> on <a href="https://unsplash.com/photos/DkGIAjlIJu0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
      <h1>Bienvenido a nuestra Aplicación de Gestión de Préstamos</h1>
    </header>

    <main>
      <section>
        <h2>Sobre Nosotros</h2>
        <p>
          Nuestra aplicación está diseñada para fomentar la creación de espacios de ahorro y financiación colaborativa, rompiendo con los métodos tradicionales.
        </p>
        <p>
          Con nuestra plataforma, podrás acceder a préstamos de manera innovadora y eficiente, permitiéndote colaborar con otros usuarios para alcanzar tus objetivos financieros.
        </p>
      </section>

      <section>
        <h2>¿Listo para unirte?</h2>
        <p>Regístrate hoy mismo y descubre cómo puedes transformar tus finanzas con nuestra aplicación.</p>
        <a href="/register">¡Regístrate aquí!</a>
        
        <!-- Enlace para iniciar sesión -->
        <p>¿Ya estás registrado? <a href="/login">Inicia sesión aquí</a></p>
        <div class="image-container">
            <img src="@/assets/ahorro.jpeg" alt="Imagen alusiva 1">
            Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile henderson</a> on <a href="https://unsplash.com/photos/SoT4-mZhyhE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </section>
    </main>
    
    <!-- Footer -->
    <footer>
      <p>&copy; 2023 Tu Aplicación de Gestión de Préstamos. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="scss" scoped>
    #app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      background-color: #007bff;
      color: white;
      text-align: center;
      padding: 0px;
    }

    main {
      flex: 1;
      padding: 20px;
    }

    section {
      margin-bottom: 30px;
    }

    h2 {
      color: #007bff;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }

    .image-container {
      overflow: hidden;
      margin: 0px;
      position: relative;
      width: 100%;
      height: 300px; /* Ajusta la altura según tu diseño */
    }

    .image-container img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    footer {
      background-color: #f0f0f0;
      text-align: center;
      padding: 10px 0;
    }
</style>