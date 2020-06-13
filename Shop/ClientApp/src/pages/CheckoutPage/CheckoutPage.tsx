import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { Drawer } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import useCheckoutPageStyles from './CheckoutPageStyles';

const stripePromise = loadStripe('pk_test_51GsnLpB6xT8mI5TkBr8TOlbT6UIrwT9GeunmnQjj5lwDUPcpu2mgOPyk2nclwUxb4DbzwD1iRvBtHTrfJeA7HEXz00dsJYrch3');

const CheckoutPage = () => {
  const classes = useCheckoutPageStyles();
  const dispatch = useDispatch();

  function closeDrawer() {
    dispatch(push("/"));
  }

  return (<Drawer
    className={classes.root}
    BackdropProps={{ invisible: true }}
    classes={{ paper: classes.drawerPaper }}
    anchor="right"
    onClose={() => closeDrawer()}
    open={true}
  >
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </Drawer>);
}

export default CheckoutPage;