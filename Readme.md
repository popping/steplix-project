# PROYECTO STEPLIX

### INSTALACION

Para construir el container nos paramos en la carpeta principal del proyecto y 
escribimos en un terminal.

`docker build --tag=steplix-project .`

### EJECUCION

Una vez construido, lo ejecutamos con la siguiente linea en la consola. 

`docker run -d --name=steplix-backend --network=host steplix-project`

**NOTA**: Esperar unos segundos que termine de levantar el contenedor.

### REST API

**GET** _http://localhost/currencies_ 

Devuelve las cryptomonedas disponibles

**GET** _http://localhost/rates_

Devuelve las ultimas cotizaciones de las monedas

**POST** _http://localhost/rates_

Permite agregar una nueva cotizacion, el cuerpo de la peticion es la siguiente:

`
    {
        "id_currency": [id de la criptomoneda],
        "value": [nuevo valor]  
    }
`

**GET** __http://localhost/rates/{symbol}_

Devuelve la ultima cotizacion de la moneda elegida mediante el parametro {symbol}.