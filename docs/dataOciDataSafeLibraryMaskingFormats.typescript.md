# `dataOciDataSafeLibraryMaskingFormats` Submodule <a name="`dataOciDataSafeLibraryMaskingFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormats <a name="DataOciDataSafeLibraryMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats oci_data_safe_library_masking_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats(scope: Construct, id: string, config: DataOciDataSafeLibraryMaskingFormatsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig">DataOciDataSafeLibraryMaskingFormatsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig">DataOciDataSafeLibraryMaskingFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId">resetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource">resetLibraryMaskingFormatSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeLibraryMaskingFormatsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLibraryMaskingFormatId` <a name="resetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId"></a>

```typescript
public resetLibraryMaskingFormatId(): void
```

##### `resetLibraryMaskingFormatSource` <a name="resetLibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource"></a>

```typescript
public resetLibraryMaskingFormatSource(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeLibraryMaskingFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection">libraryMaskingFormatCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput">libraryMaskingFormatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput">libraryMaskingFormatSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource">libraryMaskingFormatSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeLibraryMaskingFormatsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a>

---

##### `libraryMaskingFormatCollection`<sup>Required</sup> <a name="libraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection"></a>

```typescript
public readonly libraryMaskingFormatCollection: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeLibraryMaskingFormatsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `libraryMaskingFormatIdInput`<sup>Optional</sup> <a name="libraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput"></a>

```typescript
public readonly libraryMaskingFormatIdInput: string;
```

- *Type:* string

---

##### `libraryMaskingFormatSourceInput`<sup>Optional</sup> <a name="libraryMaskingFormatSourceInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput"></a>

```typescript
public readonly libraryMaskingFormatSourceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

---

##### `libraryMaskingFormatSource`<sup>Required</sup> <a name="libraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource"></a>

```typescript
public readonly libraryMaskingFormatSource: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatsConfig <a name="DataOciDataSafeLibraryMaskingFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatsConfig: dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource">libraryMaskingFormatSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeLibraryMaskingFormatsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#filter DataOciDataSafeLibraryMaskingFormats#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `libraryMaskingFormatId`<sup>Optional</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}.

---

##### `libraryMaskingFormatSource`<sup>Optional</sup> <a name="libraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource"></a>

```typescript
public readonly libraryMaskingFormatSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}.

---

### DataOciDataSafeLibraryMaskingFormatsFilter <a name="DataOciDataSafeLibraryMaskingFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatsFilter: dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}.

---

### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection: dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection = { ... }
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems: dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems = { ... }
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries: dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatsFilterList <a name="DataOciDataSafeLibraryMaskingFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeLibraryMaskingFormatsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeLibraryMaskingFormatsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>[]

---


### DataOciDataSafeLibraryMaskingFormatsFilterOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeLibraryMaskingFormatsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter">DataOciDataSafeLibraryMaskingFormatsFilter</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get"></a>

```typescript
public get(index: number): DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength">endLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue">endValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber">fixedNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString">fixedString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns">groupingColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction">postProcessingFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList">randomList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression">regularExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith">replaceWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength">startLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition">startPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue">startValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction">userDefinedFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endLength`<sup>Required</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength"></a>

```typescript
public readonly endLength: number;
```

- *Type:* number

---

##### `endValue`<sup>Required</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue"></a>

```typescript
public readonly endValue: number;
```

- *Type:* number

---

##### `fixedNumber`<sup>Required</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber"></a>

```typescript
public readonly fixedNumber: number;
```

- *Type:* number

---

##### `fixedString`<sup>Required</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString"></a>

```typescript
public readonly fixedString: string;
```

- *Type:* string

---

##### `groupingColumns`<sup>Required</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns"></a>

```typescript
public readonly groupingColumns: string[];
```

- *Type:* string[]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `postProcessingFunction`<sup>Required</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```typescript
public readonly postProcessingFunction: string;
```

- *Type:* string

---

##### `randomList`<sup>Required</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList"></a>

```typescript
public readonly randomList: string[];
```

- *Type:* string[]

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression"></a>

```typescript
public readonly regularExpression: string;
```

- *Type:* string

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith"></a>

```typescript
public readonly replaceWith: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `startLength`<sup>Required</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength"></a>

```typescript
public readonly startLength: number;
```

- *Type:* number

---

##### `startPosition`<sup>Required</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition"></a>

```typescript
public readonly startPosition: number;
```

- *Type:* number

---

##### `startValue`<sup>Required</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue"></a>

```typescript
public readonly startValue: number;
```

- *Type:* number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userDefinedFunction`<sup>Required</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```typescript
public readonly userDefinedFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries">formatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries"></a>

```typescript
public readonly formatEntries: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sensitiveTypeIds`<sup>Required</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds"></a>

```typescript
public readonly sensitiveTypeIds: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a>

---



