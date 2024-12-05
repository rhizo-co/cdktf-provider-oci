# `dataOciContainerengineVirtualNodePools` Submodule <a name="`dataOciContainerengineVirtualNodePools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineVirtualNodePools <a name="DataOciContainerengineVirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools oci_containerengine_virtual_node_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools(scope: Construct, id: string, config: DataOciContainerengineVirtualNodePoolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig">DataOciContainerengineVirtualNodePoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig">DataOciContainerengineVirtualNodePoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciContainerengineVirtualNodePoolsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]

---

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineVirtualNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciContainerengineVirtualNodePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineVirtualNodePools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineVirtualNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineVirtualNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList">DataOciContainerengineVirtualNodePoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.virtualNodePools">virtualNodePools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filter"></a>

```typescript
public readonly filter: DataOciContainerengineVirtualNodePoolsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList">DataOciContainerengineVirtualNodePoolsFilterList</a>

---

##### `virtualNodePools`<sup>Required</sup> <a name="virtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.virtualNodePools"></a>

```typescript
public readonly virtualNodePools: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciContainerengineVirtualNodePoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineVirtualNodePoolsConfig <a name="DataOciContainerengineVirtualNodePoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsConfig: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciContainerengineVirtualNodePoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#filter DataOciContainerengineVirtualNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}.

---

### DataOciContainerengineVirtualNodePoolsFilter <a name="DataOciContainerengineVirtualNodePoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsFilter: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#name DataOciContainerengineVirtualNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#values DataOciContainerengineVirtualNodePools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#regex DataOciContainerengineVirtualNodePools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#name DataOciContainerengineVirtualNodePools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#values DataOciContainerengineVirtualNodePools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#regex DataOciContainerengineVirtualNodePools#regex}.

---

### DataOciContainerengineVirtualNodePoolsVirtualNodePools <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsVirtualNodePools: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools = { ... }
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels = { ... }
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations = { ... }
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration = { ... }
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints = { ... }
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags: dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineVirtualNodePoolsFilterList <a name="DataOciContainerengineVirtualNodePoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciContainerengineVirtualNodePoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>[]

---


### DataOciContainerengineVirtualNodePoolsFilterOutputReference <a name="DataOciContainerengineVirtualNodePoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciContainerengineVirtualNodePoolsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.taints">taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodePoolId">virtualNodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools">DataOciContainerengineVirtualNodePoolsVirtualNodePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialVirtualNodeLabels`<sup>Required</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.initialVirtualNodeLabels"></a>

```typescript
public readonly initialVirtualNodeLabels: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.placementConfigurations"></a>

```typescript
public readonly placementConfigurations: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList</a>

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.podConfiguration"></a>

```typescript
public readonly podConfiguration: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `taints`<sup>Required</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.taints"></a>

```typescript
public readonly taints: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `virtualNodePoolId`<sup>Required</sup> <a name="virtualNodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodePoolId"></a>

```typescript
public readonly virtualNodePoolId: string;
```

- *Type:* string

---

##### `virtualNodeTags`<sup>Required</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodeTags"></a>

```typescript
public readonly virtualNodeTags: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolsVirtualNodePools;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools">DataOciContainerengineVirtualNodePoolsVirtualNodePools</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get"></a>

```typescript
public get(index: number): DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer"></a>

```typescript
import { dataOciContainerengineVirtualNodePools } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags</a>

---



