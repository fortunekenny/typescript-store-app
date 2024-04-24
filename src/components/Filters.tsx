import { Form, useLoaderData, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { type ProductsResponseWithParams } from "@/utils";
import { FormInput, FormSelect, FormRange, FormCheckbox } from "@/components";

function Filters() {
    const { meta, params } = useLoaderData() as ProductsResponseWithParams;
    const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
       {/** SERACH */}
        <FormInput type="search" label="search product" name="search" defaultValue={search} />
       {/** CATEGORIES */}
        <FormSelect name="category" label="select category" defaultValue={category} options={meta.categories}/>
       {/** COMPANY */}
        <FormSelect name="company" label="select company" defaultValue={company} options={meta.companies}/>
       {/** ORDER BY */}
        <FormSelect name="order" label="order by" defaultValue={order} options={['a-z','z-a','high','low']}/>
       {/** RANGE/SLIDER */}
        <FormRange label="price" name="price" defaultValue={price} />
       {/** CHECKBOX */}
        <FormCheckbox label="free shipping" name="shipping" defaultValue={shipping} />
      <Button type="submit" size="sm" className="self-end mb-2">
        search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>

  );
}
export default Filters;