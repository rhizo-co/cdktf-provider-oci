# `dataOciDataSafeLibraryMaskingFormat` Submodule <a name="`dataOciDataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormat <a name="DataOciDataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat(scope: Construct, id: string, config: DataOciDataSafeLibraryMaskingFormatConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig">DataOciDataSafeLibraryMaskingFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig">DataOciDataSafeLibraryMaskingFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries">formatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput">libraryMaskingFormatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries"></a>

```typescript
public readonly formatEntries: DataOciDataSafeLibraryMaskingFormatFormatEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sensitiveTypeIds`<sup>Required</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```typescript
public readonly sensitiveTypeIds: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `libraryMaskingFormatIdInput`<sup>Optional</sup> <a name="libraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput"></a>

```typescript
public readonly libraryMaskingFormatIdInput: string;
```

- *Type:* string

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatConfig <a name="DataOciDataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatConfig: dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}.

---

### DataOciDataSafeLibraryMaskingFormatFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeLibraryMaskingFormatFormatEntries: dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```typescript
public get(index: number): DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">endLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">endValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">fixedNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">fixedString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">groupingColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">postProcessingFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">randomList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">regularExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">replaceWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">startLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">startPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">startValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">userDefinedFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endLength`<sup>Required</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```typescript
public readonly endLength: number;
```

- *Type:* number

---

##### `endValue`<sup>Required</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```typescript
public readonly endValue: number;
```

- *Type:* number

---

##### `fixedNumber`<sup>Required</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```typescript
public readonly fixedNumber: number;
```

- *Type:* number

---

##### `fixedString`<sup>Required</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```typescript
public readonly fixedString: string;
```

- *Type:* string

---

##### `groupingColumns`<sup>Required</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```typescript
public readonly groupingColumns: string[];
```

- *Type:* string[]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `postProcessingFunction`<sup>Required</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```typescript
public readonly postProcessingFunction: string;
```

- *Type:* string

---

##### `randomList`<sup>Required</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```typescript
public readonly randomList: string[];
```

- *Type:* string[]

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```typescript
public readonly regularExpression: string;
```

- *Type:* string

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```typescript
public readonly replaceWith: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `startLength`<sup>Required</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```typescript
public readonly startLength: number;
```

- *Type:* number

---

##### `startPosition`<sup>Required</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```typescript
public readonly startPosition: number;
```

- *Type:* number

---

##### `startValue`<sup>Required</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```typescript
public readonly startValue: number;
```

- *Type:* number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userDefinedFunction`<sup>Required</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```typescript
public readonly userDefinedFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeLibraryMaskingFormatFormatEntries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a>

---



