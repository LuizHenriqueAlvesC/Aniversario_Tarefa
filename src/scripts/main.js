AOS.init();

const dataDoEvento = new Date("Dec 16, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((diasAteOEvento % diaEmMs) /horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutoEmMs) / 1000);


    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'ja expirou';
    }

}, 1000);