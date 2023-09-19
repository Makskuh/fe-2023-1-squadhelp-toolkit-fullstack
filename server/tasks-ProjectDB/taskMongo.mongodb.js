db.getCollection('messages').aggregate([
  {
    $match: {
      body: 'паровоз',
    },
  },
  { $count: 'steamengineuse' },
]);
