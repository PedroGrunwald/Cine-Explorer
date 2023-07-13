import SearchComponent from "@/components/SearchComponent";
import ContainerMovies from "../components/ContainerMovies";
import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <SearchComponent/>
      <ContainerMovies />
    </>

  )
}
