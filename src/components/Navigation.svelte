<script lang="ts">
  import Logo from "./Logo.svelte";

  let width;
  let mobileNavOpen = false;
  $: isMobile = width < 768;

  function toggleNavOpen() {
    if (isMobile) mobileNavOpen = !mobileNavOpen;
  }
</script>

<svelte:window bind:innerWidth={width} />

<nav class="navigation">
  <div class="container">
    <button id="burger" class="open-main-nav" on:click={toggleNavOpen}>
      <span class="burger" />
      <span class="burger-text">Menu</span>
    </button>
    <div class="logo">
      <Logo />
    </div>
    <nav class="main-nav" id="main-nav" class:is-open={mobileNavOpen}>
      <ul>
        <li>
          <a href="#/" on:click={toggleNavOpen}>Home</a>
        </li>
        <li>
          <a href="#/about" on:click={toggleNavOpen}>About me</a>
        </li>
        <li>
          <a href="#/media" on:click={toggleNavOpen}>Media</a>
        </li>
        <li>
          <a href="#/contact" on:click={toggleNavOpen}>Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</nav>

<style>
  .main-nav {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    transition: all 0.375s;
  }

  .main-nav.is-open {
    opacity: 1;
    z-index: 100;
    visibility: visible;
  }

  .main-nav::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -15px;
    background: var(--primary-500);
    transform-origin: 0 0;
    transform: translateX(-120%);
    transition: all 0.275s 0.1s;
  }

  .main-nav.is-open::before {
    transform: translateX(0);
  }

  .main-nav ul {
    display: inline-flex;
    flex-direction: column;
    height: 93%;
    align-items: flex-end;
    justify-content: center;
    transform: translateX(-18%);
  }

  .main-nav li {
    display: block;
    margin: 0.5rem 0;
    text-align: right;
  }

  .main-nav a {
    opacity: 0;
    transform: translateY(-10px);
  }

  .main-nav.is-open a {
    opacity: 1;
    transform: translateY(0);
  }
  .main-nav li:nth-child(1) a {
    transition: all 275ms 175ms;
  }
  .main-nav li:nth-child(2) a {
    transition: all 275ms 225ms;
  }
  .main-nav li:nth-child(3) a {
    transition: all 275ms 275ms;
  }
  .main-nav li:nth-child(4) a {
    transition: all 275ms 325ms;
  }
  .main-nav li:nth-child(5) a {
    transition: all 275ms 375ms;
  }

  /* Decoration */
  .main-nav ul,
  .main-nav li {
    list-style: none;
    padding: 0;
  }
  .main-nav a {
    display: block;
    padding: 12px 0;
    color: white;
    letter-spacing: 0.1em;
    font-size: 1.2em;
    text-decoration: none;
    font-weight: bold;
  }

  .open-main-nav {
    position: absolute;
    top: 1.8em;
    padding-top: 20px;
    right: 20px;
    z-index: 1000;
    background: none;
    border: 0;
    cursor: pointer;
  }
  .open-main-nav:focus {
    outline: none;
  }
  .burger {
    position: ab;
    display: block;
    width: 28px;
    height: 4px;
    margin: 0 auto;
    background: var(--primary-500);
    transition: all 0.275s;
  }

  .burger:after,
  .burger:before {
    content: "";
    display: block;
    height: 100%;
    background: var(--primary-500);
    transition: all 0.275s;
  }

  .burger:after {
    transform: translateY(-12px);
  }

  .burger:before {
    transform: translateY(-16px);
  }

  .is-open .burger {
    transform: translateY(-8px) rotate(-45deg);
  }

  .is-open .burger:before {
    transform: translateY(0px) rotate(75deg);
  }

  .is-open .burger:after {
    transform: translateY(-12px) translateX(10px);
    opacity: 0;
  }

  .burger-text {
    display: block;
    font-size: 0.675rem;
    letter-spacing: 0.05em;
    margin-top: 0.5em;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    color: var(--primary-500);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.5em;
    background-color: white;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .logo {
    width: 12.5em;
  }

  @media only screen and (min-width: 768px) {
    .container {
      justify-content: unset;
      padding-inline: 7%;
    }

    .main-nav {
      position: unset;
      visibility: unset;
      opacity: unset;
      z-index: unset;
      margin-left: 4em;
    }

    .main-nav ul {
      display: flex;
      flex-direction: row;
      transform: translate(0px);
    }

    .main-nav li a {
      display: flex;
      flex-direction: row;
      transform: unset;
      padding-inline: 1.5em;
      color: var(--primary-500);
      transition-duration: 100ms !important;
      transition-delay: 0ms !important;
    }

    .main-nav a {
      opacity: unset;
      transform: unset;
      font-size: 1.125em;
    }

    .main-nav a:hover {
      color: var(--primary-800);
      transition-duration: 0ms;
    }

    .burger {
      display: none;
    }

    .burger-text {
      display: none;
    }

    .logo {
      width: 15em;
    }
  }
</style>
