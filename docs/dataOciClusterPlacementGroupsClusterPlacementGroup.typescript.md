# `dataOciClusterPlacementGroupsClusterPlacementGroup` Submodule <a name="`dataOciClusterPlacementGroupsClusterPlacementGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroup <a name="DataOciClusterPlacementGroupsClusterPlacementGroup" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group oci_cluster_placement_groups_cluster_placement_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup(scope: Construct, id: string, config: DataOciClusterPlacementGroupsClusterPlacementGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig">DataOciClusterPlacementGroupsClusterPlacementGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig">DataOciClusterPlacementGroupsClusterPlacementGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciClusterPlacementGroupsClusterPlacementGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciClusterPlacementGroupsClusterPlacementGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciClusterPlacementGroupsClusterPlacementGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupType">clusterPlacementGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.opcDryRun">opcDryRun</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.placementInstruction">placementInstruction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupIdInput">clusterPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.capabilities"></a>

```typescript
public readonly capabilities: DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList</a>

---

##### `clusterPlacementGroupType`<sup>Required</sup> <a name="clusterPlacementGroupType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupType"></a>

```typescript
public readonly clusterPlacementGroupType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcDryRun`<sup>Required</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.opcDryRun"></a>

```typescript
public readonly opcDryRun: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `placementInstruction`<sup>Required</sup> <a name="placementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.placementInstruction"></a>

```typescript
public readonly placementInstruction: DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `clusterPlacementGroupIdInput`<sup>Optional</sup> <a name="clusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupIdInput"></a>

```typescript
public readonly clusterPlacementGroupIdInput: string;
```

- *Type:* string

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupCapabilities: dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems: dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupConfig <a name="DataOciClusterPlacementGroupsClusterPlacementGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupConfig: dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}.

---

### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction: dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.items"></a>

```typescript
public readonly items: DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction</a>

---



