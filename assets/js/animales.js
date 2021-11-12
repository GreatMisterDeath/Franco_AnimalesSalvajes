class Animales
{
    constructor(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    {
        this.nombre = paramNombre
        this.edad = paramEdad
        this.imagen = paramImagen
        this.comentarios = paramComentarios
        this.sonido = paramSonido
    }
    get getNombre()
    {
        return this.nombre
    }
    get getEdad()
    {
        return this.edad
    }
    set setComentarios(paramNuevosComentarios)
    {
        this.comentarios = paramNuevosComentarios
    }
    get getSonido()
    {
        return this.sonido
    }
}

class Leon extends Animales
{
    constructor(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    {
        super(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    }
    rugir()
    {
        document.getElementById("audiotag_rugir").play();
    }
}

class Lobo extends Animales
{
    constructor(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    {
        super(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    }
    aullar()
    {
        document.getElementById("audiotag_aullar").play();
    }
}

class Oso extends Animales
{
    constructor(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    {
        super(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    }
    grunir()
    {
        document.getElementById("audiotag_grunir").play();
    }
}

class Serpiente extends Animales
{
    constructor(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    {
        super(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    }
    sisear()
    {
        document.getElementById("audiotag_sisear").play();
    }
}

class Aguila extends Animales
{
    constructor(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    {
        super(paramNombre, paramEdad, paramImagen, paramComentarios, paramSonido)
    }
    chillar()
    {
        document.getElementById("audiotag_chillar").play();
    }
}

export { Animales, Leon, Lobo, Oso, Serpiente, Aguila } 