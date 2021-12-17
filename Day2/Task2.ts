class Product{
   private productId:number=0;
   private productName:string="";
   private productUnitPrice:number=0;
   private productQuantity:number=0;

   constructor(productId:number=0){
      this.productId=productId;
   }

   public get ProductId():number{
       return this.ProductId;
   }

   public set ProductName(productName:string){
      this.productName=productName;
   }
   
   public get ProductName(){
     return this.productName;
   }

   public set ProductUnitPrice(productUnitPrice:number){
    this.productUnitPrice=productUnitPrice;
   }
 
   public get ProductUnitPrice(){
    return this.productUnitPrice;
   }
   
   public set ProductQuantity(productQuantity:number){
    this.productQuantity=productQuantity;
   }
 
   public get ProductQuantity(){
    return this.productQuantity;
   }

   getproductDeatils():void{
       console.log("Product Info:: Id:"+this.productId+", Name:"+this.productName+", Unit Price:"+this.productUnitPrice+", Quantity:"+this.productQuantity);
       console.log("-----------------------------------------------")
   }
}


let objProduct:Product=new Product(1);

objProduct.ProductName="Biscuits";
objProduct.ProductUnitPrice=10;
objProduct.ProductQuantity=2;

objProduct.getproductDeatils();