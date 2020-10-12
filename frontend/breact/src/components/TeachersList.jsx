import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));


export default function TeachersList({name, type, cover}) {
  const classes = useStyles();
  return (
    <div>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={cover} variant='circle'>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={type}
                  />
                </ListItem>
            </List>
          </div>
      </div>
  );
}