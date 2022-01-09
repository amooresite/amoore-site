<script>
  let width;
  $: isMobile = width < 768;
</script>

<svelte:window bind:innerWidth={width} />

<section class="landing">
  <div class="landing-container">
    <img
      alt="family photo"
      src="https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/landing.png?alt=media&token=4cb722dc-329e-4212-b3d0-8986e2aa1c81"
    />
  </div>
</section>

<section class="section empty">
  <p>Video content coming soon!</p>
</section>

<style>
  .landing {
    background-color: black;
  }

  .landing-container {
    width: 100%;
    margin-inline: auto;
  }

  img {
    width: 100%;
  }

  .section {
    width: 100%;
    max-width: 100vw;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 2em;
    gap: 2em;
  }

  .empty {
    min-height: 40vh;
  }

  .section-one-description {
    width: 90%;
    font-family: "Roboto";
    font-size: larger;
  }

  .container-two {
    width: 90%;
    border-radius: 5px;
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    .landing-container {
      width: 60%;
    }

    .section {
      flex-direction: row;
      justify-content: space-around;
    }

    .section-one-description {
      width: 40%;
      font-family: "Roboto";
      font-size: larger;
      line-height: 1.25em;
    }

    .container-two {
      width: 25%;
    }
  }
</style>
