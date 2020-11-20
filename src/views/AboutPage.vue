<template>
  <div class='p-20'>
    <h3 class="text-6xl text-gray-700 text-center font-thin tracking-wider pb-20">
      Our Subscription Service
    </h3>
    <div class="grid grid-cols-2 pb-20">
      <div>
        <img class="px-2" src="@/assets/bread-about.jpg" alt="Bread!" />
      </div>
      <div class="text-gray-700">
        <h3 class="text-center text-green-700 text-4xl tracking-wider font-thin">How It Works</h3>
        <p class="px-20 py-10">
          It's pretty simple. You sign up for a monthly reccurring shipment, 
          and we'll send you a loaf of high-quality,
          sourdough bread baked with fresh milled flour every week. 
          We plan our baking schedules to have fresh bread on your doorstep
          by Thursday every week.
        </p>
        
      </div>
    </div>
    <div class="grid grid-cols-2 pb-20">
      <div class="text-gray-700">
        <router-link
            to="/register" 
            v-if="!signedIn"
          >
            <h3 
              class="text-center text-green-700 text-4xl tracking-wider font-thin hover:text-green-500"
            >
              Sign Me Up
            </h3>
          </router-link>
        <p class="px-20 py-10">
          Great! We'll need a shipping address, form of payment, and a valid email address.
          Once we have that, you can sit back on the couch and look for your bread to arrive
          the Thursday after you 
          <router-link
            class="hover:text-green-500" 
            to="/register" 
            v-if="!signedIn"
          >
            signed up.
          </router-link>
        </p>
        <p class="px-20">
          Due to high demand, we are only doing one loaf of bread a week per subscription. 
          We are a hard-working, dedicated team. But we are small. As we scale up, 
          we hope to increase the desired amount for our subscription members.
        </p>
      </div>
      <div>
        <img class="px-2 h-80 w-full object-cover" src="@/assets/bakery-about.jpg" alt="Bread!" />
      </div>
    </div>
    <h3 class="text-6xl text-gray-700 text-center font-thin tracking-wider pb-10">
      Come Visit Us
    </h3>
    <div class="grid grid-cols-2 pb-10">
      <div>
        <img class="px-2 h-80 w-full object-cover" src="@/assets/croissant-about.jpg" alt="Bread!" />
      </div>
      <div class="text-gray-700">
        <h3 class="text-center text-4xl tracking-wider text-green-700 font-thin">Our Shop</h3>
        <p class="px-20 py-10">
          Have a craving for croissants, sourdough donuts, and danishes. Feel free to order from our online shop
          or come visit us in person and order at our bakery counter on East Colfax. We're right across from our good
          friends at Lula Rose General Store. Our bakery counter is open every weekend from 8am until we sell out!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutPage'
}
</script>