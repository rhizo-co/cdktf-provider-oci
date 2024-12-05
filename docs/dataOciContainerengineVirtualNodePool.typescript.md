# `dataOciContainerengineVirtualNodePool` Submodule <a name="`dataOciContainerengineVirtualNodePool` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineVirtualNodePool <a name="DataOciContainerengineVirtualNodePool" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pool oci_containerengine_virtual_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool(scope: Construct, id: string, config: DataOciContainerengineVirtualNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig">DataOciContainerengineVirtualNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig">DataOciContainerengineVirtualNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isConstruct"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformElement"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformDataSource"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineVirtualNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineVirtualNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineVirtualNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList">DataOciContainerengineVirtualNodePoolPodConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.taints">taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList">DataOciContainerengineVirtualNodePoolTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolVirtualNodeTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.virtualNodePoolIdInput">virtualNodePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.virtualNodePoolId">virtualNodePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialVirtualNodeLabels`<sup>Required</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.initialVirtualNodeLabels"></a>

```typescript
public readonly initialVirtualNodeLabels: DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.placementConfigurations"></a>

```typescript
public readonly placementConfigurations: DataOciContainerengineVirtualNodePoolPlacementConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolPlacementConfigurationsList</a>

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.podConfiguration"></a>

```typescript
public readonly podConfiguration: DataOciContainerengineVirtualNodePoolPodConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList">DataOciContainerengineVirtualNodePoolPodConfigurationList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `taints`<sup>Required</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.taints"></a>

```typescript
public readonly taints: DataOciContainerengineVirtualNodePoolTaintsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList">DataOciContainerengineVirtualNodePoolTaintsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `virtualNodeTags`<sup>Required</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.virtualNodeTags"></a>

```typescript
public readonly virtualNodeTags: DataOciContainerengineVirtualNodePoolVirtualNodeTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolVirtualNodeTagsList</a>

---

##### `virtualNodePoolIdInput`<sup>Optional</sup> <a name="virtualNodePoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.virtualNodePoolIdInput"></a>

```typescript
public readonly virtualNodePoolIdInput: string;
```

- *Type:* string

---

##### `virtualNodePoolId`<sup>Required</sup> <a name="virtualNodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.virtualNodePoolId"></a>

```typescript
public readonly virtualNodePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineVirtualNodePoolConfig <a name="DataOciContainerengineVirtualNodePoolConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolConfig: dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.virtualNodePoolId">virtualNodePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pool#virtual_node_pool_id DataOciContainerengineVirtualNodePool#virtual_node_pool_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualNodePoolId`<sup>Required</sup> <a name="virtualNodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolConfig.property.virtualNodePoolId"></a>

```typescript
public readonly virtualNodePoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pool#virtual_node_pool_id DataOciContainerengineVirtualNodePool#virtual_node_pool_id}.

---

### DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels <a name="DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels: dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels = { ... }
```


### DataOciContainerengineVirtualNodePoolPlacementConfigurations <a name="DataOciContainerengineVirtualNodePoolPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurations.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolPlacementConfigurations: dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurations = { ... }
```


### DataOciContainerengineVirtualNodePoolPodConfiguration <a name="DataOciContainerengineVirtualNodePoolPodConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfiguration.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolPodConfiguration: dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfiguration = { ... }
```


### DataOciContainerengineVirtualNodePoolTaints <a name="DataOciContainerengineVirtualNodePoolTaints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaints.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolTaints: dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaints = { ... }
```


### DataOciContainerengineVirtualNodePoolVirtualNodeTags <a name="DataOciContainerengineVirtualNodePoolVirtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTags.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolVirtualNodeTags: dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList <a name="DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference <a name="DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>

---


### DataOciContainerengineVirtualNodePoolPlacementConfigurationsList <a name="DataOciContainerengineVirtualNodePoolPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference <a name="DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurations">DataOciContainerengineVirtualNodePoolPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolPlacementConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPlacementConfigurations">DataOciContainerengineVirtualNodePoolPlacementConfigurations</a>

---


### DataOciContainerengineVirtualNodePoolPodConfigurationList <a name="DataOciContainerengineVirtualNodePoolPodConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference <a name="DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfiguration">DataOciContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolPodConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolPodConfiguration">DataOciContainerengineVirtualNodePoolPodConfiguration</a>

---


### DataOciContainerengineVirtualNodePoolTaintsList <a name="DataOciContainerengineVirtualNodePoolTaintsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolTaintsOutputReference <a name="DataOciContainerengineVirtualNodePoolTaintsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaints">DataOciContainerengineVirtualNodePoolTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolTaints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolTaints">DataOciContainerengineVirtualNodePoolTaints</a>

---


### DataOciContainerengineVirtualNodePoolVirtualNodeTagsList <a name="DataOciContainerengineVirtualNodePoolVirtualNodeTagsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference <a name="DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTags">DataOciContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolVirtualNodeTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePool.DataOciContainerengineVirtualNodePoolVirtualNodeTags">DataOciContainerengineVirtualNodePoolVirtualNodeTags</a>

---



