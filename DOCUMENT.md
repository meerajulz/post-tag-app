# Component Descriptions for Medical Report Auto-Complete App

## App Component

### Purpose

Serves as the root component of the application, encapsulating the entire UI.

### Functionality

- **ThemeProvider**: Applies the global styling theme to all child components using styled-components.
- **Main Layout**: Contains the primary layout structure with a header and the `InputMessage` component.
- **Header**: Displays the application title.

## InputMessage Component

### Purpose

Manages the user input for creating and displaying hashtags.

### Functionality

- **useState and useRef**: Manages the input state and references the input DOM node for focus management.
- **useTagSuggestions**: Custom hook to generate and manage tag suggestions based on user input.

#### Event Handling

- **handleChange**: Updates the input state as the user types.
- **handleKeyDown**: Manages keyboard navigation within the tag suggestions.
- **addTagToInput**: Handles the selection of a suggested tag and updates the input field.

## TagSuggestions Component

### Purpose

Displays a list of tag suggestions based on user input.

### Functionality

- **List Rendering**: Dynamically generates a list of clickable tags that users can select.
- **Selection Management**: Highlights the currently selected tag based on user navigation.
- **Interaction**: Updates the parent component’s input field when a tag is selected.

## Custom Hook Description

### useTagSuggestions

#### Purpose

Provides dynamic tag suggestions based on partial tag input from the user.

#### Functionality

- **useState**: Manages the list of current tag suggestions and the index of the selected tag.
- **useEffect**: Processes the current input to filter tag suggestions from the predefined tag list.

## Code Interaction and Data Flow

### Overview

Detail how these components interact with each other:

- **Data Flow**: How data moves from `InputMessage` to `TagSuggestions` and vice versa.
- **State Management**: How state is shared or lifted between components.
- **Event Handling**: How events in child components affect state in parent components or siblings.
