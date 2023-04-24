import WooCommmerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommmerceRestApi(
    {
        url: "http://localhost/projets/api-wp/",
        consumerKey : "ck_af733494549bce2e44634678e81d00b973439667",
        consumerSecret: "cs_05803ddc12b90ed3a777f7b44b07b19e4071d04b",
        version : "wc/v3"
    }
);

export default api