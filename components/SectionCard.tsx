import Image from "next/image";
import React from "react";

function SectionCard({ flip = "flex-row" }: { flip?: string }) {
  return (
    <div className={`md:flex ${flip} gap-4 justify-between py-4`}>
      <div className="md:w-[49%]">
        <h2>Section One</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          suscipit rem alias non vero quasi exercitationem distinctio, iure
          voluptatum nemo saepe temporibus provident odio quidem. Veniam eius
          laboriosam assumenda voluptates. Saepe repellendus maiores ad nulla
          asperiores recusandae tempore perferendis consectetur iste commodi
          nesciunt impedit, dignissimos iusto illo possimus facilis, voluptate
          unde. Quis provident sapiente dolorum rem laboriosam a, hic explicabo.
          Illo, doloremque libero? Exercitationem hic sequi nam sapiente dolor
          eos quis numquam magnam esse nulla alias adipisci sint eum dignissimos
          velit inventore quo ad, neque delectus? Animi architecto eveniet
          itaque!
        </p>
      </div>
      <div className="md:w-[49%]">
        <Image
          src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
          alt={"SectionOne"}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}

export default SectionCard;
