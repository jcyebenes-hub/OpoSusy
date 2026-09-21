import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Play,
  ShieldCheck,
  Bookmark,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  HelpCircle,
  FileText
} from 'lucide-react';
import { ThemeInfo, Question, UserStats } from '../types';
import { TEMARIO_COMPLETO } from '../data/temario';
import { BANCO_PREGUNTAS } from '../data/questions';
import { downloadTopicPDF } from '../utils/pdfExport';

interface TopicReaderModalProps {
  topic: ThemeInfo;
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topic: ThemeInfo) => void;
  onStartTest: (topicNumber: number) => void;
  onAskAITutor: (topicNumber: number) => void;
  userStats: UserStats;
}

export const TopicReaderModal: React.FC<TopicReaderModalProps> = ({
  topic,
  isOpen,
  onClose,
  onSelectTopic,
  onStartTest,
  onAskAITutor,
  userStats
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [activeTab, setActiveTab] = useState<'teoria' | 'preguntas' | 'esquema'>('teoria');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  if (!isOpen) return null;

  const topicQuestions: Question[] = BANCO_PREGUNTAS.filter((q) => q.tema === topic.number);
  const currentIndex = TEMARIO_COMPLETO.findIndex((t) => t.number === topic.number);
  const prevTopic = currentIndex > 0 ? TEMARIO_COMPLETO[currentIndex - 1] : null;
  const nextTopic = currentIndex < TEMARIO_COMPLETO.length - 1 ? TEMARIO_COMPLETO[currentIndex + 1] : null;
  const isMastered = userStats.masteredThemes.includes(topic.number);

  const handleDownloadPDF = () => {
    setIsGeneratingPdf(true);
    try {
      downloadTopicPDF(topic);
    } catch (e) {
      console.error("Error generating PDF:", e);
      alert("Se produjo un error al generar el PDF. Puedes intentar usar la opción de imprimir.");
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const fontClasses = {
    normal: 'text-sm leading-relaxed',
    large: 'text-base leading-relaxed',
    xl: 'text-lg leading-loose'
  }[fontSize];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-4xl h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Top Action Bar */}
        <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between gap-2 shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <span className="bg-blue-600 text-white text-xs font-black px-2.5 py-1 rounded-lg shrink-0">
              TEMA {topic.number}
            </span>
            <span className="text-xs text-slate-300 font-semibold truncate hidden sm:inline">
              Parte {topic.category} · Ayto. Sant Joan d'Alacant (OPE 2026)
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Font Size Controls */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  fontSize === 'normal' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Texto normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  fontSize === 'large' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Texto mediano"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  fontSize === 'xl' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Texto grande"
              >
                A++
              </button>
            </div>

            {/* Direct PDF Download Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all cursor-pointer"
              title="Descargar tema en archivo PDF listo para estudiar"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGeneratingPdf ? 'Generando PDF...' : 'Descargar PDF'}</span>
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors hidden md:inline-flex"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Cerrar lectura"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation & Secondary Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('teoria')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'teoria'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Lectura del Tema</span>
            </button>
            <button
              onClick={() => setActiveTab('esquema')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'esquema'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Esquema y Epígrafes</span>
            </button>
            <button
              onClick={() => setActiveTab('preguntas')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'preguntas'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Preguntas Oficiales ({topicQuestions.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onAskAITutor(topic.number);
              }}
              className="text-xs font-semibold text-indigo-700 hover:bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Consultar Dudas con IA</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onStartTest(topic.number);
              }}
              className="text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-lg flex items-center gap-1 transition-colors shadow-xs"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Hacer Test</span>
            </button>
          </div>
        </div>

        {/* Scrollable Reader Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 text-slate-800 bg-white">
          {/* Document Header */}
          <div className="border-b border-slate-200 pb-5 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                PARTE {topic.category.toUpperCase()} · TEMA {topic.number}
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                Ayuntamiento de Sant Joan d'Alacant · OPE 2026
              </span>
              {isMastered && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" /> Tema Dominado
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {topic.title}
            </h1>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Marco Jurídico / Pedagógico Oficial:</strong>{' '}
                <span className="font-medium text-slate-700">{topic.lawRefOrPedagogy}</span>
              </div>
            </div>
          </div>

          {/* TAB 1: FULL THEORY READING */}
          {activeTab === 'teoria' && (
            <div className={`space-y-6 ${fontClasses}`}>
              {/* Section 1: Official Summary & Context */}
              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-1.5">
                  <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  Objeto de Estudio y Marco General
                </h2>
                <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200 text-slate-700 leading-relaxed space-y-2">
                  <p>{topic.summary}</p>
                </div>
              </section>

              {/* Section 2: Developed Epigraphs */}
              <section className="space-y-4">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-1.5">
                  <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  Desarrollo de los Epígrafes Oficiales del Programa
                </h2>

                <div className="space-y-3">
                  {topic.keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          {index + 1}
                        </span>
                        <div className="flex-1 space-y-1">
                          <h3 className="font-bold text-slate-900">
                            {point.split(':')[0]}
                          </h3>
                          {point.includes(':') && (
                            <p className="text-slate-600 leading-relaxed">
                              {point.split(':').slice(1).join(':')}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Tribunal Tips & Traps */}
              <section className="bg-amber-50/80 border border-amber-300 rounded-xl p-4 sm:p-5 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-black text-amber-900 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Claves del Tribunal de Oposición y Trampas Frecuentes:</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  En las preguntas tipo test de este tema para el Ayuntamiento de Sant Joan d'Alacant, el tribunal busca verificar que distingas con exactitud los plazos tasados, las atribuciones exclusivas frente a las compartidas, y los protocolos específicos autonómicos valencianos.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
                  <span className="bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-md">
                    Criterio Oficial OPE 2026
                  </span>
                  <span className="bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-md">
                    Sin penalización en preguntas no contestadas
                  </span>
                  <span className="bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-md">
                    Penalización de 1/3 en erróneas
                  </span>
                </div>
              </section>
            </div>
          )}

          {/* TAB 2: EPÍGRAFES Y ESQUEMA */}
          {activeTab === 'esquema' && (
            <div className="space-y-4">
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 text-xs text-blue-900">
                <strong>Esquema Síntesis de Estudio:</strong> Repasa estos conceptos clave antes de realizar el test o antes de acudir a la prueba oficial.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topic.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5"
                  >
                    <div className="font-bold text-blue-800 flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-blue-600" />
                      Epígrafe {index + 1}
                    </div>
                    <p className="text-slate-700 font-medium leading-snug">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: OFFICIAL QUESTIONS FOR THIS TOPIC */}
          {activeTab === 'preguntas' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700">
                  Banco de Preguntas Oficiales del Tema ({topicQuestions.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onStartTest(topic.number);
                  }}
                  className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Entrenar en Modo Test Interactivo
                </button>
              </div>

              {topicQuestions.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs">
                  No hay preguntas registradas exclusivamente para este tema en el banco individual.
                </div>
              ) : (
                <div className="space-y-4">
                  {topicQuestions.map((q, idx) => (
                    <div
                      key={q.id || idx}
                      className="border border-slate-200 rounded-xl p-4 bg-white space-y-2.5 shadow-xs"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span>Pregunta {idx + 1}</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] uppercase">
                          Nivel {q.dificultad}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {q.enunciado}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                        {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                          const isCorrect = q.correcta === opt;
                          return (
                            <div
                              key={opt}
                              className={`p-2 rounded-lg border flex items-start gap-2 ${
                                isCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0 ${
                                  isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-800'
                                }`}
                              >
                                {opt}
                              </span>
                              <span className="leading-snug">{q.opciones[opt]}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-2.5 text-[11px] text-emerald-900 leading-relaxed">
                        <strong className="text-emerald-950 font-bold">Respuesta Oficial ({q.correcta}):</strong>{' '}
                        {q.explicacion}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Navigation (Prev Topic / Next Topic / PDF Download) */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 flex items-center justify-between gap-2 shrink-0">
          <div>
            {prevTopic ? (
              <button
                onClick={() => onSelectTopic(prevTopic)}
                className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Tema {prevTopic.number}</span>
              </button>
            ) : (
              <div className="w-16" />
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Guardar PDF del Tema {topic.number}</span>
            </button>
          </div>

          <div>
            {nextTopic ? (
              <button
                onClick={() => onSelectTopic(nextTopic)}
                className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>Tema {nextTopic.number}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-16" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
