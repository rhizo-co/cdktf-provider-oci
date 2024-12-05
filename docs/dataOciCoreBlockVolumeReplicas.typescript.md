# `dataOciCoreBlockVolumeReplicas` Submodule <a name="`dataOciCoreBlockVolumeReplicas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreBlockVolumeReplicas <a name="DataOciCoreBlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas oci_core_block_volume_replicas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas(scope: Construct, id: string, config?: DataOciCoreBlockVolumeReplicasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig">DataOciCoreBlockVolumeReplicasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig">DataOciCoreBlockVolumeReplicasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetVolumeGroupReplicaId">resetVolumeGroupReplicaId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreBlockVolumeReplicasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVolumeGroupReplicaId` <a name="resetVolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetVolumeGroupReplicaId"></a>

```typescript
public resetVolumeGroupReplicaId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreBlockVolumeReplicas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreBlockVolumeReplicas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreBlockVolumeReplicas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreBlockVolumeReplicas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreBlockVolumeReplicas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.blockVolumeReplicas">blockVolumeReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList">DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList">DataOciCoreBlockVolumeReplicasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaIdInput">volumeGroupReplicaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blockVolumeReplicas`<sup>Required</sup> <a name="blockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.blockVolumeReplicas"></a>

```typescript
public readonly blockVolumeReplicas: DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList">DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filter"></a>

```typescript
public readonly filter: DataOciCoreBlockVolumeReplicasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList">DataOciCoreBlockVolumeReplicasFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreBlockVolumeReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `volumeGroupReplicaIdInput`<sup>Optional</sup> <a name="volumeGroupReplicaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaIdInput"></a>

```typescript
public readonly volumeGroupReplicaIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaId"></a>

```typescript
public readonly volumeGroupReplicaId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreBlockVolumeReplicasBlockVolumeReplicas <a name="DataOciCoreBlockVolumeReplicasBlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreBlockVolumeReplicasBlockVolumeReplicas: dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas = { ... }
```


### DataOciCoreBlockVolumeReplicasConfig <a name="DataOciCoreBlockVolumeReplicasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreBlockVolumeReplicasConfig: dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#availability_domain DataOciCoreBlockVolumeReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#compartment_id DataOciCoreBlockVolumeReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#display_name DataOciCoreBlockVolumeReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#id DataOciCoreBlockVolumeReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#state DataOciCoreBlockVolumeReplicas#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#volume_group_replica_id DataOciCoreBlockVolumeReplicas#volume_group_replica_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#availability_domain DataOciCoreBlockVolumeReplicas#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#compartment_id DataOciCoreBlockVolumeReplicas#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#display_name DataOciCoreBlockVolumeReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreBlockVolumeReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#filter DataOciCoreBlockVolumeReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#id DataOciCoreBlockVolumeReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#state DataOciCoreBlockVolumeReplicas#state}.

---

##### `volumeGroupReplicaId`<sup>Optional</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.volumeGroupReplicaId"></a>

```typescript
public readonly volumeGroupReplicaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#volume_group_replica_id DataOciCoreBlockVolumeReplicas#volume_group_replica_id}.

---

### DataOciCoreBlockVolumeReplicasFilter <a name="DataOciCoreBlockVolumeReplicasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreBlockVolumeReplicasFilter: dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#name DataOciCoreBlockVolumeReplicas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#values DataOciCoreBlockVolumeReplicas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#regex DataOciCoreBlockVolumeReplicas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#name DataOciCoreBlockVolumeReplicas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#values DataOciCoreBlockVolumeReplicas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#regex DataOciCoreBlockVolumeReplicas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList <a name="DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.get"></a>

```typescript
public get(index: number): DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference <a name="DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.blockVolumeId">blockVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas">DataOciCoreBlockVolumeReplicasBlockVolumeReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `blockVolumeId`<sup>Required</sup> <a name="blockVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.blockVolumeId"></a>

```typescript
public readonly blockVolumeId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.volumeGroupReplicaId"></a>

```typescript
public readonly volumeGroupReplicaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreBlockVolumeReplicasBlockVolumeReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas">DataOciCoreBlockVolumeReplicasBlockVolumeReplicas</a>

---


### DataOciCoreBlockVolumeReplicasFilterList <a name="DataOciCoreBlockVolumeReplicasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreBlockVolumeReplicasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreBlockVolumeReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>[]

---


### DataOciCoreBlockVolumeReplicasFilterOutputReference <a name="DataOciCoreBlockVolumeReplicasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreBlockVolumeReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreBlockVolumeReplicasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter">DataOciCoreBlockVolumeReplicasFilter</a>

---



