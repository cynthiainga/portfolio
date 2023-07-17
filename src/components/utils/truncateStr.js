export default function truncateStr(str, length = 100, ending = '...') {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }

  return str;
}
