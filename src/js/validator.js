class Validator{
    constructor(selector){

        //find the field, show an error if it's not available
        this.$field = document.querySelector(selector);
        if(!this.$field){
            console.warn(`Couldn't find an element with selector`, selector)
            return false
        }

        //add event listener to call this.validate
        //but overrule its _this_ logic, and force its
        //_this_ to be the Validate class instance

        //this gets redefined every thime you have timeout, addevent, and ajax
        this.$field.addEventListener(`keyup`, this.validate.bind(this))
        this.$field.addEventListener(`blur`, this.validate.bind(this))
    }

    //this is how you make function or method inside a class
    validate(){
        console.log(`validate!!!`,this.$field.value)
        //not selector bc that's just the string w the []
       
        //strings are truthy if they have something in them and falsy if they don't
        //so this validates that it's a string
        if(this.$field.value){
            this.$field.style.borderColor = `green`;
        } else {
            this.$field.style.borderColor = `red`;
            this.$field.style.borderSize = `.2em`;
        }
        
    }
}
