# `dataOciServiceMeshVirtualServiceRouteTables` Submodule <a name="`dataOciServiceMeshVirtualServiceRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServiceRouteTables <a name="DataOciServiceMeshVirtualServiceRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables oci_service_mesh_virtual_service_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables(scope: Construct, id: string, config: DataOciServiceMeshVirtualServiceRouteTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig">DataOciServiceMeshVirtualServiceRouteTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig">DataOciServiceMeshVirtualServiceRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId">resetVirtualServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciServiceMeshVirtualServiceRouteTablesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVirtualServiceId` <a name="resetVirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId"></a>

```typescript
public resetVirtualServiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshVirtualServiceRouteTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshVirtualServiceRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServiceRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection">virtualServiceRouteTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter"></a>

```typescript
public readonly filter: DataOciServiceMeshVirtualServiceRouteTablesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a>

---

##### `virtualServiceRouteTableCollection`<sup>Required</sup> <a name="virtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection"></a>

```typescript
public readonly virtualServiceRouteTableCollection: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciServiceMeshVirtualServiceRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput"></a>

```typescript
public readonly virtualServiceIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServiceRouteTablesConfig <a name="DataOciServiceMeshVirtualServiceRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTablesConfig: dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciServiceMeshVirtualServiceRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#filter DataOciServiceMeshVirtualServiceRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}.

---

##### `virtualServiceId`<sup>Optional</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}.

---

### DataOciServiceMeshVirtualServiceRouteTablesFilter <a name="DataOciServiceMeshVirtualServiceRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTablesFilter: dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}.

---

### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection: dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection = { ... }
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems: dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems = { ... }
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules: dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules = { ... }
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations: dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServiceRouteTablesFilterList <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceMeshVirtualServiceRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>[]

---


### DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceMeshVirtualServiceRouteTablesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules">routeRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```typescript
public readonly routeRules: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId">virtualDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `virtualDeploymentId`<sup>Required</sup> <a name="virtualDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```typescript
public readonly virtualDeploymentId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">isGrpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">pathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `isGrpc`<sup>Required</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```typescript
public readonly isGrpc: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```typescript
public readonly pathType: string;
```

- *Type:* string

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a>

---



