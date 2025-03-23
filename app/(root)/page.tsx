import { Container, Filters, ProductsGroupList, Title, TopBar, Stories } from "@/shared/components/shared";
import { Suspense } from "react";
import { findPizzas } from "@/shared/lib";
import { GetSearchParams } from "@/shared/lib/find-pizzas";

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const params = await searchParams;

  const categories = await findPizzas(params);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Stories />

      <Container className="mt-10 bp-14">
        <div className="flex gap-[80px]">
            <div className="w-[250px]">
              <Suspense>
                <Filters />
              </Suspense>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                {
                  categories.map((category) => (
                    category.products.length > 0 && (
                      <ProductsGroupList 
                        key={category.id}
                        title={category.name}
                        categoryId={category.id}
                        items={category.products}
                      />
                    )
                  ))
                }
              </div>
            </div>
        </div>
      </Container>
    </>
    
  );
}
