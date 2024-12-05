# `dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages oci_database_cloud_autonomous_vm_cluster_acd_resource_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages(scope: Construct, id: string, config: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages">autonomousContainerDatabaseResourceUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterIdInput">cloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousContainerDatabaseResourceUsages`<sup>Required</sup> <a name="autonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages"></a>

```typescript
public readonly autonomousContainerDatabaseResourceUsages: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList</a>

---

##### `cloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="cloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterIdInput"></a>

```typescript
public readonly cloudAutonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages: dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages = { ... }
```


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage: dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage = { ... }
```


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig: dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#filter DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter: dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a>

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage">autonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus">largestProvisionableAutonomousDatabaseInCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="autonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage"></a>

```typescript
public readonly autonomousContainerDatabaseVmUsage: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a>

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `largestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="largestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```typescript
public readonly largestProvisionableAutonomousDatabaseInCpus: number;
```

- *Type:* number

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a>

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>[]

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter</a>

---



