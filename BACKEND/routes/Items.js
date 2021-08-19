const router = require("express").Router();
let Items = require("../models/ItemModel")



router.route("/add").post((req, res)=>{
    const itemcode = req.body.itemcode;
    const name = req.body.name;
    const price = Number(req.body.price);

    const newItems = new Items({
        itemcode,
        name,
        price

    })

    newItems.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/").get((req,res)=>{

    Items.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res)=> {
    let itemid = req.params.id;
    const {itemcode, name, price} = req.body;

    const updateItem = {
        itemcode,
        name,
        price
    }

    const update = await Items.findByIdAndUpdate(itemid, updateItem).then(()=>{
        res.status(200).send({status: "Item Updated ", item:update})
    }).catch((err)=> {
        console.log(err);
    })
   
})

router.route("/delete/:id").delete(async (req,res) => {
    let itemid = req.params.id;

    await Items.findByIdAndDelete(itemid).then(() => {
        res.status(200).send({status: "Item Deleted " })
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error Deleting Items"})
    })
})

module.exports = router;