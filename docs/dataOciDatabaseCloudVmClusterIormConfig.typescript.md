# `dataOciDatabaseCloudVmClusterIormConfig` Submodule <a name="`dataOciDatabaseCloudVmClusterIormConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudVmClusterIormConfig <a name="DataOciDatabaseCloudVmClusterIormConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig(scope: Construct, id: string, config: DataOciDatabaseCloudVmClusterIormConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig">DataOciDatabaseCloudVmClusterIormConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig">DataOciDatabaseCloudVmClusterIormConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isConstruct"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformElement"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseCloudVmClusterIormConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseCloudVmClusterIormConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster_iorm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudVmClusterIormConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList">DataOciDatabaseCloudVmClusterIormConfigDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.objective">objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.dbPlans"></a>

```typescript
public readonly dbPlans: DataOciDatabaseCloudVmClusterIormConfigDbPlansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList">DataOciDatabaseCloudVmClusterIormConfigDbPlansList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.objective"></a>

```typescript
public readonly objective: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput"></a>

```typescript
public readonly cloudVmClusterIdInput: string;
```

- *Type:* string

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudVmClusterIormConfigConfig <a name="DataOciDatabaseCloudVmClusterIormConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.Initializer"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudVmClusterIormConfigConfig: dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DataOciDatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DataOciDatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}.

---

### DataOciDatabaseCloudVmClusterIormConfigDbPlans <a name="DataOciDatabaseCloudVmClusterIormConfigDbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlans.Initializer"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseCloudVmClusterIormConfigDbPlans: dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlans = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudVmClusterIormConfigDbPlansList <a name="DataOciDatabaseCloudVmClusterIormConfigDbPlansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.get"></a>

```typescript
public get(index: number): DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference <a name="DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share">share</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlans">DataOciDatabaseCloudVmClusterIormConfigDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit"></a>

```typescript
public readonly flashCacheLimit: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share"></a>

```typescript
public readonly share: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseCloudVmClusterIormConfigDbPlans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudVmClusterIormConfig.DataOciDatabaseCloudVmClusterIormConfigDbPlans">DataOciDatabaseCloudVmClusterIormConfigDbPlans</a>

---



