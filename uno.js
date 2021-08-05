/*EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El mas pesados de los galgos.
b)El importe total a pagar,y  con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
c)promedio de peso entre cada raza de perros ingresada
d)Nombre, raza y edad del perro más viejo ingresado
*/


function mostrar()
{
   var razaIngresada;
	var nombreIngresado;
	var edadIngresada;
	var pesoIngresado;
	var precioConsultaIngresado;
	var continuarVuelta;
	var galgosPesoMinimo;
	var galgosPesoMaximo;
	var galgosBandera;
	var contadorPerros;
	var acumuladorDePrecios;
	var mensajeDescuento;
	var descuento;
	var acumuladorPeso;
	var promedio;
	var mensajePromedio;
	var edadPerroMaximo;
	var edadPerroMinimo;
	var banderaEdad;
	var mensajeEdadPerro;

	continuarVuelta=true;
	galgosPesoMinimo=0;
	galgosPesoMaximo=0;
	galgosBandera=true;
	acumuladorDePrecios=0;
	contadorPerros=0;
	acumuladorPeso=0;
	promedio=0;
	edadPerroMaximo=0;
	edadPerroMinimo=0;
	banderaEdad=true;

	while(continuarVuelta==true)
	{
		razaIngresada=prompt("Ingrese una raza por favor");
		while(razaIngresada!="sharpei" && razaIngresada!="galgo" && razaIngresada!="pastor")
		{
			razaIngresada=prompt("Ingrese una raza por favor");
		}
		nombreIngresado=prompt("Ingrese el nombre del perro por favor");

		edadIngresada=prompt("Ingrese la edad del perro");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<1 || edadIngresada>25)
		{
			edadIngresada=prompt("Ingrese la edad del perro nuevamente");
			edadIngresada=parseInt(edadIngresada);
		}
		pesoIngresado=prompt("Ingrese el peso del perro");
		pesoIngresado=parseInt(pesoIngresado);
		while(pesoIngresado<1)
		{
			pesoIngresado=prompt("Ingrese el peso del perro nuevamente");
			pesoIngresado=parseInt(pesoIngresado);
		}
		precioConsultaIngresado=prompt("Ingrese el precio de la consulta");
		precioConsultaIngresado=parseInt(precioConsultaIngresado);
		while(precioConsultaIngresado<500 || precioConsultaIngresado>1500)
		{
			precioConsultaIngresado=prompt("Ingrese el precio de la consulta correcto");
			precioConsultaIngresado=parseInt(precioConsultaIngresado);
		}

		//a
		if(razaIngresada=="galgo")
		{
			if(galgosBandera==true)
			{
				galgosBandera=false;
				galgosPesoMinimo=pesoIngresado;
				galgosPesoMaximo=pesoIngresado;
				mensajeGalgoMasPesado="El galgo mas pesado es "+nombreIngresado;
			}
			else
			{
				if(pesoIngresado<galgosPesoMinimo)
				{
					galgosPesoMinimo=pesoIngresado;
				}
				else
				{
					if(pesoIngresado>galgosPesoMaximo)
					{
						galgosPesoMaximo=pesoIngresado;
						mensajeGalgoMasPesado="El galgo mas pesado es "+nombreIngresado;
					}
				}
			}
		}

		//d
		if(banderaEdad==true)
		{
			banderaEdad=false;
			edadPerroMinimo=edadIngresada;
			edadPerroMaximo=edadIngresada;
			mensajeEdadPerro="El nombre del perro mas viejo es "+nombreIngresado+" su raza es "+razaIngresada+" y su edad es "+edadIngresada;
		}
		else
		{
			if(edadIngresada<edadPerroMinimo)
			{
				edadPerroMinimo=edadIngresada;
			}
			else
			{
				if(edadIngresada>edadPerroMaximo)
				{
					edadPerroMaximo=edadIngresada;
					mensajeEdadPerro="El nombre del perro mas viejo es "+nombreIngresado+" su raza es "+razaIngresada+" y su edad es "+edadIngresada;
				}
			}
		}

		contadorPerros=contadorPerros+1;
		acumuladorDePrecios=acumuladorDePrecios+precioConsultaIngresado;
		acumuladorPeso=acumuladorPeso+pesoIngresado;


		continuarVuelta=confirm("Desea continuar?");

	}



	//a
	if(galgosPesoMinimo==0 || galgosPesoMaximo==0)
	{
		mensajeGalgoMasPesado="No hay galgos para mostrar";
	}
	else
	{
		mensajeGalgoMasPesado="El galgo mas pesado es "+nombreIngresado;
	}

	//b

	if(contadorPerros<3)
	{
		mensajeDescuento="No se aplicara ningun descuento";
	}
	else
	{
		if(contadorPerros>2 && contadorPerros<4)
		{
			descuento=acumuladorDePrecios*5/100;
			precioTotalConDescuento=acumuladorDePrecios-descuento;
			mensajeDescuento="El precio con el 5% de descuento es de "+precioTotalConDescuento;
		}
		else
		{
			if(contadorPerros>4)
			{
				descuento=acumuladorDePrecios*10/100;
				precioTotalConDescuento=acumuladorDePrecios-descuento;
				mensajeDescuento="El precio con el 10% de descuento es de "+precioTotalConDescuento;
			}
		}
	}

	//c
	promedio=acumuladorPeso/contadorPerros;
	mensajePromedio="El promedio de los pesos es "+promedio;

	alert(mensajeGalgoMasPesado);
	alert(mensajeDescuento);
	alert(mensajePromedio);
	alert(mensajeEdadPerro)
}
