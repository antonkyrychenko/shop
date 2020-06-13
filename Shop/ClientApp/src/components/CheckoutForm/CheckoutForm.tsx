import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useForm, ErrorMessage } from "react-hook-form";
import { Drawer, TextField, Button } from "@material-ui/core";
import useCheckoutFormStyles from "./CheckoutFormStyles";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import { StripeCardElementOptions } from '@stripe/stripe-js';
import { RootState } from '../../store/reducers';
import { createOrderAction } from '../../store/actions/order/order.actions';

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const classes = useCheckoutFormStyles();
    const { register, handleSubmit, errors } = useForm();
    const [checkoutError, setCheckoutError] = useState<string>();

    const { clientSecret, order } = useSelector((state: RootState) => state.order);

    const [isProcessing, setProcessingTo] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (!clientSecret || !order) {
            dispatch(push('/'))
        }
    }, [clientSecret, order]);

    const onSubmit = async (data: any) => {
        try {
            const billingDetails = {
                email: data.email,
            };

            setProcessingTo(true);

            const paymentMethodReq = await stripe!.createPaymentMethod({
                type: 'card',
                card: elements!.getElement(CardElement)!,
                billing_details: billingDetails
            });

            if (paymentMethodReq) {
                if (paymentMethodReq.error) {
                    setCheckoutError(paymentMethodReq.error.message);
                    setProcessingTo(false);
                    return;
                }

                const { error } = await stripe!.confirmCardPayment(
                    clientSecret!, {
                    payment_method: paymentMethodReq.paymentMethod!.id
                });
            }

            alert("success");
            dispatch(createOrderAction.request(order!))
            dispatch(push('/'));
        }
        catch (error) {
            console.log(error);
            setProcessingTo(false);
        }
    };



    const email =
        <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Subtitle>Email</Subtitle>
            <TextField
                inputRef={register({
                    required: "Email is required",
                    minLength: { value: 3, message: "Email cannot be shorter than 3 characters" },
                    maxLength: { value: 320, message: "Email cannot be longer than 320 characters" },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })}
                name="email"
                fullWidth
                variant="outlined" />
            <ErrorMessage errors={errors} name="email" as="p" />
        </div>

    const cardInformation = () => {
        const iframeStyles = {
            base: {
                color: "#fff",
                fontSize: "16px",
                iconColor: "white",
                "::placeholder": {
                    color: "white"
                }
            },
            invalid: {
                iconColor: "#FFC7EE",
                color: "#FFC7EE"
            },
            complete: {
                iconColor: "#cbf4c9"
            }
        };

        const cardElementOpts: StripeCardElementOptions = {
            iconStyle: "solid",
            style: iframeStyles,
            hidePostalCode: true
        };

        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Subtitle>Card information</Subtitle>
                <CardElement className={classes.card} options={cardElementOpts} />
            </div>
        );
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Title>Pay with card</Title>
            {email}
            {cardInformation()}
            {checkoutError}
            <Button style={{ marginTop: 15 }} type="submit" disabled={isProcessing || !stripe}
                color="primary" variant="contained">{isProcessing ? "Processing..." : "Pay"}</Button>
        </form>

    );
};

export default CheckoutForm;