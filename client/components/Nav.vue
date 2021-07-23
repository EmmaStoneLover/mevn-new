<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand text-success">
        <img
          src="/favicon.ico"
          width="30"
          height="30"
          class="d-inline-block align-text-top"
        />
        SimpleDimple
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
          <NuxtLink to="/second" class="nav-link"> SecondPage </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
