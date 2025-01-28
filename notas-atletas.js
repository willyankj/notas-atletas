let atletas = [  
    {  
        nome: "Cesar Abascal",  
        notas: [10, 9.34, 8.42, 10, 7.88]  
    },  
    {  
        nome: "Fernando Puntel",  
        notas: [8, 10, 10, 7, 9.33]  
    },  
    {  
        nome: "Daiane Jelinsky",  
        notas: [7, 10, 9.5, 9.5, 8]  
    },  
    {  
        nome: "Bruno Castro",  
        notas: [10, 10, 10, 9, 9.5]  
    }  
];  

atletas.forEach(atleta => {  
    // Classifica as notas  
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);  
    // Remove a nota mais baixa e a mais alta  
    let notasValidas = notasOrdenadas.slice(1, -1);  

    // Calcula a média  
    let soma = notasValidas.reduce((total, atual) => total + atual, 0);  
    let media = soma / notasValidas.length;  

    // Exibe os resultados  
    console.log(`Atleta: ${atleta.nome}`);  
    console.log(`Notas Obtidas: ${notasOrdenadas}`);  
    console.log(`Média Válida: ${media.toFixed(2)}`);  
    console.log();  
});