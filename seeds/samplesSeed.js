exports.seed = function (knex, Promise) {
  return knex('samples').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('samples').insert([
          {name: 'Advocate Health'},
          {name: 'Advantage Freedom / Roch Rodriguez'},
        ])
      ]);
    });
};