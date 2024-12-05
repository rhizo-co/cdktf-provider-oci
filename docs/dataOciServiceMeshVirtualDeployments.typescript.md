# `dataOciServiceMeshVirtualDeployments` Submodule <a name="`dataOciServiceMeshVirtualDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualDeployments <a name="DataOciServiceMeshVirtualDeployments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments oci_service_mesh_virtual_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments(scope: Construct, id: string, config: DataOciServiceMeshVirtualDeploymentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig">DataOciServiceMeshVirtualDeploymentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig">DataOciServiceMeshVirtualDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetVirtualServiceId">resetVirtualServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciServiceMeshVirtualDeploymentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVirtualServiceId` <a name="resetVirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetVirtualServiceId"></a>

```typescript
public resetVirtualServiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshVirtualDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshVirtualDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList">DataOciServiceMeshVirtualDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualDeploymentCollection">virtualDeploymentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filter"></a>

```typescript
public readonly filter: DataOciServiceMeshVirtualDeploymentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList">DataOciServiceMeshVirtualDeploymentsFilterList</a>

---

##### `virtualDeploymentCollection`<sup>Required</sup> <a name="virtualDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualDeploymentCollection"></a>

```typescript
public readonly virtualDeploymentCollection: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciServiceMeshVirtualDeploymentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceIdInput"></a>

```typescript
public readonly virtualServiceIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualDeploymentsConfig <a name="DataOciServiceMeshVirtualDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsConfig: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#compartment_id DataOciServiceMeshVirtualDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#id DataOciServiceMeshVirtualDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#state DataOciServiceMeshVirtualDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#virtual_service_id DataOciServiceMeshVirtualDeployments#virtual_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#compartment_id DataOciServiceMeshVirtualDeployments#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciServiceMeshVirtualDeploymentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#filter DataOciServiceMeshVirtualDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#id DataOciServiceMeshVirtualDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#state DataOciServiceMeshVirtualDeployments#state}.

---

##### `virtualServiceId`<sup>Optional</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#virtual_service_id DataOciServiceMeshVirtualDeployments#virtual_service_id}.

---

### DataOciServiceMeshVirtualDeploymentsFilter <a name="DataOciServiceMeshVirtualDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsFilter: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#values DataOciServiceMeshVirtualDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#regex DataOciServiceMeshVirtualDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#values DataOciServiceMeshVirtualDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#regex DataOciServiceMeshVirtualDeployments#regex}.

---

### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection = { ... }
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems = { ... }
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging = { ... }
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners = { ... }
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery: dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualDeploymentsFilterList <a name="DataOciServiceMeshVirtualDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualDeploymentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceMeshVirtualDeploymentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>[]

---


### DataOciServiceMeshVirtualDeploymentsFilterOutputReference <a name="DataOciServiceMeshVirtualDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceMeshVirtualDeploymentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.idleTimeoutInMs">idleTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMs`<sup>Required</sup> <a name="idleTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.idleTimeoutInMs"></a>

```typescript
public readonly idleTimeoutInMs: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLogging`<sup>Required</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.accessLogging"></a>

```typescript
public readonly accessLogging: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.listeners"></a>

```typescript
public readonly listeners: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection</a>

---



