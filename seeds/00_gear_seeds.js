exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        { id: 1, gear_type: 'tent', category: 'camp', owner: '', available: true, cost_per_day: 5, manufacturer: 'Coleman', renter: '', image_url: 'https://www.publicdomainpictures.net/pictures/190000/velka/camping-and-tent.jpg' },
        { id: 2, gear_type: 'harness', category: 'climb', owner: '', available: true, cost_per_day: 5, manufacturer: 'Black Diamond', renter: '', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Baudrier.jpg/1030px-Baudrier.jpg' },
        { id: 3, gear_type: 'bicycle', category: 'cycle', owner: '', available: true, cost_per_day: 25, manufacturer: 'Giant', renter: '', image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Giant_Road_Bike.jpg' },
        { id: 4, gear_type: 'kayak', category: 'paddle', owner: '', available: true, cost_per_day: 30, manufacturer: 'REI', renter: '', image_url: 'https://pixnio.com/free-images/2017/10/05/2017-10-05-10-16-54-1100x733.jpg' },
        { id: 5, gear_type: 'snowboard', category: 'snow', owner: '', available: true, cost_per_day: 5, manufacturer: 'Burton', renter: '', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Snowboard%2C_Silvia_Mitterm%C3%BCller.jpg/1600px-Snowboard%2C_Silvia_Mitterm%C3%BCller.jpg' },
        { id: 6, gear_type: 'backpack', category: 'hike', owner: '', available: true, cost_per_day: 2, manufacturer: 'Patagonia', renter: '', image_url: 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg' }
      ])
    })
  .then(function () {
    // Moves id column (PK) auto-incrementer to correct value after inserts
    return knex.raw("SELECT setval('gear_id_seq', (SELECT MAX(id) FROM gear))")
  })
}
