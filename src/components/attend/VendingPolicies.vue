<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #title>Vending Policies</template>
    <template #content>
      <h2>Prices</h2>

      <h3>Merch Perch</h3>
      <ul>
        <li>
          Full table – $150 for the weekend – Not including registration, up to 1 assistant,
          <strong>
            including free catered breakfast for you and your assistant (if you have one) every morning (Friday,
            Saturday, Sunday).
          </strong>
        </li>
        <li>
          Half table – $80 for the weekend – Not including registration,
          <strong> including free catered breakfast for you every morning (Friday, Saturday, Sunday). </strong>
        </li>
        <li>
          Additional assistants – If you require more than one assistant, they can be added at an additional cost of $75
          each to cover their breakfasts costs.
        </li>
      </ul>

      <h3>Artist Alley</h3>
      <ul>
        <li>Half table - $25 per day, $60 for the full weekend</li>
      </ul>

      <h2>General Vending Guidelines (Applies to both Merch Perch and Artist Alley)</h2>
      <ul>
        <li>All vendors and assistants are expected to follow the general convention code of conduct.</li>
        <li>
          The primary vendor at any table must be at least 18 years old as of the date of the convention. Additionally,
          if any adult/mature content is being sold at the table, even covered/hidden, all assistants or others behind
          the table must be at least 18 years old as of the date of the convention.
        </li>
        <li>
          Sales (exchanges for currency) outside of the designated vendor areas are prohibited. Bartering is between you
          and the Great Vixen.
        </li>
        <li>
          Fox Den Con management reserves the right to alter the Merch Perch table layouts at any time with or without
          prior notice. All efforts will be made to accommodate all vendors that have been approved.
        </li>
        <li>
          Fox Den Con management reserves the right to deny vending status, before or after the beginning of the
          convention, to any dealer known to have engaged in disruptive, abusive, racist, or otherwise significant
          negative behavior, either at the current event or in the past. If your vending status is revoked for the above
          reason, no refunds will be issued.
        </li>
        <li>
          All vendors and assistants are expected to treat attendees, volunteers, staff, and other vendors with
          professionalism, courtesy, and respect. The primary vendor is responsible for the conduct of all assistants.
        </li>
        <li>
          Violations of any of the Merch Perch or Artist Alley policies, or the general code of conduct, may result in
          verbal or written warnings, mandatory removal of offending merchandise, temporary or permanent suspension of
          vendor status without refund, or removal from the convention without refund.
          <strong>
            Please note: This is not a multi-strike system. The above is a list of possible penalties, not a promise
            that we will not jump straight to expulsion from the con if the violation warrants it.
          </strong>
        </li>
      </ul>

      <h2>Merchandise Guidelines</h2>
      <ul>
        <li>No products created with the use of generative AI is allowed.</li>
        <li>
          The Merch Perch is a vending area intended for sales of pre-made merchandise, such as clothing, accessories,
          pins/stickers/keychains, and other manufactured products. Artists who expect their sales to be comprised of
          mostly this sort of product should choose to sell in the Merch Perch, even if they are also offering on the
          spot commissions.
        </li>
        <li>
          The Artist Alley is a space meant for artists offering on the spot commissions, original work, prints, and
          handmade items or artistic pieces. A small portion of manufactured products are acceptable as long as they are
          your original work.
        </li>
        <li>
          The Merch Perch includes a restricted space for 18+ materials and artwork. ID check will be enforced. No adult
          themed items can be exposed to the public view while they remain for sale. Some form of covering (bag, folder,
          etc) must be provided for purchased 18+ items in this area so the purchaser can move freely through the
          general vending space without exposing minors to adult work.
        </li>
        <li>
          If less than 50% of the merchandise at a booth is 18+, then the vendor may work out of the main hall rather
          than the restricted 18+ space, but all adult material must be censored or kept out of sight and provided only
          on request by verified 18+ attendees.
        </li>
        <li>
          Vendors may not sell food or beverages, any products containing alcohol, tobacco, marijuana, illicit or
          controlled substances, weapons of any sort, incendiary items, pirated works, works created in whole or in part
          by generative AI, or merchandise that promotes harassment, hate groups, or illegal activity.
        </li>
        <li>
          Dealers may not resell any Fox Den Con merchandise or any merchandise with the Fox Den Con logos, mascots, or
          other trademarked entities without express written permission from Fox Den Club.
        </li>
        <li>
          All displayed and sold merchandise must comply with federal, state, and local laws. Convention staff reserves
          the right to remove any merchandise that is found to be inappropriate, unlawful, in violation of convention
          policies or principles, or unsafe. Convention staff have final authority in making this determination.
        </li>
      </ul>

      <h2>The Nitty Gritty</h2>
      <ul>
        <li>
          All vendors in the Merch Perch and Artist Alley will need to obtain a Denver Special Event Sales Tax License
          before they begin selling.
          <!-- TODO: link to the Denver Special Event Sales Tax License form -->
        </li>
        <li>Power is not provided for free but will be available for purchase through the Venue’s AV company.</li>
      </ul>

      <h3>Merch Perch</h3>
      <ul>
        <li>
          The space provided is 6’ x 6’. This space includes two chairs and one 6’ wide table which can be arranged at
          the dealer’s preference or removed if needed.
          <!-- TODO: statement on height restriction of displays -->
        </li>
      </ul>

      <h3>Artist Alley</h3>
      <ul>
        <li>
          Each half-table is 3’ wide and comes with one chair. These tables are aligned along a wall and as such tables
          cannot repositioned. Each half table includes one chair.
          <!-- TODO: statement on height restriction of displays -->
        </li>
      </ul>
    </template>
  </Card>
</template>

<style scoped>
h2,
h3 {
  text-align: left;
}
li {
  list-style-type: disc;
  margin: 0.2rem 0 0.2rem 1.5rem;
}
</style>
