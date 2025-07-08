import { getOutfitSuggestion } from './getOutfitSuggestion'

describe('getOutfitSuggestion', () => {
  it('suggests umbrella for rain', () => {
    expect(getOutfitSuggestion(15, 'Rain')).toMatch(/umbrella/i)
  })
  it('suggests coat for snow', () => {
    expect(getOutfitSuggestion(-2, 'Snow')).toMatch(/coat/i)
  })
  it('suggests sunglasses for hot weather', () => {
    expect(getOutfitSuggestion(35, 'Clear')).toMatch(/Sunglasses/i)
  })
  it('suggests comfortable dress for warm', () => {
    expect(getOutfitSuggestion(22, 'Clouds')).toMatch(/comfortably/i)
  })
  it('suggests light jacket for cool', () => {
    expect(getOutfitSuggestion(10, 'Clear')).toMatch(/jacket/i)
  })
  it('suggests heavy jacket for cold', () => {
    expect(getOutfitSuggestion(0, 'Clear')).toMatch(/heavy jacket/i)
  })
})
