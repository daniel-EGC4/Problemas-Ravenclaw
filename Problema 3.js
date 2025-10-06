const perfil = {
    id: "U35A",
    nombre: "Ana Martinez",
    email: "ana.m@ejemplo.com",
    configuracion: { tema: "oscuro", notificaciones: true },
    fechacreacion: "2024-09-01"
};

const resultado => (perfil) {
    let {id, nombre, email} = perfil;
    return { id, nombre, email };
};
