// 6 kyu
// Convert string to camel case
// JavaScript:

function toCamelCase(str){
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
}