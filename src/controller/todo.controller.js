import { Crud } from "../crud/crud.js";
import { User } from "../models/User.models.js";
import { Url } from "../utils/utils.js";
class TodoCrud extends Crud {
  getAll = async (req, res) => {
    let url = Url(req);
    url = url?.pathname.split("/");
    const user_id = url[2];
    console.log(user_id);
    try {
      const data = await this.model
        .findOne({
          _id: user_id,
        })
        .select("todos");
      res.send(data.todos);
    } catch (err) {
      res.send(err.message);
    }
  };
  getById = async (req, res) => {
    let url = Url(req);
    url = url?.pathname.split("/");
    const user_id = url[2];
    const todo_id = url[4];
    let selectTodo = null;
    try {
      const user = await this.model.findOne({ _id: user_id });
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      selectTodo = user.todos.find(
        (todo) => todo["_id"].toString() === todo_id
      );
      if (!selectTodo) {
        return res.status(404).send({ error: "Todo not found" });
      }
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
    res.send(selectTodo);
  };
  post = async (req, res) => {
    let url = Url(req);
    url = url?.pathname.split("/");
    const user_id = url[2];
    try {
      const result = await this.model.updateOne(
        { _id: user_id },
        { $push: { todos: req.body } }
      );
      if (result.nModified === 0) {
        return res.status(404).send({ error: "Todo not found" });
      }
      res.send("updated");
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  update = async (req, res) => {
    const updatedTodo = req.body;
    let url = Url(req);
    url = url?.pathname.split("/");
    const user_id = url[2];
    const todo_id = url[4];
    const updates = {};
    Object.keys(updatedTodo).forEach((key) => {
      updates[`todos.$.${key}`] = updatedTodo[key];
    });
    try {
      const result = await this.model.updateOne(
        { _id: user_id, "todos._id": todo_id },
        { $set: updates }
      );
      if (result.nModified === 0) {
        return res.status(404).send({ error: "Todo not found" });
      }
      res.send("updated");
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  deleteAll = async (req, res) => {
    let url = Url(req);
    url = url?.pathname.split("/");
    const user_id = url[2];
    try {
      const result = await this.model.updateOne(
        { _id: user_id },
        { $pull: { todos: {} } }
      );
      if (result.nModified === 0) {
        return res.status(404).send({ error: "Todo not found" });
      }
      res.send("updated");
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
  delete = async (req, res) => {
    let url = Url(req);
    url = url?.pathname.split("/");
    const user_id = url[2];
    const todo_id = url[4];
    try {
      const result = await this.model.updateOne(
        { _id: user_id },
        { $pull: { todos: { _id: todo_id } } }
      );
      if (result.nModified === 0) {
        return res.status(404).send({ error: "Todo not found" });
      }
      res.send("updated");
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };
}
export const crud = new TodoCrud(User);
