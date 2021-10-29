
import { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import { categoryList } from '../../services/categoryList';
import { allProducts, fetchProducts, productsByCategory, productsByCategoryAndPage } from '../../services/discountList';
import { FilterByCategory } from '../filter-by-category';
import { Pagination } from '../pagination';
import { ProductCard } from '../product-card';
import ProductDetails from '../product-details';
import './index.scss';


const ProductsByCategory = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (product) => {setShow(!show);setSelectedProduct(product)};
    const [products, setProducts] = useState([]);
    const [nextPageNumber, setNextPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
    const [product, setSelectedProduct] = useState({});

    const setCount = (res) => {
        let count = Math.ceil(res.data.length / 5);
        const arrCount = [];
        for (let i = 0; i < count; i++) {
            arrCount.push(i + 1);
        }
        setPageCount(arrCount);
    }
    useEffect(() => {
        getAllProductsByPage(nextPageNumber);
        allProducts().then(res => { 
            setCount(res);
        });
        getCategoryList();
    }, [])
    
    useEffect(() => {
        getAllProductsByPage(nextPageNumber);
        getCategoryList();
    }, [nextPageNumber])
    
    useEffect(() => {
        if( selectedCategoryId !== 'undefined' && selectedCategoryId !== undefined) { 
            productsByCategoryAndPage(selectedCategoryId, nextPageNumber).then(
                res => {
                    setProducts(res.data);
                    productsByCategory(selectedCategoryId).then(res=> setCount(res));
                }
            )
        }else{ 
            getAllProductsByPage(nextPageNumber);
            allProducts().then(res => { 
                setCount(res);
            });
        }
        
    }, [setSelectedCategoryId,selectedCategoryId])
    

    const getAllProductsByPage = (number) => {
        fetchProducts(number).then(res => {
            setProducts(res.data);
        });
    }
    
    const getCategoryList = () => {
        categoryList().then(res => {
            setCategories(res.data);
            setLoading(false);
        }, (err) => {
        })
    }
    return (
        <>
            {loading && <Loader />}
            <FilterByCategory products={products} selectedCategoryId={selectedCategoryId} 
                      setSelectedCategoryId={setSelectedCategoryId} categories={categories}/>
            <div className="container">
                <div className="products-by-category">
                    {products.map((product, i) => {
                        return (<ProductCard product={product}  key={i} handleShow={handleShow} />)
                    })}
                </div>
            </div>
            <ProductDetails show={show} handleClose={handleClose} product={product}   />
            <Pagination nextPageNumber={nextPageNumber} getAllProductsByPage={getAllProductsByPage}
               pageCount={pageCount} setNextPageNumber={setNextPageNumber} />
        </>);
}
export default ProductsByCategory;