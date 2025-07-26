export default function AboutPage() {
  return (
    <main>
      <div className="relative min-h-screen flex justify-center items-center text-black text-lg">
        {/* Section 1: Beginnings */}
        <div className="absolute top-10 left-15 flex flex-row justify-center w-125 p-[15px] rounded-lg bg-[var(--ivory)]">
          <div className="flex flex-row">
            <div className="subheading flex justify-center w-full text-3xl mt-[3px] mb-[2px]">
              Beginnings
            </div>
          </div>
          <div></div>
          <div className="border-l-[1px] border-l-black-500 h-[300px] m-[5px]"></div>
          <p>
            In the heart of Farmington Hills, Michigan, we discovered our passion for crafting unique
            drinks inspired by our Sri Lankan heritage. Combining the vibrant flavors of our family's
            traditions with fresh, locally-sourced ingredients from Michigan, we began experimenting
            with tropical fruits, fragrant spices, and rich, creamy bases.
          </p>
        </div>

        {/* Section 2: Craft */}
        <div className="absolute top-70 left-150 flex flex-col justify-center w-125 p-[15px] rounded-lg bg-[var(--ivory)]">
          <div className="subheading flex justify-center w-full text-3xl mt-[3px] mb-[2px]">
            Craft
          </div>
          <p>
            What started as a hobby quickly turned into a mission: to share the bold, exotic flavors
            of Sri Lanka while supporting local farmers and suppliers. Fusion Blends offers authentic,
            delicious beverages that blend the best of both worlds—traditional Sri Lankan recipes with
            fresh, Michigan-grown ingredients. We hope you enjoy these drinks as much as we do!
            <br />
            ~Abed Ihsan, Founder and CEO
          </p>
        </div>
      </div>
    </main>
  );
}
