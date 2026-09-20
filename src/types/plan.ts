export interface Plan {
    id: string
    name: string
    price: number
    // Lista de beneficios de este plan.
    features: string[]
    // Lo usamos para destacar un plan..
    highlighted: boolean
    description?: string
}