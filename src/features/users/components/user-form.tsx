"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputPhone
} from "@/components/ui/input-phone"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  PhoneInput
} from "@/components/ui/phone-input";
import {
  Textarea
} from "@/components/ui/textarea"

const formSchema = z.object({
  id: z.string().min(1),
  fullname: z.string().min(1),
  gender: z.string(),
  phone: z.string(),
  descriptions: z.string()
});

export default function MyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <InputPhone 
                placeholder="#S001"
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>Unique ID for system</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <InputPhone 
                placeholder="Sun Hour"
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select  gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Placeholder"
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              <FormDescription>Enter your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="descriptions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}