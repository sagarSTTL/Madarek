import { Label } from "../utils/StringUtil";

export default class FavouriteCategories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.category_id 
        this.categoryName = obj?.category_name ? obj?.category_name : Label.NoCategory
        this.categoryIcon =  obj?.category_icon || ""
    }
}