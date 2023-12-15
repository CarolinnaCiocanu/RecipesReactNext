import { Recipe } from "@models/index";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Recipes = () => {
  const { recipes } = useSelector((state: any) => state.GeneralReducer);
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Recipes Page</title>
      </Head>
      <div className="recipes-wrapper">
        <ListGroup>
          {recipes?.length > 0 &&
            recipes?.map((recipe: Recipe, recipeIndex: number) => {
              return (
                <Link
                  href={{
                    pathname: `${asPath}/${recipe.name}`,
                    query: { id: recipeIndex },
                  }}
                  key={recipeIndex}
                >
                  <ListGroupItem>
                    <Image
                      src={recipe.thumbnail}
                      width={100}
                      height={100}
                      alt={recipe.name}
                    />
                    <h4 className="recipe-name">{recipe.name}</h4>
                    <span>
                      View Recipe <FaArrowRight />
                    </span>
                  </ListGroupItem>
                </Link>
              );
            })}
        </ListGroup>
      </div>
    </>
  );
};

export default Recipes;
