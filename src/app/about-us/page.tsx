/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'

const Page = () => {
  return (
    <div className='px-6 py-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold mb-8 text-pink-500 text-center'>About Us</h1>

      <section className="my-8">
        <h2 className="text-2xl font-medium text-gray-800">Our Story</h2>
        <p className="mt-2 text-pink-700">
          We started in 2015 with a vision to bring high-quality and affordable products to the online marketplace. 
          Our journey began with the aim to make shopping easier and more accessible for everyone.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-medium text-blue-800">Our Mission</h2>
        <p className="mt-2 text-gray-600">
          Our mission is to provide customers with authentic products at the best prices, ensuring top-notch customer service. 
          We are committed to offering a seamless shopping experience with a focus on quality and trust.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-medium text-gray-800">What We Offer</h2>
        <p className="mt-2 text-gray-600">
          We provide a wide range of products, including electronics, lifestyle goods, and organic beauty products. 
          Our offerings are carefully selected to meet the needs of our diverse customers.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-medium text-gray-800">Our Team</h2>
        <p className="mt-2 text-gray-600">
          Our team is passionate about providing excellent customer service and high-quality products. 
          Together, we strive for excellence and believe in constant improvement to meet the needs of our valued customers.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-medium text-gray-800">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          If you have any questions or concerns, feel free to reach out to us. We'd love to hear from you!
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Email:</strong> <a href="mailto:support@ecommerce.com" className="text-pink-500 hover:underline">razeshjha0@gmail.com</a>
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Phone:</strong> 9807669785
        </p>
      </section>
    </div>
  )
}

export default Page;
