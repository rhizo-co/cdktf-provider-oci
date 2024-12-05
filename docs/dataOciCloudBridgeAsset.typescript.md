# `dataOciCloudBridgeAsset` Submodule <a name="`dataOciCloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAsset <a name="DataOciCloudBridgeAsset" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAsset(scope: Construct, id: string, config: DataOciCloudBridgeAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig">DataOciCloudBridgeAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig">DataOciCloudBridgeAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudBridgeAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetSourceIds">assetSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList">DataOciCloudBridgeAssetComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.externalAssetKey">externalAssetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.inventoryId">inventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.sourceKey">sourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList">DataOciCloudBridgeAssetVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList">DataOciCloudBridgeAssetVmwareVcenterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList">DataOciCloudBridgeAssetVmwareVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assetSourceIds`<sup>Required</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetSourceIds"></a>

```typescript
public readonly assetSourceIds: string[];
```

- *Type:* string[]

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compute"></a>

```typescript
public readonly compute: DataOciCloudBridgeAssetComputeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList">DataOciCloudBridgeAssetComputeList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.externalAssetKey"></a>

```typescript
public readonly externalAssetKey: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.sourceKey"></a>

```typescript
public readonly sourceKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vm"></a>

```typescript
public readonly vm: DataOciCloudBridgeAssetVmList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList">DataOciCloudBridgeAssetVmList</a>

---

##### `vmwareVcenter`<sup>Required</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVcenter"></a>

```typescript
public readonly vmwareVcenter: DataOciCloudBridgeAssetVmwareVcenterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList">DataOciCloudBridgeAssetVmwareVcenterList</a>

---

##### `vmwareVm`<sup>Required</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVm"></a>

```typescript
public readonly vmwareVm: DataOciCloudBridgeAssetVmwareVmList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList">DataOciCloudBridgeAssetVmwareVmList</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetCompute <a name="DataOciCloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetCompute: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute = { ... }
```


### DataOciCloudBridgeAssetComputeDisks <a name="DataOciCloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetComputeDisks: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks = { ... }
```


### DataOciCloudBridgeAssetComputeGpuDevices <a name="DataOciCloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetComputeGpuDevices: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices = { ... }
```


### DataOciCloudBridgeAssetComputeNics <a name="DataOciCloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetComputeNics: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics = { ... }
```


### DataOciCloudBridgeAssetComputeNvdimmController <a name="DataOciCloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetComputeNvdimmController: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController = { ... }
```


### DataOciCloudBridgeAssetComputeNvdimms <a name="DataOciCloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetComputeNvdimms: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms = { ... }
```


### DataOciCloudBridgeAssetComputeScsiController <a name="DataOciCloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetComputeScsiController: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController = { ... }
```


### DataOciCloudBridgeAssetConfig <a name="DataOciCloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetConfig: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.assetId">assetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#asset_id DataOciCloudBridgeAsset#asset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#asset_id DataOciCloudBridgeAsset#asset_id}.

---

### DataOciCloudBridgeAssetVm <a name="DataOciCloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetVm: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm = { ... }
```


### DataOciCloudBridgeAssetVmwareVcenter <a name="DataOciCloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetVmwareVcenter: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter = { ... }
```


### DataOciCloudBridgeAssetVmwareVm <a name="DataOciCloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetVmwareVm: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm = { ... }
```


### DataOciCloudBridgeAssetVmwareVmCustomerTags <a name="DataOciCloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetVmwareVmCustomerTags: dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetComputeDisksList <a name="DataOciCloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeDisksOutputReference <a name="DataOciCloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.bootOrder">bootOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.persistentMode">persistentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">sizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuidLun">uuidLun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks">DataOciCloudBridgeAssetComputeDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```typescript
public readonly bootOrder: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `persistentMode`<sup>Required</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```typescript
public readonly persistentMode: string;
```

- *Type:* string

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```typescript
public readonly sizeInMbs: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `uuidLun`<sup>Required</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```typescript
public readonly uuidLun: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetComputeDisks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks">DataOciCloudBridgeAssetComputeDisks</a>

---


### DataOciCloudBridgeAssetComputeGpuDevicesList <a name="DataOciCloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeGpuDevicesOutputReference <a name="DataOciCloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices">DataOciCloudBridgeAssetComputeGpuDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetComputeGpuDevices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices">DataOciCloudBridgeAssetComputeGpuDevices</a>

---


### DataOciCloudBridgeAssetComputeList <a name="DataOciCloudBridgeAssetComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeNicsList <a name="DataOciCloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeNicsOutputReference <a name="DataOciCloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddressType">macAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.switchName">switchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics">DataOciCloudBridgeAssetComputeNics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `macAddressType`<sup>Required</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```typescript
public readonly macAddressType: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `switchName`<sup>Required</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```typescript
public readonly switchName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetComputeNics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics">DataOciCloudBridgeAssetComputeNics</a>

---


### DataOciCloudBridgeAssetComputeNvdimmControllerList <a name="DataOciCloudBridgeAssetComputeNvdimmControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference <a name="DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">busNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController">DataOciCloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `busNumber`<sup>Required</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```typescript
public readonly busNumber: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetComputeNvdimmController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController">DataOciCloudBridgeAssetComputeNvdimmController</a>

---


### DataOciCloudBridgeAssetComputeNvdimmsList <a name="DataOciCloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeNvdimmsOutputReference <a name="DataOciCloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">controllerKey</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms">DataOciCloudBridgeAssetComputeNvdimms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controllerKey`<sup>Required</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```typescript
public readonly controllerKey: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetComputeNvdimms;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms">DataOciCloudBridgeAssetComputeNvdimms</a>

---


### DataOciCloudBridgeAssetComputeOutputReference <a name="DataOciCloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.connectedNetworks">connectedNetworks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.cpuModel">cpuModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList">DataOciCloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disksCount">disksCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevices">gpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList">DataOciCloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.guestState">guestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hardwareVersion">hardwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isPmemEnabled">isPmemEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isTpmEnabled">isTpmEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList">DataOciCloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nicsCount">nicsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList">DataOciCloudBridgeAssetComputeNvdimmControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList">DataOciCloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.pmemInMbs">pmemInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.primaryIp">primaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList">DataOciCloudBridgeAssetComputeScsiControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute">DataOciCloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectedNetworks`<sup>Required</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```typescript
public readonly connectedNetworks: number;
```

- *Type:* number

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `cpuModel`<sup>Required</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```typescript
public readonly cpuModel: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disks"></a>

```typescript
public readonly disks: DataOciCloudBridgeAssetComputeDisksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList">DataOciCloudBridgeAssetComputeDisksList</a>

---

##### `disksCount`<sup>Required</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```typescript
public readonly disksCount: number;
```

- *Type:* number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `gpuDevices`<sup>Required</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```typescript
public readonly gpuDevices: DataOciCloudBridgeAssetComputeGpuDevicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList">DataOciCloudBridgeAssetComputeGpuDevicesList</a>

---

##### `gpuDevicesCount`<sup>Required</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```typescript
public readonly gpuDevicesCount: number;
```

- *Type:* number

---

##### `guestState`<sup>Required</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.guestState"></a>

```typescript
public readonly guestState: string;
```

- *Type:* string

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `isPmemEnabled`<sup>Required</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```typescript
public readonly isPmemEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTpmEnabled`<sup>Required</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```typescript
public readonly isTpmEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nics"></a>

```typescript
public readonly nics: DataOciCloudBridgeAssetComputeNicsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList">DataOciCloudBridgeAssetComputeNicsList</a>

---

##### `nicsCount`<sup>Required</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```typescript
public readonly nicsCount: number;
```

- *Type:* number

---

##### `nvdimmController`<sup>Required</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```typescript
public readonly nvdimmController: DataOciCloudBridgeAssetComputeNvdimmControllerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList">DataOciCloudBridgeAssetComputeNvdimmControllerList</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```typescript
public readonly nvdimms: DataOciCloudBridgeAssetComputeNvdimmsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList">DataOciCloudBridgeAssetComputeNvdimmsList</a>

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```typescript
public readonly operatingSystemVersion: string;
```

- *Type:* string

---

##### `pmemInMbs`<sup>Required</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```typescript
public readonly pmemInMbs: string;
```

- *Type:* string

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```typescript
public readonly primaryIp: string;
```

- *Type:* string

---

##### `scsiController`<sup>Required</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```typescript
public readonly scsiController: DataOciCloudBridgeAssetComputeScsiControllerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList">DataOciCloudBridgeAssetComputeScsiControllerList</a>

---

##### `storageProvisionedInMbs`<sup>Required</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```typescript
public readonly storageProvisionedInMbs: string;
```

- *Type:* string

---

##### `threadsPerCoreCount`<sup>Required</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```typescript
public readonly threadsPerCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute">DataOciCloudBridgeAssetCompute</a>

---


### DataOciCloudBridgeAssetComputeScsiControllerList <a name="DataOciCloudBridgeAssetComputeScsiControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetComputeScsiControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetComputeScsiControllerOutputReference <a name="DataOciCloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">sharedBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController">DataOciCloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `sharedBus`<sup>Required</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```typescript
public readonly sharedBus: string;
```

- *Type:* string

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetComputeScsiController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController">DataOciCloudBridgeAssetComputeScsiController</a>

---


### DataOciCloudBridgeAssetVmList <a name="DataOciCloudBridgeAssetVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetVmOutputReference <a name="DataOciCloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorHost">hypervisorHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVendor">hypervisorVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVersion">hypervisorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm">DataOciCloudBridgeAssetVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hypervisorHost`<sup>Required</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```typescript
public readonly hypervisorHost: string;
```

- *Type:* string

---

##### `hypervisorVendor`<sup>Required</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```typescript
public readonly hypervisorVendor: string;
```

- *Type:* string

---

##### `hypervisorVersion`<sup>Required</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```typescript
public readonly hypervisorVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm">DataOciCloudBridgeAssetVm</a>

---


### DataOciCloudBridgeAssetVmwareVcenterList <a name="DataOciCloudBridgeAssetVmwareVcenterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetVmwareVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetVmwareVcenterOutputReference <a name="DataOciCloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">vcenterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">vcenterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter">DataOciCloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `vcenterKey`<sup>Required</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```typescript
public readonly vcenterKey: string;
```

- *Type:* string

---

##### `vcenterVersion`<sup>Required</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```typescript
public readonly vcenterVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetVmwareVcenter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter">DataOciCloudBridgeAssetVmwareVcenter</a>

---


### DataOciCloudBridgeAssetVmwareVmCustomerTagsList <a name="DataOciCloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags">DataOciCloudBridgeAssetVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetVmwareVmCustomerTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags">DataOciCloudBridgeAssetVmwareVmCustomerTags</a>

---


### DataOciCloudBridgeAssetVmwareVmList <a name="DataOciCloudBridgeAssetVmwareVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetVmwareVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetVmwareVmOutputReference <a name="DataOciCloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerFields">customerFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerTags">customerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList">DataOciCloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">faultToleranceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">instanceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm">DataOciCloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `customerFields`<sup>Required</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```typescript
public readonly customerFields: string[];
```

- *Type:* string[]

---

##### `customerTags`<sup>Required</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```typescript
public readonly customerTags: DataOciCloudBridgeAssetVmwareVmCustomerTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList">DataOciCloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `faultToleranceBandwidth`<sup>Required</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```typescript
public readonly faultToleranceBandwidth: number;
```

- *Type:* number

---

##### `faultToleranceSecondaryLatency`<sup>Required</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```typescript
public readonly faultToleranceSecondaryLatency: number;
```

- *Type:* number

---

##### `faultToleranceState`<sup>Required</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```typescript
public readonly faultToleranceState: string;
```

- *Type:* string

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```typescript
public readonly instanceUuid: string;
```

- *Type:* string

---

##### `isDisksCbtEnabled`<sup>Required</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```typescript
public readonly isDisksCbtEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDisksUuidEnabled`<sup>Required</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```typescript
public readonly isDisksUuidEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```typescript
public readonly vmwareToolsStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetVmwareVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm">DataOciCloudBridgeAssetVmwareVm</a>

---



