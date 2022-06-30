class VolvoFeatures {
    get carsafetyLink(){ return $("//a[contains(@href,'car-safety')]")}
    get carFeatures(){
        return $$("//*[@data-autoid='iconCallouts:iconTextItem']");
    }
    get decadesInnovationHeader(){
         return $("(//h2)[3]");
    }
    get learnmoreLink(){return $("//a[contains(@href,'safety-heritage')]")}
    get carmodel1(){ return $("(//*[@data-autoid='productListCarouselItem:modelName'])[1]")}
    
}
module.exports = new VolvoFeatures()

