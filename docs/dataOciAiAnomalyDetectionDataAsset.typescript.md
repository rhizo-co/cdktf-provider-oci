# `dataOciAiAnomalyDetectionDataAsset` Submodule <a name="`dataOciAiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDataAsset <a name="DataOciAiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset(scope: Construct, id: string, config: DataOciAiAnomalyDetectionDataAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig">DataOciAiAnomalyDetectionDataAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig">DataOciAiAnomalyDetectionDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetIdInput">dataAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetId">dataAssetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `dataAssetIdInput`<sup>Optional</sup> <a name="dataAssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetIdInput"></a>

```typescript
public readonly dataAssetIdInput: string;
```

- *Type:* string

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetId"></a>

```typescript
public readonly dataAssetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDataAssetConfig <a name="DataOciAiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDataAssetConfig: dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dataAssetId">dataAssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset#data_asset_id DataOciAiAnomalyDetectionDataAsset#data_asset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataAssetId`<sup>Required</sup> <a name="dataAssetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dataAssetId"></a>

```typescript
public readonly dataAssetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset#data_asset_id DataOciAiAnomalyDetectionDataAsset#data_asset_id}.

---

### DataOciAiAnomalyDetectionDataAssetDataSourceDetails <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDataAssetDataSourceDetails: dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails = { ... }
```


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails: dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">atpPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">atpUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">cwalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">ewalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">keyStoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">measurementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">ojdbcFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">tnsnamesFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">truststoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">versionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">walletPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atpPasswordSecretId`<sup>Required</sup> <a name="atpPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```typescript
public readonly atpPasswordSecretId: string;
```

- *Type:* string

---

##### `atpUserName`<sup>Required</sup> <a name="atpUserName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```typescript
public readonly atpUserName: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cwalletFileSecretId`<sup>Required</sup> <a name="cwalletFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```typescript
public readonly cwalletFileSecretId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `ewalletFileSecretId`<sup>Required</sup> <a name="ewalletFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```typescript
public readonly ewalletFileSecretId: string;
```

- *Type:* string

---

##### `keyStoreFileSecretId`<sup>Required</sup> <a name="keyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```typescript
public readonly keyStoreFileSecretId: string;
```

- *Type:* string

---

##### `measurementName`<sup>Required</sup> <a name="measurementName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```typescript
public readonly measurementName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `ojdbcFileSecretId`<sup>Required</sup> <a name="ojdbcFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```typescript
public readonly ojdbcFileSecretId: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tnsnamesFileSecretId`<sup>Required</sup> <a name="tnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```typescript
public readonly tnsnamesFileSecretId: string;
```

- *Type:* string

---

##### `truststoreFileSecretId`<sup>Required</sup> <a name="truststoreFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```typescript
public readonly truststoreFileSecretId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `versionSpecificDetails`<sup>Required</sup> <a name="versionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```typescript
public readonly versionSpecificDetails: DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList</a>

---

##### `walletPasswordSecretId`<sup>Required</sup> <a name="walletPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```typescript
public readonly walletPasswordSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDataAssetDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">influxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">retentionPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `influxVersion`<sup>Required</sup> <a name="influxVersion" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```typescript
public readonly influxVersion: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `retentionPolicyName`<sup>Required</sup> <a name="retentionPolicyName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```typescript
public readonly retentionPolicyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---



