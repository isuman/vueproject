<template>
    <div>
    <div>Input Information</div>
        
        <input v-model="firstname" required>
        {{firstname}}
        <input v-model="lastname" required>
        {{lastname}}
        <input v-model="age" type="number" required>
        {{age}}
        <button @click="add">Add</button>
        <li v-for="message in info">
            {{ message }}
        </li>
        <tr class="table-border">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        <tr v-for="(data,index) in info">
            <th>{{data.id}}</th>
            <th>{{data.firstname}}</th>
            <th>{{data.lastname}}</th>
            <th>{{data.age}}</th>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myEdit" @click="edit(data,index)">
                Update
            </button> 
            <div class="modal" id="myEdit">
                <div class="modal-dialog">
                    <div class="modal-content">
                    
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <div>{{index}}</div>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div></div>
                        <!-- Modal body -->
                        <div class="modal-body">
                            <input v-model="editFName"></input>
                        </div>
                        <div class="modal-body">
                            <input v-model="editLName"></input>
                        </div>
                        <div class="modal-body">
                            <input v-model="editAge" type="number"></input>
                        </div>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="onEdit(index)">Save</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <button  type="button" class="btn btn-danger" @click="remove(index)">Remove</button>
        </tr>
        <button @click="test">Test</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            firstname:'',
            lastname:'',
            age:'',
            info: [
            ],
            nextTodoId: 1,
            editFName:'',
            editLName:'',
            editAge:'',
            index:''
        }
    },
    methods:{
        add(){
            this.info.push({
                id: this.nextTodoId++,
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
            })
        },
        remove(index){
            this.info.splice(index, 1)
        },
        test(i){
            this.info[0].firstname
        },
        edit(n, i){
            alert(i)
            this.index=i
            this.editFName=n.firstname
            this.editLName=n.lastname
            this.editAge=n.age
        },
        onEdit(){
            alert(this.index)
            this.info[this.index].firstname = this.editFName
            this.info[this.index].lastname = this.editLName
            this.info[this.index].age = this.editAge
        },
        onCancel(){
            this.editFName = ''
            this.editLName = ''
            this.editAge = ''
        },
    }
}
</script>

<style>
    table, th, td {
        border:1px solid black;
    }
</style>
