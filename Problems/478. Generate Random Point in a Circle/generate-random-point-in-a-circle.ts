//Solution 1: 141ms 66.68 MB
class Solution {
  radius = 0;
  x_center = 0;
  y_center = 0;

  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
  }

  generatePointInsideCircle(): [number, number] {
    // Generate a random angle
    const theta: number = Math.random() * 2 * Math.PI;

    // Generate a random radius within (0, 1)
    const r: number = Math.sqrt(Math.random());

    // Convert polar coordinates to Cartesian coordinates
    const x: number = r * Math.cos(theta);
    const y: number = r * Math.sin(theta);

    return [x, y];
  }

  randPoint(): number[] {
    const [rand_x, rand_y] = this.generatePointInsideCircle();
    return [
      this.x_center + rand_x * this.radius,
      this.y_center + rand_y * this.radius,
    ];
  }
}
