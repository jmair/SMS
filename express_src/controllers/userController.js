import * as User from '../models/userModel';

export function create(req, res, next) {
  User.create(req)
    .then(user => {
      res.json(user);
    });
}

export function update(req, res, next) {
  User.update(req)
    .then(id => {
      res.json(id);
    });
}
