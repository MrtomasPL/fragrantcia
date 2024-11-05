function searchPerfume() {
    const query = document.getElementById('search').value.toLowerCase();
    const articles = document.querySelectorAll('.article');
    const perfumes = document.querySelectorAll('.perfume-item');

    articles.forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(query) ? 'block' : 'none';
    });

    perfumes.forEach(perfume => {
        const text = perfume.innerText.toLowerCase();
        perfume.style.display = text.includes(query) ? 'block' : 'none';
    });
}



// Function to show only the perfume list and hide other sections
// Sample perfume data with actual names and descriptions
const perfumes = [
    { name: "Chanel No. 5", description: "An iconic fragrance with a blend of floral and woody notes, timeless and elegant.", imageUrl: "https://w7.pngwing.com/pngs/317/436/png-transparent-chanel-no-5-perfume-coco-mademoiselle-perfume-miscellaneous-cosmetics-chanel.png" },
    { name: "Dior Sauvage", description: "Fresh, spicy, and slightly woody, perfect for the modern man.", imageUrl: "https://banner2.cleanpng.com/20180602/pug/avobc6n80.webp" },
    { name: "Tom Ford Black Orchid", description: "A luxurious and sensual fragrance with dark, rich floral accords.", imageUrl: "https://sdcdn.io/tf/tfb_sku_T00501_2000x2000_0.png" },
    { name: "Gucci Bloom", description: "A white floral scent that evokes a blooming garden, vibrant and natural.", imageUrl: "https://e7.pngegg.com/pngimages/320/725/png-clipart-perfume-gucci-bloom-eau-de-toilette-cosmetics-perfume-perfume-gucci.png" },
    { name: "YSL Black Opium", description: "A seductive fragrance with a blend of coffee, vanilla, and sweet floral notes.", imageUrl: "https://www.sephora.pl/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw96606e2a/images/hi-res/PID_principal/PID_principal_658/P1920022_principal.jpg?sw=585&sh=585&sm=fit" },
    { name: "Versace Eros", description: "Bold and masculine with notes of mint, green apple, and tonka bean.", imageUrl: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwa1255f72/original/90_R740010-R100MLS_RNUL_20_Eros~EDT~100~ml-Accessories-Versace-online-store_0_1.jpg?sw=850&q=85&strip=true" },
    { name: "Lancôme La Vie Est Belle", description: "Sweet and floral, it embodies happiness and femininity.", imageUrl: "https://e7.pngegg.com/pngimages/554/98/png-clipart-lancome-la-vie-est-belle-eau-de-parfum-intense-lancome-la-vie-est-belle-eau-de-parfum-perfume-perfume-miscellaneous-cosmetics.png" },
    { name: "Jo Malone Wood Sage & Sea Salt", description: "A fresh, clean scent inspired by the English coast.", imageUrl: "https://www.jomalone.com.au/media/export/cms/products/1000x1000/jo_sku_L41501_1000x1000_0.png" },
    { name: "Armani Si", description: "A modern chypre scent with notes of blackcurrant, rose, and vanilla.", imageUrl: "https://i.pinimg.com/736x/05/b9/c3/05b9c3af07c89ab506362a7bc568cca5.jpg" },
    { name: "Paco Rabanne 1 Million", description: "A spicy, leathery fragrance for the confident man.", imageUrl: "https://e7.pngegg.com/pngimages/1018/187/png-clipart-1-million-cologne-by-paco-rabanne-perfume-eau-de-toilette-paco-rabanne-1-million-edt-spray-fashion-design-perfume-miscellaneous-cosmetics.png" },
    { name: "Dolce & Gabbana Light Blue", description: "Fresh, light, and perfect for summer days by the sea.", imageUrl: "https://i1.perfumesclub.com/media/186814.jpg" },
    { name: "Hermès Terre d'Hermès", description: "Earthy and woody, with notes of citrus and minerals.", imageUrl: "https://static1.sabinacdn.com/8284-thickbox_default/terre-d-hermes-pour-homme-hermes.jpg" },
    { name: "Creed Aventus", description: "A powerful fragrance with fruity and smoky notes, ideal for success.", imageUrl: "https://static3.sabinacdn.com/26384-thickbox_default/aventus-creed.jpg" },
    { name: "Marc Jacobs Daisy", description: "Youthful and fresh, with notes of wild strawberry and jasmine.", imageUrl: "https://banner2.cleanpng.com/20180809/gjf/9ca8de216cbb92ef5f86387fcd3c6ac4.webp" },
    { name: "Prada Luna Rossa Carbon", description: "A mineral-fresh scent inspired by modern technology.", imageUrl: "https://www.prada-beauty.com/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-prada-master-catalog/default/dwdeb77814/images/MPL01367/LUNA-ROSSA-CARBON-3614273822350_100ML_PACKSHOT.jpg" },
    { name: "Bvlgari Man in Black", description: "Bold and intense, with spicy and woody notes for a charismatic presence.", imageUrl: "https://media2.bulgari.com/f_auto,q_auto/production/dw93eb4c28/images/images/1303364.png" },
    { name: "Jean Paul Gaultier Le Male", description: "A unique blend of mint, lavender, and vanilla for the daring man.", imageUrl: "https://i1.perfumesclub.com/grande/91938.jpg" },
    { name: "Mugler Alien", description: "A mysterious, floral-woody fragrance with a unique jasmine note.", imageUrl: "https://inter.mugler.com/dw/image/v2/BDCR_PRD/on/demandware.static/-/Sites-mugler-master-catalog/default/dw73ff50dd/images/pdp/M010401002/3439600056921_alien_60ml_refillable_main_v2.png" },
    { name: "Valentino Uomo", description: "Smooth and refined, with notes of coffee, leather, and cedarwood.", imageUrl: "https://www.valentino-beauty.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-val-master-catalog/default/dwcf89138c/images/pdp/MPL00469/Valentino-Uomo-100ml-3614272732247-view1.png" },
    { name: "Carolina Herrera Good Girl", description: "A bold, dual scent combining light and dark notes for a daring edge.", imageUrl: "https://e7.pngegg.com/pngimages/979/47/png-clipart-eau-de-toilette-perfume-woman-milliliter-eau-de-parfum-perfume-miscellaneous-black-thumbnail.png" },
    { name: "Narciso Rodriguez For Her", description: "A modern, musky floral scent that radiates sensuality.", imageUrl: "https://images.squarespace-cdn.com/content/v1/570d2ff986db4332310121aa/1612474864770-YIYYNEJN5H9V82097D66/forher_muscnoir.jpg" },
    { name: "Byredo Gypsy Water", description: "A woody, aromatic fragrance inspired by the Romani lifestyle.", imageUrl: "https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/original/13309762-1014896492821403.jpg&format=webp&auto=avif&width=985&height=985&fit=cover" },
    { name: "Maison Margiela Replica Jazz Club", description: "Warm and boozy with tobacco and leather, reminiscent of a jazz club.", imageUrl: "https://contenthub-delivery.mecca.com/api/public/content/I-031308-I-031308-M1-MAISONMARGIELA-JazzClubEDT-Ribz9uH902r851c62E8KQ.webp" },
    { name: "Chanel Bleu de Chanel", description: "A sophisticated, aromatic-woody scent for the modern man.", imageUrl: "https://i.pinimg.com/736x/d9/f2/b9/d9f2b9e1b1b52a8001d0090a01c6ab1a.jpg" },
    { name: "Tom Ford Oud Wood", description: "An exotic blend of oud, sandalwood, and spices, deeply sensual.", imageUrl: "https://sdcdn.io/tf/tf_sku_T1XF01_2000x2000_0.png" },
    { name: "Guerlain Shalimar", description: "An oriental, sensual fragrance inspired by the love story of an emperor.", imageUrl: "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwd1556416/primary_packshot_3/2022/Fragrance/Shalimar/G011354_3346470113541_SHALIMAR-EDP-50ML.jpg?sw=655&sh=655&sfrm=png" },
    { name: "Aerin Hibiscus Palm", description: "A tropical fragrance with hibiscus, palm leaf, and vanilla.", imageUrl: "https://m.esteelauder.ca/media/export/cms/products/640x640/el_sku_P0JH01_640x640_0.jpg" },
    { name: "Clinique Aromatics Elixir", description: "A classic scent with a blend of floral and chypre notes.", imageUrl: "https://m.clinique.com.au/media/export/cms/products/1200x1500/cl_sku_62G901_1200x1500_0.png" },
    { name: "Atelier Cologne Orange Sanguine", description: "A bright, zesty citrus scent perfect for summer.", imageUrl: "https://media.maxaroma.com/9cd29e92-4b8f-436f-ad1f-8e368b30dc1d/https://www.maxaroma.com/productimages/large/UP3700591201035.jpg?ver=1614986205" },
    { name: "Giorgio Armani Acqua di Gio", description: "An aquatic, fresh fragrance inspired by the Mediterranean.", imageUrl: "https://e7.pngegg.com/pngimages/689/480/png-clipart-perfume-acqua-di-gio-giorgio-armani-acqua-di-gio-profumo-3-4-oz-eau-de-parfum-spray-by-giorgio-armani-for-women-perfume-miscellaneous-perfume.png" }
];

// Function to show only the perfume list and hide other sections
function showPerfumes() {
    // Get references to sections
    const perfumeListContainer = document.getElementById("perfume-list");
    const articlesSection = document.querySelector(".articles");
    const newPerfumesSection = document.querySelector(".new-perfumes");

    // Hide the articles and new perfumes sections
    articlesSection.classList.add("hidden");
    newPerfumesSection.classList.add("hidden");

    // Clear any existing content in the perfume list container
    perfumeListContainer.innerHTML = "";

    perfumes.sort((a, b) => a.name.localeCompare(b.name));
    
    // Populate the perfume list with items
    perfumes.forEach(perfume => {
        const perfumeItem = document.createElement("div");
        perfumeItem.className = "perfume-item";
        
        perfumeItem.innerHTML = `
            <img src="${perfume.imageUrl}" alt="${perfume.name}">
            <h3>${perfume.name}</h3>
            <p>${perfume.description}</p>
        `;

        perfumeListContainer.appendChild(perfumeItem);
    });

    // Show the perfume list section
    perfumeListContainer.classList.remove("hidden");
}
