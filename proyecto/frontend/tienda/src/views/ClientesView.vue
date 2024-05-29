<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Clientes
                    <RouterLink to="/clientes/create" class="btn btn-primary float-end">
                    Agregar
                </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>RFC</th>
                        <th>CURP</th>
                        <th>CP</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody v-if="clientes.length > 0">
                        <tr v-for="(cliente,index) in clientes" :key="index">
                            <td>{{cliente.id}}</td>
                            <td>{{ cliente.nombre }}</td>
                            <td>{{ cliente.apellido }}</td>
                            <td>{{ cliente.direccion }}</td>
                            <td>{{ cliente.telefono }}</td>
                            <td>{{ cliente.rfc }}</td>
                            <td>{{ cliente.curp }}</td>
                            <td>{{ cliente.cp }}</td>
                            <td>
                                <button class="btn btn-primary"><RouterLink :to="{path: '/clientes/'+clientes.id+'/edit'}" class="btn btn-succes">
                                    Editar
                                </RouterLink> </button>
                                &nbsp;
                                <button class="btn btn-danger" @click="deleteCliente(cliente.id)"> Borrar</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else="">
                        <tr>
                            <td colspan="9" style="text-align: center;">Sin registros</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
import { RouterLink } from 'vue-router';

    export default{
    name: "ClientesView",
    data() {
        return {
            clientes: [],
        };
    },
    mounted() {
        this.getClientes();
    },
    methods: {
        getClientes() {
            axios.get('http://localhost:3000/api/clientes').then(res => {
                console.log(res);
                this.clientes = res.data;
            });
        },
        deleteCliente(idClienteBorrar) {
            axios.delete('http://localhost:3000/api/clientes/' + idClienteBorrar).then(res => {
                if (res.data.affectedRows > 0) {
                    this.getClientes(); //Para que se recarguen los datos.
                }
            });
        }
    },
    components: { RouterLink }
}
</script>