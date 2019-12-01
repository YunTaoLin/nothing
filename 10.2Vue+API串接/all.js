(function(Vue) {
    new Vue({
        el: '#app',
        data: {
            loading: false,
            editIndex: null,
            contacts: [],
            input: {
                name: '',
                email: '',
            }
        },
        methods: {
            submit() {
                let { name, email } = this.input;
                if (!name || !email) return;
                this.loading = true;
                //validate ok or not
                // if (strEmail.search(/^\w ((-\w )|(\.\w ))*\@[A-Za-z0-9] ((\.|-)[A-Za-z0-9] )*\.[A-Za-z0-9] $/) = -1) {
                //     alert('請輸入正確的email')
                //     return;
                // }
                if (this.editIndex === null) {
                    axios.post('http://localhost:8888/contact', this.input)
                        .then((res) => {
                            this.loading = false;
                            this.contacts.push(res.data);
                            this.cancel();
                        }).catch((err) => {
                            console.log(err);
                        })
                } else {
                    let target = this.contacts[this.editIndex];
                    axios.put('http://localhost:8888/contact/' + target.id, this.input)
                        .then((res) => {
                            console.log(res)
                            this.loading = false;
                            this.contacts[this.editIndex] = res.data;
                            this.cancel();
                        }).catch((err) => {
                            console.log(err);
                        })
                }

            },
            cancel() {
                this.input.name = '';
                this.input.email = '';
                this.editIndex = null;
            },
            del(index) {
                this.loading = true;
                let target = this.contacts[index];
                if (confirm(`是否刪除 ${target.name} ?`))
                    axios.delete('http://localhost:8888/contact/' + target.id)
                    .then((res) => {
                        this.contacts.splice(index, 1)
                        this.cancel();
                        this.loading = false;
                    }).catch((err) => {
                        console.log(err);
                        this.loading = false;
                    })
            },
            updata(index) {
                let all_list = document.querySelectorAll('.contact_list li')
                all_list.forEach(element => {
                    element.classList.remove('bgc')
                });

                let { name, email } = this.contacts[index];
                this.editIndex = index;
                this.input = {
                    name,
                    email
                }
                let li_editing = document.querySelector(".contact_list li:nth-of-type(" + (index + 1) + ")")
                li_editing.classList.add('bgc')
            }
        },
        mounted() {
            this.loading = true;
            axios.get('http://localhost:8888/contact')
                .then((res) => {
                    this.contacts = res.data;
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                })
        }






    })






}(Vue))