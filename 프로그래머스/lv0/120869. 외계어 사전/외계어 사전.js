
const solution = (spell, dic) => {
    const spellSort = spell.sort((a, b)=> a.localeCompare(b)).join("")
    const dicSort = dic.map((el) => el.split("").sort().join(""))
    for (let i = 0; i < dicSort.length; i++) {
     if (dicSort[i] === spellSort) {
         return 1
     } 
    }
    return 2
}