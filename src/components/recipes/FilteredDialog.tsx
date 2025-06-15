import { Button } from "@/components/ui/button"
import { IoFilter } from "react-icons/io5";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

type Props = {
  allTags: string[];
  allMeals: string[];
  selectedTags: string[];
  selectedMeals: string[];
  onTagChange: (tag: string) => void;
  onMealChange: (meal: string) => void;
};

export function FilteredDialog({
  allTags,
  allMeals,
  selectedTags,
  selectedMeals,
  onTagChange,
  onMealChange,
}: Props) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex md:hidden cursor-pointer">
            Filter <IoFilter />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filtered Recipes</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px]">
            <div className="flex flex-col gap-4">
              <div className="grid gap-4">
                <Label htmlFor="name-1">Filter by Tags</Label>
                <div className="grid grid-cols-2 gap-2">
                  {allTags.map((tag) => (
                  <Label key={tag} className="block mb-1 cursor-pointer text-gray-700 font-thin">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => onTagChange(tag)}
                    className="mr-2 cursor-pointer"
                  />
                    {tag}
                  </Label>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <Label htmlFor="username-1">Filter by Meals</Label>
                <div className="grid grid-cols-2 gap-2">
                  {allMeals.map((meal) => (
                    <Label key={meal} className="block mb-1 cursor-pointer text-gray-700 font-thin">
                      <input
                        type="checkbox"
                        checked={selectedMeals.includes(meal)}
                        onChange={() => onMealChange(meal)}
                        className="mr-2 cursor-pointer"
                      />
                      {meal}
                    </Label>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
