# `dataOciDatabaseVmClusterNetwork` Submodule <a name="`dataOciDatabaseVmClusterNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterNetwork <a name="DataOciDatabaseVmClusterNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network oci_database_vm_cluster_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork(scope: Construct, id: string, config: DataOciDatabaseVmClusterNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig">DataOciDatabaseVmClusterNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig">DataOciDatabaseVmClusterNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isConstruct"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformElement"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseVmClusterNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseVmClusterNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.dns">dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.drScans">drScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList">DataOciDatabaseVmClusterNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.ntp">ntp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList">DataOciDatabaseVmClusterNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.validateVmClusterNetwork">validateVmClusterNetwork</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmNetworks">vmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList">DataOciDatabaseVmClusterNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmClusterNetworkIdInput">vmClusterNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

---

##### `drScans`<sup>Required</sup> <a name="drScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.drScans"></a>

```typescript
public readonly drScans: DataOciDatabaseVmClusterNetworkDrScansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList">DataOciDatabaseVmClusterNetworkDrScansList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.ntp"></a>

```typescript
public readonly ntp: string[];
```

- *Type:* string[]

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.scans"></a>

```typescript
public readonly scans: DataOciDatabaseVmClusterNetworkScansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList">DataOciDatabaseVmClusterNetworkScansList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `validateVmClusterNetwork`<sup>Required</sup> <a name="validateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.validateVmClusterNetwork"></a>

```typescript
public readonly validateVmClusterNetwork: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

---

##### `vmNetworks`<sup>Required</sup> <a name="vmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmNetworks"></a>

```typescript
public readonly vmNetworks: DataOciDatabaseVmClusterNetworkVmNetworksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList">DataOciDatabaseVmClusterNetworkVmNetworksList</a>

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.exadataInfrastructureIdInput"></a>

```typescript
public readonly exadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `vmClusterNetworkIdInput`<sup>Optional</sup> <a name="vmClusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmClusterNetworkIdInput"></a>

```typescript
public readonly vmClusterNetworkIdInput: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterNetworkConfig <a name="DataOciDatabaseVmClusterNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterNetworkConfig: dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network#exadata_infrastructure_id DataOciDatabaseVmClusterNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network#vm_cluster_network_id DataOciDatabaseVmClusterNetwork#vm_cluster_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network#exadata_infrastructure_id DataOciDatabaseVmClusterNetwork#exadata_infrastructure_id}.

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkConfig.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network#vm_cluster_network_id DataOciDatabaseVmClusterNetwork#vm_cluster_network_id}.

---

### DataOciDatabaseVmClusterNetworkDrScans <a name="DataOciDatabaseVmClusterNetworkDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScans.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterNetworkDrScans: dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScans = { ... }
```


### DataOciDatabaseVmClusterNetworkScans <a name="DataOciDatabaseVmClusterNetworkScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScans.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterNetworkScans: dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScans = { ... }
```


### DataOciDatabaseVmClusterNetworkVmNetworks <a name="DataOciDatabaseVmClusterNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworks.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterNetworkVmNetworks: dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworks = { ... }
```


### DataOciDatabaseVmClusterNetworkVmNetworksNodes <a name="DataOciDatabaseVmClusterNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodes.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterNetworkVmNetworksNodes: dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterNetworkDrScansList <a name="DataOciDatabaseVmClusterNetworkDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterNetworkDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterNetworkDrScansOutputReference <a name="DataOciDatabaseVmClusterNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScans">DataOciDatabaseVmClusterNetworkDrScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterNetworkDrScans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkDrScans">DataOciDatabaseVmClusterNetworkDrScans</a>

---


### DataOciDatabaseVmClusterNetworkScansList <a name="DataOciDatabaseVmClusterNetworkScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterNetworkScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterNetworkScansOutputReference <a name="DataOciDatabaseVmClusterNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScans">DataOciDatabaseVmClusterNetworkScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterNetworkScans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkScans">DataOciDatabaseVmClusterNetworkScans</a>

---


### DataOciDatabaseVmClusterNetworkVmNetworksList <a name="DataOciDatabaseVmClusterNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterNetworkVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterNetworkVmNetworksNodesList <a name="DataOciDatabaseVmClusterNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname">vipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodes">DataOciDatabaseVmClusterNetworkVmNetworksNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip"></a>

```typescript
public readonly vip: string;
```

- *Type:* string

---

##### `vipHostname`<sup>Required</sup> <a name="vipHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```typescript
public readonly vipHostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterNetworkVmNetworksNodes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodes">DataOciDatabaseVmClusterNetworkVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterNetworkVmNetworksOutputReference <a name="DataOciDatabaseVmClusterNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList">DataOciDatabaseVmClusterNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworks">DataOciDatabaseVmClusterNetworkVmNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes"></a>

```typescript
public readonly nodes: DataOciDatabaseVmClusterNetworkVmNetworksNodesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksNodesList">DataOciDatabaseVmClusterNetworkVmNetworksNodesList</a>

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterNetworkVmNetworks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetwork.DataOciDatabaseVmClusterNetworkVmNetworks">DataOciDatabaseVmClusterNetworkVmNetworks</a>

---



