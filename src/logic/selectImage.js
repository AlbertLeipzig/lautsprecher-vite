const placeholderImage =
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60';

const klassikImages = [
  'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3NpYyUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1586350493539-59551896c85e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1587834423414-9545adae44ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1610254449353-5698372fa83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
];

const modernImages = [
  'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1620577610365-86c411bad78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvY2slMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1517260286907-f7d84f1f9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvY2slMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1481886756534-97af88ccb438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
];

const folkImages = [
  'https://images.unsplash.com/photo-1483069125343-4ef290c07840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9sayUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1501134324833-52e1bb8b42cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9sayUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1563485572084-eb7405aa3b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9sayUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1479707609144-2213d11caa08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvbGslMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1508695666381-69deeaa78ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvbGslMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
];

const jazzImages = [
  'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amF6eiUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1552935088-b7474c4af004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amF6eiUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amF6eiUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphenolMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1503853585905-d53f628e46ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGphenolMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
];

const tecnoImages = [
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjbm8lMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1511180427842-5878e7a53e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjbm8lMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1590920212394-a92a59d15f7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjbm8lMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1555086156-e6c7353d283f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjbm8lMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1571751239008-50cad6cb9265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY25vJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
];

const metalImages = [
  'https://images.unsplash.com/photo-1506091403742-e3aa39518db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YWwlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1598214015728-bc73871186d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1ldGFsJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1ldGFsJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1629558977191-441c3dfdbc02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1ldGFsJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
  'https://images.unsplash.com/photo-1629276301687-be2af9fd6ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWV0YWwlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
];

const imageIndex = Math.floor(Math.random() * 5);

export const selectCategory = (tags) => {
  if (tags === []) {
    return placeholderImage;
  } else if (tags.includes('metal')) {
    return metalImages[imageIndex];
  } else if (tags.includes('jazz')) {
    return jazzImages[imageIndex];
  } else if (tags.includes('folk')) {
    return folkImages[imageIndex];
  } else if (tags.includes('klassik')) {
    return klassikImages[imageIndex];
  } else if (tags.includes('modern')) {
    return modernImages[imageIndex];
  } else if (tags.includes('tecno')) {
    return tecnoImages[imageIndex];
  } else {
    return placeholderImage;
  }
};

/* const selectImage = (tags) => {}; */
