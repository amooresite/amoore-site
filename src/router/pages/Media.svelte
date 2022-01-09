<script>
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/F5D3597A-510A-4AEE-9564-6AA71E41B336.jpeg?alt=media&token=bb66e657-58fc-478f-8b6f-c63c211f1819",
    "https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/BDE7C856-E5B0-4180-A55B-97F5691AAA4B.jpeg?alt=media&token=5e99feff-1b32-46fa-9fff-59d4133507c8",
    "https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/landing.png?alt=media&token=4cb722dc-329e-4212-b3d0-8986e2aa1c81",
    "https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/IMG_6169.PNG?alt=media&token=268d63a7-5816-4cd2-b2e5-cc214e5fd3f9",
    "https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/am.png?alt=media&token=07090108-5d64-4268-af74-721ea0ee8280",
    "https://firebasestorage.googleapis.com/v0/b/andrea-moore-d4354.appspot.com/o/pic12.jpg?alt=media&token=7e6a5562-0563-4fc7-94af-d102c2fa21fb"
  ];
  $: modalImage = "";
</script>

<div class="wrapper">
  <h1>PICTURES</h1>
  <div class="photos">
    {#each images as image}
      <div on:click={() => (modalImage = image)}>
        <img alt="photo" src={image} />
      </div>
    {/each}
  </div>

  {#if modalImage}
    <div class="modal" on:click={() => (modalImage = "")}>
      <div class="modal-image-container">
        <img alt="modal image" src={modalImage} />
      </div>
    </div>
  {/if}

  <h1>VIDEOS</h1>
  <div class="videos">
    <p>Video content coming soon!</p>
  </div>
</div>

<style>
  h1 {
    font-weight: bold;
    font-family: "Roboto";
    letter-spacing: 0.05em;
    color: var(--primary-500);
    margin-block: 1em;
  }

  .wrapper {
    width: 90%;
    margin-inline: auto;
    margin-block: 2em;
  }

  .photos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }

  .photos div {
    max-width: 20em;
    height: auto;
    margin-inline: auto;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .photos img {
    display: block;
    width: 100%;
    height: auto;
  }

  .modal {
    width: 100vw;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-image-container {
    width: 90%;
    padding: 2em;
    /* margin-inline: auto; */
  }

  .modal-image-container img {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    .photos div {
      margin-inline: unset;
    }

    .modal-image-container {
      width: 50%;
      padding: 2em;
      /* margin-inline: auto; */
    }
  }
</style>
