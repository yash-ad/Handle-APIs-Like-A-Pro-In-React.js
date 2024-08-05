import express from 'express';


const app = express();


app.get('/api/products', (request, response) => {
    const products = [{
        id: 1,
        name: 'table wooden',
        price:200
    },
    {
        id: 2,
        name: 'table plastic',
        price:250
        },
    {
        id: 3,
        name: 'table fibre',
        price:300
        },
    {
        id: 4,
        name: 'table polyester',
        price:350
        },
    {
        id: 5,
        name: 'table steel',
        price:400
    }]
    

    //http://localhost:3000/api/products?search
    if (request.query.search) {
        //Lets filter out name from products:-
        //Whenever the value is true it will return:-
        const filterProducts = products.filter((product)=> product.name.includes(request.query.search))

        response.send(filterProducts);

        //It should be mandatory to stop the execution with 'return' keyword:-
        return;

    }


        //simulation for delay the response:-
    setTimeout(() => {
      response.send(products)  
    },[3000])
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});


//  http://localhost:3000/api/products
// [
//   {
//     "id": 1,
//     "name": "table wooden",
//     "price": 200
//   },
//   {
//     "id": 2,
//     "name": "table plastic",
//     "price": 250
//   },
//   {
//     "id": 3,
//     "name": "table fibre",
//     "price": 300
//   },
//   {
//     "id": 4,
//     "name": "table polyester",
//     "price": 350
//   },
//   {
//     "id": 5,
//     "name": "table steel",
//     "price": 400
//   }
// ]