# `dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases oci_database_management_db_management_private_endpoint_associated_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases(scope: Construct, id: string, config: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.associatedDatabaseCollection">associatedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointIdInput">dbManagementPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `associatedDatabaseCollection`<sup>Required</sup> <a name="associatedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.associatedDatabaseCollection"></a>

```typescript
public readonly associatedDatabaseCollection: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbManagementPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbManagementPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointIdInput"></a>

```typescript
public readonly dbManagementPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointId"></a>

```typescript
public readonly dbManagementPrivateEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection: dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection = { ... }
```


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems: dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems = { ... }
```


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig: dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}.

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dbManagementPrivateEndpointId"></a>

```typescript
public readonly dbManagementPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#filter DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter: dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#name DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#values DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#regex DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#name DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#values DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#regex DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.timeRegistered">timeRegistered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeRegistered`<sup>Required</sup> <a name="timeRegistered" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.timeRegistered"></a>

```typescript
public readonly timeRegistered: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>[]

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>

---



