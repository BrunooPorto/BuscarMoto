const motosMaisVendidas = [
       {
        marca: "Yamaha",
        estilo: "Scooter",
        modelo: "NMax 160",
        cilindrada: 155,
        preco: "R$ 18.000 - R$ 22.000",
        imagem: "Imagens/Nmax160.png",
        descricao: "Scooter urbana, ideal para o dia a dia na cidade, com design moderno e economia de combustível."
      },
      {
        marca: "Honda",
        estilo: "Adventure",
        modelo: "XRE 300",
        cilindrada: 291,
        preco: "R$ 25.000 - R$ 30.000",
        imagem: "Imagens/Honda-XRE-300.png",
        descricao: "Moto aventureira de média cilindrada, perfeita para quem busca aventura e conforto em estradas de terra."
      },
      {
        marca: "Suzuki",
        estilo: "Naked",
        modelo: "GSX-S1000",
        cilindrada: 999,
        preco: "R$ 50.000 - R$ 55.000",
        imagem: "Imagens/Gsx-S1000.png",
        descricao: "Naked esportiva de alta performance, com motor potente e design agressivo."
      },
      {
        marca: "Harley-Davidson",
        estilo: "Cruiser",
        modelo: "Iron 883",
        cilindrada: 883,
        preco: "R$ 55.000 - R$ 60.000",
        imagem: "Imagens/iron883.png",
        descricao: "Cruiser clássica, ideal para quem busca um estilo atemporal e um motor V-twin potente."
      },
      {
        marca: "BMW",
        estilo: "Sport",
        modelo: "S 1000 RR",
        cilindrada: 999,
        preco: "R$ 90.000 - R$ 100.000",
        imagem: "Imagens/s1000rr.png",
        descricao: "Superesportiva de alta performance, com tecnologia de ponta e design aerodinâmico."
      },
      {
        marca: "Honda",
        estilo: "Street",
        modelo: "CB 500F",
        cilindrada: 499,
        preco: "R$ 30.000 - R$ 35.000",
        imagem: "Imagens/cb-500-f.png",
        descricao: "Moto street versátil e econômica, ideal para o dia a dia e viagens curtas."
      },
      {
        marca: "Yamaha",
        estilo: "Street",
        modelo: "MT-07",
        cilindrada: 689,
        preco: "R$ 35.000 - R$ 40.000",
        imagem: "Imagens/MT07.png",
        descricao: "Naked street com motor bicilíndrico em linha, oferecendo um bom equilíbrio entre desempenho e economia."
      },
      {
        marca: "Suzuki",
        estilo: "Street",
        modelo: "GSX-S750",
        cilindrada: 749,
        preco: "R$ 45.000 - R$ 50.000",
        imagem: "Imagens/GSX-S750.png",
        descricao: "Street com design esportivo e motor de quatro cilindros em linha, proporcionando uma pilotagem emocionante."
      },
      {
        marca: "Royal Enfield",
        estilo: "Street",
        modelo: "Meteor 350",
        cilindrada: 349,
        preco: "R$ 25.000 - R$ 30.000",
        imagem: "Imagens/metor 350.png",
        descricao: "Cruiser moderna com visual clássico e motor monocilíndrico, ideal para quem busca uma moto com estilo retrô."
    },
    {
        marca: "KTM",
        estilo: "Street",
        modelo: "390 Duke",
        cilindrada: 373,
        preco: "R$ 30.000 - R$ 35.000",
        imagem: "Imagens/390-duke.png",
        descricao: "Naked street com motor monocilíndrico de alta rotação, ideal para quem busca agilidade e esportividade."
      },
      {
        marca: "Honda",
        estilo: "Sport",
        modelo: "CBR 650R",
        cilindrada: 649,
        preco: "R$ 45.000 - R$ 50.000",
        imagem: "Imagens/CBR-650R.png",
        descricao: "Esportiva de média cilindrada com design agressivo e motor quatro cilindros em linha, ideal para uso urbano e viagens."
    },
    {
        marca: "Yamaha",
        estilo: "Sport",
        modelo: "YZF-R3",
        cilindrada: 321,
        preco: "R$ 28.000 - R$ 32.000",
        imagem: "Imagens/YZF-R3.png",
        descricao: "Esportiva de entrada com motor bicilíndrico em linha, leve e ágil, perfeita para iniciantes e quem busca uma moto divertida."
    },
    {
        marca: "Suzuki",
        estilo: "Sport",
        modelo: "GSX-S750",
        cilindrada: 749,
        preco: "R$ 45.000 - R$ 50.000",
        imagem: "Imagens/GSX-S750.png",
        descricao: "Naked street com motor quatro cilindros em linha, design esportivo e agilidade."
    },
    {
        marca: "Suzuki",
        estilo: "Sport",
        modelo: "GSX-S1000GT",
        cilindrada: 999,
        preco: "R$ 60.000 - R$ 65.000",
        imagem: "Imagens/GSX-S1000GT.png",
        descricao: "Sport touring com motor quatro cilindros em linha, conforto e esportividade em uma só moto."
    },
    {
        marca: "KTM",
        estilo: "Sport",
        modelo: "1290 Super Duke R",
        cilindrada: 1301,
        preco: "A partir de R$ 100.000",
        imagem: "Imagens/1290_Super_Duke_R.png",
        descricao: "Super naked de alta performance com motor V2, potência bruta e tecnologia de ponta."
    },
    // Royal Enfield
    {
        marca: "Royal Enfield",
        estilo: "Custom",
        modelo: "Continental GT 650",
        cilindrada: 648,
        preco: "R$ 45.000 - R$ 50.000",
        imagem: "Imagens/Continental_GT650.png",
        descricao: "Moto clássica com estilo cafe racer, motor bicilíndrico paralelo e posição de pilotagem esportiva."
    },
    // Dafra
    {
        marca: "Dafra",
        estilo: "Custom",
        modelo: "Kansas",
        cilindrada: 150,
        preco: "R$ 18.000 - R$ 22.000",
        imagem: "Imagens/kansas-150.png",
        descricao: "Naked street de entrada com motor monocilíndrico, ideal para quem busca uma moto urbana e econômica."
    },
    {
        marca: "Kawasaki",
        estilo: "Sport",
        modelo: "Z900",
        cilindrada: 948,
        preco: "R$ 55.000 - R$ 60.000",
        imagem: "Imagens/z900.png",
        descricao: "Naked street com motor quatro cilindros em linha, torqueoso e com design imponente."
    },
    // Harley-Davidson
    {
        marca: "Harley-Davidson",
        estilo: "Sport",
        modelo: "Sportster S",
        cilindrada: 1250,
        preco: "A partir de R$ 80.000",
        imagem: "Imagens/Sportster-S.png",
        descricao: "Sportster moderna com motor V-twin, posição de pilotagem esportiva e design agressivo."
    },
    {
        marca: "Honda",
        estilo: "Trail",
        modelo: "CRF 1100L Africa Twin",
        cilindrada: 1084,
        preco: "R$ 70.000 - R$ 80.000",
        imagem: "Imagens/Africa_Twin.png",
        descricao: "Trail de grande porte com motor bicilíndrico em linha, ideal para longas viagens e aventuras off-road."
    },
    // Yamaha
    {
        marca: "Yamaha",
        estilo: "Trail",
        modelo: "Ténéré 700",
        cilindrada: 689,
        preco: "R$ 50.000 - R$ 55.000",
        imagem: "Imagens/Tenere_700.png",
        descricao: "Trail média com motor bicilíndrico em paralelo, leve e ágil, perfeita para trilhas e viagens off-road."
    },
    // Suzuki
    {
        marca: "Suzuki",
        estilo: "Trail",
        modelo: "V-Strom 1050",
        cilindrada: 1037,
        preco: "R$ 65.000 - R$ 70.000",
        imagem: "Imagens/V-Strom 1050.png",
        descricao: "Trail de grande porte com motor V2, conforto e capacidade de carga para longas viagens."
    },
    // KTM
    {
        marca: "KTM",
        estilo: "Adventure",
        modelo: "790 Adventure R",
        cilindrada: 799,
        preco: "R$ 60.000 - R$ 65.000",
        imagem: "Imagens/ktm-750.png",
        descricao: "Adventure de média cilindrada com motor bicilíndrico em paralelo, suspensão de longo curso e foco em off-road."
    },
    // BMW
    {
        marca: "BMW",
        estilo: "Adventure",
        modelo: "R 1250 GS Adventure",
        cilindrada: 1254,
        preco: "A partir de R$ 100.000",
        imagem: "Imagens/R1250gs.png",
        descricao: "Adventure de grande porte com motor boxer, eletrônica avançada e conforto para longas viagens."
    },
    // Royal Enfield
    {
        marca: "Royal Enfield",
        estilo: "Adventure",
        modelo: "Himalayan",
        cilindrada: 411,
        preco: "R$ 35.000 - R$ 40.000",
        imagem: "Imagens/hymalayan.png",
        descricao: "Trail de baixa cilindrada com motor monocilíndrico, ideal para iniciantes e aventuras leves."
    },
    // Kawasaki
    {
        marca: "Kawasaki",
        estilo: "Adventure",
        modelo: "Versys 1000",
        cilindrada: 1043,
        preco: "R$ 60.000 - R$ 65.000",
        imagem: "Imagens/versys1000.png",
        descricao: "Trail de grande porte com motor quatro cilindros em linha, conforto e versatilidade."
    },
    {
        marca: "Honda",
        estilo: "Scooter",
        modelo: "PCX 160",
        cilindrada: 157,
        preco: "R$ 18.000 - R$ 22.000",
        imagem: "Imagens/pcx160.png",
        descricao: "Scooter de média cilindrada, ideal para o dia a dia, com boa economia de combustível e design moderno."
    },
    // Suzuki
    {
        marca: "Suzuki",
        estilo: "Scooter",
        modelo: "Burgman 400",
        cilindrada: 400,
        preco: "R$ 35.000 - R$ 40.000",
        imagem: "Imagens/burgman400.png",
        descricao: "Scooter grande e confortável, ideal para longas distâncias, com amplo porta-objetos e para-brisa ajustável."
    },
    // BMW
    {
        marca: "BMW",
        estilo: "Scooter",
        modelo: "C 400 X",
        cilindrada: 350,
        preco: "R$ 40.000 - R$ 45.000",
        imagem: "Imagens/c400x.png",
        descricao: "Scooter premium com design esportivo, motor potente e tecnologia avançada."
    },
    // Dafra
    {
        marca: "Dafra",
        estilo: "Scooter",
        modelo: "Citycom S 300i",
        cilindrada: 278,
        preco: "R$ 25.000 - R$ 30.000",
        imagem: "Imagens/Citycom_S_300i.png",
        descricao: "Scooter de média cilindrada, confortável e espaçoso, ideal para o dia a dia."
    }
];


 
