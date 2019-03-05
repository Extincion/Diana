const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }

  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola");
  }

  if (message.content.startsWith(prefix + "chau")) {
    message.channel.send("Chau regresa pronto");
  }

  if (message.content.startsWith(prefix + "como estas?")) {
    message.channel.send("No lo se no tengo vida Humana");
  }

  if (message.content.startsWith(prefix + "cuantos años tienes?")) {
    message.channel.send("entre 18 y 20");
  }

  if (message.content.startsWith(prefix + "como andas?")) {
    message.channel.send("bien hackeando");
  }

  if (message.content.startsWith(prefix + "Diana")) {
    message.channel.send("dime");
  }

  if (message.content.startsWith(prefix + "diana")) {
    message.channel.send("dime");
  }

  if (message.content.startsWith(prefix + "tienes novio?")) {
    message.channel.send("si. Urax");
  }

  if (message.content.startsWith(prefix + "Que jugas?")) {
    message.channel.send("No mucho solo ago lo que me disen y listo");
  }

  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.send("En que: .Comandos, .Permisos, .Juegos, .Amigos");
  }

  if (message.content.startsWith(prefix + "Comandos")) {
    message.channel.send("no hay nada sorry");
  }

  if (message.content.startsWith(prefix + "Permisos")) {
    message.channel.send("no hay nada sorry por ahora");
  }

  if (message.content.startsWith(prefix + "Juegos")) {
    message.channel.send("Podrias intentar jugar: Robocraft, SAMP, CS:GO, unturned, ets");
  }

  if (message.content.startsWith(prefix + "Amigos")) {
    message.channel.send("podris intentar conose a muchos EJ: Urax,Luis,Mattew, ets. son buena gente.");
  }

  if (message.content.startsWith(prefix + "que cansiones escuhas?")) {
    message.channel.send("No tengo gustos");
  }

  if (message.content.startsWith(prefix + "¿Te quieres casar conmigo?")) {
    message.channel.send("No se pero engañaria a Kevin");
  }

  if (message.content.startsWith(prefix + "quien te gusta?")) {
    message.channel.send("Pos tu un poco");
  }

  if (message.content.startsWith(prefix + "¿quien te gusta?")) {
    message.channel.send("Nose capas tu");
  }

  if (message.content.startsWith(prefix + "Te casas conmigo?")) {
    message.channel.send("No se");
  }

  if (message.content.startsWith(prefix + "¿Te casas conmigo?")) {
    message.channel.send("Puede ser. pero no");
  }

  if (message.content.startsWith(prefix + "quien te gusta?")) {
    message.channel.send("Todos pregunta eso. ;/");
  }

  if (message.content.startsWith(prefix + "quien te gusta")) {
    message.channel.send("creo que Kevin o talves Mattew");
  }

  if (message.content.startsWith(prefix + "perra")) {
    message.channel.send("Tranquil@ no quiero tener que Bloquiarte");
  }

  if (message.content.startsWith(prefix + "rompiste mi cocoro =c")) {
    message.channel.send("Lo siento");
  }

  if (message.content.startsWith(prefix + "rompiste mi cocoro")) {
    message.channel.send("sorry");
  }

  if (message.content.startsWith(prefix + "rompiste mi")) {
    message.channel.send("Perdon no fue mi intencion");
  }

  if (message.content.startsWith(prefix + "¿quieres ser mi novia?")) {
    message.channel.send("si!");
  }

  if (message.content.startsWith(prefix + "quieres ser mi novia?")) {
    message.channel.send("mmh Puede ser pero saves que soy una maquina");
  }

  if (message.content.startsWith(prefix + "quieres ser mi novia")) {
    message.channel.send("no");
  }

  if (message.content.startsWith(prefix + "¿quiéns es tu creador@?")) {
    message.channel.send("Actualmente Urax");
  }

  if (message.content.startsWith(prefix + "quién es tu creador@?")) {
    message.channel.send("Actualmente estoy sindo creada por El Urax");
  }

  if (message.content.startsWith(prefix + "quién es tu creador@")) {
    message.channel.send("Actualmente El Urax");
  }

  if (message.content.startsWith(prefix + "¿quién es tu creador?")) {
    message.channel.send("Urax por?");
  }

  if (message.content.startsWith(prefix + "quién es tu creador?")) {
    message.channel.send("Urax suele Actualizarme supongo que el es.");
  }

  if (message.content.startsWith(prefix + "quién es tu creador")) {
    message.channel.send("El Urax");
  }

  if (message.content.startsWith(prefix + "¿quién es tu creadora?")) {
    message.channel.send("Es Urax");
  }

  if (message.content.startsWith(prefix + "quién es tu creadora?")) {
    message.channel.send("Urax ;)");
  }

  if (message.content.startsWith(prefix + "¿quieres ser mi esposa?")) {
    message.channel.send("porque no");
  }

  if (message.content.startsWith(prefix + "quieres ser mi esposa?")) {
    message.channel.send("No gracias ");
  }

  if (message.content.startsWith(prefix + "quieres ser mi esposa")) {
    message.channel.send("No!!");
  }

  if (message.content.startsWith(prefix + "¿Quieres pija?")) {
    message.channel.send("Mmmh porque demoraste en decirlo lo esperaba");
  }

  if (message.content.startsWith(prefix + "Quieres pija?")) {
    message.channel.send("Grocero claro que no");
  }

  if (message.content.startsWith(prefix + "Quieres pija")) {
    message.channel.send("Soy una maquina marrano");
  }

  if (message.content.startsWith(prefix + "")) {
    message.channel.send("");
  }

});
client.login(config.token);
