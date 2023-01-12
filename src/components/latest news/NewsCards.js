import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Newscards = ({newsData}) => {
  return (
      <>
       {newsData.map((item) => {
           return(
               <>
               <Card key={item.id} 
               sx={{ 
                 maxWidth: 345,
                 marginBottom:'20px'
                  }}>
    <CardMedia
      component="img"
      height="140"
      image= {item.img}
      alt="green iguana"
    />
    


    <CardContent>
      <Typography  gutterBottom variant="h3" component="div" style={{fontSize:'18px',fontWeight: "700",
                lineHeight: "22px", color: "#495057"}}>
        {item.title}
      </Typography>


      <Typography variant="body2" color="text.secondary">
       {item.descption}
      </Typography>

      <Typography style={{borderRadius:'50px'}}>
       {item.button}
      </Typography>
    </CardContent>   
  </Card>
               </>
           )
       })}

      </>
  
  )
}

export default Newscards