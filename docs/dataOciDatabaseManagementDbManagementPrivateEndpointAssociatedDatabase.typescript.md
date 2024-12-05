# `dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database oci_database_management_db_management_private_endpoint_associated_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase(scope: Construct, id: string, config: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointIdInput">dbManagementPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbManagementPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbManagementPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointIdInput"></a>

```typescript
public readonly dbManagementPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointId"></a>

```typescript
public readonly dbManagementPrivateEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig: dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#compartment_id}.

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dbManagementPrivateEndpointId"></a>

```typescript
public readonly dbManagementPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#db_management_private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems: dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.timeRegistered">timeRegistered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeRegistered`<sup>Required</sup> <a name="timeRegistered" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.timeRegistered"></a>

```typescript
public readonly timeRegistered: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems</a>

---



