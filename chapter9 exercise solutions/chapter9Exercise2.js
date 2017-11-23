var text = "'I'm an engineer,' so they said, 'isn't it?'";

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));

