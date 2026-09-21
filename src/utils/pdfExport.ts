import { jsPDF } from 'jspdf';
import { ThemeInfo, Question } from '../types';
import { BANCO_PREGUNTAS } from '../data/questions';

/**
 * Generates and downloads a clean, professional study PDF for a specific topic
 * formatted for the Ayuntamiento de Sant Joan d'Alacant OPE 2026 examination.
 */
export const downloadTopicPDF = (topic: ThemeInfo): void => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const topicQuestions: Question[] = BANCO_PREGUNTAS.filter((q) => q.tema === topic.number);

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 12) {
      doc.addPage();
      y = margin + 12;
      drawHeaderFooter();
    }
  };

  const drawHeaderFooter = () => {
    const totalPages = doc.getNumberOfPages();
    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(
      "AYTO. SANT JOAN D'ALACANT · OPE 2026 · MONITORA INFANTIL (GRUPO C1)",
      margin,
      12
    );
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Tema ${topic.number} (${topic.category})`,
      pageWidth - margin,
      12,
      { align: 'right' }
    );
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.4);
    doc.line(margin, 14, pageWidth - margin, 14);

    // Footer
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(
      "Documento Oficial de Preparación Técnica · OPO-PRO Sant Joan",
      margin,
      pageHeight - 8
    );
    doc.text(
      `Página ${doc.getCurrentPageInfo().pageNumber}`,
      pageWidth - margin,
      pageHeight - 8,
      { align: 'right' }
    );
  };

  // --- FIRST PAGE COVER HEADER ---
  drawHeaderFooter();
  y = 22;

  // Badge Category
  doc.setFillColor(30, 58, 138); // blue-900
  doc.roundedRect(margin, y, 32, 7, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text(`PARTE ${topic.category.toUpperCase()}`, margin + 16, y + 4.8, { align: 'center' });

  // Topic Number Pill
  doc.setFillColor(239, 246, 255); // blue-50
  doc.setDrawColor(191, 219, 254); // blue-200
  doc.roundedRect(margin + 36, y, 28, 7, 2, 2, 'FD');
  doc.setTextColor(29, 78, 216); // blue-700
  doc.text(`TEMA ${topic.number}`, margin + 50, y + 4.8, { align: 'center' });

  y += 13;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42); // slate-900
  const splitTitle = doc.splitTextToSize(topic.title, contentWidth);
  doc.text(splitTitle, margin, y);
  y += splitTitle.length * 6.5 + 3;

  // Law/Pedagogy reference box
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(203, 213, 225); // slate-300
  const lawText = `Marco Jurídico / Pedagógico: ${topic.lawRefOrPedagogy}`;
  const splitLaw = doc.splitTextToSize(lawText, contentWidth - 8);
  const boxHeight = splitLaw.length * 4.8 + 6;
  doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'FD');
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(30, 64, 175); // blue-800
  doc.text(splitLaw, margin + 4, y + 5);
  y += boxHeight + 6;

  // --- SECTION 1: RESUMEN Y OBJETO DE ESTUDIO ---
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text("1. Resumen y Objeto de Estudio Oficial", margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85); // slate-700
  const splitSummary = doc.splitTextToSize(topic.summary, contentWidth);
  checkPageBreak(splitSummary.length * 5);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 5 + 6;

  // --- SECTION 2: EPÍGRAFES Y PUNTOS CLAVE DE EXAMEN ---
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text("2. Epígrafes Clave y Preguntas Potenciales del Tribunal", margin, y);
  y += 6;

  topic.keyPoints.forEach((point, index) => {
    const pointText = `${index + 1}. ${point}`;
    const splitPoint = doc.splitTextToSize(pointText, contentWidth - 6);
    const pointHeight = splitPoint.length * 4.8 + 3;
    checkPageBreak(pointHeight + 2);

    doc.setFillColor(241, 245, 249); // slate-100
    doc.circle(margin + 2, y + 2.5, 1.5, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(splitPoint, margin + 6, y + 3.5);
    y += pointHeight;
  });

  y += 4;

  // --- SECTION 3: RECOMENDACIÓN TÉCNICA DEL PREPARADOR ---
  checkPageBreak(28);
  doc.setFillColor(254, 243, 199); // amber-100
  doc.setDrawColor(245, 158, 11); // amber-500
  const adviceText = `Orientación del Tribunal de Oposición (Sant Joan d'Alacant):\nPresta atención minuciosa a las diferencias entre competencias exclusivas y compartidas, plazos administrativos estrictos (hábiles vs naturales), y directrices de ratios y seguridad infantil en la Comunitat Valenciana. En los supuestos prácticos es frecuente que planteen situaciones reales de este tema.`;
  const splitAdvice = doc.splitTextToSize(adviceText, contentWidth - 8);
  const adviceHeight = splitAdvice.length * 4.6 + 6;
  doc.roundedRect(margin, y, contentWidth, adviceHeight, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text(splitAdvice, margin + 4, y + 5);
  y += adviceHeight + 8;

  // --- SECTION 4: PREGUNTAS TIPO TEST DEL BANCO OFICIAL ---
  if (topicQuestions.length > 0) {
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text(`3. Batería de Preguntas Oficiales del Tema (${topicQuestions.length} preguntas)`, margin, y);
    y += 6;

    topicQuestions.forEach((q, qIndex) => {
      checkPageBreak(40);

      // Question Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      const qNumText = `Pregunta ${qIndex + 1}: ${q.enunciado}`;
      const splitQ = doc.splitTextToSize(qNumText, contentWidth);
      doc.text(splitQ, margin, y);
      y += splitQ.length * 4.8 + 2;

      // Options
      (['A', 'B', 'C', 'D'] as const).forEach((opt) => {
        const isCorrect = q.correcta === opt;
        const optText = `[${opt}] ${q.opciones[opt]}`;
        const splitOpt = doc.splitTextToSize(optText, contentWidth - 4);
        checkPageBreak(splitOpt.length * 4.2);

        doc.setFont('helvetica', isCorrect ? 'bold' : 'normal');
        doc.setFontSize(8.5);
        if (isCorrect) {
          doc.setTextColor(22, 101, 52); // emerald-800
        } else {
          doc.setTextColor(71, 85, 105); // slate-600
        }
        doc.text(splitOpt, margin + 4, y);
        y += splitOpt.length * 4.2 + 1;
      });

      // Explanation box
      const expText = `Respuesta correcta: ${q.correcta}. Justificación legal: ${q.explicacion}`;
      const splitExp = doc.splitTextToSize(expText, contentWidth - 6);
      checkPageBreak(splitExp.length * 3.8 + 4);

      doc.setFillColor(240, 253, 244); // emerald-50
      doc.setDrawColor(187, 247, 208); // emerald-200
      const expBoxHeight = splitExp.length * 3.8 + 4;
      doc.roundedRect(margin + 2, y, contentWidth - 4, expBoxHeight, 1.5, 1.5, 'FD');
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.8);
      doc.setTextColor(21, 128, 61); // emerald-700
      doc.text(splitExp, margin + 5, y + 3.5);
      y += expBoxHeight + 5;
    });
  }

  // Update page counts in footer for all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth - margin,
      pageHeight - 8,
      { align: 'right' }
    );
  }

  // Trigger browser download
  const safeTitle = topic.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `Tema_${topic.number}_${safeTitle}_Sant_Joan.pdf`;
  doc.save(fileName);
};

/**
 * Downloads the full index and syllabus overview of all 40 topics as a single PDF.
 */
export const downloadFullSyllabusPDF = (topics: ThemeInfo[]): void => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 12) {
      doc.addPage();
      y = margin + 12;
      drawHeaderFooter();
    }
  };

  const drawHeaderFooter = () => {
    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(
      "AYTO. SANT JOAN D'ALACANT · OPE 2026 · MONITORA INFANTIL (GRUPO C1)",
      margin,
      12
    );
    doc.setFont('helvetica', 'normal');
    doc.text("PROGRAMA OFICIAL COMPLETO (40 TEMAS)", pageWidth - margin, 12, { align: 'right' });
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(margin, 14, pageWidth - margin, 14);

    // Footer
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Guía Oficial de Estudio y Temario Anexo I · OPO-PRO", margin, pageHeight - 8);
    doc.text(
      `Página ${doc.getCurrentPageInfo().pageNumber}`,
      pageWidth - margin,
      pageHeight - 8,
      { align: 'right' }
    );
  };

  drawHeaderFooter();
  y = 24;

  // Title Cover
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text("PROGRAMA OFICIAL DE LA OPOSICIÓN", margin, y);
  y += 7;

  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(
    "Monitora Infantil (Grupo C1) · Turno Libre · Ayuntamiento de Sant Joan d'Alacant",
    margin,
    y
  );
  y += 5;
  doc.text("Publicado en BOP Alicante nº 179 (Edicto nº 7150) · 40 Temas", margin, y);
  y += 10;

  topics.forEach((t) => {
    checkPageBreak(26);

    // Topic row
    doc.setFillColor(t.category === 'General' ? 239 : 238, t.category === 'General' ? 246 : 242, 255);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, y, contentWidth, 20, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(t.category === 'General' ? 30 : 67, t.category === 'General' ? 58 : 56, t.category === 'General' ? 138 : 202);
    doc.text(`TEMA ${t.number} [${t.category.toUpperCase()}]:`, margin + 3, y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    const splitTitle = doc.splitTextToSize(t.title, contentWidth - 45);
    doc.text(splitTitle, margin + 35, y + 5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    const splitRef = doc.splitTextToSize(`Ref: ${t.lawRefOrPedagogy}`, contentWidth - 8);
    doc.text(splitRef, margin + 3, y + 16);

    y += 23;
  });

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth - margin,
      pageHeight - 8,
      { align: 'right' }
    );
  }

  doc.save("Temario_Oficial_Completo_40_Temas_Sant_Joan.pdf");
};
