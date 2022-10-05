export default function calkhealth(obj) {
  // console.log('888 ', obj.health);
  let health;
  if (obj.health > 50) {
    health = 'healthy';
  } else if (obj.health < 15) {
    health = 'critical';
  } else {
    health = 'wounded';
  }
  return health;
}
