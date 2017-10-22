import db from '../db';

export function create(req) {
  return db('users').insert(req.body)
    .then((id) => db('users').select('*').where('id', id).first().then());
}

export function update(req) {
  return db('users').update(req.body).where('id', req.params.id);
}
