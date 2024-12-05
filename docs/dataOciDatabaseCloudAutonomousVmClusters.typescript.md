# `dataOciDatabaseCloudAutonomousVmClusters` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusters <a name="DataOciDatabaseCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters oci_database_cloud_autonomous_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters(scope: Construct, id: string, config: DataOciDatabaseCloudAutonomousVmClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig">DataOciDatabaseCloudAutonomousVmClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig">DataOciDatabaseCloudAutonomousVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetCloudExadataInfrastructureId">resetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseCloudAutonomousVmClustersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCloudExadataInfrastructureId` <a name="resetCloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetCloudExadataInfrastructureId"></a>

```typescript
public resetCloudExadataInfrastructureId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseCloudAutonomousVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudAutonomousVmClusters">cloudAutonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList">DataOciDatabaseCloudAutonomousVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudAutonomousVmClusters`<sup>Required</sup> <a name="cloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudAutonomousVmClusters"></a>

```typescript
public readonly cloudAutonomousVmClusters: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseCloudAutonomousVmClustersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList">DataOciDatabaseCloudAutonomousVmClustersFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseCloudAutonomousVmClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths = { ... }
```


### DataOciDatabaseCloudAutonomousVmClustersConfig <a name="DataOciDatabaseCloudAutonomousVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersConfig: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}.

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseCloudAutonomousVmClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#filter DataOciDatabaseCloudAutonomousVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}.

---

### DataOciDatabaseCloudAutonomousVmClustersFilter <a name="DataOciDatabaseCloudAutonomousVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClustersFilter: dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#name DataOciDatabaseCloudAutonomousVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#values DataOciDatabaseCloudAutonomousVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#regex DataOciDatabaseCloudAutonomousVmClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#name DataOciDatabaseCloudAutonomousVmClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#values DataOciDatabaseCloudAutonomousVmClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#regex DataOciDatabaseCloudAutonomousVmClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.months"></a>

```typescript
public readonly months: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStoragePercentage">autonomousDataStoragePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStorageSizeInTbs">autonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableAutonomousDataStorageSizeInTbs">availableAutonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableContainerDatabases">availableContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.clusterTimeZone">clusterTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCountPerNode">cpuCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuPercentage">cpuPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.exadataStorageInTbsLowestScaledValue">exadataStorageInTbsLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.isMtlsEnabledVmCluster">isMtlsEnabledVmCluster</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastUpdateHistoryEntryId">lastUpdateHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maxAcdsLowestScaledValue">maxAcdsLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nonProvisionableAutonomousContainerDatabases">nonProvisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpusLowestScaledValue">ocpusLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionableAutonomousContainerDatabases">provisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedAutonomousContainerDatabases">provisionedAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortNonTls">scanListenerPortNonTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortTls">scanListenerPortTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeDatabaseSslCertificateExpires">timeDatabaseSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeOrdsCertificateExpires">timeOrdsCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalAutonomousDataStorageInTbs">totalAutonomousDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalCpus">totalCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousDataStoragePercentage`<sup>Required</sup> <a name="autonomousDataStoragePercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStoragePercentage"></a>

```typescript
public readonly autonomousDataStoragePercentage: number;
```

- *Type:* number

---

##### `autonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="autonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStorageSizeInTbs"></a>

```typescript
public readonly autonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `availableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="availableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableAutonomousDataStorageSizeInTbs"></a>

```typescript
public readonly availableAutonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `availableContainerDatabases`<sup>Required</sup> <a name="availableContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableContainerDatabases"></a>

```typescript
public readonly availableContainerDatabases: number;
```

- *Type:* number

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `clusterTimeZone`<sup>Required</sup> <a name="clusterTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.clusterTimeZone"></a>

```typescript
public readonly clusterTimeZone: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `cpuCoreCountPerNode`<sup>Required</sup> <a name="cpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCountPerNode"></a>

```typescript
public readonly cpuCoreCountPerNode: number;
```

- *Type:* number

---

##### `cpuPercentage`<sup>Required</sup> <a name="cpuPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuPercentage"></a>

```typescript
public readonly cpuPercentage: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `exadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="exadataStorageInTbsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.exadataStorageInTbsLowestScaledValue"></a>

```typescript
public readonly exadataStorageInTbsLowestScaledValue: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMtlsEnabledVmCluster`<sup>Required</sup> <a name="isMtlsEnabledVmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.isMtlsEnabledVmCluster"></a>

```typescript
public readonly isMtlsEnabledVmCluster: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastMaintenanceRunId"></a>

```typescript
public readonly lastMaintenanceRunId: string;
```

- *Type:* string

---

##### `lastUpdateHistoryEntryId`<sup>Required</sup> <a name="lastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastUpdateHistoryEntryId"></a>

```typescript
public readonly lastUpdateHistoryEntryId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindowDetails"></a>

```typescript
public readonly maintenanceWindowDetails: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList</a>

---

##### `maxAcdsLowestScaledValue`<sup>Required</sup> <a name="maxAcdsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maxAcdsLowestScaledValue"></a>

```typescript
public readonly maxAcdsLowestScaledValue: number;
```

- *Type:* number

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="nonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nonProvisionableAutonomousContainerDatabases"></a>

```typescript
public readonly nonProvisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `ocpusLowestScaledValue`<sup>Required</sup> <a name="ocpusLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpusLowestScaledValue"></a>

```typescript
public readonly ocpusLowestScaledValue: number;
```

- *Type:* number

---

##### `provisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionableAutonomousContainerDatabases"></a>

```typescript
public readonly provisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedAutonomousContainerDatabases"></a>

```typescript
public readonly provisionedAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `scanListenerPortNonTls`<sup>Required</sup> <a name="scanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortNonTls"></a>

```typescript
public readonly scanListenerPortNonTls: number;
```

- *Type:* number

---

##### `scanListenerPortTls`<sup>Required</sup> <a name="scanListenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortTls"></a>

```typescript
public readonly scanListenerPortTls: number;
```

- *Type:* number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="timeDatabaseSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeDatabaseSslCertificateExpires"></a>

```typescript
public readonly timeDatabaseSslCertificateExpires: string;
```

- *Type:* string

---

##### `timeOrdsCertificateExpires`<sup>Required</sup> <a name="timeOrdsCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeOrdsCertificateExpires"></a>

```typescript
public readonly timeOrdsCertificateExpires: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalAutonomousDataStorageInTbs`<sup>Required</sup> <a name="totalAutonomousDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalAutonomousDataStorageInTbs"></a>

```typescript
public readonly totalAutonomousDataStorageInTbs: number;
```

- *Type:* number

---

##### `totalContainerDatabases`<sup>Required</sup> <a name="totalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalContainerDatabases"></a>

```typescript
public readonly totalContainerDatabases: number;
```

- *Type:* number

---

##### `totalCpus`<sup>Required</sup> <a name="totalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalCpus"></a>

```typescript
public readonly totalCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters</a>

---


### DataOciDatabaseCloudAutonomousVmClustersFilterList <a name="DataOciDatabaseCloudAutonomousVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseCloudAutonomousVmClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>[]

---


### DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseCloudAutonomousVmClustersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>

---



