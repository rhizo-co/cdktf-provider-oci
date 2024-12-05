# `dataOciServiceMeshVirtualServiceRouteTable` Submodule <a name="`dataOciServiceMeshVirtualServiceRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServiceRouteTable <a name="DataOciServiceMeshVirtualServiceRouteTable" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table oci_service_mesh_virtual_service_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable(scope: Construct, id: string, config: DataOciServiceMeshVirtualServiceRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig">DataOciServiceMeshVirtualServiceRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig">DataOciServiceMeshVirtualServiceRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshVirtualServiceRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshVirtualServiceRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServiceRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.routeRules">routeRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableIdInput">virtualServiceRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableId">virtualServiceRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.routeRules"></a>

```typescript
public readonly routeRules: DataOciServiceMeshVirtualServiceRouteTableRouteRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

##### `virtualServiceRouteTableIdInput`<sup>Optional</sup> <a name="virtualServiceRouteTableIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableIdInput"></a>

```typescript
public readonly virtualServiceRouteTableIdInput: string;
```

- *Type:* string

---

##### `virtualServiceRouteTableId`<sup>Required</sup> <a name="virtualServiceRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableId"></a>

```typescript
public readonly virtualServiceRouteTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServiceRouteTableConfig <a name="DataOciServiceMeshVirtualServiceRouteTableConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTableConfig: dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceRouteTableId">virtualServiceRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table#virtual_service_route_table_id DataOciServiceMeshVirtualServiceRouteTable#virtual_service_route_table_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualServiceRouteTableId`<sup>Required</sup> <a name="virtualServiceRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceRouteTableId"></a>

```typescript
public readonly virtualServiceRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table#virtual_service_route_table_id DataOciServiceMeshVirtualServiceRouteTable#virtual_service_route_table_id}.

---

### DataOciServiceMeshVirtualServiceRouteTableRouteRules <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTableRouteRules: dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules = { ... }
```


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations: dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId">virtualDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `virtualDeploymentId`<sup>Required</sup> <a name="virtualDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```typescript
public readonly virtualDeploymentId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>

---


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesList <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshVirtualServiceRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc">isGrpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType">pathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules">DataOciServiceMeshVirtualServiceRouteTableRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a>

---

##### `isGrpc`<sup>Required</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```typescript
public readonly isGrpc: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType"></a>

```typescript
public readonly pathType: string;
```

- *Type:* string

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshVirtualServiceRouteTableRouteRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules">DataOciServiceMeshVirtualServiceRouteTableRouteRules</a>

---



