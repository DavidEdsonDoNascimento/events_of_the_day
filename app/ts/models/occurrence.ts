class Occurrence {
    
    private _id: string
    private _createdAt: string
    
    constructor(private _summary: string, private _obs: string, private _category_id: string, private _category_name: string){}

    get id(){ return this._id; }
    get summary() { return this._summary; }
    get obs() { return this._obs; }
    get category_id() { return this._category_id; }
    get category_name() { return this._category_name; }
    get createdAt() { return this._createdAt; }
}