export class Feedback {
  private _id;
  private _name;
  private _feedback;
  private _time;
  private _likes;


  getId() {
    return this._id;
  }

  setId(value) {
    this._id = value;
  }

  getName() {
    return this._name;
  }

  setName(value) {
    this._name = value;
  }

  getFeedback() {
    return this._feedback;
  }

  setFeedback(value) {
    this._feedback = value;
  }

  getTime() {
    return this._time;
  }

  setTime(value) {
    this._time = value;
  }

  getLikes() {
    return this._likes;
  }

  setLikes(value) {
    this._likes = value;
  }
}
