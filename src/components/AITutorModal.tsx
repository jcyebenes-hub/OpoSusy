import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, User, BookOpen, AlertCircle, RefreshCw, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { TEMARIO_COMPLETO } from '../data/temario';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: number;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  initialTopic
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `¡Bienvenida a tu preparación de élite! Soy **OPO-PRO**, tu preparador personal para la plaza nº 204 de **Monitora Infantil de Educación** en el **Ayuntamiento de Sant Joan d'Alacant** (OPE 2026).

Recuerda:
- **Plaza en juego**: 1 plaza de funcionaria de carrera (Grupo C1).
- **Sistema**: Oposición pura, turno libre (sin concurso ni baremo de méritos; todo se decide en los dos ejercicios).
- **Temario**: 40 temas oficiales (8 Generales + 32 Específicos).

¿Qué duda técnica, artículo de la ley o supuesto práctico quieres dominar hoy?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<number | undefined>(initialTopic);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialTopic) {
      setSelectedTopic(initialTopic);
    }
  }, [initialTopic]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          topicId: selectedTopic,
          history: messages.slice(-8).map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error(`Error en el servidor: ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'Sin respuesta del preparador.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setError('No se pudo conectar con el preparador OPO-PRO. Verifica tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "¿Qué diferencias clave hay entre riesgo y desamparo infantil (Tema 25)?",
    "Explícame los 3 criterios indispensables del acoso escolar (Tema 31).",
    "¿Cuáles son las '3 D del ocio' según Dumazedier (Tema 36)?",
    "Simula una pregunta trampa sobre plazos de la Ley 39/2015 (Tema 4)."
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-3xl h-[92vh] max-h-[750px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wide">TUTOR IA OPO-PRO</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.2 rounded-full font-mono">
                  Sant Joan d'Alacant C1
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Preparador riguroso anclado al temario oficial de 40 temas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Topic Filter Bar */}
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center gap-2 text-xs">
          <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-600 font-semibold shrink-0">Contexto temático:</span>
          <select
            value={selectedTopic || ''}
            onChange={(e) => setSelectedTopic(e.target.value ? Number(e.target.value) : undefined)}
            className="bg-white border border-slate-300 text-slate-800 rounded-md px-2 py-1 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-hidden w-full max-w-sm truncate"
          >
            <option value="">Todos los 40 temas (Global)</option>
            {TEMARIO_COMPLETO.map((t) => (
              <option key={t.number} value={t.number}>
                Tema {t.number}: {t.title}
              </option>
            ))}
          </select>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4 text-amber-300" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  m.role === 'user'
                    ? 'bg-blue-700 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}
              >
                {m.role === 'assistant' ? (
                  <div className="prose prose-sm max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:my-1.5 prose-li:my-0.5">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="whitespace-pre-wrap">{m.content}</p>
                )}
                <div
                  className={`text-[10px] mt-1.5 text-right ${
                    m.role === 'user' ? 'text-blue-200' : 'text-slate-400'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <User className="w-4 h-4 text-slate-300" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Bot className="w-4 h-4 text-amber-300 animate-spin" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 text-xs text-slate-600 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
                <span>OPO-PRO está analizando la normativa y redactando su respuesta oficial...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Suggestions */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-semibold text-slate-500 shrink-0 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-amber-500" /> Sugerencias:
          </span>
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              disabled={loading}
              className="text-[11px] whitespace-nowrap bg-slate-100 hover:bg-blue-50 hover:text-blue-800 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              id="ai-tutor-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Formula tu pregunta jurídica, pedagógica o de supuestos prácticos..."
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2 text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden text-slate-900"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-blue-700 hover:bg-blue-800 disabled:bg-slate-300 text-white p-2.5 rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
              aria-label="Enviar pregunta"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
