Vue.createApp({
    data() {
        return {
            placeholderInput: '/Введите текст',
            inputValue: '',
            notes: ['Заметка'],
            indxEdit: -1,
            editBool: false,
        }
    },
    methods: {
        addNewNote() {
            if(this.editBool === true) {
                if(this.inputValue === '') {
                    this.notes.splice(this.indxEdit, 1);
                } else {
                    this.notes[this.indxEdit] = this.inputValue;
                    this.inputValue = '';
                    this.editBool = false;
                }
            } else {
                if(this.inputValue !== '') {
                    this.notes.push(this.inputValue);
                    this.inputValue = '';
                }
            }
            
        },
        removeNote(indx) {
            this.notes.splice(indx, 1);
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        editNote(indx) {
            this.inputValue = this.notes[indx]
            this.indxEdit = indx
            this.editBool = true;
        }
    },
    computed: {
        doubleCountCMT() {
            return this.notes.length * 2
        }
    },
    watch: {
        editBool(value) {
            console.log(value);
        }
    }
}).mount('#app') 