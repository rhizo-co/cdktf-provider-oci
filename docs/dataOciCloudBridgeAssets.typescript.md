# `dataOciCloudBridgeAssets` Submodule <a name="`dataOciCloudBridgeAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAssets <a name="DataOciCloudBridgeAssets" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets oci_cloud_bridge_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssets(scope: Construct, id: string, config: DataOciCloudBridgeAssetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig">DataOciCloudBridgeAssetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig">DataOciCloudBridgeAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetId">resetAssetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetType">resetAssetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetExternalAssetKey">resetExternalAssetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetInventoryId">resetInventoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetSourceKey">resetSourceKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudBridgeAssetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]

---

##### `resetAssetId` <a name="resetAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetId"></a>

```typescript
public resetAssetId(): void
```

##### `resetAssetType` <a name="resetAssetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetType"></a>

```typescript
public resetAssetType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalAssetKey` <a name="resetExternalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetExternalAssetKey"></a>

```typescript
public resetExternalAssetKey(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInventoryId` <a name="resetInventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetInventoryId"></a>

```typescript
public resetInventoryId(): void
```

##### `resetSourceKey` <a name="resetSourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetSourceKey"></a>

```typescript
public resetSourceKey(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAssets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudBridgeAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudBridgeAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudBridgeAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetCollection">assetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList">DataOciCloudBridgeAssetsAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList">DataOciCloudBridgeAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetTypeInput">assetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKeyInput">externalAssetKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryIdInput">inventoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKeyInput">sourceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKey">externalAssetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryId">inventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKey">sourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assetCollection`<sup>Required</sup> <a name="assetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetCollection"></a>

```typescript
public readonly assetCollection: DataOciCloudBridgeAssetsAssetCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList">DataOciCloudBridgeAssetsAssetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filter"></a>

```typescript
public readonly filter: DataOciCloudBridgeAssetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList">DataOciCloudBridgeAssetsFilterList</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetTypeInput"></a>

```typescript
public readonly assetTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalAssetKeyInput`<sup>Optional</sup> <a name="externalAssetKeyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKeyInput"></a>

```typescript
public readonly externalAssetKeyInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudBridgeAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inventoryIdInput`<sup>Optional</sup> <a name="inventoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryIdInput"></a>

```typescript
public readonly inventoryIdInput: string;
```

- *Type:* string

---

##### `sourceKeyInput`<sup>Optional</sup> <a name="sourceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKeyInput"></a>

```typescript
public readonly sourceKeyInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKey"></a>

```typescript
public readonly externalAssetKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKey"></a>

```typescript
public readonly sourceKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetsAssetCollection <a name="DataOciCloudBridgeAssetsAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollection: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItems <a name="DataOciCloudBridgeAssetsAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItems: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsCompute <a name="DataOciCloudBridgeAssetsAssetCollectionItemsCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsCompute: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsComputeNics: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVm <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsVm: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm = { ... }
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags = { ... }
```


### DataOciCloudBridgeAssetsConfig <a name="DataOciCloudBridgeAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsConfig: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetId">assetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetType">assetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.externalAssetKey">externalAssetKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.inventoryId">inventoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.sourceKey">sourceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}.

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}.

---

##### `assetType`<sup>Optional</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}.

---

##### `externalAssetKey`<sup>Optional</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.externalAssetKey"></a>

```typescript
public readonly externalAssetKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudBridgeAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#filter DataOciCloudBridgeAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inventoryId`<sup>Optional</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}.

---

##### `sourceKey`<sup>Optional</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.sourceKey"></a>

```typescript
public readonly sourceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}.

---

### DataOciCloudBridgeAssetsFilter <a name="DataOciCloudBridgeAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetsFilter: dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#name DataOciCloudBridgeAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#values DataOciCloudBridgeAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#regex DataOciCloudBridgeAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#name DataOciCloudBridgeAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#values DataOciCloudBridgeAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#regex DataOciCloudBridgeAssets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.bootOrder">bootOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.persistentMode">persistentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.sizeInMbs">sizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuidLun">uuidLun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.bootOrder"></a>

```typescript
public readonly bootOrder: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `persistentMode`<sup>Required</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.persistentMode"></a>

```typescript
public readonly persistentMode: string;
```

- *Type:* string

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.sizeInMbs"></a>

```typescript
public readonly sizeInMbs: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `uuidLun`<sup>Required</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuidLun"></a>

```typescript
public readonly uuidLun: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddressType">macAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.switchName">switchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `macAddressType`<sup>Required</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddressType"></a>

```typescript
public readonly macAddressType: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `switchName`<sup>Required</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.switchName"></a>

```typescript
public readonly switchName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.busNumber">busNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `busNumber`<sup>Required</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.busNumber"></a>

```typescript
public readonly busNumber: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.controllerKey">controllerKey</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controllerKey`<sup>Required</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.controllerKey"></a>

```typescript
public readonly controllerKey: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.connectedNetworks">connectedNetworks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.cpuModel">cpuModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disksCount">disksCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevices">gpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.guestState">guestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hardwareVersion">hardwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isPmemEnabled">isPmemEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isTpmEnabled">isTpmEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nicsCount">nicsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.pmemInMbs">pmemInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.primaryIp">primaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute">DataOciCloudBridgeAssetsAssetCollectionItemsCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectedNetworks`<sup>Required</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.connectedNetworks"></a>

```typescript
public readonly connectedNetworks: number;
```

- *Type:* number

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `cpuModel`<sup>Required</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.cpuModel"></a>

```typescript
public readonly cpuModel: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disks"></a>

```typescript
public readonly disks: DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList</a>

---

##### `disksCount`<sup>Required</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disksCount"></a>

```typescript
public readonly disksCount: number;
```

- *Type:* number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `gpuDevices`<sup>Required</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevices"></a>

```typescript
public readonly gpuDevices: DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList</a>

---

##### `gpuDevicesCount`<sup>Required</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevicesCount"></a>

```typescript
public readonly gpuDevicesCount: number;
```

- *Type:* number

---

##### `guestState`<sup>Required</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.guestState"></a>

```typescript
public readonly guestState: string;
```

- *Type:* string

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `isPmemEnabled`<sup>Required</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isPmemEnabled"></a>

```typescript
public readonly isPmemEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTpmEnabled`<sup>Required</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isTpmEnabled"></a>

```typescript
public readonly isTpmEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nics"></a>

```typescript
public readonly nics: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList</a>

---

##### `nicsCount`<sup>Required</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nicsCount"></a>

```typescript
public readonly nicsCount: number;
```

- *Type:* number

---

##### `nvdimmController`<sup>Required</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimmController"></a>

```typescript
public readonly nvdimmController: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimms"></a>

```typescript
public readonly nvdimms: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList</a>

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystemVersion"></a>

```typescript
public readonly operatingSystemVersion: string;
```

- *Type:* string

---

##### `pmemInMbs`<sup>Required</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.pmemInMbs"></a>

```typescript
public readonly pmemInMbs: string;
```

- *Type:* string

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.primaryIp"></a>

```typescript
public readonly primaryIp: string;
```

- *Type:* string

---

##### `scsiController`<sup>Required</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.scsiController"></a>

```typescript
public readonly scsiController: DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList</a>

---

##### `storageProvisionedInMbs`<sup>Required</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.storageProvisionedInMbs"></a>

```typescript
public readonly storageProvisionedInMbs: string;
```

- *Type:* string

---

##### `threadsPerCoreCount`<sup>Required</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.threadsPerCoreCount"></a>

```typescript
public readonly threadsPerCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute">DataOciCloudBridgeAssetsAssetCollectionItemsCompute</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.sharedBus">sharedBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `sharedBus`<sup>Required</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.sharedBus"></a>

```typescript
public readonly sharedBus: string;
```

- *Type:* string

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetSourceIds">assetSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.externalAssetKey">externalAssetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.inventoryId">inventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.sourceKey">sourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems">DataOciCloudBridgeAssetsAssetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assetSourceIds`<sup>Required</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetSourceIds"></a>

```typescript
public readonly assetSourceIds: string[];
```

- *Type:* string[]

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compute"></a>

```typescript
public readonly compute: DataOciCloudBridgeAssetsAssetCollectionItemsComputeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.externalAssetKey"></a>

```typescript
public readonly externalAssetKey: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.sourceKey"></a>

```typescript
public readonly sourceKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vm"></a>

```typescript
public readonly vm: DataOciCloudBridgeAssetsAssetCollectionItemsVmList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmList</a>

---

##### `vmwareVcenter`<sup>Required</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVcenter"></a>

```typescript
public readonly vmwareVcenter: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList</a>

---

##### `vmwareVm`<sup>Required</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVm"></a>

```typescript
public readonly vmwareVm: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems">DataOciCloudBridgeAssetsAssetCollectionItems</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorHost">hypervisorHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVendor">hypervisorVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVersion">hypervisorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm">DataOciCloudBridgeAssetsAssetCollectionItemsVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hypervisorHost`<sup>Required</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorHost"></a>

```typescript
public readonly hypervisorHost: string;
```

- *Type:* string

---

##### `hypervisorVendor`<sup>Required</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVendor"></a>

```typescript
public readonly hypervisorVendor: string;
```

- *Type:* string

---

##### `hypervisorVersion`<sup>Required</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVersion"></a>

```typescript
public readonly hypervisorVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm">DataOciCloudBridgeAssetsAssetCollectionItemsVm</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterKey">vcenterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterVersion">vcenterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `vcenterKey`<sup>Required</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterKey"></a>

```typescript
public readonly vcenterKey: string;
```

- *Type:* string

---

##### `vcenterVersion`<sup>Required</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterVersion"></a>

```typescript
public readonly vcenterVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerFields">customerFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerTags">customerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceState">faultToleranceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.instanceUuid">instanceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `customerFields`<sup>Required</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerFields"></a>

```typescript
public readonly customerFields: string[];
```

- *Type:* string[]

---

##### `customerTags`<sup>Required</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerTags"></a>

```typescript
public readonly customerTags: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList</a>

---

##### `faultToleranceBandwidth`<sup>Required</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```typescript
public readonly faultToleranceBandwidth: number;
```

- *Type:* number

---

##### `faultToleranceSecondaryLatency`<sup>Required</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```typescript
public readonly faultToleranceSecondaryLatency: number;
```

- *Type:* number

---

##### `faultToleranceState`<sup>Required</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceState"></a>

```typescript
public readonly faultToleranceState: string;
```

- *Type:* string

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.instanceUuid"></a>

```typescript
public readonly instanceUuid: string;
```

- *Type:* string

---

##### `isDisksCbtEnabled`<sup>Required</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```typescript
public readonly isDisksCbtEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDisksUuidEnabled`<sup>Required</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```typescript
public readonly isDisksUuidEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```typescript
public readonly vmwareToolsStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm</a>

---


### DataOciCloudBridgeAssetsAssetCollectionList <a name="DataOciCloudBridgeAssetsAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsAssetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetsAssetCollectionOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList">DataOciCloudBridgeAssetsAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection">DataOciCloudBridgeAssetsAssetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudBridgeAssetsAssetCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList">DataOciCloudBridgeAssetsAssetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetsAssetCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection">DataOciCloudBridgeAssetsAssetCollection</a>

---


### DataOciCloudBridgeAssetsFilterList <a name="DataOciCloudBridgeAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudBridgeAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>[]

---


### DataOciCloudBridgeAssetsFilterOutputReference <a name="DataOciCloudBridgeAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudBridgeAssetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>

---



