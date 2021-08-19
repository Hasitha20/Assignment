const router = require("express").Router();
let Stocks = require("../models/StockModel")



router.route("/add").post((req, res)=>{
    const itemcode = req.body.itemcode;
    const name = req.body.name;
    const qty = Number(req.body.qty);

    const newStock = new Stocks({

        itemcode,
        name,
        qty

    })

    newStock.save().then(()=>{
        res.json("Stocks Added")
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/").get((req,res)=>{

    Stocks.find().then((Stocks)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res)=> {
    let stockid = req.params.id;
    const {itemcode, name, price} = req.body;

    const updateItem = {
        itemcode,
        name,
        qty
    }

    const update = await Stocks.findByIdAndUpdate(stockid, updateItem).then(()=>{
        res.status(200).send({status: "Stock Updated "})
    }).catch((err)=> {
        console.log(err);
    })
   
})

router.route("/delete/:id").delete(async (req,res) => {
    let itemid = req.params.id;

    await Stocks.findByIdAndDelete(itemid).then(() => {
        res.status(200).send({status: "stock Deleted " })
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error Deleting stocks"})
    })
})

module.exports = router;