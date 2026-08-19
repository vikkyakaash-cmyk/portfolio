import { ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Check, ChevronRight, Cloud, Code2, Database, FileSpreadsheet, Globe2, Layers3, Mail, Menu, MessageCircle, Palette, Phone, Puzzle, Sparkles, Terminal, X, Zap } from 'lucide-react'

const icons = { arrow: ArrowUpRight, brain: BrainCircuit, chart: ChartNoAxesCombined, check: Check, chevron: ChevronRight, cloud: Cloud, code: Code2, database: Database, office: FileSpreadsheet, globe: Globe2, github: Code2, linkedin: Globe2, mail: Mail, menu: Menu, message: MessageCircle, layers: Layers3, palette: Palette, phone: Phone, puzzle: Puzzle, sparkles: Sparkles, terminal: Terminal, x: X, zap: Zap }

export default function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const Component = icons[name] || Code2
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" />
}
