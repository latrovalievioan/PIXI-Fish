import { Container, Graphics, Sprite, Texture } from "pixi.js";
import gsap from "gsap";
export default class Fish extends Sprite {
  constructor() {
    super(Texture.from("smallFish"));
    this.name = "fish";
    this.interactive = true;
    this.buttonMode = true;
    this.anchor.set(0.5, 0.5);
    this._listen();
  }
  /**
   * Changes the texture and the scale of @this
   */
  expand() {
    this.texture = Texture.from("bigFish");
    gsap.to(this.scale, { x: 1.5, y: 1.5, duration: 1.2, ease: "elastic" });
  }
  /**
   * Changes the texture and the scale of @this
   */
  contract() {
    this.texture = Texture.from("smallFish");
    gsap.to(this.scale, { x: 1, y: 1, duration: 1.2, ease: "elastic" });
  }
  /**
   * Listens for click event on @this
   *
   */
  _listen() {
    this.on("click", () => {
      this.expand();
      setTimeout(() => this.contract(), 5000);
    });
  }
}
