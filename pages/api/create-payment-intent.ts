import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const stripeToken = process.env.STRIPE_SECRET_KEY;

  if (!stripeToken || stripeToken.includes('BURAYA_GIZLI')) {
    return res.status(500).json({ message: 'STRIPE_SECRET_KEY eksik veya yapilandirilmamis.' });
  }

  try {
    const stripe = new Stripe(stripeToken);

    const { amount } = req.body;
    const parsedAmount = typeof amount === 'number' ? amount : parseInt(amount, 10);

    if (!parsedAmount || isNaN(parsedAmount) || parsedAmount < 1) {
      return res.status(400).json({ message: 'Montant invalide.' });
    }

    // Stripe processes payment in the lowest denominator (5 EUR -> 500 cents)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(parsedAmount * 100),
      currency: 'eur',
      description: 'Soutien au créateur Bahoz',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error('Stripe Intent Generation Error:', error);
    return res.status(500).json({ message: error.message || 'Payment intent creation failed.' });
  }
}
