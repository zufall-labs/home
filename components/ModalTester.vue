<script setup>
import { Copy } from 'lucide-vue-next'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        Share
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share link</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <Label for="link" class="sr-only">
            Link
          </Label>
          <Input
            id="link"
            default-value="https://shadcn-vue.com/docs/installation"
            read-only
          />
        </div>
        <Button type="submit" size="sm" class="px-3">
          <span class="sr-only">Copy</span>
          <Copy class="w-4 h-4" />
        </Button>
      </div>
      <DialogFooter class="sm:justify-start">
        <DialogClose as-child>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>