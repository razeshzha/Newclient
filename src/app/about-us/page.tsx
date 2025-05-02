'use client'
import React from 'react'

const Page = () => {
  return (
    <div className='px-10 py-8'>
      <h1 className='text-3xl font-semibold mb-4 text-pink-500'>About Us</h1>
      
      <section className="my-6">
        <h2 className="text-2xl font-medium text--">Our Story</h2>
        <p>We started in 2015 with a vision to bring high-quality and affordable products to the online marketplace...</p>
      </section>
      
      <section className="my-6">
        <h2 className="text-2xl font-medium">Our Mission</h2>
        <p>Our mission is to provide customers with authentic products at the best prices, ensuring top-notch customer service.</p>
      </section>
      
      <section className="my-6">
        <h2 className="text-2xl font-medium">What We Offer</h2>
        <p>We provide a wide range of products, including electronics, lifestyle goods, and organic beauty products...</p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-medium">Our Team</h2>
        <p>Our team is passionate about providing excellent customer service and high-quality products. Together, we strive for excellence!</p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-medium">Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us:</p>
        <p>Email: support@ecommerce.com</p>
        <p>Phone: +977 123456789</p>
      </section>
    </div>
  )
}

export default Page;
