# `dataOciContainerengineClusterWorkloadMappings` Submodule <a name="`dataOciContainerengineClusterWorkloadMappings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineClusterWorkloadMappings <a name="DataOciContainerengineClusterWorkloadMappings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings oci_containerengine_cluster_workload_mappings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings(scope: Construct, id: string, config: DataOciContainerengineClusterWorkloadMappingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig">DataOciContainerengineClusterWorkloadMappingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig">DataOciContainerengineClusterWorkloadMappingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciContainerengineClusterWorkloadMappingsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineClusterWorkloadMappings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isConstruct"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformElement"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformDataSource"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciContainerengineClusterWorkloadMappings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineClusterWorkloadMappings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineClusterWorkloadMappings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineClusterWorkloadMappings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList">DataOciContainerengineClusterWorkloadMappingsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.workloadMappings">workloadMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList">DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.filter"></a>

```typescript
public readonly filter: DataOciContainerengineClusterWorkloadMappingsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList">DataOciContainerengineClusterWorkloadMappingsFilterList</a>

---

##### `workloadMappings`<sup>Required</sup> <a name="workloadMappings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.workloadMappings"></a>

```typescript
public readonly workloadMappings: DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList">DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciContainerengineClusterWorkloadMappingsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineClusterWorkloadMappingsConfig <a name="DataOciContainerengineClusterWorkloadMappingsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineClusterWorkloadMappingsConfig: dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#cluster_id DataOciContainerengineClusterWorkloadMappings#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#id DataOciContainerengineClusterWorkloadMappings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#cluster_id DataOciContainerengineClusterWorkloadMappings#cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciContainerengineClusterWorkloadMappingsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#filter DataOciContainerengineClusterWorkloadMappings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#id DataOciContainerengineClusterWorkloadMappings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerengineClusterWorkloadMappingsFilter <a name="DataOciContainerengineClusterWorkloadMappingsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineClusterWorkloadMappingsFilter: dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#name DataOciContainerengineClusterWorkloadMappings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#values DataOciContainerengineClusterWorkloadMappings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#regex DataOciContainerengineClusterWorkloadMappings#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#name DataOciContainerengineClusterWorkloadMappings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#values DataOciContainerengineClusterWorkloadMappings#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mappings#regex DataOciContainerengineClusterWorkloadMappings#regex}.

---

### DataOciContainerengineClusterWorkloadMappingsWorkloadMappings <a name="DataOciContainerengineClusterWorkloadMappingsWorkloadMappings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappings.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineClusterWorkloadMappingsWorkloadMappings: dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineClusterWorkloadMappingsFilterList <a name="DataOciContainerengineClusterWorkloadMappingsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.get"></a>

```typescript
public get(index: number): DataOciContainerengineClusterWorkloadMappingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciContainerengineClusterWorkloadMappingsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>[]

---


### DataOciContainerengineClusterWorkloadMappingsFilterOutputReference <a name="DataOciContainerengineClusterWorkloadMappingsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciContainerengineClusterWorkloadMappingsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsFilter">DataOciContainerengineClusterWorkloadMappingsFilter</a>

---


### DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList <a name="DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference <a name="DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineClusterWorkloadMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.mappedCompartmentId">mappedCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.mappedTenancyId">mappedTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappings">DataOciContainerengineClusterWorkloadMappingsWorkloadMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappedCompartmentId`<sup>Required</sup> <a name="mappedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.mappedCompartmentId"></a>

```typescript
public readonly mappedCompartmentId: string;
```

- *Type:* string

---

##### `mappedTenancyId`<sup>Required</sup> <a name="mappedTenancyId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.mappedTenancyId"></a>

```typescript
public readonly mappedTenancyId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineClusterWorkloadMappingsWorkloadMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMappings.DataOciContainerengineClusterWorkloadMappingsWorkloadMappings">DataOciContainerengineClusterWorkloadMappingsWorkloadMappings</a>

---



