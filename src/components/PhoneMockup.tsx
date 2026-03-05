import { useState } from 'react'

type Screen = 'home' | 'report' | 'status'

interface SeverityOption {
    id: string
    label: string
    icon: string
    level: string
}

const severityOptions: SeverityOption[] = [
    { id: 'ankle', label: 'Ankle', icon: '🦶', level: 'Low' },
    { id: 'knee', label: 'Knee', icon: '🦵', level: 'Moderate' },
    { id: 'waist', label: 'Waist', icon: '🫃', level: 'High' },
    { id: 'chest', label: 'Chest', icon: '🧍', level: 'Critical' },
]

export default function PhoneMockup() {
    const [screen, setScreen] = useState<Screen>('home')
    const [severity, setSeverity] = useState<string | null>(null)
    const [timer, setTimer] = useState<number | null>(null)
    const [submitted, setSubmitted] = useState(false)
    const [statusStep, setStatusStep] = useState(0)

    const handleSubmit = () => {
        if (!severity) return
        const startTime = Date.now()

        const tick = () => {
            const elapsed = (Date.now() - startTime) / 1000
            setTimer(parseFloat(elapsed.toFixed(1)))
            if (elapsed < 2.5) {
                requestAnimationFrame(tick)
            } else {
                setSubmitted(true)
                setScreen('status')
                // Animate status steps
                setTimeout(() => setStatusStep(1), 400)
                setTimeout(() => setStatusStep(2), 1200)
                setTimeout(() => setStatusStep(3), 2000)
                setTimeout(() => setStatusStep(4), 2800)
            }
        }
        requestAnimationFrame(tick)
    }

    const reset = () => {
        setScreen('home')
        setSeverity(null)
        setTimer(null)
        setSubmitted(false)
        setStatusStep(0)
    }

    return (
        <div className="phone-frame mx-auto flex flex-col">
            {/* Notch */}
            <div className="phone-notch flex-shrink-0" />

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1 text-[10px] text-gray-500 bg-white">
                <span>9:41</span>
                <div className="flex gap-1">
                    <span>●●●●</span>
                    <span>🔋</span>
                </div>
            </div>

            {/* Screen content */}
            <div className="flex-1 overflow-hidden relative">
                {/* HOME SCREEN */}
                {screen === 'home' && (
                    <div className="h-full flex flex-col bg-white p-4">
                        {/* App header */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-md bg-pulse-teal flex items-center justify-center">
                                <span className="text-white text-[8px] font-bold">CP</span>
                            </div>
                            <span className="font-display text-sm font-semibold text-pulse-deep">ClimatePulse</span>
                        </div>

                        {/* Risk card */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-amber-400" />
                                <span className="text-xs font-semibold text-amber-800">MODERATE RISK</span>
                            </div>
                            <p className="text-[11px] text-amber-700">
                                Heavy rainfall expected. 3 nearby areas flooded in the last 24hrs.
                            </p>
                        </div>

                        {/* Community counter */}
                        <div className="bg-pulse-mist rounded-xl p-3 mb-3">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-1">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-5 h-5 rounded-full bg-pulse-teal/20 border border-white flex items-center justify-center">
                                            <span className="text-[7px] text-pulse-teal">👤</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-pulse-text font-medium">12 neighbors reported today</span>
                            </div>
                        </div>

                        {/* Recent reports */}
                        <p className="text-[10px] text-pulse-slate uppercase tracking-wider font-medium mb-2">
                            Recent in your area
                        </p>
                        {[
                            { type: 'Flood', time: '2 min ago', level: 'Knee-deep' },
                            { type: 'Road blocked', time: '14 min ago', level: 'Major' },
                        ].map((r, i) => (
                            <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                                <div className="w-6 h-6 rounded-full bg-pulse-teal/10 flex items-center justify-center text-xs">
                                    🌊
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-medium text-pulse-deep truncate">{r.type} · {r.level}</p>
                                    <p className="text-[10px] text-pulse-slate">{r.time}</p>
                                </div>
                            </div>
                        ))}

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* FAB */}
                        <button
                            onClick={() => setScreen('report')}
                            className="self-end bg-pulse-teal text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-pulse-teal-light transition-colors cursor-pointer"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* REPORT SCREEN */}
                {screen === 'report' && (
                    <div className="h-full flex flex-col bg-white p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <button onClick={() => setScreen('home')} className="text-pulse-slate hover:text-pulse-deep cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <span className="font-display text-sm font-semibold text-pulse-deep">Report Flood</span>
                        </div>

                        <p className="text-xs text-pulse-slate mb-3">How deep is the water?</p>

                        {/* Severity selector */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {severityOptions.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setSeverity(opt.id)}
                                    className={`p-3 rounded-xl border-2 text-center cursor-pointer transition-all ${severity === opt.id
                                            ? 'border-pulse-teal bg-pulse-teal/5 shadow-sm'
                                            : 'border-gray-100 hover:border-gray-200'
                                        }`}
                                >
                                    <span className="text-xl block mb-1">{opt.icon}</span>
                                    <span className="text-xs font-semibold text-pulse-deep block">{opt.label}</span>
                                    <span className="text-[10px] text-pulse-slate">{opt.level}</span>
                                </button>
                            ))}
                        </div>

                        {/* Photo placeholder */}
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-3 flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                📷
                            </div>
                            <span className="text-xs text-pulse-slate">Add photo (optional)</span>
                        </div>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Submit */}
                        <button
                            onClick={handleSubmit}
                            disabled={!severity}
                            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${severity
                                    ? 'bg-pulse-teal text-white hover:bg-pulse-teal-light shadow-md'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {timer !== null && !submitted ? (
                                <span className="font-mono">{timer.toFixed(1)}s</span>
                            ) : (
                                'Submit Report'
                            )}
                        </button>
                    </div>
                )}

                {/* STATUS SCREEN */}
                {screen === 'status' && (
                    <div className="h-full flex flex-col bg-white p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="font-display text-sm font-semibold text-pulse-deep">Report Status</span>
                        </div>

                        {/* Timer badge */}
                        <div className="bg-pulse-teal/10 border border-pulse-teal/30 rounded-full px-4 py-2 inline-flex items-center gap-2 self-start mb-6">
                            <svg className="w-4 h-4 text-pulse-teal" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.22 5.22a.75.75 0 0 0-1.06 0L7 8.38 5.84 7.22a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3.88-3.88a.75.75 0 0 0 0-1.06Z" />
                            </svg>
                            <span className="text-xs font-semibold text-pulse-teal font-mono">
                                Submitted in {timer?.toFixed(1)}s
                            </span>
                        </div>

                        {/* Progress tracker */}
                        <div className="space-y-0">
                            {[
                                { label: 'Report Received', step: 1 },
                                { label: 'Under Verification', step: 2 },
                                { label: 'Shared with Local Authority', step: 3 },
                                { label: 'Acknowledged', step: 4 },
                            ].map((item, i) => (
                                <div key={item.label} className="flex items-stretch gap-3">
                                    {/* Dot + line */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${statusStep >= item.step
                                                    ? 'bg-pulse-teal'
                                                    : 'bg-gray-200'
                                                }`}
                                        >
                                            {statusStep >= item.step ? (
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2">
                                                    <path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <div className={`w-2 h-2 rounded-full ${statusStep === item.step - 1 ? 'bg-pulse-teal animate-pulse' : 'bg-gray-400'}`} />
                                            )}
                                        </div>
                                        {i < 3 && (
                                            <div
                                                className={`w-0.5 flex-1 min-h-[28px] transition-colors duration-500 ${statusStep > item.step ? 'bg-pulse-teal' : 'bg-gray-200'
                                                    }`}
                                            />
                                        )}
                                    </div>
                                    {/* Label */}
                                    <div className="pb-4">
                                        <p
                                            className={`text-xs font-medium transition-colors duration-500 ${statusStep >= item.step ? 'text-pulse-deep' : 'text-gray-400'
                                                }`}
                                        >
                                            {item.label}
                                        </p>
                                        {statusStep >= item.step && (
                                            <p className="text-[10px] text-pulse-slate mt-0.5">
                                                {item.step === 1 && 'Just now'}
                                                {item.step === 2 && 'Checking with nearby reports...'}
                                                {item.step === 3 && 'Sent to local disaster office'}
                                                {item.step === 4 && 'Thank you for your report ✓'}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex-1" />

                        {/* Try again */}
                        <button
                            onClick={reset}
                            className="w-full py-2.5 rounded-xl border border-pulse-teal text-pulse-teal text-xs font-semibold hover:bg-pulse-teal/5 transition-colors cursor-pointer"
                        >
                            Try Again
                        </button>
                    </div>
                )}
            </div>

            {/* Screen nav dots */}
            <div className="flex items-center justify-center gap-2 py-3 bg-white">
                {(['home', 'report', 'status'] as Screen[]).map((s) => (
                    <button
                        key={s}
                        onClick={() => { if (s === 'home') reset(); else setScreen(s); }}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${screen === s ? 'bg-pulse-teal' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            {/* Home indicator */}
            <div className="flex justify-center pb-2 bg-white">
                <div className="w-24 h-1 bg-gray-300 rounded-full" />
            </div>
        </div>
    )
}
