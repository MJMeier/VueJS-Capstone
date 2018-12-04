<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" <router-link to="/">Home</router-link>  |
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" <router-link to="/signup">Signup</router-link> | <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item"><a class="nav-link" <router-link to="/login">Login</router-link> | </a></li>
            <li class="nav-item"><a class="nav-link" router-link to="/logout">Logout</router-link> </a></li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style></style>
