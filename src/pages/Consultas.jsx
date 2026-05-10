import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CHATBOT_TREE, CHATBOT_QUICK_ACCESS } from '../data/chatbot'
import { UPSFLogo } from '../components/UPSFLogo'
import { ArrowRight, ArrowDown, ExternalLink, Phone, Mail, RotateCcw, Headset } from 'lucide-react'

export function ConsultasPage() {
  const navigate = useNavigate()
  const [history, setHistory] = useState([
    { type: 'bot', node: CHATBOT_TREE.root, ts: nowTime() }
  ])
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [history])

  function selectOption(option) {
    setHistory(prev => [...prev, { type: 'user', label: option.label, ts: nowTime() }])
    setTimeout(() => {
      const next = CHATBOT_TREE[option.next]
      if (next) {
        setHistory(prev => [...prev, { type: 'bot', node: next, ts: nowTime() }])
      }
    }, 380)
  }

  function reset() {
    setHistory([{ type: 'bot', node: CHATBOT_TREE.root, ts: nowTime() }])
  }

  function jumpTo(nodeId) {
    const node = CHATBOT_TREE[nodeId]
    if (node) setHistory(prev => [...prev, { type: 'bot', node, ts: nowTime() }])
  }

  return (
    <div className="bg-cream-200 min-h-full flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-navy text-white">
        <div className="px-4 pt-3 pb-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)}
                  className="-ml-2 p-2 rounded-full hover:bg-white/10 transition">
            <ArrowDown size={20} className="rotate-90" strokeWidth={1.8} />
          </button>
          <div className="w-9 h-9 rounded-full bg-white grid place-items-center flex-shrink-0">
            <UPSFLogo size={32} />
          </div>
          <div className="flex-1 leading-tight">
            <div className="text-[13px] font-medium">Consultas UPSF</div>
            <div className="text-[10px] text-white/65 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Asistente automatizado
            </div>
          </div>
          <button onClick={reset} className="p-2 rounded-full hover:bg-white/10 transition" title="Reiniciar">
            <RotateCcw size={16} strokeWidth={1.7} />
          </button>
        </div>
      </div>

      {/* Mensajes */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5">
        <DateChip text="Hoy" />

        {history.map((item, idx) => (
          item.type === 'user'
            ? <UserMessage key={idx} text={item.label} ts={item.ts} />
            : <BotMessage key={idx} node={item.node} onSelect={selectOption} onCta={(goto) => navigate(goto)} ts={item.ts} />
        ))}
      </div>

      {/* Quick access */}
      <div className="border-t border-rule bg-cream/95 backdrop-blur px-3 py-2">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
          {CHATBOT_QUICK_ACCESS.map(q => (
            <button key={q.id} onClick={() => jumpTo(q.node)}
              className="text-[11px] px-3 py-1.5 bg-white border border-rule rounded-full whitespace-nowrap hover:border-navy hover:text-navy transition">
              {q.label}
            </button>
          ))}
          <button className="text-[11px] px-3 py-1.5 bg-navy text-white rounded-full whitespace-nowrap flex items-center gap-1.5">
            <Headset size={12} /> Hablar con secretario
          </button>
        </div>
      </div>
    </div>
  )
}

function DateChip({ text }) {
  return (
    <div className="flex justify-center my-2">
      <span className="text-[10px] px-2.5 py-1 bg-white border border-rule rounded-full text-ink-mute">{text}</span>
    </div>
  )
}

function UserMessage({ text, ts }) {
  return (
    <div className="flex justify-end px-1">
      <div className="max-w-[78%] bg-navy text-white rounded-[14px] rounded-br-md px-3 py-2 shadow-sm">
        <div className="text-[12.5px] leading-snug">{text}</div>
        <div className="text-[9px] text-white/55 text-right mt-0.5 font-mono tabular">{ts}</div>
      </div>
    </div>
  )
}

function BotMessage({ node, onSelect, onCta, ts }) {
  return (
    <div className="flex justify-start px-1">
      <div className="max-w-[88%] bg-white border border-rule rounded-[14px] rounded-bl-md p-3 shadow-sm">
        {node.badge && (
          <div className="text-[10px] text-ink-mute mb-1.5 flex items-center gap-1.5">
            <span className="w-1 h-1 bg-ink-mute rounded-full" />
            {node.badge}
          </div>
        )}
        <div className="text-[13px] font-medium leading-snug text-ink">{node.title}</div>
        <div className="text-[12.5px] text-ink-soft mt-1.5 leading-relaxed">{node.message}</div>
        {node.submessage && (
          <div className="text-[12px] text-ink-mute mt-1.5 leading-relaxed">{node.submessage}</div>
        )}

        {node.list && (
          <div className="mt-3 pt-3 border-t border-rule">
            <div className="text-[10px] uppercase tracking-wider text-ink-mute font-medium mb-2">{node.list.titulo}</div>
            <ul className="space-y-1">
              {node.list.items.map((it, i) => (
                <li key={i} className="text-[11.5px] text-ink-soft leading-relaxed flex gap-2">
                  <span className="text-ink-faint flex-shrink-0">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {node.contact && (
          <div className="mt-3 pt-3 border-t border-rule space-y-1.5">
            <ContactItem icon={Phone} value={node.contact.tel} />
            <ContactItem icon={Mail} value={node.contact.email} />
            {node.contact.web && <ContactItem icon={ExternalLink} value={node.contact.web} link />}
          </div>
        )}

        {node.link && (
          <a href={node.link.url} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 mt-3 text-[12px] text-navy font-medium hover:underline">
            {node.link.label} <ExternalLink size={11} />
          </a>
        )}

        {node.cta && (
          <button onClick={() => onCta(node.cta.goto)}
            className="mt-3 w-full bg-navy text-white text-[12px] font-medium py-2 rounded-lg flex items-center justify-center gap-1.5 hover:bg-navy-dark transition active:scale-[0.99]">
            {node.cta.label} <ArrowRight size={13} />
          </button>
        )}

        {node.options && node.options.length > 0 && (
          <div className="mt-3 pt-3 border-t border-rule space-y-1">
            {node.options.map(opt => (
              <button key={opt.id} onClick={() => onSelect(opt)}
                className="w-full text-left text-[12px] py-1.5 px-2 -mx-2 rounded text-navy font-medium hover:bg-navy-50 transition">
                {opt.label}
              </button>
            ))}
          </div>
        )}

        <div className="text-[9px] text-ink-faint mt-2 font-mono tabular text-right">{ts}</div>
      </div>
    </div>
  )
}

function ContactItem({ icon: Icon, value, link }) {
  return (
    <div className="flex items-center gap-2 text-[11px]">
      <Icon size={12} className="text-ink-mute" />
      <span className={link ? 'text-navy' : 'text-ink-soft'}>{value}</span>
    </div>
  )
}

function nowTime() {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}
