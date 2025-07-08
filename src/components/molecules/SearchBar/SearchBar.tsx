import { useState, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchSuggestions,
    clearSuggestions
} from '@/features/suggestion/suggestionSlice'
import type { RootState } from '@/app/store'
import Input from '@/components/atoms/input/Input'
import Button from '@/components/atoms/Button/Button'

type Props = {
    onSearch: (query: string) => void
}

const SearchBar = memo(({ onSearch }: Props) => {
    const dispatch = useDispatch()

    const [city, setCity] = useState('')
    const [activeIndex, setActiveIndex] = useState(-1)

    const { suggestions } = useSelector((state: RootState) => state.suggestion)
    const { history } = useSelector((state: RootState) => state.searchHistory)

    const handleChange = (value: string) => {
        setCity(value)
        if (value.trim().length >= 2) {
            dispatch(fetchSuggestions({ query: value }))
        } else {
            dispatch(clearSuggestions())
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (city.trim()) {
            onSearch(city.trim())
            dispatch(clearSuggestions())
        }
    }

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                setActiveIndex((prev) => (prev + 1) % suggestions.length)
            } else if (e.key === 'ArrowUp') {
                setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length)
            } else if (e.key === 'Enter' && activeIndex >= 0) {
                e.preventDefault()
                const selected = suggestions[activeIndex]
                if (selected) {
                    setCity(selected)
                    onSearch(selected)
                    dispatch(clearSuggestions())
                }
            }
        },
        [activeIndex, suggestions]
    )

    return (
        <div className="relative w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
                <Input
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    role="combobox"
                />
                <Button type="submit">Search</Button>
            </form>

            {suggestions.length > 0 && (
                <ul
                    className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md"
                    role="listbox"
                >
                    {suggestions.map((sugg, idx) => (
                        <li
                            key={sugg}
                            className={`px-4 py-2 cursor-pointer ${idx === activeIndex
                                ? 'bg-blue-600 text-white dark:bg-blue-500'
                                : 'text-gray-900 dark:text-gray-100'
                                }`}
                            onMouseDown={() => {
                                setCity(sugg)
                                onSearch(sugg)
                                dispatch(clearSuggestions())
                            }}
                            role="option"
                            aria-selected={idx === activeIndex}
                        >
                            {sugg}
                        </li>
                    ))}
                </ul>
            )}

            {history.length > 0 && (
                <div className="w-full max-w-md mt-2 text-sm text-gray-800 dark:text-gray-300">
                    <p className="mb-1 font-semibold">Recent Searches:</p>
                    <ul className="flex flex-wrap gap-2">
                        {history.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-blue-100 dark:hover:bg-blue-800"
                                onClick={() => handleChange(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>)}
        </div>
    )
})

export default SearchBar
