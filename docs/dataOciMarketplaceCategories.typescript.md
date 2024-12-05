# `dataOciMarketplaceCategories` Submodule <a name="`dataOciMarketplaceCategories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceCategories <a name="DataOciMarketplaceCategories" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories oci_marketplace_categories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceCategories.DataOciMarketplaceCategories(scope: Construct, id: string, config?: DataOciMarketplaceCategoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig">DataOciMarketplaceCategoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig">DataOciMarketplaceCategoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMarketplaceCategoriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplaceCategories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isConstruct"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceCategories.DataOciMarketplaceCategories.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformElement"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformDataSource"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMarketplaceCategories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMarketplaceCategories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMarketplaceCategories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceCategories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.categories">categories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList">DataOciMarketplaceCategoriesCategoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList">DataOciMarketplaceCategoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `categories`<sup>Required</sup> <a name="categories" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.categories"></a>

```typescript
public readonly categories: DataOciMarketplaceCategoriesCategoriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList">DataOciMarketplaceCategoriesCategoriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.filter"></a>

```typescript
public readonly filter: DataOciMarketplaceCategoriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList">DataOciMarketplaceCategoriesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMarketplaceCategoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceCategoriesCategories <a name="DataOciMarketplaceCategoriesCategories" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategories.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

const dataOciMarketplaceCategoriesCategories: dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategories = { ... }
```


### DataOciMarketplaceCategoriesConfig <a name="DataOciMarketplaceCategoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

const dataOciMarketplaceCategoriesConfig: dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#compartment_id DataOciMarketplaceCategories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#id DataOciMarketplaceCategories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#compartment_id DataOciMarketplaceCategories#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMarketplaceCategoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#filter DataOciMarketplaceCategories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#id DataOciMarketplaceCategories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMarketplaceCategoriesFilter <a name="DataOciMarketplaceCategoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

const dataOciMarketplaceCategoriesFilter: dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#name DataOciMarketplaceCategories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#values DataOciMarketplaceCategories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#regex DataOciMarketplaceCategories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#name DataOciMarketplaceCategories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#values DataOciMarketplaceCategories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_categories#regex DataOciMarketplaceCategories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceCategoriesCategoriesList <a name="DataOciMarketplaceCategoriesCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.get"></a>

```typescript
public get(index: number): DataOciMarketplaceCategoriesCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMarketplaceCategoriesCategoriesOutputReference <a name="DataOciMarketplaceCategoriesCategoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategories">DataOciMarketplaceCategoriesCategories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMarketplaceCategoriesCategories;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesCategories">DataOciMarketplaceCategoriesCategories</a>

---


### DataOciMarketplaceCategoriesFilterList <a name="DataOciMarketplaceCategoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.get"></a>

```typescript
public get(index: number): DataOciMarketplaceCategoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMarketplaceCategoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>[]

---


### DataOciMarketplaceCategoriesFilterOutputReference <a name="DataOciMarketplaceCategoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMarketplaceCategories } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMarketplaceCategoriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceCategories.DataOciMarketplaceCategoriesFilter">DataOciMarketplaceCategoriesFilter</a>

---


