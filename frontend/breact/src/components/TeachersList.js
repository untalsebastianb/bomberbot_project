import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom'



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


export default function TeachersList({first_name, email, picture, id}) {
  const classes = useStyles();
  
  return (
    <>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={picture} variant='circle'>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={first_name}
                    secondary={email}
                  />
                  <Link to={`/teacher_profile/${id}`}>
                  <IconButton aria-label='see the profile'>
                    <AddCircleIcon color='secondary'/>
                  </IconButton>
                  </Link>
                </ListItem>
            </List>
          </div>
      </>
  );
}