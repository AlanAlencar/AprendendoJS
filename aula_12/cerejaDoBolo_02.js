/**
 * cerejaDoBolo_02.js
 * @description consertando efeito ascii
 * @remarks em homenagem ao Leonardo Sucuri Braz.
 */

function ordenaCorretamente(x, y) {
    let A = x.charAt(0).toUpperCase();
    let B = y.charAt(0).toUpperCase();
    
    if (A < B) { // ordena A anterior a B.
        return -1;
    }

    if (A > B) { // ordena B anterior a A.
        return 1;
    }

    return 0; // não muda nada.
}

let nomes = ['José', 'Alan', 'Barbara', 'antonio', 'Pedro', 'carmem', 'Fujie'];
console.log('Antes:\n');
console.table(nomes);
nomes.sort(ordenaCorretamente);
console.log('\nDepois:\n');
console.table(nomes);
