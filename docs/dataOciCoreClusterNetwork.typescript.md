# `dataOciCoreClusterNetwork` Submodule <a name="`dataOciCoreClusterNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreClusterNetwork <a name="DataOciCoreClusterNetwork" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network oci_core_cluster_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetwork(scope: Construct, id: string, config: DataOciCoreClusterNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig">DataOciCoreClusterNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig">DataOciCoreClusterNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreClusterNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreClusterNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreClusterNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreClusterNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreClusterNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterConfiguration">clusterConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList">DataOciCoreClusterNetworkClusterConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.hpcIslandId">hpcIslandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.instancePools">instancePools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList">DataOciCoreClusterNetworkInstancePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.networkBlockIds">networkBlockIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.placementConfiguration">placementConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList">DataOciCoreClusterNetworkPlacementConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkIdInput">clusterNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkId">clusterNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clusterConfiguration`<sup>Required</sup> <a name="clusterConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterConfiguration"></a>

```typescript
public readonly clusterConfiguration: DataOciCoreClusterNetworkClusterConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList">DataOciCoreClusterNetworkClusterConfigurationList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hpcIslandId`<sup>Required</sup> <a name="hpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.hpcIslandId"></a>

```typescript
public readonly hpcIslandId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instancePools`<sup>Required</sup> <a name="instancePools" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.instancePools"></a>

```typescript
public readonly instancePools: DataOciCoreClusterNetworkInstancePoolsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList">DataOciCoreClusterNetworkInstancePoolsList</a>

---

##### `networkBlockIds`<sup>Required</sup> <a name="networkBlockIds" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.networkBlockIds"></a>

```typescript
public readonly networkBlockIds: string[];
```

- *Type:* string[]

---

##### `placementConfiguration`<sup>Required</sup> <a name="placementConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.placementConfiguration"></a>

```typescript
public readonly placementConfiguration: DataOciCoreClusterNetworkPlacementConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList">DataOciCoreClusterNetworkPlacementConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `clusterNetworkIdInput`<sup>Optional</sup> <a name="clusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkIdInput"></a>

```typescript
public readonly clusterNetworkIdInput: string;
```

- *Type:* string

---

##### `clusterNetworkId`<sup>Required</sup> <a name="clusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.clusterNetworkId"></a>

```typescript
public readonly clusterNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreClusterNetworkClusterConfiguration <a name="DataOciCoreClusterNetworkClusterConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkClusterConfiguration: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration = { ... }
```


### DataOciCoreClusterNetworkConfig <a name="DataOciCoreClusterNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkConfig: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.clusterNetworkId">clusterNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#cluster_network_id DataOciCoreClusterNetwork#cluster_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterNetworkId`<sup>Required</sup> <a name="clusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkConfig.property.clusterNetworkId"></a>

```typescript
public readonly clusterNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network#cluster_network_id DataOciCoreClusterNetwork#cluster_network_id}.

---

### DataOciCoreClusterNetworkInstancePools <a name="DataOciCoreClusterNetworkInstancePools" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePools: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools = { ... }
```


### DataOciCoreClusterNetworkInstancePoolsLoadBalancers <a name="DataOciCoreClusterNetworkInstancePoolsLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePoolsLoadBalancers: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers = { ... }
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePoolsPlacementConfigurations: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations = { ... }
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets = { ... }
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails = { ... }
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets = { ... }
```


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails = { ... }
```


### DataOciCoreClusterNetworkPlacementConfiguration <a name="DataOciCoreClusterNetworkPlacementConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkPlacementConfiguration: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration = { ... }
```


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets = { ... }
```


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails = { ... }
```


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets = { ... }
```


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails: dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreClusterNetworkClusterConfigurationList <a name="DataOciCoreClusterNetworkClusterConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkClusterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkClusterConfigurationOutputReference <a name="DataOciCoreClusterNetworkClusterConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.hpcIslandId">hpcIslandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.networkBlockIds">networkBlockIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration">DataOciCoreClusterNetworkClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hpcIslandId`<sup>Required</sup> <a name="hpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.hpcIslandId"></a>

```typescript
public readonly hpcIslandId: string;
```

- *Type:* string

---

##### `networkBlockIds`<sup>Required</sup> <a name="networkBlockIds" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.networkBlockIds"></a>

```typescript
public readonly networkBlockIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkClusterConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkClusterConfiguration">DataOciCoreClusterNetworkClusterConfiguration</a>

---


### DataOciCoreClusterNetworkInstancePoolsList <a name="DataOciCoreClusterNetworkInstancePoolsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsLoadBalancersList <a name="DataOciCoreClusterNetworkInstancePoolsLoadBalancersList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.backendSetName">backendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.vnicSelection">vnicSelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers">DataOciCoreClusterNetworkInstancePoolsLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.backendSetName"></a>

```typescript
public readonly backendSetName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vnicSelection`<sup>Required</sup> <a name="vnicSelection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.vnicSelection"></a>

```typescript
public readonly vnicSelection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePoolsLoadBalancers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancers">DataOciCoreClusterNetworkInstancePoolsLoadBalancers</a>

---


### DataOciCoreClusterNetworkInstancePoolsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceDisplayNameFormatter">instanceDisplayNameFormatter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceHostnameFormatter">instanceHostnameFormatter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.loadBalancers">loadBalancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList">DataOciCoreClusterNetworkInstancePoolsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools">DataOciCoreClusterNetworkInstancePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceConfigurationId"></a>

```typescript
public readonly instanceConfigurationId: string;
```

- *Type:* string

---

##### `instanceDisplayNameFormatter`<sup>Required</sup> <a name="instanceDisplayNameFormatter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceDisplayNameFormatter"></a>

```typescript
public readonly instanceDisplayNameFormatter: string;
```

- *Type:* string

---

##### `instanceHostnameFormatter`<sup>Required</sup> <a name="instanceHostnameFormatter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.instanceHostnameFormatter"></a>

```typescript
public readonly instanceHostnameFormatter: string;
```

- *Type:* string

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: DataOciCoreClusterNetworkInstancePoolsLoadBalancersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsLoadBalancersList">DataOciCoreClusterNetworkInstancePoolsLoadBalancersList</a>

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.placementConfigurations"></a>

```typescript
public readonly placementConfigurations: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePools;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePools">DataOciCoreClusterNetworkInstancePools</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.faultDomains">faultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primarySubnetId">primarySubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primaryVnicSubnets">primaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.secondaryVnicSubnets">secondaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.faultDomains"></a>

```typescript
public readonly faultDomains: string[];
```

- *Type:* string[]

---

##### `primarySubnetId`<sup>Required</sup> <a name="primarySubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primarySubnetId"></a>

```typescript
public readonly primarySubnetId: string;
```

- *Type:* string

---

##### `primaryVnicSubnets`<sup>Required</sup> <a name="primaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.primaryVnicSubnets"></a>

```typescript
public readonly primaryVnicSubnets: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList</a>

---

##### `secondaryVnicSubnets`<sup>Required</sup> <a name="secondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.secondaryVnicSubnets"></a>

```typescript
public readonly secondaryVnicSubnets: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```typescript
public readonly isAssignIpv6Ip: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```typescript
public readonly isAssignIpv6Ip: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets">DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationList <a name="DataOciCoreClusterNetworkPlacementConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkPlacementConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkPlacementConfigurationOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.placementConstraint">placementConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primarySubnetId">primarySubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primaryVnicSubnets">primaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.secondaryVnicSubnets">secondaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration">DataOciCoreClusterNetworkPlacementConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `placementConstraint`<sup>Required</sup> <a name="placementConstraint" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.placementConstraint"></a>

```typescript
public readonly placementConstraint: string;
```

- *Type:* string

---

##### `primarySubnetId`<sup>Required</sup> <a name="primarySubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primarySubnetId"></a>

```typescript
public readonly primarySubnetId: string;
```

- *Type:* string

---

##### `primaryVnicSubnets`<sup>Required</sup> <a name="primaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.primaryVnicSubnets"></a>

```typescript
public readonly primaryVnicSubnets: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList</a>

---

##### `secondaryVnicSubnets`<sup>Required</sup> <a name="secondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.secondaryVnicSubnets"></a>

```typescript
public readonly secondaryVnicSubnets: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkPlacementConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfiguration">DataOciCoreClusterNetworkPlacementConfiguration</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```typescript
public readonly isAssignIpv6Ip: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.get"></a>

```typescript
public get(index: number): DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```typescript
public readonly isAssignIpv6Ip: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetwork.DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets">DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets</a>

---



