import { HotDog } from "./PatternDesign/Builder/builderSimple/HotDog";
import { OrderFacade } from "./PatternDesign/Facade/OrderFacade";
import { RoadLogistics } from "./PatternDesign/Factory/01-example/RoadLogistics";
import { SeaLogistics } from "./PatternDesign/Factory/01-example/SeaLogistics";
import { Singleton } from "./PatternDesign/Singleton/Singleton";
import {
  DirectorHotDog,
  HotDog as HotDog2,
  ConcreteHotDog,
} from "./PatternDesign/Builder/builderRestrictivo/HotDog";

import {
  AdapterTemperatura,
  ClimaInterface,
  TemperaturaFahrenheit,
} from "./PatternDesign/Adapter/Example";

import {
  ConcreteStrategyAuto,
  ConcreteStrategyBicicleta,
  Rutas,
} from "./PatternDesign/Strategy/RutasExample";

function factoryPattern() {
  // Producto 1
  const logisticaMaritima = new SeaLogistics();
  logisticaMaritima.deliver();

  // Producto 2
  const logisticaTierra = new RoadLogistics();
  //logisticaTierra.crearTransporte().deliver();

  logisticaTierra.deliver();
}

function facadePattern() {
  let listaItems = [1, 2, 3, 4, 5, 6, 7, 8];
  let order = new OrderFacade(listaItems, "ground");
  console.log(order.getOrder().getShippingCost());
}

function singletonPattern() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Funciona.. Las dos instancias son la misma");
  } else {
    console.log("No funciona...");
  }
}

function adapterPattern() {
  // Tiene la temperatura en Fahrenheit
  const temperatura = new TemperaturaFahrenheit();
  const adapter = new ClimaInterface();
  const clima = new AdapterTemperatura(adapter);

  clima.getTemperatura(temperatura.getTemperatura());
}

function builderPattern() {
  const myLunch = new HotDog("gluten free").addKetchup().addMustard();
  console.log(myLunch);

  const director = new DirectorHotDog();
  const builder = new ConcreteHotDog();

  director.setBuilder(builder);
  director.buildMinimalViableProduct();
  builder.getProduct().getProductComplete();

  const hotDog2 = new ConcreteHotDog();
  hotDog2
    .addBread()
    .addKetchup()
    .addKraut()
    .addMustard()
    .getProduct()
    .getProductComplete();
}

function strategyPattern() {
  const auto = new ConcreteStrategyAuto();
  const ruta = new Rutas(auto);
  // Estrategia auto
  ruta.obtenerTiempo();

  // estrategia bicileta
  const bicicleta = new ConcreteStrategyBicicleta();
  ruta.setStrategy(bicicleta);
  ruta.obtenerTiempo();
}

function main() {
  console.log(" Patrones de diseño! ");
  // adapterPattern();
  factoryPattern();
  // facadePattern();
  // singletonPattern();
  // builderPattern();
  // strategyPattern();
}

// call main
main();
