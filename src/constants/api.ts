export const BLOG = {
    GET: {
        DETAIL: '/zc_blog/getBlogDetail',
        LIST: '/zc_blog',
        LIST_CATEGORY: '/zc_blog/getListCategory',
        LIST_TAG: '/zc_blog/searchTag',
    },
};

export const FAQS = {
    GET: '/zc_FAQs',
};

const API = {
    BLOG,
};

export const MAP_PAGE_API = {
    blog: BLOG.GET.LIST,
    blogDetail: BLOG.GET.DETAIL,
    faqs: FAQS.GET,
};
export default API;
