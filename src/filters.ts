export function currency(value: number): string {
    return Number(value).toLocaleString('es-CO',{ style: "currency", currency: "COP" });
}
  
export function monthAndYear(timestamp: number): string {
    try {
        const date = new Date(Number(timestamp * 1000));
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque los meses comienzan desde 0
        const year = date.getFullYear();
        return `${month}-${year}`;
    } catch (error) {
        console.error(error)
        throw new Error("Invalid Date");
        
    }
}