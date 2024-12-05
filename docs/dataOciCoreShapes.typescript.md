# `dataOciCoreShapes` Submodule <a name="`dataOciCoreShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreShapes <a name="DataOciCoreShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes oci_core_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapes(scope: Construct, id: string, config: DataOciCoreShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig">DataOciCoreShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig">DataOciCoreShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId">resetImageId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId"></a>

```typescript
public resetImageId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreShapes.DataOciCoreShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreShapes.DataOciCoreShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes">shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a>

---

##### `shapes`<sup>Required</sup> <a name="shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes"></a>

```typescript
public readonly shapes: DataOciCoreShapesShapesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreShapesConfig <a name="DataOciCoreShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesConfig: dataOciCoreShapes.DataOciCoreShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}.

---

### DataOciCoreShapesFilter <a name="DataOciCoreShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesFilter: dataOciCoreShapes.DataOciCoreShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}.

---

### DataOciCoreShapesShapes <a name="DataOciCoreShapesShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapes: dataOciCoreShapes.DataOciCoreShapesShapes = { ... }
```


### DataOciCoreShapesShapesMaxVnicAttachmentOptions <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesMaxVnicAttachmentOptions: dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions = { ... }
```


### DataOciCoreShapesShapesMemoryOptions <a name="DataOciCoreShapesShapesMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesMemoryOptions: dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions = { ... }
```


### DataOciCoreShapesShapesNetworkingBandwidthOptions <a name="DataOciCoreShapesShapesNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesNetworkingBandwidthOptions: dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions = { ... }
```


### DataOciCoreShapesShapesOcpuOptions <a name="DataOciCoreShapesShapesOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesOcpuOptions: dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptions <a name="DataOciCoreShapesShapesPlatformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions = { ... }
```


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions: dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions = { ... }
```


### DataOciCoreShapesShapesRecommendedAlternatives <a name="DataOciCoreShapesShapesRecommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreShapesShapesRecommendedAlternatives: dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreShapesFilterList <a name="DataOciCoreShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>[]

---


### DataOciCoreShapesFilterOutputReference <a name="DataOciCoreShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>

---


### DataOciCoreShapesShapesList <a name="DataOciCoreShapesShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsList <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu">defaultPerOcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPerOcpu`<sup>Required</sup> <a name="defaultPerOcpu" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu"></a>

```typescript
public readonly defaultPerOcpu: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesMaxVnicAttachmentOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a>

---


### DataOciCoreShapesShapesMemoryOptionsList <a name="DataOciCoreShapesShapesMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesMemoryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesMemoryOptionsOutputReference <a name="DataOciCoreShapesShapesMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">defaultPerOcpuInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs">maxInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs">maxPerNumaNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs">maxPerOcpuInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs">minInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs">minPerOcpuInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPerOcpuInGbs`<sup>Required</sup> <a name="defaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```typescript
public readonly defaultPerOcpuInGbs: number;
```

- *Type:* number

---

##### `maxInGbs`<sup>Required</sup> <a name="maxInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs"></a>

```typescript
public readonly maxInGbs: number;
```

- *Type:* number

---

##### `maxPerNumaNodeInGbs`<sup>Required</sup> <a name="maxPerNumaNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs"></a>

```typescript
public readonly maxPerNumaNodeInGbs: number;
```

- *Type:* number

---

##### `maxPerOcpuInGbs`<sup>Required</sup> <a name="maxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```typescript
public readonly maxPerOcpuInGbs: number;
```

- *Type:* number

---

##### `minInGbs`<sup>Required</sup> <a name="minInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs"></a>

```typescript
public readonly minInGbs: number;
```

- *Type:* number

---

##### `minPerOcpuInGbs`<sup>Required</sup> <a name="minPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```typescript
public readonly minPerOcpuInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesMemoryOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a>

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsList <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">defaultPerOcpuInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps">maxInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps">minInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPerOcpuInGbps`<sup>Required</sup> <a name="defaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```typescript
public readonly defaultPerOcpuInGbps: number;
```

- *Type:* number

---

##### `maxInGbps`<sup>Required</sup> <a name="maxInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```typescript
public readonly maxInGbps: number;
```

- *Type:* number

---

##### `minInGbps`<sup>Required</sup> <a name="minInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```typescript
public readonly minInGbps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesNetworkingBandwidthOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a>

---


### DataOciCoreShapesShapesOcpuOptionsList <a name="DataOciCoreShapesShapesOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesOcpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesOcpuOptionsOutputReference <a name="DataOciCoreShapesShapesOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode">maxPerNumaNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `maxPerNumaNode`<sup>Required</sup> <a name="maxPerNumaNode" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode"></a>

```typescript
public readonly maxPerNumaNode: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesOcpuOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a>

---


### DataOciCoreShapesShapesOutputReference <a name="DataOciCoreShapesShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations">baselineOcpuUtilizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType">billingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription">gpuDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus">gpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance">isBilledForStoppedInstance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible">isFlexible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported">isLiveMigrationSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore">isSubcore</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription">localDiskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks">localDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs">localDisksTotalSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions">maxVnicAttachmentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments">maxVnicAttachments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions">memoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired">minTotalBaselineOcpusRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions">networkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts">networkPorts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions">ocpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions">platformConfigOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription">processorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames">quotaNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps">rdmaBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts">rdmaPorts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives">recommendedAlternatives</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes">resizeCompatibleShapes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baselineOcpuUtilizations`<sup>Required</sup> <a name="baselineOcpuUtilizations" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations"></a>

```typescript
public readonly baselineOcpuUtilizations: string[];
```

- *Type:* string[]

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

---

##### `gpuDescription`<sup>Required</sup> <a name="gpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription"></a>

```typescript
public readonly gpuDescription: string;
```

- *Type:* string

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus"></a>

```typescript
public readonly gpus: number;
```

- *Type:* number

---

##### `isBilledForStoppedInstance`<sup>Required</sup> <a name="isBilledForStoppedInstance" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance"></a>

```typescript
public readonly isBilledForStoppedInstance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible"></a>

```typescript
public readonly isFlexible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLiveMigrationSupported`<sup>Required</sup> <a name="isLiveMigrationSupported" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported"></a>

```typescript
public readonly isLiveMigrationSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSubcore`<sup>Required</sup> <a name="isSubcore" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore"></a>

```typescript
public readonly isSubcore: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `localDiskDescription`<sup>Required</sup> <a name="localDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription"></a>

```typescript
public readonly localDiskDescription: string;
```

- *Type:* string

---

##### `localDisks`<sup>Required</sup> <a name="localDisks" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks"></a>

```typescript
public readonly localDisks: number;
```

- *Type:* number

---

##### `localDisksTotalSizeInGbs`<sup>Required</sup> <a name="localDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs"></a>

```typescript
public readonly localDisksTotalSizeInGbs: number;
```

- *Type:* number

---

##### `maxVnicAttachmentOptions`<sup>Required</sup> <a name="maxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions"></a>

```typescript
public readonly maxVnicAttachmentOptions: DataOciCoreShapesShapesMaxVnicAttachmentOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a>

---

##### `maxVnicAttachments`<sup>Required</sup> <a name="maxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments"></a>

```typescript
public readonly maxVnicAttachments: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `memoryOptions`<sup>Required</sup> <a name="memoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions"></a>

```typescript
public readonly memoryOptions: DataOciCoreShapesShapesMemoryOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a>

---

##### `minTotalBaselineOcpusRequired`<sup>Required</sup> <a name="minTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired"></a>

```typescript
public readonly minTotalBaselineOcpusRequired: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps"></a>

```typescript
public readonly networkingBandwidthInGbps: number;
```

- *Type:* number

---

##### `networkingBandwidthOptions`<sup>Required</sup> <a name="networkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions"></a>

```typescript
public readonly networkingBandwidthOptions: DataOciCoreShapesShapesNetworkingBandwidthOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a>

---

##### `networkPorts`<sup>Required</sup> <a name="networkPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts"></a>

```typescript
public readonly networkPorts: number;
```

- *Type:* number

---

##### `ocpuOptions`<sup>Required</sup> <a name="ocpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions"></a>

```typescript
public readonly ocpuOptions: DataOciCoreShapesShapesOcpuOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a>

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `platformConfigOptions`<sup>Required</sup> <a name="platformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions"></a>

```typescript
public readonly platformConfigOptions: DataOciCoreShapesShapesPlatformConfigOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a>

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription"></a>

```typescript
public readonly processorDescription: string;
```

- *Type:* string

---

##### `quotaNames`<sup>Required</sup> <a name="quotaNames" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames"></a>

```typescript
public readonly quotaNames: string[];
```

- *Type:* string[]

---

##### `rdmaBandwidthInGbps`<sup>Required</sup> <a name="rdmaBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps"></a>

```typescript
public readonly rdmaBandwidthInGbps: number;
```

- *Type:* number

---

##### `rdmaPorts`<sup>Required</sup> <a name="rdmaPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts"></a>

```typescript
public readonly rdmaPorts: number;
```

- *Type:* number

---

##### `recommendedAlternatives`<sup>Required</sup> <a name="recommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives"></a>

```typescript
public readonly recommendedAlternatives: DataOciCoreShapesShapesRecommendedAlternativesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a>

---

##### `resizeCompatibleShapes`<sup>Required</sup> <a name="resizeCompatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes"></a>

```typescript
public readonly resizeCompatibleShapes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions">accessControlServiceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions">inputOutputMemoryManagementUnitOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions">measuredBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions">memoryEncryptionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions">numaNodesPerSocketPlatformOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions">percentageOfCoresEnabledOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions">secureBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions">symmetricMultiThreadingOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions">trustedPlatformModuleOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions">virtualInstructionsOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessControlServiceOptions`<sup>Required</sup> <a name="accessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions"></a>

```typescript
public readonly accessControlServiceOptions: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a>

---

##### `inputOutputMemoryManagementUnitOptions`<sup>Required</sup> <a name="inputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions"></a>

```typescript
public readonly inputOutputMemoryManagementUnitOptions: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a>

---

##### `measuredBootOptions`<sup>Required</sup> <a name="measuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions"></a>

```typescript
public readonly measuredBootOptions: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a>

---

##### `memoryEncryptionOptions`<sup>Required</sup> <a name="memoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions"></a>

```typescript
public readonly memoryEncryptionOptions: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a>

---

##### `numaNodesPerSocketPlatformOptions`<sup>Required</sup> <a name="numaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions"></a>

```typescript
public readonly numaNodesPerSocketPlatformOptions: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a>

---

##### `percentageOfCoresEnabledOptions`<sup>Required</sup> <a name="percentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions"></a>

```typescript
public readonly percentageOfCoresEnabledOptions: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a>

---

##### `secureBootOptions`<sup>Required</sup> <a name="secureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions"></a>

```typescript
public readonly secureBootOptions: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a>

---

##### `symmetricMultiThreadingOptions`<sup>Required</sup> <a name="symmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions"></a>

```typescript
public readonly symmetricMultiThreadingOptions: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a>

---

##### `trustedPlatformModuleOptions`<sup>Required</sup> <a name="trustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions"></a>

```typescript
public readonly trustedPlatformModuleOptions: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `virtualInstructionsOptions`<sup>Required</sup> <a name="virtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions"></a>

```typescript
public readonly virtualInstructionsOptions: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled"></a>

```typescript
public readonly isDefaultEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a>

---


### DataOciCoreShapesShapesRecommendedAlternativesList <a name="DataOciCoreShapesShapesRecommendedAlternativesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get"></a>

```typescript
public get(index: number): DataOciCoreShapesShapesRecommendedAlternativesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreShapesShapesRecommendedAlternativesOutputReference <a name="DataOciCoreShapesShapesRecommendedAlternativesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreShapesShapesRecommendedAlternatives;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a>

---



