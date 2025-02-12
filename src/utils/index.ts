export const formatCurrency = (quantity: number) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
    }).format(quantity);
}

export const formatNumberWithComma = (quantity: number): string => {
    return new Intl.NumberFormat('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(quantity);
}

export const formatDate = (isoString: string) => {
    const date = new Date(isoString);

    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return formatter.format(date);
}