import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Media from './pages/Media.svelte';
import Contact from './pages/Contact.svelte';
import NotFound from './pages/NotFound.svelte';
import Donate from './pages/Donate.svelte';

export const routes = {
  '/': Home,
  '/about': About,
  '/media': Media,
  '/contact': Contact,
  '/donate': Donate,
  '*': NotFound
}