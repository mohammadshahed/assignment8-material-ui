import React,  { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Comments = () => {
    const [comment, setComment] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
    }, []);


    const classes = useStyles();
    return (
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {comment.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {comment.body}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
            </Card>
    );
};

export default Comments;