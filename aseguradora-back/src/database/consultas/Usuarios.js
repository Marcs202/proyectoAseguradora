export const queriesUsuarios = () => {

    const tablename = "Usuarios";
    return {
        /*getAll: `SELECT correo, IdAcceso FROM USUARIOS`,*/

        getAll: `SELECT IdAcceso FROM ${tablename} where correo = @correo`,
    };
};

