import React, { useState } from 'react';
import { Search, BookOpen, CheckCircle, Sparkles, Filter, ChevronRight, Bookmark, ArrowRight, ShieldCheck, Download, Eye, FileText, Printer } from 'lucide-react';
import { TEMARIO_COMPLETO } from '../data/temario';
import { ThemeInfo, UserStats } from '../types';
import { TopicReaderModal } from './TopicReaderModal';
import { downloadTopicPDF, downloadFullSyllabusPDF } from '../utils/pdfExport';

interface TutoriaTemarioViewProps {
  userStats: UserStats;
  onSelectTopicForTest: (topicId: number) => void;
  onAskAITutor: (topicId: number) => void;
}

export const TutoriaTemarioView: React.FC<TutoriaTemarioViewProps> = ({
  userStats,
  onSelectTopicForTest,
  onAskAITutor
}) => {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'General' | 'Especifica'>('all');
  const [selectedTopic, setSelectedTopic] = useState<ThemeInfo>(TEMARIO_COMPLETO[0]);
  const [isReaderOpen, setIsReaderOpen] = useState<boolean>(false);
  const [isDownloadingFull, setIsDownloadingFull] = useState<boolean>(false);

  const filteredTopics = TEMARIO_COMPLETO.filter((t) => {
    const matchesCategory = filterCategory === 'all' || t.category === filterCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.summary.toLowerCase().includes(search.toLowerCase()) ||
      t.keyPoints.some((kp) => kp.toLowerCase().includes(search.toLowerCase())) ||
      `tema ${t.number}`.includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadFullSyllabus = () => {
    setIsDownloadingFull(true);
    try {
      downloadFullSyllabusPDF(TEMARIO_COMPLETO);
    } catch (e) {
      console.error(e);
      alert("Error al generar el PDF del temario completo.");
    } finally {
      setTimeout(() => setIsDownloadingFull(false), 600);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-sm border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              TEMARIO OFICIAL · 40 TEMAS
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Tutoría Integral del Programa Oficial
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Dominio absoluto de los 8 temas de la Parte General y 32 de la Parte Específica exigidos en el Anexo I para la plaza de Monitora Infantil del Ayuntamiento de Sant Joan d'Alacant.
            </p>
          </div>

          {/* Quick Metrics & Download Full Syllabus */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadFullSyllabus}
              disabled={isDownloadingFull}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Descargar el programa y guía de los 40 temas en archivo PDF"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>{isDownloadingFull ? 'Generando PDF...' : 'Descargar Programa en PDF'}</span>
            </button>

            <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 text-center">
              <div className="text-xs text-slate-400 font-medium">Temas Totales</div>
              <div className="text-xl font-black text-white">40</div>
            </div>
            <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 text-center">
              <div className="text-xs text-slate-400 font-medium">Dominados</div>
              <div className="text-xl font-black text-emerald-400">
                {userStats.masteredThemes.length} / 40
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por número, título, ley o concepto clave..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/60 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Todos ({TEMARIO_COMPLETO.length})
            </button>
            <button
              onClick={() => setFilterCategory('General')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === 'General'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              General (1-8)
            </button>
            <button
              onClick={() => setFilterCategory('Especifica')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === 'Especifica'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Específica (9-40)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: List + Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Topics List Column */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Índice de Temas ({filteredTopics.length})
            </span>
            <span className="text-[11px] text-slate-500">Selecciona para explorar</span>
          </div>

          <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
            {filteredTopics.map((t) => {
              const isSelected = selectedTopic.number === t.number;
              const isMastered = userStats.masteredThemes.includes(t.number);
              const stats = userStats.themeStats[t.number] || { attempts: 0, correct: 0 };

              return (
                <div
                  key={t.number}
                  onClick={() => setSelectedTopic(t)}
                  className={`p-3 sm:p-4 text-left cursor-pointer transition-colors flex items-start gap-3 ${
                    isSelected
                      ? 'bg-blue-50/70 border-l-4 border-blue-700'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                      t.category === 'General'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}
                  >
                    {t.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.2 rounded uppercase ${
                          t.category === 'General'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        }`}
                      >
                        {t.category}
                      </span>
                      {isMastered && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                          <CheckCircle className="w-3 h-3" /> Dominado
                        </span>
                      )}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1 truncate">
                      {t.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {t.summary}
                    </p>
                    {stats.attempts > 0 && (
                      <div className="text-[10px] text-slate-400 mt-1 font-medium">
                        Respuestas: {stats.correct}/{stats.attempts} (
                        {Math.round((stats.correct / stats.attempts) * 100)}% acierto)
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTopic(t);
                        setIsReaderOpen(true);
                      }}
                      className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Abrir y leer tema"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadTopicPDF(t);
                      }}
                      className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Descargar tema en PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <ChevronRight
                      className={`w-4 h-4 self-center ${
                        isSelected ? 'text-blue-700' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Topic Detailed Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-700 text-white">
                TEMA {selectedTopic.number}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Parte {selectedTopic.category}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsReaderOpen(true)}
                className="flex items-center gap-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-3.5 py-2 rounded-xl shadow-xs transition-all cursor-pointer"
                title="Abrir el tema para lectura completa y estudio detallado"
              >
                <BookOpen className="w-4 h-4" />
                <span>Abrir y Leer Tema</span>
              </button>

              <button
                onClick={() => downloadTopicPDF(selectedTopic)}
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-2 rounded-xl transition-all cursor-pointer"
                title="Descargar este tema en formato PDF listo para imprimir o estudiar"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Descargar en PDF</span>
              </button>

              <button
                onClick={() => onAskAITutor(selectedTopic.number)}
                className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-xl border border-blue-200 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Dudas OPO-PRO</span>
              </button>

              <button
                onClick={() => onSelectTopicForTest(selectedTopic.number)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <span>Hacer Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              {selectedTopic.title}
            </h3>
            <div className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-semibold mt-2 bg-blue-50 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              {selectedTopic.lawRefOrPedagogy}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {selectedTopic.summary}
            </p>
          </div>

          {/* Official Key Points List */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-blue-700" />
              Puntos Clave y Epígrafes Oficiales del Examen
            </h4>
            <ul className="space-y-2">
              {selectedTopic.keyPoints.map((kp, idx) => (
                <li key={idx} className="text-xs text-slate-800 flex items-start gap-2 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-white border border-slate-300 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Preparer Advisory Note */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Orientación Técnico-Didáctica OPO-PRO:
            </div>
            <p className="leading-relaxed">
              En este tema el tribunal suele formular preguntas que distinguen plazos exactos, mayorías y competencias exclusivas locales frente a autonómicas. Revisa con especial atención la normativa citada en cada epígrafe para evitar caer en las opciones trampa clásicas.
            </p>
          </div>
        </div>
      </div>

      {/* Full Topic Reader & PDF Modal */}
      <TopicReaderModal
        topic={selectedTopic}
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        onSelectTopic={(t) => setSelectedTopic(t)}
        onStartTest={onSelectTopicForTest}
        onAskAITutor={onAskAITutor}
        userStats={userStats}
      />
    </div>
  );
};
