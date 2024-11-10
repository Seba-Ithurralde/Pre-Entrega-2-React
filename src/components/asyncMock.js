const products = [
    {
      id: 1,
      name: 'Notebook Acer Nitro',
      titulo: 'Notebook Acer',
      descripcion: 'Notebook Gamer Acer Nitro V 15.6" FHD i9-13900H RTX4060 16GB DDR5 512GB SSD NVMe Win11',
      price: 1888278,
      stock: 12,
      thumbnail: 'https://pccenter.com.ar/cdn/shop/files/ACERNITRO.jpg?v=1710771822'
    },
    { id: 2,
      name: 'Notebook MSI Sword',
      titulo: 'Notebook MSI',
      descripcion: 'Notebook Gamer MSI Sword 16HX B14VFKG-202US 16" i7-14650HX RTX4060 16GB RAM 1TB SSD Win11',
      price: 2038898,
      stock: 15,
      thumbnail: 'https://www.profesionalreview.com/wp-content/uploads/2022/01/Sword-15-y-Katana-GF76-el-caballero-y-el-samurai-para-jugar-en-portatil_3.jpg'
    },
    { id: 3,
      name: 'Notebook MSI Katana',
      titulo: 'Notebook MSI',
      descripcion: 'Notebook Gamer MSI Katana B8VF-437US 15.6" FHD 144hz Ryzen 7-8845HS RTX4060 16GB 1TB SSD Win11',
      price: 1881933,
      stock: 22,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_634776-MLA72109553091_102023-O.webp'
    },
    {
      id: 4,
      name: 'Notebook Acer Aspire',
      titulo: 'Notebook Acer',
      descripcion: 'Notebook Acer Aspire 5 15.6" FHD Touchscreen i5-13420H 8GB 512GB SSD Win11',
      price: 754063,
      stock: 9,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_661000-MLA73197637909_122023-O.webp'
    },
    { id: 5,
      name: 'Notebook Asus Vivobook',
      titulo: 'Notebook Asus',
      descripcion: 'Notebook Asus Vivobook 14" FHD Core i3-1215U 8GB 128GB SSD Win11 Quiet Blue',
      price: 479560,
      stock: 31,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_801226-MLA74751880745_022024-O.webp'
    },
    { id: 6,
      name: 'Notebook Acer Nitro',
      titulo: 'Notebook Acer',
      descripcion: 'Notebook Gamer Acer Nitro V 15.6" FHD i9-12900H RTX4060 16GB DDR5 512GB SSD NVMe FREEDOS',
      price: 1787034,
      stock: 19,
      thumbnail: 'https://gorilagames.com/img/Public/1019/83804-producto-notebook-acer-nitro-5-i5-12500h-rtx-3050-gorila-games-8.jpg'
    },
    {
      id: 7,
      name: 'Teclado Logitech + Mouse MK850',
      titulo: 'Teclado y Mouse',
      descripcion: 'Combo Logitech Teclado + Mouse MK850 Wireless Bluetooth Español',
      price:  85990,
      stock: 23,
      thumbnail: 'https://mla-s1-p.mlstatic.com/882221-MLA31886143802_082019-F.jpg'
    },
    { id: 8,
      name: 'Teclado Redragron + Mouse RGB',
      titulo: 'Teclado y Mouse',
      descripcion: 'Combo Redragon S136 Teclado Mecanico + Mouse Wireless RGB',
      price: 78430,
      stock: 12,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_936131-MLA41998290440_052020-O.webp'
    },
    { id: 9,
      name: 'Teclado Redragon + Mouse M601 + Auriculares H101 + Mouse Pad',
      titulo: 'Teclado, Mouse, Mouse Pad, Auriculares',
      descripcion: 'Combo Redragon Teclado K552 + Mouse M601 + Auriculares H101 + Mouse Pad Archelon M Español',
      price: 77990,
      stock: 27,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_998350-MLU72035441033_092023-O.webp'
    },
    { id: 10,
      name: 'Teclado Redragon + Mouse Pad + Auriculares Garuda',
      titulo: 'Teclado y Mouse',
      descripcion: 'Combo Redragon S101-BA-1 4 en 1 Teclado Harpe RGB Mouse Centrophorus Auriculares Garuda y Mouse Pad Archelon M',
      price: 56590,
      stock: 17,
      thumbnail: 'https://clasicdn.paraguay.com/pictures/2018/09/05/1205746/4277937L.jpg'
    },
    { id: 11,
      name: 'Teclado Redragon + Mouse M607',
      titulo: 'Teclado y Mouse',
      descripcion: 'Combo Redragon Teclado K551-RGB-BA y Mouse M607 RGB',
      price: 52680,
      stock: 34,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_674043-MLA48688191484_122021-O.webp'
    },
    { id: 12,
      name: 'Teclado Logitech + Mouse MK470',
      titulo: 'Teclado y Mouse',
      descripcion: 'Combo Logitech Teclado + Mouse MK470 Slim Wireless Rose',
      price: 49710,
      stock: 22,
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_658243-MLU73662396741_122023-O.webp'
    },
    {
      id: 13,
      name: 'Mother ASUS PRIME B760M-A + Procesador Intel Core i7 12700 4.9GHz',
      titulo: 'Mother y Procesador',
      descripcion: 'Kit Mother ASUS PRIME B760M-A WIFI D4 + Procesador Intel Core i7 12700 4.9GHz Turbo Socket',
      price: 501070,
      stock: 8,
      thumbnail: 'https://m.media-amazon.com/images/I/41nAM7xgnVL._AC_.jpg'
    },
    { id: 14,
      name: 'Mother ASUS PRIME B760M-A D4 + Procesador Intel Core i7 12700F 4.9GHz',
      titulo: 'Mother y Procesador',
      descripcion: 'Kit Mother ASUS PRIME B760M-A D4 + Procesador Intel Core i7 12700F 4.9GHz Turbo Socket (Sin Video Integrado)',
      price: 497780,
      stock: 11,
      thumbnail: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_0_Kit_Mother_ASUS_PRIME_B760M-A_WIFI_D4___Procesador_Intel_Core_i7_12700_4.9GHz_Turbo_Socket_c22bfdfc-grn.jpg'
    },
    { id: 15,
      name: 'Mother ASUS H610M-K + Procesador Intel Core I7 12700F 4.9GHz',
      titulo: 'Mother y Procesador',
      descripcion: 'Kit Mother ASUS H610M-K + Procesador Intel Core I7 12700F 4.9GHz Turbo (Sin Video Integrado)',
      price: 446530,
      stock: 7,
      thumbnail: 'https://cdn.dooca.store/2147/products/h610-i7_640x640+fill_ffffff.jpg?v=1654802512&webp=0'
    },
    {
      id: 16,
      name: 'Mother ASUS H610M-K + Procesador Intel Core I7 12700 4.9GHz',
      titulo: 'Mother y Procesador',
      descripcion: 'Kit Mother ASUS H610M-K + Procesador Intel Core I7 12700 4.9GHz Turbo',
      price: 446530,
      stock: 10,
      thumbnail: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_0_Kit_Mother_ASUS_H610M-K___Procesador_Intel_Core_I7_12700_4.9GHz_Turbo_64fe1c98-grn.jpg'
    },
    { id: 17,
      name: 'Mother Asrock H610M-HVS + Procesador Intel Core I7 12700 4.9GHz',
      titulo: 'Mother y Procesador',
      descripcion: 'Kit Mother Asrock H610M-HVS + Procesador Intel Core I7 12700 4.9GHz Turbo',
      price: 431240,
      stock: 15,
      thumbnail: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_0_Kit_Mother_Asrock_H610M-HVS___Procesador_Intel_Core_I7_12700_4.9GHz_Turbo_ec591f22-grn.jpg'
    },
    { id: 18,
      name: 'Mother Asrock H610M-HVS + Procesador Intel Core I7 12700F 4.9GHz',
      titulo: 'Mother y Procesador',
      descripcion: 'Kit Mother Asrock H610M-HVS + Procesador Intel Core I7 12700F 4.9GHz Turbo (Sin Video Integrado)',
      price: 427950,
      stock: 19,
      thumbnail: 'https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/zydtjygj/file.png'
    }
  ];
  
  export const getProducts = new Promise((resolve) => {
      resolve(products); 
  });

  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };


   