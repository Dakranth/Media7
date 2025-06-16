function calcularMedia() {
  const gq1Input = document.getElementById('gq1');
  const gq2Input = document.getElementById('gq2');
  const mediaSpan = document.getElementById('media');
  const resultadoSpan = document.getElementById('resultado');


  resultadoSpan.textContent = "";
  resultadoSpan.className = "font-semibold"; 


  let gq1 = parseFloat(gq1Input.value.replace(',', '.'));
  let gq2 = parseFloat(gq2Input.value.replace(',', '.'));

  if (isNaN(gq1) || isNaN(gq2)) {
      mediaSpan.textContent = "-";
      return;
  }

  if (gq1 < 0 || gq1 > 10 || gq2 < 0 || gq2 > 10) {
      mediaSpan.textContent = "-";
      resultadoSpan.textContent = "As notas devem ser entre 0 e 10.";
      resultadoSpan.classList.add("status-error"); 
      return;
  }

  const media = ((gq1 * 2 + gq2 * 3) / 5).toFixed(1);
  mediaSpan.textContent = media;

  if (media >= 7) {
      resultadoSpan.textContent = "Aprovado por Média (AM)";
      resultadoSpan.classList.add("status-success"); 
  } else if (media >= 3) {
      const notaFinalNecessaria = Math.max(0, (50 - media * 5) / 5).toFixed(1);
      resultadoSpan.textContent = `Precisa de ${notaFinalNecessaria} no Exame Final para ser Aprovado (AP).`;
      resultadoSpan.classList.add("status-warning"); 
  } else {
      resultadoSpan.textContent = "Reprovado por Média (RM)";
      resultadoSpan.classList.add("status-danger"); 
  }
}