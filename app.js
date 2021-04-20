const express=require('express')
const app=express();
const morgan=require('morgan')
let info=[  {subTitle:'Graduate con nosotros',
            logo:'fa-user-graduate',
            p:'Vive una de las mejores expreienzias de tu vida aquí!'},
            {
            subTitle:'Matriculate Gratis',
            logo:'fa-school',
            p:'El IACI es una institucion publica por lo cual su ingreso es gratis'
            },
            {
            subTitle:'ICFES',
            logo:'fa-subscript',
            p:'Contamos con un nivel x en resultado icfes'
            }
        ]
let paletas=[{
    titlePaletas:'Somos Arte',
    logo:'fa-palette'
},{
    titlePaletas:'Somos Deporte',
    logo:'fa-volleyball-ball' 
},{
    titlePaletas:'Somos Ambiente',
    logo:'fa-tree'  
}
]
//variables
app.set('port',process.env.PORT || 4000)

//middlewares
app.use(morgan('dev'))

//motor de plantillas
app.set('view engine','ejs')
app.set('views',__dirname+'/view')


//routers
app.get('/',(req,res)=>{
    res.render('home',{info,paletas})
})
app.use(express.static(__dirname+'/public'))


//starting
app.listen(app.get('port'),()=>{
    console.log('server en ',app.get('port'))
})