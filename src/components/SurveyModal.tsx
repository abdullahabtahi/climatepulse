import { useState, useCallback, useEffect } from 'react'

interface SurveyModalProps {
    open: boolean
    onClose: () => void
}

const reportMethods = [
    'Facebook / Messenger',
    'WhatsApp / Viber',
    'Google Forms',
    'Told local officials',
    "Couldn't report it",
    'Other',
]

export default function SurveyModal({ open, onClose }: SurveyModalProps) {
    const [step, setStep] = useState(0) // 0=Q1, 1=Q2, 2=Q3, 3=done
    const [q1, setQ1] = useState('')
    const [q2, setQ2] = useState<string[]>([])
    const [q3, setQ3] = useState(3)

    // Reset on open
    useEffect(() => {
        if (open) {
            setStep(0)
            setQ1('')
            setQ2([])
            setQ3(3)
        }
    }, [open])

    const toggleQ2 = (method: string) => {
        setQ2((prev) =>
            prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
        )
    }

    const handleSubmit = useCallback(async () => {
        // Store in localStorage
        const surveyData = {
            q1,
            q2,
            q3,
            timestamp: new Date().toISOString(),
        }
        const existing = JSON.parse(localStorage.getItem('climatepulse_surveys') || '[]')
        existing.push(surveyData)
        localStorage.setItem('climatepulse_surveys', JSON.stringify(existing))

        setStep(3)

        // Fire confetti
        try {
            const confetti = (await import('canvas-confetti')).default
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#0FA87E', '#E8A030', '#2E8B57', '#062B21'],
            })
        } catch {
            // confetti not available, that's fine
        }
    }, [q1, q2, q3])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-pulse-mist px-6 py-4 border-b border-pulse-mist flex items-center justify-between">
                    <div>
                        <h3 className="font-display text-lg font-bold text-pulse-deep">
                            {step < 3 ? 'Quick survey' : 'Thank you!'}
                        </h3>
                        {step < 3 && (
                            <p className="text-xs text-pulse-slate">3 questions · Less than 60 seconds</p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pulse-slate hover:text-pulse-deep transition-colors cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Progress dots */}
                {step < 3 && (
                    <div className="flex items-center justify-center gap-2 py-3 bg-white">
                        {[0, 1, 2].map((s) => (
                            <div
                                key={s}
                                className={`h-1.5 rounded-full transition-all ${s === step
                                    ? 'w-8 bg-pulse-teal'
                                    : s < step
                                        ? 'w-4 bg-pulse-teal/40'
                                        : 'w-4 bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Content */}
                <div className="px-6 py-6 min-h-[240px] flex flex-col">
                    {/* Q1 */}
                    {step === 0 && (
                        <div className="flex-1 flex flex-col">
                            <p className="font-display text-sm font-semibold text-pulse-deep mb-4">
                                What's the last climate problem you personally witnessed in your city?
                            </p>
                            <textarea
                                value={q1}
                                onChange={(e) => setQ1(e.target.value)}
                                placeholder="e.g., 'Flooding blocked the main road for 3 days after heavy rain...'"
                                className="flex-1 min-h-[100px] border border-gray-200 rounded-xl p-3 text-sm text-pulse-text resize-none focus:outline-none focus:ring-2 focus:ring-pulse-teal focus:border-transparent placeholder:text-gray-400"
                            />
                            <button
                                onClick={() => setStep(1)}
                                disabled={!q1.trim()}
                                className={`mt-4 w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${q1.trim()
                                    ? 'bg-pulse-teal text-white hover:bg-pulse-teal-light'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Next →
                            </button>
                        </div>
                    )}

                    {/* Q2 */}
                    {step === 1 && (
                        <div className="flex-1 flex flex-col">
                            <p className="font-display text-sm font-semibold text-pulse-deep mb-4">
                                When this happened, how did you report or share it?
                            </p>
                            <p className="text-xs text-pulse-slate mb-3">Select all that apply</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {reportMethods.map((method) => (
                                    <button
                                        key={method}
                                        onClick={() => toggleQ2(method)}
                                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer border ${q2.includes(method)
                                            ? 'bg-pulse-teal/10 border-pulse-teal text-pulse-teal'
                                            : 'bg-white border-gray-200 text-pulse-text hover:border-gray-300'
                                            }`}
                                    >
                                        {method}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-auto">
                                <button
                                    onClick={() => setStep(0)}
                                    className="flex-1 py-3 rounded-xl border border-gray-200 text-pulse-text text-sm font-medium hover:bg-gray-50 cursor-pointer"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={() => setStep(2)}
                                    disabled={q2.length === 0}
                                    className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${q2.length > 0
                                        ? 'bg-pulse-teal text-white hover:bg-pulse-teal-light'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Q3 */}
                    {step === 2 && (
                        <div className="flex-1 flex flex-col">
                            <p className="font-display text-sm font-semibold text-pulse-deep mb-4">
                                If a free tool could turn your street-level observation into an official climate report in under 18 seconds — how likely would you use it?
                            </p>
                            <div className="flex-1 flex flex-col items-center justify-center py-4">
                                <div className="w-full max-w-xs">
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={q3}
                                        onChange={(e) => setQ3(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pulse-teal"
                                    />
                                    <div className="flex justify-between mt-2">
                                        {['Not likely', 'Unlikely', 'Maybe', 'Likely', 'Absolutely'].map((label, i) => (
                                            <span
                                                key={label}
                                                className={`text-[10px] ${q3 === i + 1 ? 'text-pulse-teal font-semibold' : 'text-gray-400'
                                                    }`}
                                            >
                                                {label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 font-display text-5xl font-bold text-pulse-teal">
                                    {q3}
                                </div>
                                <p className="text-xs text-pulse-slate mt-1">out of 5</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 py-3 rounded-xl border border-gray-200 text-pulse-text text-sm font-medium hover:bg-gray-50 cursor-pointer"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 py-3 rounded-xl bg-pulse-teal text-white font-semibold text-sm hover:bg-pulse-teal-light transition-all cursor-pointer"
                                >
                                    Submit ✓
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Thank you */}
                    {step === 3 && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                            <div className="w-16 h-16 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-pulse-teal" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-pulse-deep mb-2">
                                You're in.
                            </h3>
                            <p className="text-sm text-pulse-text/70 mb-6">
                                We'll reach out when the pilot launches.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-xl bg-pulse-deep text-white font-semibold text-sm hover:bg-pulse-deep/90 transition-colors cursor-pointer"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
