# `dataOciCoreComputeImageCapabilitySchema` Submodule <a name="`dataOciCoreComputeImageCapabilitySchema` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeImageCapabilitySchema <a name="DataOciCoreComputeImageCapabilitySchema" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema oci_core_compute_image_capability_schema}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer"></a>

```typescript
import { dataOciCoreComputeImageCapabilitySchema } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema(scope: Construct, id: string, config: DataOciCoreComputeImageCapabilitySchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig">DataOciCoreComputeImageCapabilitySchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig">DataOciCoreComputeImageCapabilitySchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetIsMergeEnabled">resetIsMergeEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetIsMergeEnabled` <a name="resetIsMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetIsMergeEnabled"></a>

```typescript
public resetIsMergeEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct"></a>

```typescript
import { dataOciCoreComputeImageCapabilitySchema } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeImageCapabilitySchema } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeImageCapabilitySchema } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeImageCapabilitySchema } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeImageCapabilitySchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeImageCapabilitySchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeImageCapabilitySchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaId">computeGlobalImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaVersionName">computeGlobalImageCapabilitySchemaVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.schemaData">schemaData</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaIdInput">computeImageCapabilitySchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabledInput">isMergeEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaId">computeImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabled">isMergeEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaId"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaId: string;
```

- *Type:* string

---

##### `computeGlobalImageCapabilitySchemaVersionName`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaVersionName"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaVersionName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `schemaData`<sup>Required</sup> <a name="schemaData" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.schemaData"></a>

```typescript
public readonly schemaData: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `computeImageCapabilitySchemaIdInput`<sup>Optional</sup> <a name="computeImageCapabilitySchemaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaIdInput"></a>

```typescript
public readonly computeImageCapabilitySchemaIdInput: string;
```

- *Type:* string

---

##### `isMergeEnabledInput`<sup>Optional</sup> <a name="isMergeEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabledInput"></a>

```typescript
public readonly isMergeEnabledInput: string;
```

- *Type:* string

---

##### `computeImageCapabilitySchemaId`<sup>Required</sup> <a name="computeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaId"></a>

```typescript
public readonly computeImageCapabilitySchemaId: string;
```

- *Type:* string

---

##### `isMergeEnabled`<sup>Required</sup> <a name="isMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabled"></a>

```typescript
public readonly isMergeEnabled: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeImageCapabilitySchemaConfig <a name="DataOciCoreComputeImageCapabilitySchemaConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeImageCapabilitySchema } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeImageCapabilitySchemaConfig: dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.computeImageCapabilitySchemaId">computeImageCapabilitySchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.isMergeEnabled">isMergeEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeImageCapabilitySchemaId`<sup>Required</sup> <a name="computeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.computeImageCapabilitySchemaId"></a>

```typescript
public readonly computeImageCapabilitySchemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}.

---

##### `isMergeEnabled`<sup>Optional</sup> <a name="isMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.isMergeEnabled"></a>

```typescript
public readonly isMergeEnabled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}.

---



