Primeramente se realizó el servicio que permite la conexión a la API, luego de esto se hizo 1 vista de layout llamada HomeView las cuales contenía el header, los filtros y las cartas de los productos, cada una de estas 4 secciones están divididas con un componente base (filter, cartDrop, ProductList) y luego varios diversas partes de los mismos relacionados, se optó por una organización lineal dentro de los componentes pensando en un futuro en la suite de test, adicionalmente, tomando el cuenta el wireframe no se realizó la paginación debido a la que la api proveida no contenia suficientes elementos por lo que no se realizó la paginación.

Entre los puntos de mejora de este proyecto se encuentran, el responsive de las cartas, (se ve hacia la izquierda), agregar el menú hamburguesa para una mejor experiencia en móvil, la realización de pruebas unitarias y e2e