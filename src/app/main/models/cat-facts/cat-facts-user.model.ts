export class CatFactsUser {

    public static fromJSON(json: any): CatFactsUser {
        const catFactUser = new CatFactsUser();

        catFactUser._id = json._id;
        catFactUser.firstName = json.name.first;
        catFactUser.lastName = json.name.last;
        
        return catFactUser;
    }

    _id: string;
    firstName: string;
    lastName: string;
}