<template>
    <div class="main-container">
        <h3>{{ date }}</h3>

        <input type="text" v-model="item" placeholder="Enter item">
        <input type="text" v-model="price" placeholder="Enter Price">
        <button type="button" @click="saveBasket">Save Basket</button>

        <table>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Update</th>
            </tr>

            <tr v-for="data in data" :key="data.id">
                <td>{{ data.item }}</td>
                <td>{{ data.price }}</td>
                <td><button @click="updateItem">Update</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddItems',
    methods: {
        async saveBasket() {
            let res = await axios.post("http://172.20.10.13:8000/bucket/item/", {
                "item": this.item,
                "price": this.price
            })
            if (res.status == 201) {
                console.log(res.data)
                alert("Data Saved...")
            }
        },
        async updateItem(){
            let res = await axios.put("")
        }
    },
    data() {
        return {
            item: null,
            price: null,
        }
    },
}
</script>