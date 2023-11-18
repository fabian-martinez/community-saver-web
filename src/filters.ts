export function currency(value: number): string {
    return Number(value).toLocaleString('es-CO',{ style: "currency", currency: "COP" });
}
  
export function monthAndYear(value: any): any {
// Lógica de otro filtro si es necesario
    return false;
}