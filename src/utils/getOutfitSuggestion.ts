export const getOutfitSuggestion = (temp: number, condition: string): string => {
    const lower = condition.toLowerCase();

    if (lower.includes('rain')) return 'Take an umbrella and wear a waterproof jacket';
    if (lower.includes('snow')) return 'Bundle up! Wear a coat and boots';

    if (temp > 30) return 'Sunglasses and breathable clothes recommended';
    if (temp >= 20) return 'Dress comfortably';
    if (temp >= 7) return 'Consider a light jacket or sweater';
    return 'Wear a heavy jacket and layers';
}
