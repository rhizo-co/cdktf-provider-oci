# `dataOciDatabaseManagementDbManagementPrivateEndpoint` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpoint <a name="DataOciDatabaseManagementDbManagementPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint oci_database_management_db_management_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint(scope: Construct, id: string, config: DataOciDatabaseManagementDbManagementPrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig">DataOciDatabaseManagementDbManagementPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig">DataOciDatabaseManagementDbManagementPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.isCluster">isCluster</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabled">isDnsResolutionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.dbManagementPrivateEndpointIdInput">dbManagementPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.isCluster"></a>

```typescript
public readonly isCluster: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDnsResolutionEnabled`<sup>Required</sup> <a name="isDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabled"></a>

```typescript
public readonly isDnsResolutionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `dbManagementPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbManagementPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.dbManagementPrivateEndpointIdInput"></a>

```typescript
public readonly dbManagementPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.dbManagementPrivateEndpointId"></a>

```typescript
public readonly dbManagementPrivateEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointConfig: dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpoint#db_management_private_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoint.DataOciDatabaseManagementDbManagementPrivateEndpointConfig.property.dbManagementPrivateEndpointId"></a>

```typescript
public readonly dbManagementPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpoint#db_management_private_endpoint_id}.

---



