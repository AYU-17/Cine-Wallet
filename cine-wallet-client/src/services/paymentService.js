export const verifyPayment = async (paymentData, token) => {
  const response = await axios.post("/api/payment/verify", paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
