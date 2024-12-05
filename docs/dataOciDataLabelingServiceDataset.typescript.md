# `dataOciDataLabelingServiceDataset` Submodule <a name="`dataOciDataLabelingServiceDataset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceDataset <a name="DataOciDataLabelingServiceDataset" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_dataset oci_data_labeling_service_dataset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset(scope: Construct, id: string, config: DataOciDataLabelingServiceDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig">DataOciDataLabelingServiceDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig">DataOciDataLabelingServiceDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceDataset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isConstruct"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformElement"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformDataSource"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataLabelingServiceDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataLabelingServiceDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataLabelingServiceDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.additionalProperties">additionalProperties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.annotationFormat">annotationFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetDatasetFormatDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetDatasetSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.labelingInstructions">labelingInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList">DataOciDataLabelingServiceDatasetLabelSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.lifecycleSubstate">lifecycleSubstate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.annotationFormat"></a>

```typescript
public readonly annotationFormat: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetFormatDetails"></a>

```typescript
public readonly datasetFormatDetails: DataOciDataLabelingServiceDatasetDatasetFormatDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetDatasetFormatDetailsList</a>

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetSourceDetails"></a>

```typescript
public readonly datasetSourceDetails: DataOciDataLabelingServiceDatasetDatasetSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetDatasetSourceDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialImportDatasetConfiguration`<sup>Required</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.initialImportDatasetConfiguration"></a>

```typescript
public readonly initialImportDatasetConfiguration: DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList</a>

---

##### `initialRecordGenerationConfiguration`<sup>Required</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.initialRecordGenerationConfiguration"></a>

```typescript
public readonly initialRecordGenerationConfiguration: DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList</a>

---

##### `labelingInstructions`<sup>Required</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.labelingInstructions"></a>

```typescript
public readonly labelingInstructions: string;
```

- *Type:* string

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.labelSet"></a>

```typescript
public readonly labelSet: DataOciDataLabelingServiceDatasetLabelSetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList">DataOciDataLabelingServiceDatasetLabelSetList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleSubstate`<sup>Required</sup> <a name="lifecycleSubstate" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.lifecycleSubstate"></a>

```typescript
public readonly lifecycleSubstate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceDatasetConfig <a name="DataOciDataLabelingServiceDatasetConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetConfig: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.datasetId">datasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_dataset#dataset_id DataOciDataLabelingServiceDataset#dataset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetConfig.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_dataset#dataset_id DataOciDataLabelingServiceDataset#dataset_id}.

---

### DataOciDataLabelingServiceDatasetDatasetFormatDetails <a name="DataOciDataLabelingServiceDatasetDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetails.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetDatasetFormatDetails: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetails = { ... }
```


### DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata <a name="DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata = { ... }
```


### DataOciDataLabelingServiceDatasetDatasetSourceDetails <a name="DataOciDataLabelingServiceDatasetDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetails.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetDatasetSourceDetails: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetails = { ... }
```


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration = { ... }
```


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat = { ... }
```


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath = { ... }
```


### DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration <a name="DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration = { ... }
```


### DataOciDataLabelingServiceDatasetLabelSet <a name="DataOciDataLabelingServiceDatasetLabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSet.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetLabelSet: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSet = { ... }
```


### DataOciDataLabelingServiceDatasetLabelSetItems <a name="DataOciDataLabelingServiceDatasetLabelSetItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItems.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceDatasetLabelSetItems: dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceDatasetDatasetFormatDetailsList <a name="DataOciDataLabelingServiceDatasetDatasetFormatDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">textFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetails">DataOciDataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `textFileTypeMetadata`<sup>Required</sup> <a name="textFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```typescript
public readonly textFileTypeMetadata: DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetDatasetFormatDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetails">DataOciDataLabelingServiceDatasetDatasetFormatDetails</a>

---


### DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList <a name="DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">columnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">columnIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">escapeCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">lineDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnDelimiter`<sup>Required</sup> <a name="columnDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```typescript
public readonly columnDelimiter: string;
```

- *Type:* string

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```typescript
public readonly columnIndex: number;
```

- *Type:* number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `escapeCharacter`<sup>Required</sup> <a name="escapeCharacter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```typescript
public readonly escapeCharacter: string;
```

- *Type:* string

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `lineDelimiter`<sup>Required</sup> <a name="lineDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```typescript
public readonly lineDelimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataOciDataLabelingServiceDatasetDatasetSourceDetailsList <a name="DataOciDataLabelingServiceDatasetDatasetSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetails">DataOciDataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetDatasetSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetDatasetSourceDetails">DataOciDataLabelingServiceDatasetDatasetSourceDetails</a>

---


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat">importFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">importMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importFormat`<sup>Required</sup> <a name="importFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```typescript
public readonly importFormat: DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatList</a>

---

##### `importMetadataPath`<sup>Required</sup> <a name="importMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```typescript
public readonly importMetadataPath: DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---


### DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList <a name="DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---


### DataOciDataLabelingServiceDatasetLabelSetItemsList <a name="DataOciDataLabelingServiceDatasetLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference <a name="DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItems">DataOciDataLabelingServiceDatasetLabelSetItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetLabelSetItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItems">DataOciDataLabelingServiceDatasetLabelSetItems</a>

---


### DataOciDataLabelingServiceDatasetLabelSetList <a name="DataOciDataLabelingServiceDatasetLabelSetList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceDatasetLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceDatasetLabelSetOutputReference <a name="DataOciDataLabelingServiceDatasetLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList">DataOciDataLabelingServiceDatasetLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSet">DataOciDataLabelingServiceDatasetLabelSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataLabelingServiceDatasetLabelSetItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetItemsList">DataOciDataLabelingServiceDatasetLabelSetItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceDatasetLabelSet;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDataset.DataOciDataLabelingServiceDatasetLabelSet">DataOciDataLabelingServiceDatasetLabelSet</a>

---



