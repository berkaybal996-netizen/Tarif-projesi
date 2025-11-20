import SearchBox from "@/app/_components/searchBox/SearchBox";
import Categories from "./Categories";
import Container from "@/app/_components/container/container";
import ReacipeCard from "../_components/recipeCards/ReacipeCard";


export default function Home() {
  return (
    <div>
      <SearchBox />
      <Container>
        <Categories />
        <ReacipeCard/>
      </Container>

    </div>
  );
}
