<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andrés Prado Morgaz</title>
    <style>
        body {
            padding: 0;
            margin: 0;
            background-color: lightseagreen;
            overflow: hidden;
        }

        .linea {
            display: inline;
            font-size: 100px;
            font-weight: bolder;
            animation: textito 5s linear infinite;
            color: white;
        }

        .linea2 {
            display: inline;
            font-size: 100px;
            font-weight: bolder;
            animation: textito 3s linear infinite;
            color: white;
        }

        .linea3 {
            display: inline;
            font-size: 100px;
            font-weight: bolder;
            animation: textito 7s linear infinite;
            color: white;
        }

        .animado {
            display: flex;
            gap: 20px;
            overflow: hidden;
            margin-top: 100px;
            white-space: nowrap;
        }

        @keyframes textito {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(calc(-100% - 20px));
            }
        }
    </style>
</head>

<body>
    <div class="animado">
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
        <div class="linea">ANDRÉS PRADO MORGAZ</div>
    </div>
    <div class="animado">
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
        <div class="linea2">ANDRÉS PRADO MORGAZ</div>
    </div>
    <div class="animado">
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
        <div class="linea3">ANDRÉS PRADO MORGAZ</div>
    </div>
</body>

</html>
