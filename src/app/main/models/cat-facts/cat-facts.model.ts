import { CatFactsUser } from "./cat-facts-user.model";
import { map } from 'lodash';

export class CatFact {

public static fromJSON(json: any): CatFact {
        const catFact = new CatFact();

        catFact._id = json._id;
        catFact.text = json.text;
        // catFact.user = map(json.user, CatFactsUser.fromJSON);

        return catFact;
    }
    _id: string;
    text: string;
    user: CatFactsUser;

    // upvotes
}