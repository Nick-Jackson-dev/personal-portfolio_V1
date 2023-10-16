import { Skill } from "../../data/projects"
import "./ListFilter.css"

type Filter = string

type ListFilterProps = {
  changeFilter: (filter: Filter) => void
  filterOptions: Filter[]
  currentFilter: Filter
  className?: string
}

export default function ListFilter({
  filterOptions,
  currentFilter,
  changeFilter,
  className,
}: ListFilterProps) {
  const handleClick = (newFilter: Filter) => changeFilter(newFilter)

  return (
    <div className={`list-filter ${className}`}>
      <nav>
        <p>Filter by</p>
        {filterOptions.map((f: Filter, i) => (
          <button
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
            key={f}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  )
}
