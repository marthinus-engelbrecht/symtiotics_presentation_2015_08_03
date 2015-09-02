class Person{
    constructor(name, imageSrc){
        this.name = name;
        this.imageSrc = imageSrc;
    }

    get name(){
        return this.name;
    }

    set name(name){
        this.name = name;
    }

    get imageSrc(){
        return this.imageSrc;

    }

    set imageSrc(imageSrc){
        this.imageSrc = imageSrc;
    }
}

var douglas_crockford = new Person("Douglas Crockford", "images/Crockford_Douglas.png");

