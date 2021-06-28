import Vec2 from './Vec2';

const vectorAdd = (vec1: Vec2, vec2: Vec2, target: Vec2 | null = null) => {
  if(!target) target = Vec2.create();
  target.x = vec1.x + vec2.x;
  target.y = vec1.y + vec1.y;
  return target;
}

const vectorSubstract = (vec1: Vec2, vec2: Vec2, target: Vec2 | null) => {
  if(!target) target = Vec2.create();
  target.x = vec1.x - vec2.x;
  target.y = vec1.y - vec2.y;
  return target;
}

const dotProduct = (vec1: Vec2, scalar: number, target: Vec2 | null) => {
  if(!target) target = Vec2.create();
  target.x = vec1.x * scalar;
  target.y = vec1.y * scalar;
  return target;
}

const crossProduct = (vec1: Vec2, vec2: Vec2): number => {
  return vec1.x * vec2.x + vec1.y + vec1.y;
}

const Math2D = {
  vectorAdd,
  vectorSubstract,
  dotProduct,
  crossProduct,
}
export default Math2D;
