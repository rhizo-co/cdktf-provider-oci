# `dataOciDatabaseVmClusterRecommendedNetwork` Submodule <a name="`dataOciDatabaseVmClusterRecommendedNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterRecommendedNetwork <a name="DataOciDatabaseVmClusterRecommendedNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network oci_database_vm_cluster_recommended_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork(scope: Construct, id: string, config: DataOciDatabaseVmClusterRecommendedNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig">DataOciDatabaseVmClusterRecommendedNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig">DataOciDatabaseVmClusterRecommendedNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp">resetDrScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp">resetNtp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl">resetScanListenerPortTcpSsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNetworks` <a name="putNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | DataOciDatabaseVmClusterRecommendedNetworkNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]

---

##### `resetDbServers` <a name="resetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers"></a>

```typescript
public resetDbServers(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetDrScanListenerPortTcp` <a name="resetDrScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp"></a>

```typescript
public resetDrScanListenerPortTcp(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNtp` <a name="resetNtp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp"></a>

```typescript
public resetNtp(): void
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp"></a>

```typescript
public resetScanListenerPortTcp(): void
```

##### `resetScanListenerPortTcpSsl` <a name="resetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl"></a>

```typescript
public resetScanListenerPortTcpSsl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseVmClusterRecommendedNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseVmClusterRecommendedNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterRecommendedNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans">drScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks">networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks">vmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput">dnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput">drScanListenerPortTcpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput">ntpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput">scanListenerPortTcpSslInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns">dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp">drScanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp">ntp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `drScans`<sup>Required</sup> <a name="drScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans"></a>

```typescript
public readonly drScans: DataOciDatabaseVmClusterRecommendedNetworkDrScansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks"></a>

```typescript
public readonly networks: DataOciDatabaseVmClusterRecommendedNetworkNetworksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a>

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans"></a>

```typescript
public readonly scans: DataOciDatabaseVmClusterRecommendedNetworkScansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a>

---

##### `vmNetworks`<sup>Required</sup> <a name="vmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks"></a>

```typescript
public readonly vmNetworks: DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput"></a>

```typescript
public readonly dnsInput: string[];
```

- *Type:* string[]

---

##### `drScanListenerPortTcpInput`<sup>Optional</sup> <a name="drScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput"></a>

```typescript
public readonly drScanListenerPortTcpInput: number;
```

- *Type:* number

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput"></a>

```typescript
public readonly exadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | DataOciDatabaseVmClusterRecommendedNetworkNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]

---

##### `ntpInput`<sup>Optional</sup> <a name="ntpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput"></a>

```typescript
public readonly ntpInput: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput"></a>

```typescript
public readonly scanListenerPortTcpInput: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSslInput`<sup>Optional</sup> <a name="scanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput"></a>

```typescript
public readonly scanListenerPortTcpSslInput: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

---

##### `drScanListenerPortTcp`<sup>Required</sup> <a name="drScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp"></a>

```typescript
public readonly drScanListenerPortTcp: number;
```

- *Type:* number

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp"></a>

```typescript
public readonly ntp: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterRecommendedNetworkConfig <a name="DataOciDatabaseVmClusterRecommendedNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterRecommendedNetworkConfig: dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]</code> | networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns">dns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp">drScanListenerPortTcp</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp">ntp</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | DataOciDatabaseVmClusterRecommendedNetworkNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#networks DataOciDatabaseVmClusterRecommendedNetwork#networks}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}.

---

##### `drScanListenerPortTcp`<sup>Optional</sup> <a name="drScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp"></a>

```typescript
public readonly drScanListenerPortTcp: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp"></a>

```typescript
public readonly ntp: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}.

---

### DataOciDatabaseVmClusterRecommendedNetworkDrScans <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterRecommendedNetworkDrScans: dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans = { ... }
```


### DataOciDatabaseVmClusterRecommendedNetworkNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterRecommendedNetworkNetworks: dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway">gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask">netmask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId">vlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}.

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}.

---

### DataOciDatabaseVmClusterRecommendedNetworkScans <a name="DataOciDatabaseVmClusterRecommendedNetworkScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterRecommendedNetworkScans: dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans = { ... }
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterRecommendedNetworkVmNetworks: dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks = { ... }
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes: dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterRecommendedNetworkDrScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterRecommendedNetworkDrScans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseVmClusterRecommendedNetworkNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>[]

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseVmClusterRecommendedNetworkNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterRecommendedNetworkScans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname">vipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip"></a>

```typescript
public readonly vip: string;
```

- *Type:* string

---

##### `vipHostname`<sup>Required</sup> <a name="vipHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```typescript
public readonly vipHostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterRecommendedNetwork } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes"></a>

```typescript
public readonly nodes: DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a>

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseVmClusterRecommendedNetworkVmNetworks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a>

---



