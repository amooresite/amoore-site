<script>
  import emailJS from "emailjs-com";
  import { addEmailToList } from "../../firebase/EmailList";
  import { serviceID, messageTempalte, userID } from "../../emailjs/config";

  $: fname = "";
  $: lname = "";
  $: email = "";
  $: phone = "";
  $: message = "";

  let sentStatus = "SENT" | "FAILED" | "DEFAULT";
  sentStatus = "DEFAULT";

  function submit() {
    const templateInfo = {
      name: fname + " " + lname,
      message: message,
    };

    emailJS
      .send(serviceID, messageTempalte, templateInfo, userID)
      .then(() => {
        sentStatus = "SENT";
        addEmailToList({
          fname,
          lname,
          email,
          phone,
        }).catch((err) => console.error(err));

        setTimeout(() => {window.location.href= window.location.href.slice(0, window.location.href.lastIndexOf('/'));}, 6000);
        
      })
      .catch((err) => console.error(err));
  }
</script>

{#if sentStatus !== "DEFAULT"}
  <div class="modal">
    <div class="modal-container">
      {#if sentStatus === "SENT"}
        <h1>SUCCESS</h1>
        <p>Your message has been receieved! You will be redirected shortly.</p>
      {:else}
        <h1>FAILED</h1>
        <p>Your message failed to send! You will be redirected shortly.</p>
      {/if}
    </div>
  </div>
{/if}

<div>
  <h1>CONTACT ME</h1>
</div>

<div class="form">
  <div class="row">
    <div class="input-container">
      <input
        id="fname"
        class="input"
        type="text"
        pattern=".+"
        required
        bind:value={fname}
      />
      <label class="label" for="fname">First Name</label>
    </div>
    <div class="input-container">
      <input
        id="lname"
        class="input"
        type="text"
        pattern=".+"
        required
        bind:value={lname}
      />
      <label class="label" for="lname">Last Name</label>
    </div>
  </div>

  <div class="row">
    <div class="input-container">
      <input
        id="email"
        class="input"
        type="text"
        pattern=".+"
        required
        bind:value={email}
      />
      <label class="label" for="email">Email</label>
    </div>
    <div class="input-container">
      <input
        id="phone"
        class="input"
        type="text"
        pattern=".+"
        required
        bind:value={phone}
      />
      <label class="label" for="phone">Phone</label>
    </div>
  </div>

  <div class="row">
    <div class="input-container">
      <input
        id="message"
        class="input"
        type="text"
        pattern=".+"
        required
        bind:value={message}
      />
      <label class="label" for="message">Message</label>
    </div>
  </div>

  <div class="row">
    <button class="btn " on:click={submit}>Send Message</button>
  </div>
</div>

<style>
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
    z-index: 100;
  }

  .modal-container {
    width: min(70%, 90%);
    padding: 2em;
    margin-block: 1em;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-size: 1.25em;
  }

  h1 {
    color: var(--primary-500);
    margin-top: 2em;
  }

  div {
    width: 95%;
    margin-inline: auto;
  }

  .btn {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 10px 80px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;

    border: 2px solid var(--primary-500);
    color: var(--primary-500);

    width: 100%;
  }

  .btn:hover {
    color: #fff;
    background: var(--primary-500);
  }

  .btn:after {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-inline: auto;
    margin-top: 2em;
    margin-bottom: 4em;
  }

  .row {
    display: flex;
    justify-content: space-around;
    gap: 2em;
    width: 100%;
    margin-block: 1em;
  }

  .input-container {
    position: relative;
    width: 100%;
  }

  input {
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    background: transparent;
    width: 100%;
  }

  label {
    top: 0;
    left: 0;
    right: 0;
    color: #616161;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  input,
  label {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  }

  /* Interation */
  input:valid,
  input:focus {
    border-bottom: 2px solid var(--primary-500);
  }

  input:valid + label,
  input:focus + label {
    color: var(--primary-500);
    font-size: 0.8rem;
    top: -30px;
    pointer-events: none;
  }

  div {
    width: 50%;
    margin-inline: auto;
  }

  @media only screen and (min-width: 768px) {
    .form {
      width: 50%;
    }
  }
</style>
