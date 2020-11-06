const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var form, player, game;

var gameState;

var database;

var spikes,coin,plank;



function preload() {
    spikes = loadImage("sprites/Spikes.PNG");
    coin = loadImage("sprites/Coin.jpg");




}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();



}

function draw(){
   
}