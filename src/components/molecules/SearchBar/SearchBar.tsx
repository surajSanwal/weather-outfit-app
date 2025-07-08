import Button from '@/components/atoms/Button/Button'
import Input from '@/components/atoms/input/Input'
import { useState, memo } from 'react'

type Props = {
  onSearch: (query: string) => void
}

const SearchBar = memo(({ onSearch }: Props) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <Input
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  )
})

export default SearchBar
