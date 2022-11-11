import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "242o1bk7",
    dataset: "production",
    useCdn: true
})