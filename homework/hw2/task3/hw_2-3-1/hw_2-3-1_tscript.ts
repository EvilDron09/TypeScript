// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
type ProductType = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string,
}
interface IProducts {
    id: number,
    products: ProductType[],
    total: number,
    discountedTotal: number,
    totalProducts: number,
    totalQuantity: number,
    userId: number,
}

let divProductsCarts:HTMLElement|null = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((value:{carts:IProducts[]}):void =>{
``
        // console.log(value)

        let {carts} = value
        for (const {id, products, total, discountedTotal, totalProducts, totalQuantity, userId} of carts) {
            let divCart:HTMLDivElement = document.createElement('div');
            let idCarts:HTMLHeadingElement = document.createElement('h2');
            idCarts.innerText = `ID Cart: ${id}`;
            let divProducts:HTMLDivElement = document.createElement('div');

            for (const {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} of products) {
                let divProduct:HTMLDivElement = document.createElement('div')
                let idProduct:HTMLHeadingElement = document.createElement('h4');
                idProduct.innerText = `ID Product: ${id}`;
                let titleProduct:HTMLHeadingElement = document.createElement('h4');
                titleProduct.innerText = `${title}`;
                let priceProduct:HTMLParagraphElement = document.createElement('p');
                priceProduct.innerText = `${price} UAH`;
                let thumbnailImg:HTMLImageElement = document.createElement('img');
                thumbnailImg.src = `${thumbnail}`
                let quantityTotal:HTMLParagraphElement = document.createElement('p');
                quantityTotal.innerText = `Quantity - ${quantity}, Total - ${total}`;
                let discount:HTMLParagraphElement = document.createElement('p');
                discount.innerText = `Discount Percentage: ${discountPercentage} %, Discounted Total - ${discountedTotal}`;
                divProduct.append(idProduct, titleProduct,priceProduct,thumbnailImg,quantityTotal,discount);
                divProducts.append(divProduct);
            }

            let pTotal:HTMLParagraphElement = document.createElement('p');
            pTotal.innerText = `Total - ${total},  Discounted Total - ${discountedTotal},  Total Products - ${totalProducts},  Total Quantity - ${totalQuantity}`;
            let pUserId:HTMLParagraphElement = document.createElement('p');
            pUserId.innerText = `User ID: ${userId}`;
            divCart.append (idCarts,divProducts,pTotal,pUserId);
            if(divProductsCarts){
            divProductsCarts.appendChild(divCart);
            }
        }
    });

