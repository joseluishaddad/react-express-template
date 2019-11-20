import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import '../assets/fonts.css';

import constants from  "../constants.js"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: '0',
    fontFamily: 'Bree Serif',
    minWidth: '500px',
    marginTop: '0px',
    margin: 'auto',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: '300px',
      margin: 'auto',
    },
  },
  title: {
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    padding: 'auto',
    marginBottom: '30px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  titlemobile: {
    display: 'none',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    padding: 'auto',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
      marginBottom: '20px',
    },
  },
  subtitle: {
    color: 'black',
    textAlign: 'left',
    padding: 'auto',
    fontFamily: 'Montserrat',
    marginTop: '5px',
    marginBottom: '10px',
  },
  subsection: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 'auto',
    fontFamily: 'Montserrat',
    marginTop: '10px',
  },
  subsectionDiv: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '300px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      height: '250px',
    },
  },
  subsectionDiv2: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      height: '250px',
    },
  },
  subsectionDiv3: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '300px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      height: '450px',
    },
  },
  sendSubsection: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      height: '250px',
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '95%',
    padding: '90px',
    paddingTop: '40px',
    marginTop: '50px',
    overflowY: 'scroll',
    [theme.breakpoints.down('sm')]: {
      padding: '30px',
    },
  },
  shortFields: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRadius: '5px',
    '& input':{
      height: '20px',
    },
    '& label.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(0, 0, 0, 0.7)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.7)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 180, 0, 0.7)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 180, 0, 0.7)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  submitBtn: {
    fontSize: '18px',
    fontWeight: 'bold',
    width: '30%',
    minWidth: '150px',
    alignSelf: 'center',
    borderRadius: '22px',
    backgroundColor: 'rgba(253, 0, 77, 1)',
    color: 'white',
    marginTop: '40px',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      width: '33%',
      minWidth: '160px',
    },
  },
  requiredText: {
    color: 'red',
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    padding: '5px',
  },
  disabledBtnDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover':{
      cursor: 'not-allowed',
    }
  }
}));

const BackHomeLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

function checkForm(values){
  if(
    values.names !== '' &&
    values.lastnames!== '' &&
    values.email!== '' &&
    values.phone!== '' &&
    values.organization!== ''){
      return true;
    } else {
      return false;
    }
}

async function handleSubmit(values){
  const {
    names,
    lastnames, 
    email,    
    phone,    
    organization, 
    looking,
  } = values;
  await axios.post('/api/orgForm', {
    names,
    lastnames, 
    email,    
    phone,    
    organization, 
    looking,
  })
};

export default function UserForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    names: '',
    lastnames: '',
    organization: '',
    email: '',
    phone: '',
    looking: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <form className={classes.formContainer} noValidate autoComplete="off">
        <Typography variant="h3" className={classes.title} >
          {constants.forms.organization.title}
        </Typography>
        <Typography variant="h4" className={classes.titlemobile} >
          {constants.forms.organization.title}
        </Typography>
        <Typography variant="h5" className={classes.subtitle} >
          {constants.forms.organization.description}
        </Typography>
        <Typography variant="h6" className={classes.subsection} >
          Datos Representante:
        </Typography>
        <div className={classes.subsectionDiv}>
          <TextField
            required
            id="names"
            label="Nombres"
            className={classes.textField}
            value={values.names}
            onChange={handleChange('names')}
            margin="dense"
            variant="outlined"
          />
          <TextField
            required
            id="lastnames"
            label="Apellidos"
            className={classes.textField}
            value={values.lastnames}
            onChange={handleChange('lastnames')}
            margin="dense"
            variant="outlined"
          />
          <TextField
            required
            id="organization"
            label="Nombre de la Organización"
            className={classes.textField}
            value={values.organization}
            onChange={handleChange('organization')}
            margin="dense"
            variant="outlined"
          />
        </div>
        <Typography variant="h6" className={classes.subsection} >
          Datos de Contacto:
        </Typography>
        <div className={classes.subsectionDiv2}>
          <div className={classes.shortFields}>
            <TextField
              required
              id="email"
              label="Email"
              className={classes.textField}
              onChange={handleChange('email')}
              type="email"
              name="email"
              value={values.email}
              autoComplete="email"
              margin="dense"
              variant="outlined"
            />
            <TextField
              required
              id="phone"
              label="Teléfono"
              className={classes.textField}
              type="tel"
              value={values.phone}
              onChange={handleChange('phone')}
              autoComplete="phone"
              margin="dense"
              variant="outlined"
            />
          </div>
        </div>
        <Typography variant="h6" className={classes.subsection} >
          Lo que estoy buscando:
        </Typography>
        <div className={classes.subsectionDiv3}>
        <TextField
          id="looking"
          label="Qué estoy buscando "
          className={classes.textField}
          onChange={handleChange('looking')}
          style={{ margin: 8 }}
          placeholder="Ingrese aquí lo que está buscando"
          margin="normal"
          variant="outlined"
          value={values.looking}
          multiline
          rowsMax="5"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className={classes.sendSubsection}>
          {checkForm(values) 
            ? <Button 
                onClick={() => {handleSubmit(values)}} 
                className={classes.submitBtn}
                component={BackHomeLink} 
                to="/"
                type="submit"
              >Enviar</Button>
            : 
              <div className={classes.disabledBtnDiv}>
                <Typography variant="body2" className={classes.requiredText} >
                  Los campos con asterisco son requeridos para enviar el formulario. *
                </Typography>
                <Button 
                  disabled
                  onClick={() => {handleSubmit(values)}} 
                  className={classes.submitBtn}
                  component={BackHomeLink} 
                  to="/"
                  type="submit"
                >Enviar</Button>
              </div>
          }
        </div>
      </form>
    </div>
    
  );
}