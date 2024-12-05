# `dataOciServiceMeshVirtualServices` Submodule <a name="`dataOciServiceMeshVirtualServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServices <a name="DataOciServiceMeshVirtualServices" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services oci_service_mesh_virtual_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices(scope: Construct, id: string, config: DataOciServiceMeshVirtualServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig">DataOciServiceMeshVirtualServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig">DataOciServiceMeshVirtualServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetMeshId">resetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciServiceMeshVirtualServicesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeshId` <a name="resetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetMeshId"></a>

```typescript
public resetMeshId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshVirtualServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshVirtualServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList">DataOciServiceMeshVirtualServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.virtualServiceCollection">virtualServiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshIdInput">meshIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshId">meshId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filter"></a>

```typescript
public readonly filter: DataOciServiceMeshVirtualServicesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList">DataOciServiceMeshVirtualServicesFilterList</a>

---

##### `virtualServiceCollection`<sup>Required</sup> <a name="virtualServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.virtualServiceCollection"></a>

```typescript
public readonly virtualServiceCollection: DataOciServiceMeshVirtualServicesVirtualServiceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciServiceMeshVirtualServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshIdInput`<sup>Optional</sup> <a name="meshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshIdInput"></a>

```typescript
public readonly meshIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshId"></a>

```typescript
public readonly meshId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServicesConfig <a name="DataOciServiceMeshVirtualServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServicesConfig: dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.meshId">meshId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciServiceMeshVirtualServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#filter DataOciServiceMeshVirtualServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.meshId"></a>

```typescript
public readonly meshId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}.

---

### DataOciServiceMeshVirtualServicesFilter <a name="DataOciServiceMeshVirtualServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServicesFilter: dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#values DataOciServiceMeshVirtualServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#regex DataOciServiceMeshVirtualServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#values DataOciServiceMeshVirtualServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#regex DataOciServiceMeshVirtualServices#regex}.

---

### DataOciServiceMeshVirtualServicesVirtualServiceCollection <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServicesVirtualServiceCollection: dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection = { ... }
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServicesVirtualServiceCollectionItems: dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems = { ... }
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy: dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy = { ... }
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls: dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServicesFilterList <a name="DataOciServiceMeshVirtualServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceMeshVirtualServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>[]

---


### DataOciServiceMeshVirtualServicesFilterOutputReference <a name="DataOciServiceMeshVirtualServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceMeshVirtualServicesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.maximumValidity">maximumValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `maximumValidity`<sup>Required</sup> <a name="maximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.maximumValidity"></a>

```typescript
public readonly maximumValidity: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.defaultRoutingPolicy">defaultRoutingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.meshId">meshId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `defaultRoutingPolicy`<sup>Required</sup> <a name="defaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.defaultRoutingPolicy"></a>

```typescript
public readonly defaultRoutingPolicy: DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.meshId"></a>

```typescript
public readonly meshId: string;
```

- *Type:* string

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.mtls"></a>

```typescript
public readonly mtls: DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServices } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection">DataOciServiceMeshVirtualServicesVirtualServiceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServicesVirtualServiceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection">DataOciServiceMeshVirtualServicesVirtualServiceCollection</a>

---



