# `dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameters <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters oci_database_management_managed_databases_database_parameters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded">resetIsAllowedValuesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAllowedValuesIncluded` <a name="resetIsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded"></a>

```typescript
public resetIsAllowedValuesIncluded(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection">databaseParametersCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput">isAllowedValuesIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded">isAllowedValuesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseParametersCollection`<sup>Required</sup> <a name="databaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection"></a>

```typescript
public readonly databaseParametersCollection: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAllowedValuesIncludedInput`<sup>Optional</sup> <a name="isAllowedValuesIncludedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput"></a>

```typescript
public readonly isAllowedValuesIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAllowedValuesIncluded`<sup>Required</sup> <a name="isAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded"></a>

```typescript
public readonly isAllowedValuesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig: dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded">isAllowedValuesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#filter DataOciDatabaseManagementManagedDatabasesDatabaseParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAllowedValuesIncluded`<sup>Optional</sup> <a name="isAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded"></a>

```typescript
public readonly isAllowedValuesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}.

---

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection: dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems: dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues: dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues = { ... }
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter: dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal">ordinal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal"></a>

```typescript
public readonly ordinal: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues">allowedValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId">containerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue">displayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted">isAdjusted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic">isBasic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated">isDeprecated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable">isInstanceModifiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified">isModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable">isPdbModifiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable">isSessionModifiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified">isSpecified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable">isSystemModifiable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal">ordinal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment">updateComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a>

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId"></a>

```typescript
public readonly containerId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

---

##### `isAdjusted`<sup>Required</sup> <a name="isAdjusted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted"></a>

```typescript
public readonly isAdjusted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBasic`<sup>Required</sup> <a name="isBasic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic"></a>

```typescript
public readonly isBasic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDeprecated`<sup>Required</sup> <a name="isDeprecated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated"></a>

```typescript
public readonly isDeprecated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isInstanceModifiable`<sup>Required</sup> <a name="isInstanceModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable"></a>

```typescript
public readonly isInstanceModifiable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isModified`<sup>Required</sup> <a name="isModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified"></a>

```typescript
public readonly isModified: string;
```

- *Type:* string

---

##### `isPdbModifiable`<sup>Required</sup> <a name="isPdbModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable"></a>

```typescript
public readonly isPdbModifiable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSessionModifiable`<sup>Required</sup> <a name="isSessionModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable"></a>

```typescript
public readonly isSessionModifiable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSpecified`<sup>Required</sup> <a name="isSpecified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified"></a>

```typescript
public readonly isSpecified: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSystemModifiable`<sup>Required</sup> <a name="isSystemModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable"></a>

```typescript
public readonly isSystemModifiable: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal"></a>

```typescript
public readonly ordinal: number;
```

- *Type:* number

---

##### `sid`<sup>Required</sup> <a name="sid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateComment`<sup>Required</sup> <a name="updateComment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment"></a>

```typescript
public readonly updateComment: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType">databaseSubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseSubType`<sup>Required</sup> <a name="databaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType"></a>

```typescript
public readonly databaseSubType: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesDatabaseParameters } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>

---



