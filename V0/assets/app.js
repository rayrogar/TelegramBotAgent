 const inventoryData = [
            // Electronics
            { product: "Laptop Dell XPS 13", realStock: 45, availability: 42, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Mouse Logitech MX", realStock: 8, availability: 5, status: "low", lastEntry: "2024-01-08", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Teclado Mecánico Corsair", realStock: 0, availability: 0, status: "out", lastEntry: "2024-01-05", entryType: "Recepción", lastExit: "2024-01-10", exitType: "Despacho" },
            { product: "Monitor 4K Samsung", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-11", exitType: "Traslado" },
            { product: "Impresora HP LaserJet", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-07", entryType: "Recepción", lastExit: "2024-01-09", exitType: "Consumo Interno" },
            { product: "Tablet iPad Air", realStock: 6, availability: 3, status: "low", lastEntry: "2024-01-06", entryType: "Traslado", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Auriculares Sony WH-1000XM4", realStock: 35, availability: 32, status: "available", lastEntry: "2024-01-11", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Webcam Logitech C920", realStock: 2, availability: 1, status: "low", lastEntry: "2024-01-04", entryType: "Recepción", lastExit: "2024-01-10", exitType: "Merma" },
            { product: "Router WiFi 6 ASUS", realStock: 18, availability: 15, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "SSD Samsung 1TB", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-12", entryType: "Compra", lastExit: "2024-01-13", exitType: "Venta" },
            { product: "RAM DDR4 16GB", realStock: 89, availability: 85, status: "available", lastEntry: "2024-01-10", entryType: "Recepción", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Tarjeta Gráfica RTX 4060", realStock: 4, availability: 2, status: "low", lastEntry: "2024-01-05", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Procesador Intel i7", realStock: 15, availability: 12, status: "available", lastEntry: "2024-01-09", entryType: "Traslado", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Motherboard ASUS Prime", realStock: 22, availability: 18, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Fuente de Poder 750W", realStock: 31, availability: 28, status: "available", lastEntry: "2024-01-07", entryType: "Recepción", lastExit: "2024-01-10", exitType: "Venta" },
            
            // Office Supplies
            { product: "Papel A4 Resma", realStock: 156, availability: 150, status: "available", lastEntry: "2024-01-11", entryType: "Compra", lastExit: "2024-01-13", exitType: "Consumo Interno" },
            { product: "Bolígrafos Azules (Caja)", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-09", entryType: "Recepción", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Carpetas Manila", realStock: 78, availability: 75, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Grapadora Metálica", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-08", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Clips Metálicos (Caja)", realStock: 89, availability: 85, status: "available", lastEntry: "2024-01-07", entryType: "Compra", lastExit: "2024-01-10", exitType: "Consumo Interno" },
            { product: "Marcadores Permanentes", realStock: 34, availability: 30, status: "available", lastEntry: "2024-01-09", entryType: "Recepción", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Calculadora Científica", realStock: 8, availability: 6, status: "low", lastEntry: "2024-01-06", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Agenda 2024", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-05", entryType: "Traslado", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Etiquetas Adhesivas", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Tijeras de Oficina", realStock: 15, availability: 12, status: "available", lastEntry: "2024-01-08", entryType: "Recepción", lastExit: "2024-01-11", exitType: "Venta" },
            
            // Furniture
            { product: "Silla Ergonómica", realStock: 28, availability: 25, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Escritorio de Oficina", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-07", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Archivador 4 Gavetas", realStock: 6, availability: 4, status: "low", lastEntry: "2024-01-05", entryType: "Compra", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Mesa de Reuniones", realStock: 3, availability: 2, status: "low", lastEntry: "2024-01-04", entryType: "Recepción", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Estantería Metálica", realStock: 18, availability: 15, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Traslado" },
            { product: "Lámpara de Escritorio", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-10", entryType: "Recepción", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Pizarra Blanca", realStock: 14, availability: 12, status: "available", lastEntry: "2024-01-06", entryType: "Traslado", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Soporte para Monitor", realStock: 32, availability: 28, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Cojín Lumbar", realStock: 56, availability: 50, status: "available", lastEntry: "2024-01-11", entryType: "Recepción", lastExit: "2024-01-13", exitType: "Venta" },
            { product: "Reposapiés Ajustable", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            
            // Cleaning Supplies
            { product: "Detergente Multiusos", realStock: 89, availability: 85, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Papel Higiénico (Pack)", realStock: 234, availability: 220, status: "available", lastEntry: "2024-01-11", entryType: "Recepción", lastExit: "2024-01-13", exitType: "Consumo Interno" },
            { product: "Toallas de Papel", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Desinfectante", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-08", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Consumo Interno" },
            { product: "Escoba Industrial", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-07", entryType: "Compra", lastExit: "2024-01-10", exitType: "Consumo Interno" },
            { product: "Trapeador Microfibra", realStock: 18, availability: 15, status: "available", lastEntry: "2024-01-06", entryType: "Recepción", lastExit: "2024-01-09", exitType: "Consumo Interno" },
            { product: "Guantes de Limpieza", realStock: 156, availability: 150, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Bolsas de Basura", realStock: 89, availability: 80, status: "available", lastEntry: "2024-01-09", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Consumo Interno" },
            { product: "Limpiador de Vidrios", realStock: 34, availability: 30, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Consumo Interno" },
            { product: "Aspiradora Industrial", realStock: 2, availability: 1, status: "low", lastEntry: "2024-01-05", entryType: "Recepción", lastExit: "2024-01-10", exitType: "Traslado" },
            
            // Tools & Equipment
            { product: "Taladro Inalámbrico", realStock: 15, availability: 12, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Destornillador Set", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-08", entryType: "Recepción", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Martillo Carpintero", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-07", entryType: "Traslado", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Nivel de Burbuja", realStock: 18, availability: 15, status: "available", lastEntry: "2024-01-06", entryType: "Compra", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Cinta Métrica 5m", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-10", entryType: "Recepción", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Alicate Universal", realStock: 34, availability: 30, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Sierra Manual", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-08", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Llave Inglesa Set", realStock: 28, availability: 25, status: "available", lastEntry: "2024-01-07", entryType: "Compra", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Escalera Plegable", realStock: 6, availability: 4, status: "low", lastEntry: "2024-01-05", entryType: "Recepción", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Caja de Herramientas", realStock: 19, availability: 16, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            
            // Safety Equipment
            { product: "Casco de Seguridad", realStock: 78, availability: 70, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Chaleco Reflectivo", realStock: 89, availability: 80, status: "available", lastEntry: "2024-01-09", entryType: "Recepción", lastExit: "2024-01-11", exitType: "Consumo Interno" },
            { product: "Gafas de Protección", realStock: 156, availability: 150, status: "available", lastEntry: "2024-01-11", entryType: "Compra", lastExit: "2024-01-13", exitType: "Consumo Interno" },
            { product: "Guantes de Seguridad", realStock: 234, availability: 220, status: "available", lastEntry: "2024-01-10", entryType: "Traslado", lastExit: "2024-01-12", exitType: "Consumo Interno" },
            { product: "Botas de Seguridad", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Mascarilla N95", realStock: 567, availability: 550, status: "available", lastEntry: "2024-01-12", entryType: "Recepción", lastExit: "2024-01-13", exitType: "Consumo Interno" },
            { product: "Extintor 5kg", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-07", entryType: "Compra", lastExit: "2024-01-10", exitType: "Traslado" },
            { product: "Botiquín Primeros Auxilios", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-06", entryType: "Traslado", lastExit: "2024-01-09", exitType: "Consumo Interno" },
            { product: "Señalización de Seguridad", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-11", exitType: "Consumo Interno" },
            { product: "Arnés de Seguridad", realStock: 8, availability: 6, status: "low", lastEntry: "2024-01-05", entryType: "Recepción", lastExit: "2024-01-10", exitType: "Venta" },
            
            // Additional items to reach 100
            { product: "Cable HDMI 2m", realStock: 89, availability: 85, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Adaptador USB-C", realStock: 156, availability: 150, status: "available", lastEntry: "2024-01-11", entryType: "Recepción", lastExit: "2024-01-13", exitType: "Venta" },
            { product: "Cargador Universal", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Batería Recargable AA", realStock: 234, availability: 220, status: "available", lastEntry: "2024-01-10", entryType: "Traslado", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Memoria USB 32GB", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Disco Duro Externo 1TB", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-07", entryType: "Recepción", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Hub USB 4 Puertos", realStock: 34, availability: 30, status: "available", lastEntry: "2024-01-09", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Soporte para Laptop", realStock: 18, availability: 15, status: "available", lastEntry: "2024-01-08", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Mousepad Gaming", realStock: 78, availability: 70, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Webcam 1080p", realStock: 12, availability: 10, status: "available", lastEntry: "2024-01-06", entryType: "Recepción", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Micrófono USB", realStock: 15, availability: 12, status: "available", lastEntry: "2024-01-07", entryType: "Compra", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Altavoces Bluetooth", realStock: 28, availability: 25, status: "available", lastEntry: "2024-01-09", entryType: "Traslado", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Funda para Laptop", realStock: 56, availability: 50, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Protector de Pantalla", realStock: 123, availability: 120, status: "available", lastEntry: "2024-01-11", entryType: "Recepción", lastExit: "2024-01-13", exitType: "Venta" },
            { product: "Base Refrigerante Laptop", realStock: 19, availability: 16, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Organizador de Cables", realStock: 89, availability: 80, status: "available", lastEntry: "2024-01-09", entryType: "Traslado", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Lámpara LED USB", realStock: 67, availability: 60, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Ventilador USB", realStock: 34, availability: 30, status: "available", lastEntry: "2024-01-08", entryType: "Recepción", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Cámara de Seguridad", realStock: 6, availability: 4, status: "low", lastEntry: "2024-01-05", entryType: "Compra", lastExit: "2024-01-09", exitType: "Traslado" },
            { product: "Router 4G", realStock: 8, availability: 6, status: "low", lastEntry: "2024-01-06", entryType: "Traslado", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Switch de Red 8 Puertos", realStock: 14, availability: 12, status: "available", lastEntry: "2024-01-07", entryType: "Compra", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Proyector Portátil", realStock: 3, availability: 2, status: "low", lastEntry: "2024-01-04", entryType: "Recepción", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Pantalla Portátil USB", realStock: 11, availability: 9, status: "available", lastEntry: "2024-01-06", entryType: "Compra", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Docking Station", realStock: 7, availability: 5, status: "low", lastEntry: "2024-01-05", entryType: "Traslado", lastExit: "2024-01-09", exitType: "Venta" },
            { product: "Convertidor HDMI-VGA", realStock: 45, availability: 40, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Cable Ethernet 10m", realStock: 78, availability: 70, status: "available", lastEntry: "2024-01-09", entryType: "Recepción", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Adaptador WiFi USB", realStock: 56, availability: 50, status: "available", lastEntry: "2024-01-10", entryType: "Compra", lastExit: "2024-01-12", exitType: "Venta" },
            { product: "Repetidor WiFi", realStock: 23, availability: 20, status: "available", lastEntry: "2024-01-07", entryType: "Traslado", lastExit: "2024-01-10", exitType: "Venta" },
            { product: "Powerbank 20000mAh", realStock: 34, availability: 30, status: "available", lastEntry: "2024-01-08", entryType: "Compra", lastExit: "2024-01-11", exitType: "Venta" },
            { product: "Cargador Inalámbrico", realStock: 28, availability: 25, status: "available", lastEntry: "2024-01-09", entryType: "Recepción", lastExit: "2024-01-11", exitType: "Venta" }
        ];

        let currentData = [...inventoryData];
        let sortDirection = {};
        let currentPage = 1;
        let itemsPerPage = 25;
        let visibleColumns = [true, true, true, true, true, true, true, true, true]; // All columns visible by default

        function updatePagination() {
            const totalItems = currentData.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const startItem = (currentPage - 1) * itemsPerPage + 1;
            const endItem = Math.min(currentPage * itemsPerPage, totalItems);

            document.getElementById('paginationInfo').textContent = 
                `Mostrando ${startItem}-${endItem} de ${totalItems} registros`;

            const paginationButtons = document.getElementById('paginationButtons');
            paginationButtons.innerHTML = '';

            // Previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'pagination-btn';
            prevBtn.textContent = '‹ Anterior';
            prevBtn.disabled = currentPage === 1;
            prevBtn.onclick = () => changePage(currentPage - 1);
            paginationButtons.appendChild(prevBtn);

            // Page numbers
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

            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'pagination-btn';
            nextBtn.textContent = 'Siguiente ›';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.onclick = () => changePage(currentPage + 1);
            paginationButtons.appendChild(nextBtn);
        }

        function changePage(page) {
            const totalPages = Math.ceil(currentData.length / itemsPerPage);
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

        function toggleColumnDropdown() {
            const dropdown = document.getElementById('columnDropdown');
            dropdown.parentElement.classList.toggle('active');
        }

        function toggleColumn(columnIndex) {
            visibleColumns[columnIndex] = !visibleColumns[columnIndex];
            const checkbox = document.getElementById(`col-${columnIndex}`);
            checkbox.checked = visibleColumns[columnIndex];
            
            // Update table visibility
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

        function showProductHistory(productName) {
            const modal = document.getElementById('historyModal');
            const modalTitle = document.getElementById('modalTitle');
            const historyTimeline = document.getElementById('historyTimeline');
            
            modalTitle.textContent = `Historia de ${productName}`;
            
            // Generate sample history data
            const historyData = generateProductHistory(productName);
            
            historyTimeline.innerHTML = '';
            historyData.forEach(item => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                
                const quantityClass = item.type.includes('Entrada') ? 'quantity-in' : 'quantity-out';
                const quantitySymbol = item.type.includes('Entrada') ? '+' : '-';
                
                historyItem.innerHTML = `
                    <div class="history-date">${item.date}</div>
                    <div class="history-details">
                        <div class="history-type">${item.type}</div>
                        <div class="history-description">${item.description}</div>
                    </div>
                    <div class="history-quantity ${quantityClass}">
                        ${quantitySymbol}${item.quantity}
                    </div>
                `;
                
                historyTimeline.appendChild(historyItem);
            });
            
            modal.style.display = 'block';
        }

        function closeHistoryModal() {
            document.getElementById('historyModal').style.display = 'none';
        }

        function generateProductHistory(productName) {
            const movements = [
                { type: 'Entrada por Compra', description: 'Compra directa al proveedor', quantity: Math.floor(Math.random() * 50) + 10, date: '2024-01-13' },
                { type: 'Salida por Venta', description: 'Venta al cliente final', quantity: Math.floor(Math.random() * 20) + 5, date: '2024-01-12' },
                { type: 'Entrada por Traslado', description: 'Traslado desde almacén central', quantity: Math.floor(Math.random() * 30) + 15, date: '2024-01-11' },
                { type: 'Salida por Despacho', description: 'Despacho a sucursal', quantity: Math.floor(Math.random() * 25) + 8, date: '2024-01-10' },
                { type: 'Entrada por Recepción', description: 'Recepción de mercancía devuelta', quantity: Math.floor(Math.random() * 15) + 3, date: '2024-01-09' },
                { type: 'Salida por Consumo Interno', description: 'Uso interno de la empresa', quantity: Math.floor(Math.random() * 10) + 2, date: '2024-01-08' },
                { type: 'Salida por Merma', description: 'Producto dañado o vencido', quantity: Math.floor(Math.random() * 5) + 1, date: '2024-01-07' },
                { type: 'Entrada por Compra', description: 'Reposición de stock', quantity: Math.floor(Math.random() * 40) + 20, date: '2024-01-06' }
            ];
            
            return movements.slice(0, Math.floor(Math.random() * 6) + 3); // Return 3-8 random movements
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('historyModal');
            if (event.target === modal) {
                closeHistoryModal();
            }
        }

        // Close column dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.querySelector('.column-dropdown');
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Función para alternar tema
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

        // Función para establecer período de tiempo
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

        // Función para actualizar las cards
        function updateCards() {
            // Simular actualización de datos basada en filtros
            const period = document.querySelector('.filter-btn.active').textContent;
            
            // Aquí normalmente harías una llamada a la API
            // Por ahora, solo simulamos cambios en los números
            document.getElementById('ordersReceived').textContent = Math.floor(Math.random() * 200) + 100;
            document.getElementById('ordersDispatched').textContent = Math.floor(Math.random() * 180) + 90;
            document.getElementById('ordersPending').textContent = Math.floor(Math.random() * 20) + 5;
            document.getElementById('lowStock').textContent = currentData.filter(item => item.status === 'low' || item.status === 'out').length;
        }

        // Función para filtrar tabla
        function filterTable() {
            const searchTerm = document.getElementById('searchProduct').value.toLowerCase();
            currentData = inventoryData.filter(item => 
                item.product.toLowerCase().includes(searchTerm)
            );
            renderTable();
        }

        // Función para ordenar tabla
        function sortTable(columnIndex) {
            const columns = ['product', 'realStock', 'availability', 'status', 'lastEntry', 'entryType', 'lastExit', 'exitType'];
            const column = columns[columnIndex];
            
            if (!sortDirection[column]) {
                sortDirection[column] = 'asc';
            } else {
                sortDirection[column] = sortDirection[column] === 'asc' ? 'desc' : 'asc';
            }

            currentData.sort((a, b) => {
                let aVal = a[column];
                let bVal = b[column];

                if (typeof aVal === 'string') {
                    aVal = aVal.toLowerCase();
                    bVal = bVal.toLowerCase();
                }

                if (sortDirection[column] === 'asc') {
                    return aVal > bVal ? 1 : -1;
                } else {
                    return aVal < bVal ? 1 : -1;
                }
            });

            renderTable();
        }

        function renderTable() {
            const tbody = document.getElementById('inventoryTableBody');
            tbody.innerHTML = '';

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = currentData.slice(startIndex, endIndex);

            pageData.forEach(item => {
                const row = document.createElement('tr');
                
                const statusClass = item.status === 'available' ? 'status-available' : 
                                  item.status === 'low' ? 'status-low' : 'status-out';
                const statusText = item.status === 'available' ? 'Disponible' : 
                                 item.status === 'low' ? 'Stock Bajo' : 'Agotado';

                row.innerHTML = `
                    <td class="${visibleColumns[0] ? '' : 'hidden'}"><strong>${item.product}</strong></td>
                    <td class="${visibleColumns[1] ? '' : 'hidden'}">${item.realStock}</td>
                    <td class="${visibleColumns[2] ? '' : 'hidden'}">${item.availability}</td>
                    <td class="${visibleColumns[3] ? '' : 'hidden'}"><span class="status-badge ${statusClass}">${statusText}</span></td>
                    <td class="${visibleColumns[4] ? '' : 'hidden'}"><span class="movement-in">+${item.lastEntry}</span></td>
                    <td class="${visibleColumns[5] ? '' : 'hidden'}">${item.entryType}</td>
                    <td class="${visibleColumns[6] ? '' : 'hidden'}"><span class="movement-out">-${item.lastExit}</span></td>
                    <td class="${visibleColumns[7] ? '' : 'hidden'}">${item.exitType}</td>
                    <td class="${visibleColumns[8] ? '' : 'hidden'}">
                        <button class="history-btn" onclick="showProductHistory('${item.product}')">
                            Ver Historia
                        </button>
                    </td>
                `;
                
                tbody.appendChild(row);
            });

            updatePagination();
        }


        function init() {
            renderTable();
            setTimePeriod('today');
            
            // Establecer fechas por defecto
            const today = new Date();
            document.getElementById('startDate').value = today.toISOString().split('T')[0];
            document.getElementById('endDate').value = today.toISOString().split('T')[0];
            
            updatePagination();
        }
