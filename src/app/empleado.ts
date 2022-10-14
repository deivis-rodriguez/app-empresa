export interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
    estado: {
        activo: boolean;
        detalles: string;
    }
    leyenda: string;
}

export const empleados: Empleado[] = [
    {
        nombre: 'Andres Rincon',
        cargo: 'desarrollador web',
        salario: 2435000,
        estado: {
            activo: true,
            detalles: ''
        },
        leyenda: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, impedit possimus quas totam natus praesentium nihil consectetur. Odio aliquid temporibus, id unde delectus fugiat impedit omnis illum quidem earum saepe?'
    },
    {
        nombre: 'Paola Andrea',
        cargo: 'diseñadora web',
        salario: 4538000,
        estado: {
            activo: true,
            detalles: ''
        },
        leyenda: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, impedit possimus quas totam natus praesentium nihil consectetur. Odio aliquid temporibus, id unde delectus fugiat impedit omnis illum quidem earum saepe?'

    },
    {
        nombre: 'Diego Garrido',
        cargo: 'DBA',
        salario: 5432020,
        estado: {
            activo: false,
            detalles: 'esta de vacaciones por 5 días. vuelve el 18 oct 2022'
        },
        leyenda: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, impedit possimus quas totam natus praesentium nihil consectetur. Odio aliquid temporibus, id unde delectus fugiat impedit omnis illum quidem earum saepe?'
    }
]