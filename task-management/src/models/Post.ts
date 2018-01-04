export class Post{

  private _id;
  private _title;
  private _overview;
  private _release_date;
  private _vote_count;
  private _poster_path;
  private _popularity;


  get popularity() {
    return this._popularity;
  }

  set popularity(value) {
    this._popularity = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get overview() {
    return this._overview;
  }

  set overview(value) {
    this._overview = value;
  }

  get release_date() {
    return this._release_date;
  }

  set release_date(value) {
    this._release_date = value;
  }

  get vote_count() {
    return this._vote_count;
  }

  set vote_count(value) {
    this._vote_count = value;
  }

  get poster_path() {
    return this._poster_path;
  }

  set poster_path(value) {
    this._poster_path = value;
  }
}
