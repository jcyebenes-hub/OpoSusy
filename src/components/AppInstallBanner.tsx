import { useCallback, useEffect, useState } from 'react';
import { Download, Share, Sparkles, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const DISMISS_KEY = 'oposusy-install-banner-dismissed-at';
const RESHOW_AFTER_MS = 7 * 24 * 60 * 60 * 1000; // 7 días

/**
 * Banner "Instala OPO-PRO" (PWA).
 * - Android/Chrome/Edge: usa el evento beforeinstallprompt -> prompt nativo.
 * - iOS Safari: no permite el prompt nativo -> muestra instrucciones manuales.
 * - Si la app ya está instalada (display-mode: standalone) no se muestra.
 * - Si se cierra, no vuelve a salir durante 7 días.
 */
export function AppInstallBanner() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);

  const isIOS =
    /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (isStandalone) setInstalled(true);

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onAppInstalled = () => {
      setInstalled(true);
      setDeferred(null);
      localStorage.removeItem(DISMISS_KEY);
    };

    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < RESHOW_AFTER_MS) {
      setDismissed(true);
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferred) {
      setShowHowTo(true);
      return;
    }
    await deferred.prompt();
    const choice = await deferred.userChoice;
    if (choice.outcome === 'accepted') {
      localStorage.removeItem(DISMISS_KEY);
      setDeferred(null);
    }
  }, [deferred]);

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setDismissed(true);
  };

  // No mostramos nada si ya está instalada, si el usuario lo cerró hace <7 días,
  // o si el navegador no permite instalación (p. ej. Firefox/Safari de escritorio).
  if (installed || dismissed) return null;
  if (!deferred && !isIOS) return null;

  return (
    <div className="mb-4 sm:mb-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 border border-blue-400/30 text-white shadow-lg shadow-blue-700/20 px-4 py-3 flex items-center gap-3">
        <img
          src="/icons/icon-192.png"
          alt=""
          className="h-11 w-11 rounded-xl shadow ring-1 ring-white/20 shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-black tracking-wide flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            INSTALA OPO-PRO EN TU DISPOSITIVO
          </div>
          <div className="text-[11px] text-blue-100 mt-0.5">
            {isIOS
              ? 'Accede a tu temario al instante desde la pantalla de inicio'
              : 'Accede a tu temario al instante, sin navegador'}
          </div>
        </div>
        <button
          onClick={handleInstall}
          className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-black tracking-wide transition-colors cursor-pointer"
        >
          {deferred ? <Download className="h-3.5 w-3.5" /> : <Share className="h-3.5 w-3.5" />}
          {deferred ? 'Instalar app' : 'Cómo instalar'}
        </button>
        <button
          onClick={handleDismiss}
          aria-label="Cerrar aviso de instalación"
          className="shrink-0 p-1 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Instrucciones para iOS (Safari no tiene prompt nativo de instalación) */}
      {showHowTo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setShowHowTo(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3">
              <img src="/icons/icon-192.png" alt="" className="h-12 w-12 rounded-xl shadow" />
              <div className="flex-1">
                <h3 className="font-black text-slate-900 text-sm">Instalar OPO-PRO en iPhone / iPad</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Safari no muestra el botón de instalar, pero es muy rápido:
                </p>
              </div>
              <button
                onClick={() => setShowHowTo(false)}
                aria-label="Cerrar"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ol className="mt-4 space-y-3">
              {[
                <>
                  Pulsa el botón de <strong>compartir</strong> (cuadrado con flecha hacia arriba) de Safari.
                </>,
                <>
                  Desliza hacia abajo y elige <strong>«Añadir a pantalla de inicio»</strong>.
                </>,
                <>
                  Pulsa <strong>«Añadir»</strong> y listo: OPO-PRO aparecerá como una app más.
                </>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-slate-700">
                  <span className="shrink-0 h-5 w-5 rounded-full bg-blue-700 text-white text-[10px] font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <button
              onClick={() => {
                setShowHowTo(false);
                handleDismiss();
              }}
              className="mt-5 w-full py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-black tracking-wide transition-colors cursor-pointer"
            >
              Lo tengo claro
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
