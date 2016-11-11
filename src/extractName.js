
export default function (url) {
  const regex = /^((https?):)?(\/\/)?([^\s\/@]*)?(\/)?@?([^\s\/\?]*)/g;
  console.log(url);
  const m = regex.exec(url);
  console.log(m);
  return m[6] ? m[6] : m[4];
}
