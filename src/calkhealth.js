export default function calkhealth(obj) {
  // console.log('888 ', obj.health);
  if (obj.health > 50) {
    return 'healthy';
  } else if (obj.health < 15) {
    return 'critical';
  } else {
    return 'wounded';
  }
}