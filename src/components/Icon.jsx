import {
  BarChart3,
  Bell,
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Settings,
  Trash2,
} from 'lucide-react'

const icons = {
  grid: LayoutGrid,
  check: CheckSquare,
  calendar: Calendar,
  chart: BarChart3,
  settings: Settings,
  search: Search,
  plus: Plus,
  bell: Bell,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  edit: Pencil,
  trash: Trash2,
  dots: MoreHorizontal,
}

export default function Icon({ name, size = 18 }) {
  const Component = icons[name]
  return Component ? <Component aria-hidden="true" size={size} strokeWidth={1.8}/> : null
}
