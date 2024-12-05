# `dataOciCoreRemotePeeringConnections` Submodule <a name="`dataOciCoreRemotePeeringConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreRemotePeeringConnections <a name="DataOciCoreRemotePeeringConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections oci_core_remote_peering_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections(scope: Construct, id: string, config: DataOciCoreRemotePeeringConnectionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig">DataOciCoreRemotePeeringConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig">DataOciCoreRemotePeeringConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetDrgId">resetDrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreRemotePeeringConnectionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]

---

##### `resetDrgId` <a name="resetDrgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetDrgId"></a>

```typescript
public resetDrgId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreRemotePeeringConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreRemotePeeringConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreRemotePeeringConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreRemotePeeringConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreRemotePeeringConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList">DataOciCoreRemotePeeringConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.remotePeeringConnections">remotePeeringConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList">DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgIdInput">drgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgId">drgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filter"></a>

```typescript
public readonly filter: DataOciCoreRemotePeeringConnectionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList">DataOciCoreRemotePeeringConnectionsFilterList</a>

---

##### `remotePeeringConnections`<sup>Required</sup> <a name="remotePeeringConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.remotePeeringConnections"></a>

```typescript
public readonly remotePeeringConnections: DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList">DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `drgIdInput`<sup>Optional</sup> <a name="drgIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgIdInput"></a>

```typescript
public readonly drgIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreRemotePeeringConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreRemotePeeringConnectionsConfig <a name="DataOciCoreRemotePeeringConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreRemotePeeringConnectionsConfig: dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#compartment_id DataOciCoreRemotePeeringConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.drgId">drgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#drg_id DataOciCoreRemotePeeringConnections#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#id DataOciCoreRemotePeeringConnections#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#compartment_id DataOciCoreRemotePeeringConnections#compartment_id}.

---

##### `drgId`<sup>Optional</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#drg_id DataOciCoreRemotePeeringConnections#drg_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreRemotePeeringConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#filter DataOciCoreRemotePeeringConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#id DataOciCoreRemotePeeringConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreRemotePeeringConnectionsFilter <a name="DataOciCoreRemotePeeringConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreRemotePeeringConnectionsFilter: dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#name DataOciCoreRemotePeeringConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#values DataOciCoreRemotePeeringConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#regex DataOciCoreRemotePeeringConnections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#name DataOciCoreRemotePeeringConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#values DataOciCoreRemotePeeringConnections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#regex DataOciCoreRemotePeeringConnections#regex}.

---

### DataOciCoreRemotePeeringConnectionsRemotePeeringConnections <a name="DataOciCoreRemotePeeringConnectionsRemotePeeringConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreRemotePeeringConnectionsRemotePeeringConnections: dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreRemotePeeringConnectionsFilterList <a name="DataOciCoreRemotePeeringConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreRemotePeeringConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreRemotePeeringConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>[]

---


### DataOciCoreRemotePeeringConnectionsFilterOutputReference <a name="DataOciCoreRemotePeeringConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreRemotePeeringConnectionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter">DataOciCoreRemotePeeringConnectionsFilter</a>

---


### DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList <a name="DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.get"></a>

```typescript
public get(index: number): DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference <a name="DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreRemotePeeringConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.drgId">drgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.isCrossTenancyPeering">isCrossTenancyPeering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peeringStatus">peeringStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerRegionName">peerRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerTenancyId">peerTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections">DataOciCoreRemotePeeringConnectionsRemotePeeringConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCrossTenancyPeering`<sup>Required</sup> <a name="isCrossTenancyPeering" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.isCrossTenancyPeering"></a>

```typescript
public readonly isCrossTenancyPeering: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peeringStatus`<sup>Required</sup> <a name="peeringStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peeringStatus"></a>

```typescript
public readonly peeringStatus: string;
```

- *Type:* string

---

##### `peerRegionName`<sup>Required</sup> <a name="peerRegionName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerRegionName"></a>

```typescript
public readonly peerRegionName: string;
```

- *Type:* string

---

##### `peerTenancyId`<sup>Required</sup> <a name="peerTenancyId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerTenancyId"></a>

```typescript
public readonly peerTenancyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreRemotePeeringConnectionsRemotePeeringConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections">DataOciCoreRemotePeeringConnectionsRemotePeeringConnections</a>

---



