# `dataOciDatabaseManagementManagedDatabasePreferredCredentials` Submodule <a name="`dataOciDatabaseManagementManagedDatabasePreferredCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasePreferredCredentials <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials oci_database_management_managed_database_preferred_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig">DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig">DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasePreferredCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasePreferredCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasePreferredCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasePreferredCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasePreferredCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.preferredCredentialCollection">preferredCredentialCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList</a>

---

##### `preferredCredentialCollection`<sup>Required</sup> <a name="preferredCredentialCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.preferredCredentialCollection"></a>

```typescript
public readonly preferredCredentialCollection: DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig: dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#managed_database_id DataOciDatabaseManagementManagedDatabasePreferredCredentials#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#id DataOciDatabaseManagementManagedDatabasePreferredCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#managed_database_id DataOciDatabaseManagementManagedDatabasePreferredCredentials#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#filter DataOciDatabaseManagementManagedDatabasePreferredCredentials#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#id DataOciDatabaseManagementManagedDatabasePreferredCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter: dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#name DataOciDatabaseManagementManagedDatabasePreferredCredentials#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#values DataOciDatabaseManagementManagedDatabasePreferredCredentials#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#regex DataOciDatabaseManagementManagedDatabasePreferredCredentials#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#name DataOciDatabaseManagementManagedDatabasePreferredCredentials#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#values DataOciDatabaseManagementManagedDatabasePreferredCredentials#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_preferred_credentials#regex DataOciDatabaseManagementManagedDatabasePreferredCredentials#regex}.

---

### DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection: dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems: dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter">DataOciDatabaseManagementManagedDatabasePreferredCredentialsFilter</a>

---


### DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.isAccessible">isAccessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `isAccessible`<sup>Required</sup> <a name="isAccessible" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.isAccessible"></a>

```typescript
public readonly isAccessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasePreferredCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasePreferredCredentials.DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection">DataOciDatabaseManagementManagedDatabasePreferredCredentialsPreferredCredentialCollection</a>

---



