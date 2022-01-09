import App from './App.svelte';
import { auth } from './firebase/firebase';
import { signInAnonymously } from 'firebase/auth';

const app = new App({
	target: document.body,
});

export default app;

signInAnonymously(auth);