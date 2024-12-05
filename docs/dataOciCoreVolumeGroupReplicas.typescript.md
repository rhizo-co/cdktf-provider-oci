# `dataOciCoreVolumeGroupReplicas` Submodule <a name="`dataOciCoreVolumeGroupReplicas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeGroupReplicas <a name="DataOciCoreVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas oci_core_volume_group_replicas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas(scope: Construct, id: string, config: DataOciCoreVolumeGroupReplicasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig">DataOciCoreVolumeGroupReplicasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig">DataOciCoreVolumeGroupReplicasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVolumeGroupReplicasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeGroupReplicas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVolumeGroupReplicas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVolumeGroupReplicas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVolumeGroupReplicas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeGroupReplicas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList">DataOciCoreVolumeGroupReplicasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.volumeGroupReplicas">volumeGroupReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVolumeGroupReplicasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList">DataOciCoreVolumeGroupReplicasFilterList</a>

---

##### `volumeGroupReplicas`<sup>Required</sup> <a name="volumeGroupReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.volumeGroupReplicas"></a>

```typescript
public readonly volumeGroupReplicas: DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVolumeGroupReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeGroupReplicasConfig <a name="DataOciCoreVolumeGroupReplicasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupReplicasConfig: dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#availability_domain DataOciCoreVolumeGroupReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#compartment_id DataOciCoreVolumeGroupReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#display_name DataOciCoreVolumeGroupReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#id DataOciCoreVolumeGroupReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#state DataOciCoreVolumeGroupReplicas#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#availability_domain DataOciCoreVolumeGroupReplicas#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#compartment_id DataOciCoreVolumeGroupReplicas#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#display_name DataOciCoreVolumeGroupReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVolumeGroupReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#filter DataOciCoreVolumeGroupReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#id DataOciCoreVolumeGroupReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#state DataOciCoreVolumeGroupReplicas#state}.

---

### DataOciCoreVolumeGroupReplicasFilter <a name="DataOciCoreVolumeGroupReplicasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupReplicasFilter: dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#name DataOciCoreVolumeGroupReplicas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#values DataOciCoreVolumeGroupReplicas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#regex DataOciCoreVolumeGroupReplicas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#name DataOciCoreVolumeGroupReplicas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#values DataOciCoreVolumeGroupReplicas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replicas#regex DataOciCoreVolumeGroupReplicas#regex}.

---

### DataOciCoreVolumeGroupReplicasVolumeGroupReplicas <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupReplicasVolumeGroupReplicas: dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas = { ... }
```


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas: dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeGroupReplicasFilterList <a name="DataOciCoreVolumeGroupReplicasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeGroupReplicasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVolumeGroupReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>[]

---


### DataOciCoreVolumeGroupReplicasFilterOutputReference <a name="DataOciCoreVolumeGroupReplicasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVolumeGroupReplicasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasFilter">DataOciCoreVolumeGroupReplicasFilter</a>

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.membershipState">membershipState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.volumeReplicaId">volumeReplicaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membershipState`<sup>Required</sup> <a name="membershipState" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.membershipState"></a>

```typescript
public readonly membershipState: string;
```

- *Type:* string

---

##### `volumeReplicaId`<sup>Required</sup> <a name="volumeReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.volumeReplicaId"></a>

```typescript
public readonly volumeReplicaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicas</a>

---


### DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference <a name="DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.memberReplicas">memberReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.volumeGroupId">volumeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberReplicas`<sup>Required</sup> <a name="memberReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.memberReplicas"></a>

```typescript
public readonly memberReplicas: DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList">DataOciCoreVolumeGroupReplicasVolumeGroupReplicasMemberReplicasList</a>

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `volumeGroupId`<sup>Required</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.volumeGroupId"></a>

```typescript
public readonly volumeGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVolumeGroupReplicasVolumeGroupReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupReplicas.DataOciCoreVolumeGroupReplicasVolumeGroupReplicas">DataOciCoreVolumeGroupReplicasVolumeGroupReplicas</a>

---



