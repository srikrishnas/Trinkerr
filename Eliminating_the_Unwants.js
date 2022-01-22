let input = "axxxxyyyyb", unwant = "xy"
let l = input.length;
for(let i=0;i<l;i++){
    input = input.replace(unwant,'');
}
console.log(input)
