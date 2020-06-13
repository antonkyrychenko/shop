import React, { FC } from "react";
import useOrderStyles from "./OrderPageStyles";
import { Drawer, TextField, RadioGroup, FormControlLabel, Radio, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useForm, ErrorMessage } from 'react-hook-form';
import { createPaymentIntentAction, createOrderAction, updateOrder } from "../../store/actions/order/order.actions";
import { useParams } from "react-router";
import KeyValuePair from "../../models/common/key-value-pair";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

const OrderPage: FC = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const classes = useOrderStyles();

    function closeDrawer() {
        dispatch(push("/"));
    }

    const onSubmit = (data: any) => {
        console.log(data);
        if (data.paymentMethod === "cash") {
            dispatch(createOrderAction.request({
                customerName: `${data.firstName} ${data.secondName}`,
                productId: productId!,
                paymentMethod: "cash",
                deliveryMethod: data.deliveryMethod,
                phoneNumber: data.phoneNumber,
                city: data.city
            }))
            closeDrawer();
            return;
        }

        dispatch(updateOrder({
            customerName: `${data.firstName} ${data.secondName}`,
            productId: productId!,
            paymentMethod: "card",
            deliveryMethod: data.deliveryMethod,
            phoneNumber: data.phoneNuьber,
            city: data.city
        }))
        dispatch(createPaymentIntentAction.request(productId!));
    }

    const input = (name: string, placeholder: string, register: any) =>
        <>
            <TextField inputRef={register} name={name} placeholder={placeholder} fullWidth variant="outlined" />
            <ErrorMessage errors={errors} name={name} as="p" />
        </>

    const radioButtonGroup = (name: string, values: KeyValuePair<string, string>[]) =>
        <>
            <RadioGroup name={name} row >
                {values.map(pair => <FormControlLabel inputRef={register({ required: "Required" })} value={pair.key} control={<Radio />} label={pair.value} />)}
            </RadioGroup>
            <ErrorMessage errors={errors} name={name} as="p" />
        </>

    const personalInfo =
        <>
            <Subtitle>Personal info</Subtitle>
            <div className={classes.inputSection}>
                {input("firstName", "First name",
                    register({
                        required: "First name is required",
                        minLength: { value: 2, message: "First name cannot be shorter then 2 charters" },
                        maxLength: { value: 30, message: "First name cannot be longer then 30 charters" }
                    }))}
                {input("secondName", "Second name",
                    register({
                        required: "Second name is required",
                        minLength: { value: 2, message: "Second name cannot be shorter then 2 charters" },
                        maxLength: { value: 30, message: "Second name cannot be longer then 30 charters" }
                    }))}
                {input("phoneNumber", "Phone number",
                    register({
                        required: "Phone number is required",
                        minLength: { value: 6, message: "Phone number  cannot be shorter then 2 charters" },
                        maxLength: { value: 13, message: "Phone number  cannot be longer then 13 charters" }
                    }))}
            </div>
        </>

    const deliveryMethod =
        <>
            <Subtitle>Delivery method</Subtitle>
            <div className={classes.inputSection}>
                {input("city", "City",
                    register({
                        required: "City is required",
                        minLength: { value: 2, message: "City cannot be shorter then 2 charters" },
                        maxLength: { value: 30, message: "City cannot be longer then 30 charters" }
                    }))}
                {radioButtonGroup("deliveryMethod", [{ key: "pickup", value: "Pickup" }, { key: "courier", value: "Courier" },])}
            </div>
        </>

    const paynmentMethod =
        <>
            <Subtitle>Payment method</Subtitle>
            <div className={classes.inputSection}>
                {radioButtonGroup("paymentMethod", [{ key: "cash", value: "Cash" }, { key: "card", value: "Card" },])}
            </div>
        </>

    return (
        <Drawer
            className={classes.root}
            BackdropProps={{ invisible: true }}
            classes={{ paper: classes.drawerPaper }}
            anchor="right"
            onClose={() => closeDrawer()}
            open={true}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Title>Order</Title>
                {personalInfo}
                {deliveryMethod}
                {paynmentMethod}
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </form>
        </Drawer>
    );
}

export default OrderPage;