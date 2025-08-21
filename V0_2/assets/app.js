
    const inventoryData = [
        { producto: "Smartphone Samsung Galaxy", disponibilidad: 45, existencia: 50, compra: 200, trasladosIn: 25, trasladosOut: 15, mermas: 2, consumoInterno: 3, ajustesInventario: 5, categoria: "Electrónicos", status: "received" },
        { producto: "Laptop Dell Inspiron", disponibilidad: 12, existencia: 15, compra: 50, trasladosIn: 8, trasladosOut: 5, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Electrónicos", status: "lowStock" },
        { producto: "Tablet iPad Air", disponibilidad: 28, existencia: 30, compra: 80, trasladosIn: 12, trasladosOut: 8, mermas: 1, consumoInterno: 1, ajustesInventario: 2, categoria: "Electrónicos", status: "dispatched" },
        { producto: "Auriculares Sony WH-1000XM4", disponibilidad: 67, existencia: 70, compra: 150, trasladosIn: 20, trasladosOut: 12, mermas: 3, consumoInterno: 0, ajustesInventario: 1, categoria: "Electrónicos", status: "received" },
        { producto: "Monitor LG 27 pulgadas", disponibilidad: 8, existencia: 10, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 1, ajustesInventario: 1, categoria: "Electrónicos", status: "lowStock" },
        { producto: "Teclado Mecánico Logitech", disponibilidad: 34, existencia: 35, compra: 100, trasladosIn: 15, trasladosOut: 10, mermas: 1, consumoInterno: 0, ajustesInventario: 0, categoria: "Electrónicos", status: "dispatched" },
        { producto: "Mouse Gaming Razer", disponibilidad: 56, existencia: 60, compra: 120, trasladosIn: 18, trasladosOut: 14, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Electrónicos", status: "received" },
        { producto: "Cámara Canon EOS R6", disponibilidad: 3, existencia: 5, compra: 20, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 0, ajustesInventario: 1, categoria: "Electrónicos", status: "lowStock" },
        { producto: "Impresora HP LaserJet", disponibilidad: 19, existencia: 20, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 0, ajustesInventario: 0, categoria: "Electrónicos", status: "pending" },
        { producto: "Router WiFi 6 ASUS", disponibilidad: 41, existencia: 45, compra: 90, trasladosIn: 12, trasladosOut: 8, mermas: 1, consumoInterno: 3, ajustesInventario: 2, categoria: "Electrónicos", status: "dispatched" },
        { producto: "Camiseta Polo Ralph Lauren", disponibilidad: 89, existencia: 95, compra: 300, trasladosIn: 45, trasladosOut: 35, mermas: 5, consumoInterno: 6, ajustesInventario: 10, categoria: "Ropa", status: "received" },
        { producto: "Jeans Levi's 501", disponibilidad: 23, existencia: 25, compra: 150, trasladosIn: 20, trasladosOut: 15, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "dispatched" },
        { producto: "Zapatillas Nike Air Max", disponibilidad: 7, existencia: 10, compra: 80, trasladosIn: 12, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Ropa", status: "lowStock" },
        { producto: "Chaqueta North Face", disponibilidad: 15, existencia: 18, compra: 60, trasladosIn: 8, trasladosOut: 5, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "pending" },
        { producto: "Vestido Zara Floral", disponibilidad: 52, existencia: 55, compra: 200, trasladosIn: 25, trasladosOut: 20, mermas: 3, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "received" },
        { producto: "Traje Hugo Boss", disponibilidad: 4, existencia: 6, compra: 30, trasladosIn: 3, trasladosOut: 2, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "lowStock" },
        { producto: "Botas Dr. Martens", disponibilidad: 31, existencia: 35, compra: 100, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "dispatched" },
        { producto: "Sudadera Adidas", disponibilidad: 68, existencia: 70, compra: 180, trasladosIn: 22, trasladosOut: 18, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "received" },
        { producto: "Pantalones Chinos", disponibilidad: 26, existencia: 30, compra: 120, trasladosIn: 18, trasladosOut: 14, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "dispatched" },
        { producto: "Blusa Seda", disponibilidad: 12, existencia: 15, compra: 75, trasladosIn: 10, trasladosOut: 7, mermas: 1, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "pending" },
        { producto: "Sofá Seccional", disponibilidad: 2, existencia: 3, compra: 15, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Hogar", status: "lowStock" },
        { producto: "Mesa de Comedor Roble", disponibilidad: 8, existencia: 10, compra: 25, trasladosIn: 3, trasladosOut: 2, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Hogar", status: "pending" },
        { producto: "Lámpara de Pie LED", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 15, trasladosOut: 12, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Alfombra Persa 3x2m", disponibilidad: 6, existencia: 8, compra: 20, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "lowStock" },
        { producto: "Cojines Decorativos", disponibilidad: 78, existencia: 80, compra: 200, trasladosIn: 30, trasladosOut: 25, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Hogar", status: "dispatched" },
        { producto: "Espejo de Pared Grande", disponibilidad: 14, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "pending" },
        { producto: "Cortinas Blackout", disponibilidad: 33, existencia: 35, compra: 80, trasladosIn: 12, trasladosOut: 10, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Juego de Sábanas", disponibilidad: 67, existencia: 70, compra: 150, trasladosIn: 20, trasladosOut: 18, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Hogar", status: "dispatched" },
        { producto: "Macetas Cerámicas", disponibilidad: 89, existencia: 95, compra: 180, trasladosIn: 25, trasladosOut: 20, mermas: 3, consumoInterno: 3, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Cuadros Abstractos", disponibilidad: 21, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "dispatched" },
        { producto: "Bicicleta Montaña Trek", disponibilidad: 5, existencia: 7, compra: 20, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "lowStock" },
        { producto: "Pelota Fútbol Adidas", disponibilidad: 156, existencia: 160, compra: 400, trasladosIn: 50, trasladosOut: 45, mermas: 4, consumoInterno: 0, ajustesInventario: 5, categoria: "Deportes", status: "received" },
        { producto: "Raqueta Tenis Wilson", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "dispatched" },
        { producto: "Pesas Ajustables", disponibilidad: 12, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "pending" },
        { producto: "Cinta de Correr", disponibilidad: 1, existencia: 2, compra: 8, trasladosIn: 1, trasladosOut: 0, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "lowStock" },
        { producto: "Balón Baloncesto", disponibilidad: 87, existencia: 90, compra: 200, trasladosIn: 25, trasladosOut: 22, mermas: 3, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "received" },
        { producto: "Guantes Boxeo", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 12, trasladosOut: 10, mermas: 1, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "dispatched" },
        { producto: "Tabla Surf", disponibilidad: 3, existencia: 4, compra: 12, trasladosIn: 1, trasladosOut: 1, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "lowStock" },
        { producto: "Patines en Línea", disponibilidad: 18, existencia: 20, compra: 50, trasladosIn: 6, trasladosOut: 4, mermas: 0, consumoInterno: 2, ajustesInventario: 0, categoria: "Deportes", status: "pending" },
        { producto: "Casco Ciclismo", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "received" },
        { producto: "Novela Bestseller", disponibilidad: 234, existencia: 250, compra: 500, trasladosIn: 60, trasladosOut: 55, mermas: 5, consumoInterno: 6, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Manual Técnico", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 12, trasladosOut: 10, mermas: 2, consumoInterno: 3, ajustesInventario: 0, categoria: "Libros", status: "dispatched" },
        { producto: "Libro Infantil", disponibilidad: 123, existencia: 130, compra: 300, trasladosIn: 35, trasladosOut: 30, mermas: 4, consumoInterno: 3, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Enciclopedia", disponibilidad: 8, existencia: 10, compra: 25, trasladosIn: 3, trasladosOut: 2, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Libros", status: "pending" },
        { producto: "Revista Científica", disponibilidad: 67, existencia: 70, compra: 150, trasladosIn: 20, trasladosOut: 18, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "dispatched" },
        { producto: "Atlas Mundial", disponibilidad: 12, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Libros", status: "lowStock" },
        { producto: "Diccionario Inglés", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Libro de Cocina", disponibilidad: 56, existencia: 60, compra: 120, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "dispatched" },
        { producto: "Guía de Viajes", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "pending" },
        { producto: "Biografía Histórica", disponibilidad: 78, existencia: 80, compra: 180, trasladosIn: 22, trasladosOut: 20, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Smartphone iPhone 15", disponibilidad: 67, existencia: 70, compra: 150, trasladosIn: 18, trasladosOut: 15, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Electrónicos", status: "received" },
        { producto: "Laptop MacBook Pro", disponibilidad: 8, existencia: 10, compra: 30, trasladosIn: 3, trasladosOut: 2, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Electrónicos", status: "lowStock" },
        { producto: "Tablet Samsung Galaxy", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Electrónicos", status: "dispatched" },
        { producto: "Auriculares AirPods Pro", disponibilidad: 89, existencia: 95, compra: 200, trasladosIn: 25, trasladosOut: 20, mermas: 3, consumoInterno: 3, ajustesInventario: 0, categoria: "Electrónicos", status: "received" },
        { producto: "Monitor Samsung 32\"", disponibilidad: 12, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Electrónicos", status: "pending" },
        { producto: "Teclado Apple Magic", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 12, trasladosOut: 10, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Electrónicos", status: "dispatched" },
        { producto: "Mouse Apple Magic", disponibilidad: 67, existencia: 70, compra: 140, trasladosIn: 18, trasladosOut: 15, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Electrónicos", status: "received" },
        { producto: "Cámara Sony Alpha", disponibilidad: 5, existencia: 7, compra: 20, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Electrónicos", status: "lowStock" },
        { producto: "Impresora Canon", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Electrónicos", status: "dispatched" },
        { producto: "Router Netgear", disponibilidad: 56, existencia: 60, compra: 120, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Electrónicos", status: "received" },
        { producto: "Camisa Tommy Hilfiger", disponibilidad: 78, existencia: 80, compra: 180, trasladosIn: 22, trasladosOut: 20, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "received" },
        { producto: "Pantalones Calvin Klein", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Ropa", status: "dispatched" },
        { producto: "Zapatillas Converse", disponibilidad: 12, existencia: 15, compra: 50, trasladosIn: 6, trasladosOut: 4, mermas: 1, consumoInterno: 0, ajustesInventario: 0, categoria: "Ropa", status: "lowStock" },
        { producto: "Chaqueta Patagonia", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "pending" },
        { producto: "Vestido H&M", disponibilidad: 89, existencia: 95, compra: 200, trasladosIn: 25, trasladosOut: 20, mermas: 3, consumoInterno: 3, ajustesInventario: 0, categoria: "Ropa", status: "received" },
        { producto: "Traje Armani", disponibilidad: 3, existencia: 5, compra: 15, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "lowStock" },
        { producto: "Botas Timberland", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 12, trasladosOut: 10, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "dispatched" },
        { producto: "Sudadera Nike", disponibilidad: 67, existencia: 70, compra: 140, trasladosIn: 18, trasladosOut: 15, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "received" },
        { producto: "Shorts Deportivos", disponibilidad: 56, existencia: 60, compra: 120, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Ropa", status: "dispatched" },
        { producto: "Falda Plisada", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Ropa", status: "received" },
        { producto: "Silla Ergonómica", disponibilidad: 12, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Hogar", status: "pending" },
        { producto: "Mesa Centro Cristal", disponibilidad: 6, existencia: 8, compra: 20, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "lowStock" },
        { producto: "Lámpara Mesa", disponibilidad: 78, existencia: 80, compra: 160, trasladosIn: 20, trasladosOut: 18, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Alfombra Moderna", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "dispatched" },
        { producto: "Almohadas Memory Foam", disponibilidad: 89, existencia: 95, compra: 200, trasladosIn: 25, trasladosOut: 20, mermas: 3, consumoInterno: 3, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Espejo Baño LED", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Hogar", status: "dispatched" },
        { producto: "Toallas Bambú", disponibilidad: 67, existencia: 70, compra: 140, trasladosIn: 18, trasladosOut: 15, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Edredón Nórdico", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 12, trasladosOut: 10, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Hogar", status: "dispatched" },
        { producto: "Plantas Artificiales", disponibilidad: 123, existencia: 130, compra: 260, trasladosIn: 30, trasladosOut: 25, mermas: 4, consumoInterno: 3, ajustesInventario: 0, categoria: "Hogar", status: "received" },
        { producto: "Velas Aromáticas", disponibilidad: 156, existencia: 160, compra: 320, trasladosIn: 40, trasladosOut: 35, mermas: 4, consumoInterno: 0, ajustesInventario: 5, categoria: "Hogar", status: "received" },
        { producto: "Bicicleta Eléctrica", disponibilidad: 2, existencia: 3, compra: 10, trasladosIn: 1, trasladosOut: 0, mermas: 0, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "lowStock" },
        { producto: "Pelota Tenis", disponibilidad: 234, existencia: 250, compra: 500, trasladosIn: 60, trasladosOut: 55, mermas: 5, consumoInterno: 6, ajustesInventario: 0, categoria: "Deportes", status: "received" },
        { producto: "Raqueta Bádminton", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 12, trasladosOut: 10, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "dispatched" },
        { producto: "Mancuernas 10kg", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "pending" },
        { producto: "Bicicleta Estática", disponibilidad: 4, existencia: 5, compra: 15, trasladosIn: 2, trasladosOut: 1, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "lowStock" },
        { producto: "Pelota Voleibol", disponibilidad: 78, existencia: 80, compra: 160, trasladosIn: 20, trasladosOut: 18, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "received" },
        { producto: "Guantes Portero", disponibilidad: 56, existencia: 60, compra: 120, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "dispatched" },
        { producto: "Kayak Inflable", disponibilidad: 8, existencia: 10, compra: 25, trasladosIn: 3, trasladosOut: 2, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "pending" },
        { producto: "Patineta Eléctrica", disponibilidad: 12, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Deportes", status: "lowStock" },
        { producto: "Casco Skateboard", disponibilidad: 67, existencia: 70, compra: 140, trasladosIn: 18, trasladosOut: 15, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Deportes", status: "received" },
        { producto: "Novela Ciencia Ficción", disponibilidad: 123, existencia: 130, compra: 260, trasladosIn: 30, trasladosOut: 25, mermas: 4, consumoInterno: 3, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Manual Programación", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Libros", status: "dispatched" },
        { producto: "Cuentos Infantiles", disponibilidad: 89, existencia: 95, compra: 200, trasladosIn: 25, trasladosOut: 20, mermas: 3, consumoInterno: 3, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Diccionario Español", disponibilidad: 23, existencia: 25, compra: 60, trasladosIn: 8, trasladosOut: 6, mermas: 1, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "pending" },
        { producto: "Revista Tecnología", disponibilidad: 45, existencia: 50, compra: 100, trasladosIn: 12, trasladosOut: 10, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "dispatched" },
        { producto: "Atlas Geográfico", disponibilidad: 12, existencia: 15, compra: 40, trasladosIn: 5, trasladosOut: 3, mermas: 0, consumoInterno: 0, ajustesInventario: 0, categoria: "Libros", status: "lowStock" },
        { producto: "Libro Arte", disponibilidad: 56, existencia: 60, compra: 120, trasladosIn: 15, trasladosOut: 12, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Guía Jardinería", disponibilidad: 67, existencia: 70, compra: 140, trasladosIn: 18, trasladosOut: 15, mermas: 2, consumoInterno: 1, ajustesInventario: 0, categoria: "Libros", status: "dispatched" },
        { producto: "Manual Fotografía", disponibilidad: 34, existencia: 35, compra: 80, trasladosIn: 10, trasladosOut: 8, mermas: 1, consumoInterno: 2, ajustesInventario: 0, categoria: "Libros", status: "received" },
        { producto: "Biografía Artista", disponibilidad: 78, existencia: 80, compra: 160, trasladosIn: 20, trasladosOut: 18, mermas: 2, consumoInterno: 0, ajustesInventario: 0, categoria: "Libros", status: "dispatched" }
    ];

    let filteredData = [...inventoryData];
    let currentPage = 1;
    let itemsPerPage = 25;
    let sortColumn = -1;
    let sortDirection = 'asc';
    let selectedRow = null;
    let activeFilter = null;

    function filterByCard(filterType) {
        const cards = document.querySelectorAll('.card');
        const resetBtn = document.getElementById('resetFiltersBtn');
        
        cards.forEach(card => card.classList.remove('active'));
        
        if (activeFilter === filterType) {
            resetFilters();
            return;
        }
        
        const clickedCard = document.querySelector(`[data-filter="${filterType}"]`);
        if (clickedCard) {
            clickedCard.classList.add('active');
        }
        
        activeFilter = filterType;
        resetBtn.style.display = 'inline-block';
        
        switch(filterType) {
            case 'received':
                filteredData = inventoryData.filter(item => item.status === 'received');
                break;
            case 'dispatched':
                filteredData = inventoryData.filter(item => item.status === 'dispatched');
                break;
            case 'pending':
                filteredData = inventoryData.filter(item => item.status === 'pending');
                break;
            case 'lowStock':
                filteredData = inventoryData.filter(item => item.status === 'lowStock');
                break;
        }
        
        currentPage = 1;
        renderTable();
        updatePagination();
    }

    function resetFilters() {
        const cards = document.querySelectorAll('.card');
        const resetBtn = document.getElementById('resetFiltersBtn');
        
        cards.forEach(card => card.classList.remove('active'));
        resetBtn.style.display = 'none';
        
        activeFilter = null;
        filteredData = [...inventoryData];
        currentPage = 1;
        renderTable();
        updatePagination();
    }

    function renderTable() {
        const tbody = document.getElementById('inventoryTableBody');
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = filteredData.slice(start, end);

        tbody.innerHTML = '';

        pageData.forEach((item, index) => {
            const row = document.createElement('tr');
            
            let stockClass = '';
            if (item.disponibilidad === 0) {
                stockClass = 'out-of-stock';
            } else if (item.disponibilidad <= 10) {
                stockClass = 'low-stock';
            } else if (item.disponibilidad <= 30) {
                stockClass = 'medium-stock';
            } else {
                stockClass = 'high-stock';
            }
            
            row.className = stockClass;
            row.onclick = () => selectRow(row, start + index);

            row.innerHTML = `
                <td data-column="0">${item.producto}</td>
                <td data-column="1">${item.disponibilidad}</td>
                <td data-column="2">${item.existencia}</td>
                <td data-column="3">${item.compra}</td>
                <td data-column="4">${item.trasladosIn}/${item.trasladosOut}</td>
                <td data-column="5">${item.mermas}</td>
                <td data-column="6">${item.consumoInterno}</td>
                <td data-column="7">${item.ajustesInventario}</td>
                <td data-column="8">
                    <button class="history-btn" onclick="event.stopPropagation(); showHistory('${item.producto}')">
                        Ver Historia
                    </button>
                </td>
            `;

            tbody.appendChild(row);
        });
    }

    function selectRow(row, dataIndex) {
        const allRows = document.querySelectorAll('#inventoryTableBody tr');
        allRows.forEach(r => r.classList.remove('selected'));
        
        row.classList.add('selected');
        selectedRow = dataIndex;
    }

    let visibleColumns = [true, true, true, true, true, true, true, true, true];

    function toggleColumnDropdown() {
        const dropdown = document.getElementById('columnDropdown');
        dropdown.parentElement.classList.toggle('active');
    }

    function toggleColumn(columnIndex) {
        visibleColumns[columnIndex] = !visibleColumns[columnIndex];
        const checkbox = document.getElementById(`col-${columnIndex}`);
        checkbox.checked = visibleColumns[columnIndex];
        
        const table = document.getElementById('inventoryTable');
        const headers = table.querySelectorAll('th');
        const rows = table.querySelectorAll('tbody tr');
        
        headers[columnIndex].classList.toggle('hidden', !visibleColumns[columnIndex]);
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells[columnIndex]) {
                cells[columnIndex].classList.toggle('hidden', !visibleColumns[columnIndex]);
            }
        });
    }

    function updatePagination() {
        const totalItems = filteredData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const startItem = (currentPage - 1) * itemsPerPage + 1;
        const endItem = Math.min(currentPage * itemsPerPage, totalItems);

        document.getElementById('paginationInfo').textContent = 
            `Mostrando ${startItem}-${endItem} de ${totalItems} registros`;

        const paginationButtons = document.getElementById('paginationButtons');
        paginationButtons.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '‹ Anterior';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => changePage(currentPage - 1);
        paginationButtons.appendChild(prevBtn);

        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.onclick = () => changePage(i);
            paginationButtons.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = 'Siguiente ›';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => changePage(currentPage + 1);
        paginationButtons.appendChild(nextBtn);
    }

    function changePage(page) {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            renderTable();
            updatePagination();
        }
    }

    function changeItemsPerPage() {
        itemsPerPage = parseInt(document.getElementById('itemsPerPage').value);
        currentPage = 1;
        renderTable();
        updatePagination();
    }

    function showHistory(productName) {
        const modal = document.getElementById('historyModal');
        const modalTitle = document.getElementById('modalTitle');
        const historyTimeline = document.getElementById('historyTimeline');
        
        modalTitle.textContent = `Historia de ${productName}`;
        
        const sampleHistory = [
            { date: '2024-01-15', type: 'Compra', description: 'Recepción de mercancía', quantity: '+50', isIn: true },
            { date: '2024-01-10', type: 'Venta', description: 'Despacho a cliente', quantity: '-15', isIn: false },
            { date: '2024-01-08', type: 'Traslado In', description: 'Traslado desde almacén central', quantity: '+25', isIn: true },
            { date: '2024-01-05', type: 'Ajuste', description: 'Ajuste de inventario', quantity: '+2', isIn: true },
            { date: '2024-01-03', type: 'Merma', description: 'Producto dañado', quantity: '-3', isIn: false }
        ];
        
        historyTimeline.innerHTML = '';
        sampleHistory.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-date">${item.date}</div>
                <div class="history-details">
                    <div class="history-type">${item.type}</div>
                    <div class="history-description">${item.description}</div>
                </div>
                <div class="history-quantity ${item.isIn ? 'quantity-in' : 'quantity-out'}">
                    ${item.quantity}
                </div>
            `;
            historyTimeline.appendChild(historyItem);
        });
        
        modal.style.display = 'block';
    }

    function closeHistoryModal() {
        document.getElementById('historyModal').style.display = 'none';
    }

    function toggleTheme() {
        const body = document.body;
        const button = document.querySelector('.theme-toggle');
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            button.textContent = '🌙 Modo Oscuro';
        } else {
            body.setAttribute('data-theme', 'dark');
            button.textContent = '☀️ Modo Claro';
        }
    }

    function setTimePeriod(period) {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        const today = new Date();
        const startDate = document.getElementById('startDate');
        const endDate = document.getElementById('endDate');

        switch(period) {
            case 'today':
                startDate.value = today.toISOString().split('T')[0];
                endDate.value = today.toISOString().split('T')[0];
                break;
            case 'week':
                const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                startDate.value = weekAgo.toISOString().split('T')[0];
                endDate.value = today.toISOString().split('T')[0];
                break;
            case 'month':
                const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                startDate.value = monthAgo.toISOString().split('T')[0];
                endDate.value = today.toISOString().split('T')[0];
                break;
        }
        
        updateCards();
    }

    function updateCards() {
        const period = document.querySelector('.filter-btn.active').textContent;
        
        document.getElementById('ordersReceived').textContent = Math.floor(Math.random() * 200) + 100;
        document.getElementById('ordersDispatched').textContent = Math.floor(Math.random() * 180) + 90;
        document.getElementById('ordersPending').textContent = Math.floor(Math.random() * 20) + 5;
        document.getElementById('lowStock').textContent = filteredData.filter(item => item.status === 'lowStock').length;
    }

    function filterTable() {
        const searchTerm = document.getElementById('searchProduct').value.toLowerCase();
        filteredData = inventoryData.filter(item => 
            item.producto.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderTable();
        updatePagination();
    }

    function sortTable(columnIndex) {
        const columns = ['producto', 'disponibilidad', 'existencia', 'compra', 'trasladosIn', 'mermas', 'consumoInterno', 'ajustesInventario'];
        const column = columns[columnIndex];
        
        if (sortColumn === columnIndex) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = columnIndex;
            sortDirection = 'asc';
        }

        filteredData.sort((a, b) => {
            let aVal = a[column];
            let bVal = b[column];

            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (sortDirection === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });

        renderTable();
    }

    window.onclick = function(event) {
        const modal = document.getElementById('historyModal');
        if (event.target === modal) {
            closeHistoryModal();
        }
        
        const dropdown = document.getElementById('columnDropdown');
        if (!event.target.matches('.column-toggle-btn')) {
            dropdown.parentElement.classList.remove('active');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        renderTable();
        updatePagination();
        updateCards();
    });
