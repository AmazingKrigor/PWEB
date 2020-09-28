    alert("Digite o nome e as 3 notas de um aluno");
   
    var aluno;
    
    aluno = prompt("Digite o nome do aluno");

    var nota;

    nota = parseFloat(prompt("Digite a primeira nota do aluno"));
    nota = nota + parseFloat(prompt("Digite a primeira nota do aluno"));
    nota = nota + parseFloat(prompt("Digite a primeira nota do aluno"));

    alert(aluno + " possui média " + (nota)/3);