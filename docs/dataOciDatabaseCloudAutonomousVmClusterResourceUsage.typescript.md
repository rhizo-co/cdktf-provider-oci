# `dataOciDatabaseCloudAutonomousVmClusterResourceUsage` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusterResourceUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusterResourceUsage <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage oci_database_cloud_autonomous_vm_cluster_resource_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage(scope: Construct, id: string, config: DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig">DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig">DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isConstruct"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformElement"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusterResourceUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseCloudAutonomousVmClusterResourceUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusterResourceUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.autonomousDataStorageSizeInTbs">autonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.autonomousVmResourceUsage">autonomousVmResourceUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.availableAutonomousDataStorageSizeInTbs">availableAutonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.exadataStorageInTbs">exadataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.nonProvisionableAutonomousContainerDatabases">nonProvisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provisionableAutonomousContainerDatabases">provisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provisionedAutonomousContainerDatabases">provisionedAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.totalCpus">totalCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.usedAutonomousDataStorageSizeInTbs">usedAutonomousDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.cloudAutonomousVmClusterIdInput">cloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="autonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.autonomousDataStorageSizeInTbs"></a>

```typescript
public readonly autonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `autonomousVmResourceUsage`<sup>Required</sup> <a name="autonomousVmResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.autonomousVmResourceUsage"></a>

```typescript
public readonly autonomousVmResourceUsage: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList</a>

---

##### `availableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="availableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.availableAutonomousDataStorageSizeInTbs"></a>

```typescript
public readonly availableAutonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataStorageInTbs`<sup>Required</sup> <a name="exadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.exadataStorageInTbs"></a>

```typescript
public readonly exadataStorageInTbs: number;
```

- *Type:* number

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `nonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="nonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.nonProvisionableAutonomousContainerDatabases"></a>

```typescript
public readonly nonProvisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provisionableAutonomousContainerDatabases"></a>

```typescript
public readonly provisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provisionedAutonomousContainerDatabases"></a>

```typescript
public readonly provisionedAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `totalContainerDatabases`<sup>Required</sup> <a name="totalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.totalContainerDatabases"></a>

```typescript
public readonly totalContainerDatabases: number;
```

- *Type:* number

---

##### `totalCpus`<sup>Required</sup> <a name="totalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.totalCpus"></a>

```typescript
public readonly totalCpus: number;
```

- *Type:* number

---

##### `usedAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="usedAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.usedAutonomousDataStorageSizeInTbs"></a>

```typescript
public readonly usedAutonomousDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `cloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="cloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.cloudAutonomousVmClusterIdInput"></a>

```typescript
public readonly cloudAutonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage: dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage = { ... }
```


### DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage: dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage = { ... }
```


### DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig: dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterResourceUsage#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#id DataOciDatabaseCloudAutonomousVmClusterResourceUsage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterResourceUsage#cloud_autonomous_vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#id DataOciDatabaseCloudAutonomousVmClusterResourceUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage</a>

---


### DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.autonomousContainerDatabaseUsage">autonomousContainerDatabaseUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseUsage`<sup>Required</sup> <a name="autonomousContainerDatabaseUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.autonomousContainerDatabaseUsage"></a>

```typescript
public readonly autonomousContainerDatabaseUsage: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList</a>

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterResourceUsage.DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage">DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage</a>

---



