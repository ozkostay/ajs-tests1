import calkhealth from '../calkhealth';

test('testhomework', () => {
  const health = { name: 'Маг', health: 90 };
  // console.log('hhh: ', calkhealth(health));
  expect(calkhealth(health)).toBe('healthy');
});

test('testhomework2', () => {
  const health = { name: 'Маг', health: 10 };
  // console.log('hhh: ', calkhealth(health));
  expect(calkhealth(health)).toBe('critical');
});

test('testhomework3', () => {
  const health = { name: 'Маг', health: 45 };
  // console.log('hhh: ', calkhealth(health));
  expect(calkhealth(health)).toBe('wounded');
});
