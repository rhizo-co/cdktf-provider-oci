# `dataOciServiceMeshIngressGatewayRouteTable` Submodule <a name="`dataOciServiceMeshIngressGatewayRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGatewayRouteTable <a name="DataOciServiceMeshIngressGatewayRouteTable" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable(scope: Construct, id: string, config: DataOciServiceMeshIngressGatewayRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig">DataOciServiceMeshIngressGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig">DataOciServiceMeshIngressGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshIngressGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayId">ingressGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.routeRules">routeRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableIdInput">ingressGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableId">ingressGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayId"></a>

```typescript
public readonly ingressGatewayId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.routeRules"></a>

```typescript
public readonly routeRules: DataOciServiceMeshIngressGatewayRouteTableRouteRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `ingressGatewayRouteTableIdInput`<sup>Optional</sup> <a name="ingressGatewayRouteTableIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableIdInput"></a>

```typescript
public readonly ingressGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `ingressGatewayRouteTableId`<sup>Required</sup> <a name="ingressGatewayRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableId"></a>

```typescript
public readonly ingressGatewayRouteTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayRouteTableConfig <a name="DataOciServiceMeshIngressGatewayRouteTableConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshIngressGatewayRouteTableConfig: dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayRouteTableId">ingressGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ingressGatewayRouteTableId`<sup>Required</sup> <a name="ingressGatewayRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayRouteTableId"></a>

```typescript
public readonly ingressGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}.

---

### DataOciServiceMeshIngressGatewayRouteTableRouteRules <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshIngressGatewayRouteTableRouteRules: dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules = { ... }
```


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations: dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations = { ... }
```


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost: dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesList <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.get"></a>

```typescript
public get(index: number): DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer"></a>

```typescript
import { dataOciServiceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost">ingressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc">isGrpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled">isHostRewriteEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled">isPathRewriteEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType">pathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules">DataOciServiceMeshIngressGatewayRouteTableRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a>

---

##### `ingressGatewayHost`<sup>Required</sup> <a name="ingressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost"></a>

```typescript
public readonly ingressGatewayHost: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList</a>

---

##### `isGrpc`<sup>Required</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```typescript
public readonly isGrpc: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHostRewriteEnabled`<sup>Required</sup> <a name="isHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```typescript
public readonly isHostRewriteEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPathRewriteEnabled`<sup>Required</sup> <a name="isPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```typescript
public readonly isPathRewriteEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType"></a>

```typescript
public readonly pathType: string;
```

- *Type:* string

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceMeshIngressGatewayRouteTableRouteRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules">DataOciServiceMeshIngressGatewayRouteTableRouteRules</a>

---



