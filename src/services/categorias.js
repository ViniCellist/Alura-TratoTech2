const categoriasService = {
    buscar: async () => {
        const resposta = await instance.get('/categorias');

        return resposta.data;
    }
}

export default categoriasService;