export default function importIcon(name) {
  return new URL(`../assets/weather/${name}`, import.meta.url).href;
}