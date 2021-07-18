export default function handleLink(e, link, history) {
  e.preventDefault();
  return history.push(link);
}
